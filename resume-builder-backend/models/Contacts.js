const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema({
  email: String,
  phone: Number,
  linkedin:String,
  github:String,
  portfolio:String,
  other:String,
});

module.exports = mongoose.model('Contacts', ContactsSchema);
