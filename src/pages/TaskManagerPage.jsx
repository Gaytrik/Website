import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskManager = () => {
  const [events, setEvents] = useState([]);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      setMessage('❌ Failed to fetch events');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('description', description);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      await axios.post('http://localhost:5000/api/events', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setHeading('');
      setDescription('');
      setImages([]);
      fetchEvents();
      setMessage('✅ Event created successfully!');
    } catch (err) {
      setMessage('❌ Failed to create event');
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete('http://localhost:5000/api/events');
      fetchEvents();
      setMessage('🗑️ Event deleted');
    } catch (err) {
      setMessage('❌ Failed to delete');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Task Manager (Event Admin)</h2>

      {/* Create Event Form */}
      <form onSubmit={handleCreate} className="bg-white shadow p-6 rounded mb-10 space-y-4">
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Event Heading"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="file"
          onChange={(e) => setImages(e.target.files)}
          multiple
          className="w-full"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          ➕ Create Event
        </button>
      </form>

      {message && <p className="mb-6 text-red-600 font-medium">{message}</p>}

      {/* Event List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow border">
            <h3 className="text-lg font-bold text-green-700">{event.heading}</h3>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <div className="flex gap-2 overflow-x-auto mb-2">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={`http://localhost:5000/${img}`}
                  alt={`event-${i}`}
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
            <button
              onClick={() => handleDelete(idx)}
              className="text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700"
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
