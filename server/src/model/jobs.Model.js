const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Enum = {
  status: {
    values: ["open", "closed"],
    message: "{VALUE} is not a valid status",
  },
  job_type: {
    values: ["full-time", "part-time", "temporary"],
    message: "{VALUE} is not a valid status",
  },
};
const jobsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    location: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
      enum: Enum.job_type,
    },
    salary: {
      from: {
        type: Number,
        required: true,
      },
      to: {
        type: Number,
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      default: "open",
      enum: Enum.status,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jobs", jobsSchema);
