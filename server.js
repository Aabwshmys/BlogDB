const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const register = require("./router/Register");

app.use(express.json());
app.use(cors());
app.use("/auth",register);


app.listen(3000,()=>{
  console.log("server is runing on port 3000");
});
