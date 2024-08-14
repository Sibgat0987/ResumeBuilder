const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  employer: String,
  company: String,
  address: String,
  role: String,
  about: String,
});

module.exports = mongoose.model('Experience', ExperienceSchema);
