const express = require("express");
const customerController = require("../../controller/customerController");

const {
  createCustomer,
  deleteCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
} = customerController;
const routes = new express.Router();

routes.post("/customerSignup", createCustomer);
routes.get("/getAllCustomers", getCustomerById);
routes.get("/getCustomerById/:id", getCustomers);
routes.put("/updateProperties/:id", updateCustomer);
routes.delete("/deleteCustomer/:id", deleteCustomer);

module.exports = routes;
