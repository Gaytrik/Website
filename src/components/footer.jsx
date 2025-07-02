import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-gray-700 pt-10 pb-6 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Medicio Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Medicio</h2>
          <p>A108 Adam Street<br />New York, NY 535022</p>
          <p className="mt-2"><strong>Phone:</strong> +1 5589 55488 55</p>
          <p><strong>Email:</strong> info@example.com</p>
          <div className="flex space-x-4 mt-4">
            {['x', 'facebook', 'instagram', 'linkedin'].map((icon, idx) => (
              <button key={idx} className="border rounded-full p-2 hover:bg-gray-100">
                <i className={`bi bi-${icon}`}></i>
              </button>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600">About us</Link></li>
            <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
            <li><Link to="/terms" className="hover:text-green-600">Terms of service</Link></li>
            <li><Link to="/privacy" className="hover:text-green-600">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li><Link to="/web-design" className="hover:text-green-600">Web Design</Link></li>
            <li><Link to="/web-development" className="hover:text-green-600">Web Development</Link></li>
            <li><Link to="/product-management" className="hover:text-green-600">Product Management</Link></li>
            <li><Link to="/marketing" className="hover:text-green-600">Marketing</Link></li>
            <li><Link to="/graphic-design" className="hover:text-green-600">Graphic Design</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="font-semibold mb-4">Hic solutaseptp</h2>
          <ul className="space-y-2">
            <li><Link to="/molestiae" className="hover:text-green-600">Molestiae accusamus iure</Link></li>
            <li><Link to="/excepturi" className="hover:text-green-600">Excepturi dignissimos</Link></li>
            <li><Link to="/suscipit" className="hover:text-green-600">Suscipit distinctio</Link></li>
            <li><Link to="/dilecta" className="hover:text-green-600">Dilecta</Link></li>
            <li><Link to="/sit-quas" className="hover:text-green-600">Sit quas consectetur</Link></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h2 className="font-semibold mb-4">Nobis illum</h2>
          <ul className="space-y-2">
            <li><Link to="/ipsam" className="hover:text-green-600">Ipsam</Link></li>
            <li><Link to="/laudantium" className="hover:text-green-600">Laudantium dolorum</Link></li>
            <li><Link to="/dinera" className="hover:text-green-600">Dinera</Link></li>
            <li><Link to="/trodelas" className="hover:text-green-600">Trodelas</Link></li>
            <li><Link to="/flexo" className="hover:text-green-600">Flexo</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        <p>&copy; Copyright <strong className="text-black">Medicio</strong>. All Rights Reserved</p>
        <p>Designed by <span className="text-blue-500">BootstrapMade</span> Distributed by <span className="text-blue-500">ThemeWagon</span></p>
      </div>
    </footer>
  );
};

export default Footer;
