const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection

mongoose.connect('mongodb://127.0.0.1:27017/mongobackend', { useNewUrlParser: true, useUnifiedTopology: true });
  



mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import Routes
const personalInfoRoutes = require('./routes/PersonalInfo');
const educationRoutes = require('./routes/Education');
const experienceRoutes = require('./routes/Experience');
const projectsRoutes = require('./routes/Projects');
const contactsRoutes = require('./routes/Contacts');
const generateResumeRoutes = require('./routes/GenerateResume');  // New route import


// Use Routes
app.use('/api/personal-info', personalInfoRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/generate-resume', generateResumeRoutes);  // New route usage

app.get('/', (req, res) => {
  res.send('Welcome to the Resume Builder API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
