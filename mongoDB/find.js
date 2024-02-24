const { ReqModel } = require("./initialise");

const docOne = await ReqModel.findById(reqId);
const docTwo = await ReqModel.findOne(reqData);
const docMany = await ReqModel.find(reqData);