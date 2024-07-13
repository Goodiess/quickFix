const express = require("express");
const authContoller = require("../../controller/authContoller");
const customerContoller = require("../../controller/customerController");
const { authMiddleware } = require("../../utils/authMiddleware.utlils");
const { createTechnician } = require("../../controller/technicianController");
const auth = require("../../utils/authMiddleware.utlils").authMiddleware;

const authRoutes = new express.Router();
authRoutes.post("/customerSignIn", authContoller.customerSignIn);
authRoutes.post("/technicianSignIn", authContoller.technicianSignIn);
authRoutes.post("/customerSignup", customerContoller.createCustomer);
authRoutes.post("/technicianSignup", createTechnician);

module.exports = authRoutes;
