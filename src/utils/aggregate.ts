import mongoose from "mongoose";

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

export const generatePipeline = (
  timespan: string,
  id_sensor: number,
): mongoose.PipelineStage[] => {
  const commonStages: mongoose.PipelineStage[] = [{ $match: { id_sensor } }];

  if (timespan === "Week") {
    return [
      ...commonStages,
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          data: { $avg: "$nilai" },
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
          data: "$data",
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
          data: { $avg: "$nilai" },
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
          data: "$data",
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
          data: { $avg: "$nilai" },
        },
      },
      {
        $project: {
          date: { $toString: "$_id.year" },
          label: "$_id.year",
          data: "$data",
          count: 1,
        },
      },
      { $sort: { date: 1 } },
    ];
  }

  return [];
};
