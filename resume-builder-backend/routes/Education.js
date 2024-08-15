const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// Create a new education entry
router.post('/', async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).send(education);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all education entries
router.get('/', async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).send(education);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update education by ID
router.put('/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(education);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete education by ID
router.delete('/:id', async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
