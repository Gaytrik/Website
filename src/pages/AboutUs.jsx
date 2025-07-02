import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen font-sans px-4 md:px-20 py-12">
      
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image + Play Button */}
        <div className="relative group">
          <img
            src="https://img.freepik.com/free-photo/building-hospital-healthcare-outdoors-daylight_53876-144065.jpg"
            alt="Hospital"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 rounded-full bg-cyan-600 text-white text-2xl shadow-lg hover:bg-cyan-700 transition">
              ▶
            </button>
          </div>
        </div>

        {/* Text & Bullets */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate.
            </li>
            <li>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Excepteur sint occaecat cupidatat non proident.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
