const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  institutionName: String,
  course: String,
  country: String,
  state: String,
  start: Date,
  finish: Date,
});

module.exports = mongoose.model('Education', EducationSchema);
