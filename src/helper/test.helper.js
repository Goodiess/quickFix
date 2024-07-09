
const testModel = require("../model/test.model");
exports.getTestHelper = () => {
  return "Test Data";
};

exports.putTestHelper = () => {
  return "Test Data";
};

exports.postTestHelper = () => {
  new testModel({data: "test"}).save();
  return "Test Data";
};

exports.deleteTestHelper = () => {
  return "Test Data";
};