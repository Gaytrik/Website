// 
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// 🔁 REMOVED `auth` middleware
router.get('/', getEvent);
router.post('/', upload.array('images', 5), createEvent);
router.put('/', upload.array('images', 5), updateEvent);
router.delete('/', deleteEvent);

module.exports = router;
