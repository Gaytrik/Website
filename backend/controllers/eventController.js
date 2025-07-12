// // ✅ controllers/eventController.js
// const User = require('../models/User');

// exports.getEvent = async (req, res) => {
//   const user = await User.findById(req.userId);
//   res.status(200).json(user.event);
// };

// exports.createEvent = async (req, res) => {
//   const user = await User.findById(req.userId);
//   if (user.event && user.event.heading) return res.status(403).json({ message: 'Event already created' });

//   const imagePaths = req.files.map(file => file.path);
//   user.event = {
//     heading: req.body.heading,
//     description: req.body.description,
//     images: imagePaths,
//     createdAt: new Date()
//   };

//   await user.save();
//   res.status(201).json(user.event);
// };

// exports.updateEvent = async (req, res) => {
//   const user = await User.findById(req.userId);
//   if (!user.event) return res.status(404).json({ message: 'No event found' });

//   user.event.heading = req.body.heading;
//   user.event.description = req.body.description;
//   if (req.files.length) user.event.images = req.files.map(file => file.path);
//   await user.save();

//   res.status(200).json(user.event);
// };

// exports.deleteEvent = async (req, res) => {
//   const user = await User.findById(req.userId);
//   if (!user.event) return res.status(404).json({ message: 'No event to delete' });

//   const now = new Date();
//   const diffMinutes = (now - new Date(user.event.createdAt)) / 60000;
//   if (diffMinutes > 10) return res.status(403).json({ message: 'Delete window expired' });

//   user.event = null;
//   await user.save();
//   res.status(200).json({ message: 'Event deleted' });
// };

const { loadEvents, saveEvents } = require('../utils/dataUtils');
const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, '../eventData.json');
const User = require('../models/User');

const loadEvent = () => {
  if (!fs.existsSync(dataFile)) return null;
  return JSON.parse(fs.readFileSync(dataFile));
};

const saveEvent = (event) => {
  fs.writeFileSync(dataFile, JSON.stringify(event, null, 2));
};


exports.getEvent = (req, res) => {
  const events = loadEvents(); // updated to return an array
  if (!Array.isArray(events) || events.length === 0) {
    return res.status(404).json({ message: 'No events found' });
  }
  res.status(200).json(events);
};


exports.createEvent = (req, res) => {
  const existing = loadEvent();
  if (existing && existing.heading) {
    return res.status(403).json({ message: 'Event already created' });
  }

  const imagePaths = req.files.map(file => file.path);
  const event = {
    heading: req.body.heading,
    description: req.body.description,
    images: imagePaths,
    createdAt: new Date()
  };

  saveEvent(event);
  res.status(201).json(event);
};
exports.createEvent = (req, res) => {
  const events = loadEvents(); // returns an array

  const imagePaths = req.files.map(file => file.path);
  const newEvent = {
    heading: req.body.heading,
    description: req.body.description,
    images: imagePaths,
    createdAt: new Date()
  };

  events.push(newEvent);
  saveEvents(events);
  res.status(201).json(newEvent);
};


exports.updateEvent = (req, res) => {
  let event = loadEvent();
  if (!event) return res.status(404).json({ message: 'No event found' });

  event.heading = req.body.heading;
  event.description = req.body.description;
  if (req.files.length) event.images = req.files.map(file => file.path);
  saveEvent(event);

  res.status(200).json(event);
};

exports.deleteEvent = (req, res) => {
  const index = parseInt(req.query.index);
  let events = loadEvents();
  if (!events || index < 0 || index >= events.length) {
    return res.status(404).json({ message: 'Event not found' });
  }

  events.splice(index, 1);
  saveEvents(events);
  res.status(200).json({ message: 'Event deleted' });
};
