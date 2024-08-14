const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');

// Create a new project entry
router.post('/', async (req, res) => {
  try {
    await Projects.deleteMany({});  // Clear existing education entries if needed

    const project = new Projects(req.body);
    await project.save();
    res.status(201).send(project);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all project entries
router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).send(projects);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update project by ID
router.put('/:id', async (req, res) => {
  try {
    const project = await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(project);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete project by ID
router.delete('/:id', async (req, res) => {
  try {
    await Projects.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
