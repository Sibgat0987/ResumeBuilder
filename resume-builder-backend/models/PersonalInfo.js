const mongoose = require('mongoose');

const PersonalInfoSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  profession: String,
  aboutMyself:String,
  address: String,
});

module.exports = mongoose.model('PersonalInfo', PersonalInfoSchema);
