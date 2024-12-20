const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const Auth = require("./router/Auth");
const Users = require("./router/Users");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://alnasr9988:<db_password>@cluster0.xmfbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.than(res => console.log("connected db"));

app.use("/auth",Auth);
app.use("/users",Users);

app.listen(3000,()=>{
  console.log("server is runing on port 3000");
});
