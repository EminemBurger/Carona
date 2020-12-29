const mongoose = require("mongoose");

const {
  Types: { ObjectId }
} = mongoose.Schema;
const boardSchema = new mongoose.Schema({
  writer: {
    type: ObjectId,
    required: true,
    ref: "mytable"
  },
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imgPath: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Board", boardSchema);