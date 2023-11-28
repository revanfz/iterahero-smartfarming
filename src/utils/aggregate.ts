import mongoose from "mongoose";
import SensorLog from "../models/SensorLog";

const monthStrings = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getSummaryTimespan = async (timespan: string, id_sensor: number) => {
  let startDate: Date;
  let endDate: Date = new Date();

  if (timespan.toLowerCase() === "month") {
    startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
  } else if (timespan.toLowerCase() === "week") {
    const dayOfWeek = endDate.getDay();
    startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - dayOfWeek);
  } else if (timespan.toLowerCase() === "day") {
    startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  } else if (timespan.toLowerCase() === "year") {
    startDate = new Date(endDate.getFullYear(), 0, 1);
  } else {
    throw new Error("Invalid timeRange");
  }

  return { startDate, endDate }
}

export const pipelineSummary = (timespan: string, id_sensor: number): mongoose.PipelineStage[] => {
  const commonStages: mongoose.PipelineStage[] = [{ $match: { id_sensor } }];
  timespan = timespan.toLowerCase()
  if (timespan === "day") {
    return [
      ...commonStages,
      {
        $group: {
            _id: {
                year: { $year: "$createdAt" },
                month: { $month: "$createdAt" },
                day: { $dayOfMonth: "$createdAt" },
                hour: { $hour: "$createdAt" },
            },
            avg: { $avg: "$nilai" },
            max: { $max: "$nilai" },
            min: { $min: "$nilai" }
          },
      },
      { 
        $project: {
        label: {
          $concat: [
            { $toString: "$_id.hour" },
            ":00 - ",
            { $toString: "$_id.hour" },
            ":59, ",
            { $toString: "$_id.day" },
            "/",
            { $toString: "$_id.month" },
            "/",
            { $toString: "$_id.year" },
          ],
        },
        date: {
          $concat: [
            { $toString: "$_id.hour" },
            ":00 - ",
            { $toString: "$_id.hour" },
            ":59, ",
            { $toString: "$_id.day" },
            "/",
            { $toString: "$_id.month" },
            "/",
            { $toString: "$_id.year" },
          ],
        },
        avg: "$avg",
        max: "$max",
        mina: "$min",
      },
    },
    { $sort: { date: -1 } },
    { $limit: 24 }, // Ambil data untuk 24 jam terakhir
    { $sort: { date: 1 } },
    ];
  } else if (timespan === "week") {
    return [
      ...commonStages,
      {
        $group: {
            _id: {
                year: { $year: "$createdAt" },
                month: { $month: "$createdAt" },
                day: { $dayOfMonth: "$createdAt" },
            },
            avg: { $avg: "$nilai" },
            max: { $max: "$nilai" },
            min: { $min: "$nilai" }
          },
      },
      {
        $project: {
          label: "$_id.day",
          date: {
            $concat: [
              { $toString: "$_id.day" },
              "/",
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          avg: "$avg",
          max: "$max",
          mina: "$min",
        },
      },
      { $sort: { date: -1 } },
      { $limit: 7 },
      { $sort: { date: 1 } },
    ];
  } else if (timespan === "month") {
    return [
      ...commonStages,
      {
        $group: {
            _id: {
                year: { $year: "$createdAt" },
                month: { $month: "$createdAt" },
            },
            avg: { $avg: "$nilai" },
            max: { $max: "$nilai" },
            min: { $min: "$nilai" }
          },
      },
      {
        $project: {
          label: {
            $concat: [
              {
                $arrayElemAt: [monthStrings, "$_id.month"],
              },
            ],
          },
          date: {
            $concat: [
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          avg: "$avg",
          max: "$max",
          mina: "$min",
          count: 1,
        },
      },
      { $sort: { date: -1 } },
      { $limit: 12 },
      { $sort: { date: 1 } },
    ];
  } else if (timespan === "year") {
    return [
      ...commonStages,
      {
        $group: {
            _id: { year: { $year: "$createdAt" }},
            avg: { $avg: "$nilai" },
            max: { $max: "$nilai" },
            min: { $min: "$nilai" }
          },
      },
      {
        $project: {
          date: { $toString: "$_id.year" },
          label: "$_id.year",
          avg: "$avg",
          max: "$max",
          mina: "$min",
          count: 1,
        },
      },
      { $sort: { date: 1 } },
    ];
  }
  return []
};

export const pipelineGrafik = (
  timespan: string,
  id_sensor: number
): mongoose.PipelineStage[] => {
  const commonStages: mongoose.PipelineStage[] = [{ $match: { id_sensor } }];
  if (timespan === "Day") {
    return [
      ...commonStages,
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
            hour: { $hour: "$createdAt" },
          },
          avg: { $avg: "$nilai" },
        },
      },
      {
        $project: {
          label: {
            $concat: [
              { $toString: "$_id.hour" },
              ":00 - ",
              { $toString: "$_id.hour" },
              ":59, ",
              { $toString: "$_id.day" },
              "/",
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          date: {
            $concat: [
              { $toString: "$_id.hour" },
              ":00 - ",
              { $toString: "$_id.hour" },
              ":59, ",
              { $toString: "$_id.day" },
              "/",
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          avg: "$avg",
          max: "$max",
          mina: "$min",
        },
      },
      { $sort: { date: -1 } },
      { $limit: 24 }, // Ambil data untuk 24 jam terakhir
      { $sort: { date: 1 } },
    ];
  } else if (timespan === "Week") {
    return [
      ...commonStages,
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          avg: { $avg: "$nilai" },
        },
      },
      {
        $project: {
          label: "$_id.day",
          date: {
            $concat: [
              { $toString: "$_id.day" },
              "/",
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          avg: "$avg",
          max: "$max",
          mina: "$min",
        },
      },
      { $sort: { date: -1 } },
      { $limit: 7 },
      { $sort: { date: 1 } },
    ];
  } else if (timespan === "Month") {
    return [
      ...commonStages,
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          avg: { $avg: "$nilai" },
        },
      },
      {
        $project: {
          label: {
            $concat: [
              {
                $arrayElemAt: [monthStrings, "$_id.month"],
              },
            ],
          },
          date: {
            $concat: [
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          avg: "$avg",
          max: "$max",
          mina: "$min",
          count: 1,
        },
      },
      { $sort: { date: -1 } },
      { $limit: 12 },
      { $sort: { date: 1 } },
    ];
  } else if (timespan === "Year") {
    return [
      ...commonStages,
      {
        $group: {
          _id: { year: { $year: "$createdAt" } },
          avg: { $avg: "$nilai" },
        },
      },
      {
        $project: {
          date: { $toString: "$_id.year" },
          label: "$_id.year",
          avg: "$avg",
          max: "$max",
          mina: "$min",
          count: 1,
        },
      },
      { $sort: { date: 1 } },
    ];
  }

  return [];
};
