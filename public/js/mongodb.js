const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rosynarwal027:MxX7rnGjAJm1K70Q@cluster0.rxrweyh.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://csmaterial:xXl5AKY0kGVQijWE@cluster0.3p2nd2d.mongodb.net/test"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema for LOGIN

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//for collection data
const collection = new mongoose.model("Collection1", LogInSchema);
module.exports = collection;
