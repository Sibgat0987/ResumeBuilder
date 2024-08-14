const express = require('express');
const router = express.Router();
const PersonalInfo = require('../models/PersonalInfo');

// Create a new personal info entry
router.post('/', async (req, res) => {
  try {
    
    const personalInfo = new PersonalInfo(req.body);
    await personalInfo.save();
    res.status(201).send(personalInfo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all personal info entries
router.get('/', async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.find();
    res.status(200).send(personalInfo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update personal info by ID
router.put('/:id', async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(personalInfo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete personal info by ID
router.delete('/:id', async (req, res) => {
  try {
    await PersonalInfo.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
