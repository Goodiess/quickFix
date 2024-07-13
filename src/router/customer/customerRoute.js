const express = require("express");
const customerController = require("../../controller/customerController");
const auth = require('../../utils/authMiddleware.utlils').authMiddleware

const {
  createCustomer,
  deleteCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
} = customerController;
const routes = new express.Router();

routes.post("/customerSignup",createCustomer);
routes.get("/getAllCustomers", auth,getCustomers);
routes.get("/getCustomerById/:id", auth,getCustomerById);
routes.put("/updateProperties/:id", auth,updateCustomer);
routes.delete("/deleteCustomer/:id",auth, deleteCustomer);

module.exports = routes;
