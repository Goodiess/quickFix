const express = require("express");
const router = express.Router();
const technicianController = require("./technicianController");

// Define routes for technicians
router.post("/", technicianController.createTechnician);
router.get("/", technicianController.getTechnicians);
router.get("/:id", technicianController.getTechnicianById);
router.put("/:id", technicianController.updateTechnician);
router.delete("/:id", technicianController.deleteTechnician);

module.exports = router;