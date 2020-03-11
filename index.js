// code away!
const express = require("express");
const server = express();
const morgan = require("morgan");

server.use(express.json());
server.use(morgan("dev"));

const userRoute = require("./users/userRouter");
server.use("/users", userRoute);

server.listen(5000);