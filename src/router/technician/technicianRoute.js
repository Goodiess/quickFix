const express = require("express");
const router = express.Router();
const technicianController = require("../../controller/technicianController");
const auth = require("../../utils/authMiddleware.utlils").authMiddleware;

// Define routes for technicians
router.post("/technicianSignup", technicianController.createTechnician);
router.get("/getAllTechnicians", technicianController.getTechnicians);
router.get("/getTechnicianById/:id", technicianController.getTechnicianById);
router.put("/updateTechnician/:id", technicianController.updateTechnician);
router.delete("/deleteTechnician/:id", technicianController.deleteTechnician);

module.exports = router;
