const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// Create a new experience entry
router.post('/', async (req, res) => {
  try {
    await Experience.deleteMany({});  // Clear existing experiences if needed

    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).send(experience);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all experience entries
router.get('/', async (req, res) => {
  try {
    const experience = await Experience.find();
    res.status(200).send(experience);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update experience by ID
router.put('/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(experience);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete experience by ID
router.delete('/:id', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
