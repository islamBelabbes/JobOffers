const jobsModel = require("../model/jobs.Model");
const Company = require("../model/company.Model"); // Import the Company model
const response = require("../helpers/response.Helper");
const pagination = require("../helpers/pagination.Helper");
const getJobs = async (req, res, next) => {
  const { location, salary, date, type, title } = req.query;
  // build the  query
  // 1 : create query condition
  const queryCondition = {
    status: "open",
    title: title && new RegExp(title, "i"),
    location: location && location.toLowerCase(),
    job_type: type && type.toLowerCase(),
    ["salary.from"]: salary && { $gte: salary },
  };
  // 2 : loop through the keys and get only exists values
  const query = Object.keys(queryCondition).reduce((acc, filter) => {
    if (queryCondition[filter]) {
      acc = { ...acc, [filter]: queryCondition[filter] };
    }
    return acc;
  }, {});

  try {
    // count total
    const total = await jobsModel.count(query);

    // pagination helper
    const paginationData = pagination(req.query, total);

    // get the data
    const jobs = await jobsModel.aggregate([
      {
        $match: query,
      },
      {
        $skip: paginationData.skip,
      },
      {
        $limit: paginationData.limit,
      },

      {
        $lookup: {
          from: "companies",
          localField: "company",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $project: { __v: 0 },
      },
    ]);

    // all good send the response
    response.sendOk(res, {
      total: paginationData.total,
      nextPage: paginationData.nextPage,
      limit: paginationData.limit,
      data: jobs,
    });
  } catch (err) {
    next(err);
  }
};

const createJob = (req, res) => {};

module.exports = {
  getJobs,
  createJob,
};
