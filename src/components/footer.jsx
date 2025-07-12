import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 pt-12 pb-6 text-sm border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center">
          {/* Clinic Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">DR KOLHE</h2>
            <p>Kolhe Homeopathy Clinic<br />Nashik, Maharashtra - 422101</p>
            <p className="mt-2 flex justify-center items-center gap-2"><FiPhone /> +91 98765 43210</p>
            <p className="flex justify-center items-center gap-2"><FiMail /> info@drkolheclinic.com</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-green-700 hover:text-green-900"><FiFacebook /></a>
              <a href="#" className="text-green-700 hover:text-green-900"><FiInstagram /></a>
              <a href="#" className="text-green-700 hover:text-green-900"><FiLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-4 text-green-800">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-600">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-green-600">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
              <li><Link to="/events" className="hover:text-green-600">Events</Link></li>
              <li><Link to="/contactpage" className="hover:text-green-600">Contact</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h2 className="font-semibold mb-4 text-green-800">Treatments</h2>
            <ul className="space-y-2">
              <li><span className="text-gray-600">Respiratory Conditions</span></li>
              <li><span className="text-gray-600">Neurological Issues</span></li>
              <li><span className="text-gray-600">Joint & Muscle Pain</span></li>
              <li><span className="text-gray-600">Chronic Fatigue</span></li>
              <li><span className="text-gray-600">Immunity Boosting</span></li>
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h2 className="font-semibold mb-4 text-green-800">Get Started</h2>
            <ul className="space-y-2">
              <li><Link to="/make-appointment" className="hover:text-green-600">Make Appointment</Link></li>
              <li><a href="#" className="hover:text-green-600">Buy Medicines</a></li>
              <li><Link to="/contactpage" className="hover:text-green-600">Chat with Homeopath</Link></li>
              <li><Link to="/about-us" className="hover:text-green-600">Know the Doctor</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-green-100 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} <span className="text-green-700"> All Rights Reserved.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;