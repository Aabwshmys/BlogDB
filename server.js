const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const Auth = require("./router/Auth");
const Users = require("./router/Users");

app.use(express.json());
app.use(cors());

app.use("/auth",Auth);
app.use("/users",Users);

app.listen(3000,()=>{
  console.log("server is runing on port 3000");
});
