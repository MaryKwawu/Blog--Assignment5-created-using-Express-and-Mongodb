const express = require("express");
const postRouter = require("./router/postrouter");

//connect to server
require("./config/dbConnect.js");

const app = express();
//for  JSON format

app.use(express.json());
//for FORM Post

app.use("/posts", postRouter);

app.listen(4000, () => console.log("server Up And Running"));

// app.use("/users", "userRouter");
