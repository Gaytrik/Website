import React from 'react'; // ✅ Required for JSX to work in older setups
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

function Float() {
  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col gap-3 z-[9999]"
      style={{
        bottom: 'calc(1rem + env(safe-area-inset-bottom))',
        right: 'calc(1rem + env(safe-area-inset-right))',
      }}
    >
      <a
        href="tel:+917249261306"
        className="bg-teal-600 p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        <FiPhoneCall className="text-white text-2xl" />
      </a>
      <a
        href="https://wa.me/917249261306"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        <BsWhatsapp className="text-white text-2xl" />
      </a>
    </div>
  );
}

export default Float;
