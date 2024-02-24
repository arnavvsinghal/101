const { ReqModel } = require("./initialise");

const doesExist = await ReqModel.exists(reqData);
if (doesExist) {
  console.log("Required Data exists!");
} else {
  console.log("Required Data does not exist!");
}
