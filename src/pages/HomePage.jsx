import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HomePage() {
  // Array of image URLs for the slider. Using provided images.
  const sliderImages = [
    'https://wallpapers.com/images/high/doctor-with-globe-in-hand-hd-medical-dff7ahiwc5xsfjm0.webp',
    'https://wallpapers.com/images/high/hd-medical-health-icon-with-nurse-v1txjiifhv3bssoo.webp',
    'https://wallpapers.com/images/high/orange-human-anatomy-hd-medical-5y3off7hmqi1octo.webp',
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook to handle automatic image transitions
  useEffect(() => {
    // Set an interval to change the image every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % sliderImages.length
      );
    }, 5000); // Change image every 5 seconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [sliderImages.length]); // Re-run effect if sliderImages length changes

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scroll from animations */}
      {/* Hero Section with Automatic Slider */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center transition-all duration-1000 ease-in-out" // Changed to transition-all for smoother background image changes
        style={{ backgroundImage: `url(${sliderImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 animate-fade-in-up"> {/* Added fade-in-up animation */}
          <h1 className="text-5xl font-bold mb-4 animate-slide-in-left">At vero eos et accusamus</h1> {/* Added slide-in-left animation */}
          <p className="text-lg max-w-2xl mb-8 animate-slide-in-right"> {/* Added slide-in-right animation */}
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105 active:scale-95"> {/* Enhanced button hover/active effects */}
            Read More
          </button>
        </div>
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {sliderImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
              } opacity-75`}
              onClick={() => setCurrentImageIndex(index)} // Allow manual navigation
            ></div>
          ))}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Added hover effects */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce-once"> {/* Added bounce animation */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lorem Ipsum</h3>
              <p className="text-gray-600">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Added hover effects */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce-once">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sed ut perspici</h3>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Added hover effects */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce-once">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.232z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Magni Dolores</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Added hover effects */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce-once">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nemo Enim</h3>
              <p className="text-gray-600">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">In an emergency? Need help now?</h2> {/* Added fade-in animation */}
          <p className="text-lg max-w-2xl mx-auto mb-8 animate-fade-in delay-100"> {/* Added fade-in animation with delay */}
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* Linked button */}
          <Link
            to="/make-appointment" // This is the path to your Make Appointment page
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105 active:scale-95 animate-zoom-in" // Enhanced button hover/active effects and zoom-in animation
          >
            Make an Appointment
          </Link>
        </div>
      </section>

      {/* About Us Section (Simplified) */}
     
    </div>
  );
}

export default HomePage;
