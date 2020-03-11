// code away!
const express = require("express");
const server = express();
server.use(express.json());

const userRoute = require("./users/userRouter");
server.use("/users", userRoute);

server.listen(5000);