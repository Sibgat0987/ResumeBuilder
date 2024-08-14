const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts');

// Create a new contact entry
router.post('/', async (req, res) => {
  console.log('Request received at /api/contact');

  try {
    const contact = new Contacts(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all contact entries
router.get('/', async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.status(200).send(contacts);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update contact by ID
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contacts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(contact);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete contact by ID
router.delete('/:id', async (req, res) => {
  try {
    await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
