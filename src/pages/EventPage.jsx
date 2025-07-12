import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Float from '../components/FloatContacticon';
import bgimg from "../assets/event backgound.jpg" 
function EventPage() {
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/events');
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to fetch');
      setEvents(data);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* 🌟 Hero Section */}
     <div
  className="w-full bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgimg})`,
    height: '70vh'
  }}
>
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce">
            🌿 Welcome to Our Events
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Discover our latest health camps, seminars, and awareness programs.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 py-12">
        {message && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 animate-pulse">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up border-2 border-green-100"
              style={{
                animationDelay: `${idx * 200}ms`
              }}
            >
              {/* Image Carousel */}
<div className="overflow-hidden rounded-lg mb-4">
  {event.images.map((img, i) => (
    <img
      key={i}
      src={`http://localhost:5000/${img}`}
      alt={`event-${i}`}
      className="w-full h-72 object-cover rounded"
    />
  ))}
</div>


              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3 hover:text-green-600 transition-colors duration-200">
                  {event.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {event.description}
                </p>
                
                {/* Decorative element */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    <span className="text-green-500">🌿</span>
                    <span className="text-green-600">🌱</span>
                    <span className="text-green-700">🌳</span>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Login Button - Fixed Bottom Left */}
      <Link
        to="/doctor-login"
        className="fixed bottom-6 left-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
      >
        <span className="text-2xl">👨‍⚕️</span>
        <div className="absolute left-16 bottom-1/2 transform translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Doctor Login
        </div>
      </Link>
    <Float/>
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Custom scrollbar for image carousel */
        .scrollbar-thin {
          scrollbar-width: thin;
        }

        .scrollbar-thumb-green-400::-webkit-scrollbar-thumb {
          background-color: #4ade80;
          border-radius: 6px;
        }

        .scrollbar-track-green-100::-webkit-scrollbar-track {
          background-color: #dcfce7;
          border-radius: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }

        /* Smooth scrolling for image carousel */
        .overflow-x-auto {
          scroll-behavior: smooth;
        }

        /* Background pattern for hero section */
        .hero-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
        }
      `}</style>
    </div>
  );
}

export default EventPage;