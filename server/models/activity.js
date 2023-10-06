const mongoose = require('mongoose');

const employeeActivitySchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  activityType: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  screenshot: [{ type: String, required: true }],
});

module.exports = mongoose.model('EmployeeActivity', employeeActivitySchema);
