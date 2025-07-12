import React from 'react';
import CaseRecordForm from '../components/CaseRecord';

// This component represents the Contact page.
// It is designed to be rendered by a routing system (e.g., react-router-dom)
// at a specific path (e.g., /contact).
function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 font-sans">
      {/* Hero Section for the Contact Page */}
      <section 
        className="relative py-20 rounded-b-lg shadow-md bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            🌿 Contact Us 🌱
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Reach out to us for any inquiries or appointments.
          </p>
          
          {/* Decorative Tree Elements */}
          <div className="mt-8 flex justify-center space-x-4 text-4xl animate-bounce">
            <span className="text-green-300">🌳</span>
            <span className="text-green-400">🌿</span>
            <span className="text-green-500">🌱</span>
            <span className="text-green-400">🌿</span>
            <span className="text-green-300">🌳</span>
          </div>
        </div>
        
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-b-lg"></div>
      </section>

      {/* Map Section - Placeholder for an embedded Google Map */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-2">📍 Find Us Here</h2>
            <p className="text-green-600">Visit our location surrounded by nature</p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 relative">
            {/*
              In a real application, you would replace this iframe with your actual
              Google Maps embed code or a more dynamic map component.
              The 'allowFullScreen' and 'referrerPolicy' attributes are important for embedding maps.
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.955685608889!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2283e7b3b7%3A0x1c7b8f9e6d6d7d8e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="rounded-lg shadow-lg border-4 border-green-200 hover:border-green-300 transition-all duration-300"
            ></iframe>
            
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 text-2xl animate-pulse">🌱</div>
            <div className="absolute -top-2 -right-2 text-2xl animate-pulse">🌿</div>
            <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">🌳</div>
            <div className="absolute -bottom-2 -right-2 text-2xl animate-pulse">🍃</div>
          </div>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-emerald-200 text-green-600 mb-6 shadow-lg mx-auto animate-pulse">
                {/* Location Icon (SVG) with enhanced styling */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A8.996 8.996 0 0012 10c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5z" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-green-800 mb-4 text-center">🏥 Our Address</h3>
              <p className="text-gray-700 text-center text-lg font-medium">A108 Adam Street, New York, NY 535022</p>
              
              {/* Decorative elements */}
              <div className="mt-6 flex justify-center space-x-2">
                <span className="text-green-500">🌿</span>
                <span className="text-green-600">🌱</span>
                <span className="text-green-700">🌳</span>
              </div>
              
              {/* Additional contact info */}
              <div className="mt-6 space-y-3 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600">📞</span>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600">✉️</span>
                  <span className="text-gray-600">info@healthcare.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600">⏰</span>
                  <span className="text-gray-600">Mon-Fri: 9AM-6PM</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-3xl font-semibold text-green-800 mb-6 text-center">
                💬 Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="🌱 Your Name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 bg-green-50 hover:bg-white"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="📧 Your Email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 bg-green-50 hover:bg-white"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="📝 Subject"
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 bg-green-50 hover:bg-white"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="💭 Your Message"
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300 resize-y bg-green-50 hover:bg-white"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  🚀 Send Message
                </button>
              </form>
              
              {/* Decorative bottom element */}
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                <span className="text-green-500">🌿</span>
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-12 bg-gradient-to-br from-green-100 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">🌳 Why Choose Us?</h2>
            <p className="text-green-600 text-lg">Experience healthcare in harmony with nature</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200 text-center hover:border-green-300 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Natural Healing</h3>
              <p className="text-gray-600">Holistic approach to healthcare</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200 text-center hover:border-green-300 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable healthcare practices</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200 text-center hover:border-green-300 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Care</h3>
              <p className="text-gray-600">Professional medical services</p>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        /* Custom gradient background */
        .bg-gradient-nature {
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%);
        }

        /* Hover effects for form inputs */
        input:focus, textarea:focus {
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }

        /* Enhanced button hover effect */
        button:hover {
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
        }
      `}</style>
    </div>
  );
}

export default ContactPage;