"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipelineGrafik = exports.pipelineSummary = exports.getSummaryTimespan = void 0;
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
const getSummaryTimespan = (timespan, id_sensor) => __awaiter(void 0, void 0, void 0, function* () {
    let startDate;
    let endDate = new Date();
    if (timespan.toLowerCase() === "month") {
        startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
    }
    else if (timespan.toLowerCase() === "week") {
        const dayOfWeek = endDate.getDay();
        startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - dayOfWeek);
    }
    else if (timespan.toLowerCase() === "day") {
        startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    }
    else if (timespan.toLowerCase() === "year") {
        startDate = new Date(endDate.getFullYear(), 0, 1);
    }
    else {
        throw new Error("Invalid timeRange");
    }
    return { startDate, endDate };
});
exports.getSummaryTimespan = getSummaryTimespan;
const pipelineSummary = (timespan, id_sensor) => {
    const commonStages = [{ $match: { id_sensor } }];
    timespan = timespan.toLowerCase();
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
            { $limit: 24 },
            { $sort: { date: 1 } },
        ];
    }
    else if (timespan === "week") {
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
    }
    else if (timespan === "month") {
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
    }
    else if (timespan === "year") {
        return [
            ...commonStages,
            {
                $group: {
                    _id: { year: { $year: "$createdAt" } },
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
    return [];
};
exports.pipelineSummary = pipelineSummary;
const pipelineGrafik = (timespan, id_sensor) => {
    const commonStages = [{ $match: { id_sensor } }];
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
            { $limit: 24 },
            { $sort: { date: 1 } },
        ];
    }
    else if (timespan === "Week") {
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
    }
    else if (timespan === "Month") {
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
    }
    else if (timespan === "Year") {
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
exports.pipelineGrafik = pipelineGrafik;
