import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Department = () => {
  const heroImages = [
    'https://themewagon.github.io/MediCio/assets/img/hero-carousel/hero-carousel-3.jpg',
    'https://themewagon.github.io/MediCio/assets/img/hero-carousel/hero-carousel-1.jpg',
    'https://themewagon.github.io/MediCio/assets/img/hero-carousel/hero-carousel-2.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full overflow-x-hidden font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
          style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="bg-white p-6 sm:p-10 rounded-md shadow-md w-full max-w-3xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Welcome to Medicio</h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            <button
              onClick={() => setShowMoreInfo(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Read More
            </button>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-700/60 hover:bg-gray-800 text-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-700/60 hover:bg-gray-800 text-white p-2 rounded-full"
        >
          ▶
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-green-500 scale-110' : 'bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Extra Info after Read More */}
      {showMoreInfo && (
        <section className="w-full bg-white py-12 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <img
              src="https://themewagon.github.io/MediCio/assets/img/about.jpg"
              alt="Hospital"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="text-gray-700 space-y-4">
              <h2 className="text-2xl font-bold text-green-600">About Our Hospital</h2>
              <p>
                Our hospital is committed to delivering world-class healthcare using the most advanced medical
                technologies available. With a team of highly skilled doctors, we provide compassionate, quality care.
              </p>
              <p>
                We aim to ensure a safe, comfortable, and healing environment for our patients. Visit us to learn more
                about our departments, services, and commitment to your health.
              </p>
              <button
                onClick={() => setShowMoreInfo(false)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
              >
                Close
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Departments Section */}
      <section className="py-12 bg-white w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Departments</h2>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <DepartmentCard key={idx} {...dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-green-600 py-10 text-white text-center w-full">
        <div className="w-full px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3">In an emergency? Need help now?</h3>
          <p className="text-base sm:text-lg mb-6 max-w-3xl mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button
            onClick={() => navigate('/make-appointment')}
            className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Make an Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

// Department card component
const DepartmentCard = ({ icon, title, description }) => (
  <div className="bg-white p-5 rounded-lg shadow border text-center hover:shadow-md transition">
    <div className="text-green-500 mb-4">
      <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d={icon} />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// Department data
const departments = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.2c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.2 12 7.2s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z",
    title: "Cardiology",
    description: "Care for heart conditions, including diagnosis, treatment, and prevention.",
  },
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z",
    title: "Pediatrics",
    description: "Medical care of infants, children, and adolescents.",
  },
  {
    icon: "M19 12h-2V7h-4V5h4V3h2v2h2v4h-2zm-6 7H7v-2h6v2zm0-4H7V7h6v8z",
    title: "Orthopedics",
    description: "Focuses on bones, joints, ligaments, and muscles.",
  },
  {
    icon: "M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-2-9h4v2h-4v-2z",
    title: "Neurology",
    description: "Disorders of the brain, spine, and nervous system.",
  },
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z",
    title: "Dermatology",
    description: "Skin, hair, and nail treatment and diagnosis.",
  },
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z",
    title: "Oncology",
    description: "Cancer diagnosis, radiation, and patient support.",
  },

   {
    icon: "M19 12h-2V7h-4V5h4V3h2v2h2v4h-2zm-6 7H7v-2h6v2zm0-4H7V7h6v8z",
    title: "Orthopedics",
    description: "Focuses on bones, joints, ligaments, and muscles.",
  },
  {
    icon: "M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-2-9h4v2h-4v-2z",
    title: "Neurology",
    description: "Disorders of the brain, spine, and nervous system.",
  },
];

export default Department;
