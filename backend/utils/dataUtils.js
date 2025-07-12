const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../eventData.json');

const loadEvents = () => {
  if (!fs.existsSync(dataFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Failed to parse events:', err.message);
    return [];
  }
};

const saveEvents = (events) => {
  fs.writeFileSync(dataFile, JSON.stringify(events, null, 2));
};



module.exports = { loadEvents, saveEvents };
