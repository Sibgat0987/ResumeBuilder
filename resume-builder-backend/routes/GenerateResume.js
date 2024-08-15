const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const fs = require('fs');
const PersonalInfo = require('../models/PersonalInfo');
const Education = require('../models/Education');
const Experience = require('../models/Experience');
const Projects = require('../models/Projects');
const Contacts = require('../models/Contacts');

// Generate Resume as PDF
router.get('/generate', async (req, res) => {
  const doc = new PDFDocument();
  const filePath = 'resume.pdf';

  try {
    // Fetch stored information from your models
    const personalInfo = await PersonalInfo.findOne({}).sort({ updatedAt: -1 });
    const education = await Education.findOne({}).sort({ updatedAt: -1 });
    const experience = await Experience.findOne({}).sort({ updatedAt: -1 });
    const projects = await Projects.findOne({}).sort({ updatedAt: -1 });
    const contacts = await Contacts.findOne({}).sort({ updatedAt: -1 });
    

    // Create PDF
    doc.pipe(fs.createWriteStream(filePath));

    // Add content to the PDF
    doc.fontSize(30).fillColor('#007acc').text('Resume', { align: 'center' }).moveDown(0.5);
    doc.moveTo(50, 100).lineTo(550, 100).strokeColor('#007acc').stroke();
    doc.moveDown(1.5);

    if (personalInfo) {
      doc.fontSize(20).fillColor('#00000').text(` Personal Information:`);
      doc.fontSize(16).fillColor('#00000').text(`First Name: ${personalInfo.firstName}`);
      doc.fontSize(16).fillColor('#00000').text(`Last Name: ${personalInfo.lastName}`);
      doc.fontSize(16).fillColor('#00000').text(`Proffesion: ${personalInfo.proffesion}`);
      doc.fontSize(16).fillColor('#00000').text(`Address: ${personalInfo.address}`);
      doc.fontSize(16).fillColor('#00000').text(`About Myself: ${personalInfo.aboutMyself}`);
      doc.moveDown();
    }

    if (education) {
      doc.fontSize(20).text('Education:');
      doc.fontSize(16).text(`Institution Name: ${education.institutionName || 'N/A'}`);
      doc.fontSize(16).text(`Course: ${education.course || 'N/A'}`);
      doc.fontSize(16).text(`Country: ${education.country || 'N/A'}`);
      doc.fontSize(16).text(`State: ${education.state || 'N/A'}`);
      doc.fontSize(16).text(`Start Date: ${education.start || 'N/A'}`);
      doc.fontSize(16).text(`Finish Date: ${education.finish || 'N/A'}`);
      doc.moveDown();
    }
    

    if (experience) {
      doc.fontSize(20).text('Experience:');
      doc.fontSize(16).text(`Employer: ${experience.employer}`);
      doc.fontSize(16).text(`Company: ${experience.company}`);
      doc.fontSize(16).text(`Address: ${experience.address}`);
      doc.fontSize(16).text(`Role: ${experience.role}`);
      doc.fontSize(16).text(`About : ${experience.about}`);
      doc.moveDown();
    }
    

    if (projects) {
      doc.fontSize(20).text('Projects:');
      doc.fontSize(16).text(`Project Name: ${projects.projectName}`);
      doc.fontSize(16).text(`Project Link: ${projects.Projectlink}`);
      doc.fontSize(16).text(`Project Description: ${projects.projectDescription}`);
      doc.moveDown();
    }
    
    if (contacts) {
      doc.fontSize(20).text('Contact Information:');
      doc.fontSize(16).text(`Email: ${contacts.email}`);
      doc.fontSize(16).text(`Phone: ${contacts.phone}`);
      doc.fontSize(16).text(`LinkedIn: ${contacts.linkedin}`);
      doc.fontSize(16).text(`GitHub: ${contacts.github}`);
      doc.fontSize(16).text(`Portfolio: ${contacts.portfolio}`);
      doc.moveDown();
    }

    doc.end();
    res.status(200).download(filePath);
  } catch (err) {
    console.error('Error generating resume:', err);
    res.status(500).send('Error generating resume');
  }
});

module.exports = router;

