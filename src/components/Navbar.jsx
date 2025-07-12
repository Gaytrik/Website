// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { HashLink } from 'react-router-hash-link';

// // const Navbar = () => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50">
// //       {/* Top Bar */}
// //       <div className="bg-green-700 text-white text-sm py-2 px-4">
// //         <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
// //           <span className="mb-1 sm:mb-0">Saturday, 8AM to 10PM</span>
// //           <span>Call us now +1 5589 5548 35</span>
// //         </div>
// //       </div>

// //       {/* Main Floating Navbar */}
// //       <div className="mx-auto mt-4 w-[90%] max-w-5xl bg-white/80 shadow-lg backdrop-blur-md rounded-full px-8 py-4 flex justify-between items-center relative border border-green-100">
// //         {/* Logo */}
// //         <Link to="/" className="text-3xl font-extrabold text-green-700">
// //           DR KOLHE
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <div className="hidden md:flex items-center space-x-6">
// //           <Link to="/" className="text-gray-700 hover:text-green-700 font-semibold">HOME</Link>
// //           <Link to="/about-us" className="text-gray-700 hover:text-green-700 font-semibold">ABOUT</Link>
// //           <Link to="/services" className="text-gray-700 hover:text-green-700 font-semibold">SERVICES</Link>
// //           <HashLink smooth to="/make-appointment#doctors" className="text-gray-700 hover:text-green-700 font-semibold">DOCTORS</HashLink>

// //           {/* Dropdown */}
// //           <div className="relative">
// //             <button
// //               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //               className="text-gray-700 hover:text-green-700 font-semibold flex items-center"
// //             >
// //               MORE
// //               <svg
// //                 className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //               </svg>
// //             </button>
// //             {isDropdownOpen && (
// //               <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
// //                 <Link to="/make-appointment#gallery" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Gallery</Link>
// //                 <Link to="/make-appointment#faq" className="block px-4 py-2 text-gray-700 hover:bg-green-50">FAQ</Link>
// //               </div>
// //             )}
// //           </div>

// //           {/* Contact */}
// //           <Link to="/contactpage" className="text-gray-700 hover:text-green-700 font-semibold">CONTACT</Link>
// //         </div>

// //         {/* Appointment Button */}
// //         <Link
// //           to="/make-appointment"
// //           className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
// //         >
// //           Make an Appointment
// //         </Link>

// //         {/* Mobile Toggle */}
// //         <div className="md:hidden">
// //           <button
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //             className="text-gray-700 focus:outline-none"
// //           >
// //             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               {isMobileMenuOpen ? (
// //                 <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
// //               ) : (
// //                 <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
// //               )}
// //             </svg>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMobileMenuOpen && (
// //         <div className="md:hidden bg-white px-4 py-6 space-y-3 shadow-md mt-2 rounded-b-xl w-[90%] mx-auto">
// //           <Link to="/" className="block text-gray-700 font-semibold">HOME</Link>
// //           <Link to="/about-us" className="block text-gray-700 font-semibold">ABOUT</Link>
// //           <Link to="/services" className="block text-gray-700 font-semibold">SERVICES</Link>
// //           <Link to="/department" className="block text-gray-700 font-semibold">DEPARTMENTS</Link>
// //           <HashLink smooth to="/make-appointment#doctors" className="block text-gray-700 font-semibold">DOCTORS</HashLink>
// //           <Link to="/make-appointment#gallery" className="block text-gray-700 font-semibold">GALLERY</Link>
// //           <Link to="/make-appointment#faq" className="block text-gray-700 font-semibold">FAQ</Link>
// //           <Link to="/contactpage" className="block text-gray-700 font-semibold">CONTACT</Link>
// //           <Link to="/make-appointment" className="block w-full bg-green-700 text-white text-center py-2 rounded-full font-semibold mt-4">Make an Appointment</Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       {/* Top Bar */}
//       <div className="bg-green-700 text-white text-xs py-1 px-4">
//         <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
//           <span className="mb-1 sm:mb-0">Saturday, 8AM to 10PM</span>
//           <span>Call us now +1 5589 5548 35</span>
//         </div>
//       </div>

//       {/* Main Floating Navbar */}
//       <div className="mx-auto mt-3 w-[92%] max-w-5xl bg-white/80 shadow-md backdrop-blur-md rounded-full px-6 py-2 flex justify-between items-center border border-green-100">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-green-700">
//           DR KOLHE
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-5">
//           <Link to="/" className="text-gray-700 hover:text-green-700 text-sm font-medium">HOME</Link>
//           <Link to="/about-us" className="text-gray-700 hover:text-green-700 text-sm font-medium">ABOUT</Link>
//           <Link to="/services" className="text-gray-700 hover:text-green-700 text-sm font-medium">SERVICES</Link>
//           <Link to="/contactpage" className="text-gray-700 hover:text-green-700 text-sm font-medium">CONTACT</Link>
//         </div>

//         {/* Appointment Button */}
//         <Link
//           to="/make-appointment"
//           className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-2 px-4 rounded-full transition"
//         >
//           Make Appointment
//         </Link>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-green-700 focus:outline-none text-2xl"
//           >
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white px-4 py-4 space-y-2 shadow-md mt-2 rounded-b-xl w-[92%] mx-auto">
//           <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium">HOME</Link>
//           <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium">ABOUT</Link>
//           <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium">SERVICES</Link>
//           <Link to="/contactpage" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium">CONTACT</Link>
//           <Link to="/make-appointment" onClick={() => setIsMobileMenuOpen(false)} className="block bg-green-700 text-white text-center py-2 rounded-full font-medium mt-2">
//             Make Appointment
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about-us' },
  { name: 'SERVICES', path: '/services' },
  { name: 'CAREER', path: '/career' },
  { name: 'EVENTS', path: '/events' },
  { name: 'CONTACT', path: '/contactpage' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-xs py-1 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <span className="mb-1 sm:mb-0">Saturday, 8AM to 10PM</span>
          <span>Call us now +1 5589 5548 35</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto mt-3 w-[92%] max-w-5xl bg-white/80 shadow-md backdrop-blur-md rounded-full px-6 py-2 flex justify-between items-center border border-green-100">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          DR KOLHE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-green-700 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Appointment Button */}
        <Link
          to="/make-appointment"
          className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-2 px-4 rounded-full transition"
        >
          Make Appointment
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-green-700 focus:outline-none text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-2 shadow-md mt-2 rounded-b-xl w-[92%] mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/make-appointment"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block bg-green-700 text-white text-center py-2 rounded-full font-medium mt-2"
          >
            Make Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
