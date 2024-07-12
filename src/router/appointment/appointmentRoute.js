const express = require("express");
const appointmentRoutes = express.Router();
const appointmentController = require("../../controller/appointmentController");
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = appointmentController;

// Define routes for appointments
appointmentRoutes.post("/scheduleAppointment", createAppointment);
appointmentRoutes.get("/getAppointments", getAppointments);
appointmentRoutes.get("/getAppointmentById/:id", getAppointmentById);
appointmentRoutes.put("/getAppointmentById/:id", updateAppointment);
appointmentRoutes.delete("/deleteAppointment/:id", deleteAppointment);

module.exports = appointmentRoutes;
