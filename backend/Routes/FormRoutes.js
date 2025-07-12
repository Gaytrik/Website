// backend/formRoutes.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const nodemailer = require('nodemailer');
const router = express.Router();
const filePath = path.join(__dirname, 'formData.xlsx');
require('dotenv').config();
// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// Helper: Load Excel data
const loadExcel = () => {
  if (!fs.existsSync(filePath)) return [];
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};

// Helper: Save Excel data
const saveExcel = (data) => {
  const newWorkbook = XLSX.utils.book_new();
  const newSheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Sheet1');
  XLSX.writeFile(newWorkbook, filePath);
};

// ✅ POST - Add new form entry
router.post('/form', async (req, res) => {
  try {
    const formData = req.body;
    const data = loadExcel();
    data.push(formData);
    saveExcel(data);

    // Email the updated file
    await transporter.sendMail({
      from: 'rbrickkstechnologyemployees@gmail.com',
      to: 'bhupendrpatil6639@gmail.com',
      subject: 'New Patient Case Record',
      text: 'A new patient has submitted the case form. See attached.',
      attachments: [{ filename: 'formData.xlsx', path: filePath }]
    });

    res.status(200).json({ message: 'Form submitted and emailed.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ GET - All patient entries
router.get('/form', (req, res) => {
  try {
    const data = loadExcel();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data.' });
  }
});

// ✅ PUT - Update patient entry by index
router.put('/form/:index', (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const newData = req.body;
    const data = loadExcel();

    if (index < 0 || index >= data.length) {
      return res.status(404).json({ error: 'Invalid index' });
    }

    data[index] = { ...data[index], ...newData };
    saveExcel(data);

    res.status(200).json({ message: 'Entry updated', data: data[index] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update data.' });
  }
});

// ✅ DELETE - Delete patient entry by index
router.delete('/form/:index', (req, res) => {
  try {
    const index = parseInt(req.params.index);
    let data = loadExcel();

    if (index < 0 || index >= data.length) {
      return res.status(404).json({ error: 'Invalid index' });
    }

    const removed = data.splice(index, 1);
    saveExcel(data);

    res.status(200).json({ message: 'Entry deleted', deleted: removed });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete entry.' });
  }
});

module.exports = router;
