const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  projectName: String,
  Projectlink: String,
  projectDescription: String,
});

module.exports = mongoose.model('Projects', ProjectsSchema);
