import React from 'react';

// This component represents the Contact page.
// It is designed to be rendered by a routing system (e.g., react-router-dom)
// at a specific path (e.g., /contact).
function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section for the Contact Page */}
      <section className="bg-green-50 py-20 rounded-b-lg shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Reach out t
            o us for any inquiries or appointments.
          </p>
        </div>
      </section>

      {/* Map Section - Placeholder for an embedded Google Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-w-16 aspect-h-9">
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
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 shadow-inner">
                {/* Location Icon (SVG) */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A8.996 8.996 0 0012 10c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Address</h3>
              <p className="text-gray-600 text-center text-base">A108 Adam Street, New York, NY 535022</p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 resize-y"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
