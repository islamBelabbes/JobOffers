require("dotenv").config();
const mongoose = require("mongoose");

const jobsSchema = require("./src/model/jobs.Model");

const connectToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:test@cluster0.ojmkb0x.mongodb.net/joblybuddy?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
    const optionsArray = [
      {
        title: "Software Engineer",
        description:
          "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
        company: "6505bd1fc51951dae00a9b1f",
        location: "belgium",
        job_type: "full-time",
        salary: {
          from: "5000",
          to: "10000",
        },
      },
      {
        title: "Junior UI Designer",
        description:
          "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
        company: "6505bd1fc51951dae00a9b20",
        location: "spain",
        job_type: "full-time",
        salary: {
          from: "3000",
          to: "5000",
        },
      },
      {
        title: "Technical Support Engineer",
        description:
          "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
        company: "6505bd1fc51951dae00a9b21",
        location: "algeria",
        job_type: "part-time",
        salary: {
          from: "500",
          to: "1000",
        },
      },
      {
        title: "Product Designer",
        description:
          "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
        company: "6505bd1fc51951dae00a9b22",
        location: "morocco",
        job_type: "temporary",
        salary: {
          from: "50000",
          to: "100000",
        },
      },
      {
        title: "Copywriter(Growth)",
        description:
          "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
        company: "6505bd1fc51951dae00a9b23",
        location: "algeria",
        job_type: "temporary",
        salary: {
          from: "50000",
          to: "100000",
        },
      },
      {
        title: "Product Designer",
        description:
          "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
        company: "6505bd1fc51951dae00a9b24",
        location: "spain",
        job_type: "full-time",
        salary: {
          from: "100000",
          to: "500000",
        },
      },
    ];

    const insertPromises = optionsArray.map(async (options) => {
      const job = new jobsSchema(options);
      try {
        return await job.save();
      } catch (err) {
        console.error(JSON.parse(err.message));
        return null;
      }
    });

    const savedcompany = await Promise.all(insertPromises);
    console.log("Inserted company:", savedcompany.filter(Boolean));

    mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error:", error);
  }
};

connectToMongo();
