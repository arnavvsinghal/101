const { ReqModel } = require("./initialise");
// 1
ReqModel.findByIdAndUpdate(reqId, updatedReqData)
  .then((updatedDoc) => {
    if (updatedDoc) {
      console.log("Updated successfully");
    } else {
      console.log("Document coundn't be found");
    }
  })
  .catch((err) => {
    console.log("Error while updating information");
  });
// 2
const newDoc = await ReqModel.findOneAndUpdate(reqData, updatedReqData);