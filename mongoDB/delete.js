const { ReqModel } = require("./initialise");

const deletedCountOne = await ReqModel.deleteMany(reqData);
const deletedCountTwo = await ReqModel.deleteOne(reqData);