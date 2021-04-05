const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/blog", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log(err.message));
