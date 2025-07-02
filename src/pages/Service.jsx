import React from 'react';

function Service() {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusamus minus dolores iure perferendis tempore et consequatur.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.944 12c0 2.892 1.18 5.518 3.04 7.438A12.001 12.001 0 0012 21.056c2.892 0 5.518-1.18 7.438-3.04A12.001 12.001 0 0021.056 12a11.955 11.955 0 01-3.04-8.618z" />
        </svg>
      ),
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Ledo Markt',
      description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Asperiores Commodit',
      description: 'Non et temporibus omnis minus sed dolor esse maiores. Eos accusamus minus dolores iure perferendis tempore et consequatur.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A3.997 3.997 0 0115 11.001c0 1.05-.42 2.048-1.172 2.828L12 16.001l-1.828-1.828A3.997 3.997 0 019 11.001c0-1.05.42-2.048 1.172-2.828L12 5.636m6.364 0L12 12m6.364 0l-6.364 6.364M12 12l-6.364 6.364M12 12l6.364-6.364" />
        </svg>
      ),
      title: 'Velit Doloremque',
      description: 'Cumque et suscipit saepe. Sint maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M12 20.354V15.5m0 0a4 4 0 01-4-4v-1a4 4 0 014-4 4 4 0 014 4v1a4 4 0 01-4 4z" />
        </svg>
      ),
      title: 'Dolori Architecto',
      description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden"> {/* Added overflow-hidden */}
      {/* Hero Section with Background Image */}
      <section
        className="relative w-full h-[40vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(https://wallpapers.com/images/hd/doctor-with-globe-in-hand-hd-medical-dff7ahiwc5xsfjm0.jpg)' }} // Placeholder image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center px-4 animate-fade-in-up"> {/* Added fade-in-up animation */}
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center
                           transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                           animate-fade-in-up" // Added initial animation
                style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6
                                group-hover:bg-green-200 transition-colors duration-300 animate-bounce-once"> {/* Added bounce animation */}
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
