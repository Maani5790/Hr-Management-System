const express = require("express");
const connections = require("./database/db.js");
const cors = require("cors");
const UserAgent = require("user-agents");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const captureRouter = require("./routes/capture.js");
const morgan = require("morgan");
const helmet = require("helmet");
const authRouter = require("./routes/authRoute.js");
const teamRouter = require("./routes/team.js");
const captureModel = require("./models/capture.js");
const { autoCapture } = require("./controllers/capture-controller.js");
const testRouter = require("./routes/testing.js");
const activityRouter = require("./routes/userActivity.js");
const server = express();
const mongoose = require('mongoose');
const screenRouter = require("./routes/screenRoutes.js");
const browserRouter = require("./routes/browserRoutes.js");
const userAgent = new UserAgent();

server.set("view engine", "ejs");
server.use(cors());
server.use(express.json());
dotenv.config();
// console.log(userAgent.toString());
// console.log(JSON.stringify(userAgent.data, null, 2));

server.use(bodyParser.json({ extended: true }));
server.use(bodyParser.urlencoded({ extended: true }));

server.use((req, res, next) => {
  console.log("HTTP Method: " + req.method + " - URL: " + req.url);
  next();
});

// server.use((req, res, next) => {
//   const { method, url, headers } = req.body;

//   console.log("Method:", method);
//   console.log("URL:", url);
//   console.log("Headers:", headers);
//   next();
// });

server.use(morgan("dev"));
server.use(morgan("combined"));
server.use(helmet());
server.use("/", captureRouter);
server.use("/auth", authRouter);
server.use("/team", teamRouter);
server.use("/testing", testRouter);
server.use("/activities", activityRouter);
server.use('/api/sc', screenRouter);
server.use('/api/br', browserRouter);

const port = process.env.PORT;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

connections(username, password);

// autoCapture(captureModel);
server.listen(port, () =>
  console.log(`Server is running successfully on PORT ${port}`)
);
