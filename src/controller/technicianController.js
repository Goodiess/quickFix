const Technician = require("./technicianModel");

// Controller functions

// Create a new technician
exports.createTechnician = async (req, res) => {
  try {
    const newTechnician = await Technician.create(req.body);
    res.status(201).json(newTechnician);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all technicians
exports.getTechnicians = async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.status(200).json(technicians);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single technician by ID
exports.getTechnicianById = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);
    if (!technician) {
      return res.status(404).json({ message: "Technician not found" });
    }
    res.status(200).json(technician);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a technician by ID
exports.updateTechnician = async (req, res) => {
  try {
    const updatedTechnician = await Technician.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTechnician) {
      return res.status(404).json({ message: "Technician not found" });
    }
    res.status(200).json(updatedTechnician);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a technician by ID
exports.deleteTechnician = async (req, res) => {
  try {
    const deletedTechnician = await Technician.findByIdAndDelete(req.params.id);
    if (!deletedTechnician) {
      return res.status(404).json({ message: "Technician not found" });
    }
    res.status(200).json({ message: "Technician deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
