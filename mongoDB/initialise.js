const mongoose = require("mongoose");
const { Schema, connect, model } = mongoose;

try {
  connect("mongodb://localhost:27017");
} catch (err) {
  console.log(err);
}

const reqSchema = new Schema({});

const ReqModel = model("ReqModel", reqSchema);

module.exports = {
  ReqModel,
};
