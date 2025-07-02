import React, { useState, useEffect } from 'react'; // Import useEffect
import { motion } from 'framer-motion';

const MakeAppointment = () => {
  const departments = [
    {
      name: "Cardiology",
      description:
        "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint... Qui laudantium consequatur laborum sit qui ad sapiente...",
      img: "https://themewagon.github.io/MediCio/assets/img/departments-1.jpg",
    },
    {
      name: "Neurology",
      description:
        "Neurology focuses on treating disorders of the nervous system including the brain, spinal cord, and nerves. It encompasses various subspecialties like epilepsy, stroke, and neurodegenerative diseases.",
      img: "https://themewagon.github.io/MediCio/assets/img/departments-2.jpg",
    },
    {
      name: "Hepatology",
      description:
        "Hepatology deals with the study, prevention, diagnosis, and management of diseases that affect the liver, gallbladder, biliary tree, and pancreas.",
      img: "https://themewagon.github.io/MediCio/assets/img/departments-3.jpg",
    },
    {
      name: "Pediatrics",
      description:
        "Pediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents, ensuring their healthy development.",
      img: "https://themewagon.github.io/MediCio/assets/img/departments-4.jpg",
    },
    {
      name: "Ophthalmologists",
      description:
        "Ophthalmologists specialize in medical and surgical care for eye conditions including vision correction, eye diseases, and injuries.",
      img: "https://themewagon.github.io/MediCio/assets/img/departments-5.jpg",
    },
  ];

  const galleryImages = [
    "https://c4.wallpaperflare.com/wallpaper/978/657/202/medicine-hospital-wallpaper-preview.jpg",
    "https://images.unsplash.com/photo-1512678080530-7760d81faba6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
    "https://media.gettyimages.com/id/1632593384/video/hospital-bed-senior-patient-and-nurse-talk-with-night-check-and-healthcare-monitor-in-icu.jpg?s=640x640&k=20&c=lcRHHqtbceERY3WCLytuYotxIFUO0pnmDb2iaNuUefE=",
    "https://t3.ftcdn.net/jpg/02/40/12/90/360_F_240129027_9CzFqJCSp7teZIOcnotj1igTBSJDwhjw.jpg",
    "https://c0.wallpaperflare.com/preview/988/68/836/patient-nurse-human-activity.jpg",
  ];

  const doctors = [
    {
      name: "Walter White",
      title: "Chief Medical Officer",
      img: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?semt=ais_hybrid&w=740",
    },
    {
      name: "Sarah Jhonson",
      title: "Anesthesiologist",
      img: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    },
    {
      name: "William Anderson",
      title: "Cardiology",
      img: "https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg",
    },
    {
      name: "Amanda Jepson",
      title: "Neurosurgeon",
      img: "https://t3.ftcdn.net/jpg/03/05/69/00/360_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg",
    },
  ];

  const [activeDept, setActiveDept] = useState(departments[0]);
  const [currentGalleryImageIndex, setCurrentGalleryImageIndex] = useState(0); // State for gallery slider

  // Effect for automatic gallery image transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImageIndex((prevIndex) =>
        (prevIndex + 1) % galleryImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const departmentItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.05, color: '#16A34A' }, // Darker green on hover
    tap: { scale: 0.95 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };


  return (
    <div className="text-gray-800 w-full overflow-x-hidden">
      {/* Appointment Section */}
      <section className="bg-white py-16 px-4" id="appointment">
        <div className="w-full text-center px-4 sm:px-10">
          <motion.h2
            className="text-4xl font-bold text-green-700 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MAKE AN APPOINTMENT
          </motion.h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <motion.p
            className="text-gray-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </motion.p>
          <motion.form
            className="space-y-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <motion.input type="text" placeholder="Your Name" className="input" variants={itemVariants} />
              <motion.input type="email" placeholder="Your Email" className="input" variants={itemVariants} />
              <motion.input type="text" placeholder="Your Phone" className="input" variants={itemVariants} />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.input type="datetime-local" className="input" variants={itemVariants} />
              <motion.select className="input" variants={itemVariants}>
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Hepatology</option>
                <option>Pediatrics</option>
                <option>Ophthalmologists</option>
              </motion.select>
              <motion.select className="input" variants={itemVariants}>
                <option>Select Doctor</option>
                <option>Walter White</option>
                <option>Sarah Jhonson</option>
                <option>William Anderson</option>
                <option>Amanda Jepson</option>
              </motion.select>
            </div>
            <motion.textarea rows="4" placeholder="Message (Optional)" className="input w-full" variants={itemVariants}></motion.textarea>
            <motion.button
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Make an Appointment
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Updated Departments Section with Flexbox */}
      <section className="bg-gray-50 py-16 px-4" id="departments">
        <div className="w-full px-4 sm:px-10">
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-green-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Departments
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto"> {/* Changed to flexbox */}
            {/* Sidebar List */}
            <motion.ul
              className="md:w-1/4 text-green-600 space-y-4 font-semibold cursor-pointer flex flex-col items-start" // Adjusted for flex
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {departments.map((dept, i) => (
                <motion.li
                  key={i}
                  onClick={() => setActiveDept(dept)}
                  className={`py-2 px-4 rounded-md w-full text-left hover:bg-green-100 transition-all duration-300 ${ // Added padding and full width
                    activeDept.name === dept.name ? "bg-green-100 text-green-700 font-bold" : ""
                  }`}
                  variants={departmentItemVariants} // Apply item variants
                  whileHover="hover"
                  whileTap="tap"
                >
                  {dept.name}
                </motion.li>
              ))}
            </motion.ul>

            {/* Main Content */}
            <motion.div
              key={activeDept.name} // Key change to re-trigger animation on activeDept change
              className="md:w-3/4 bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6" // Enhanced styling and flex for content
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              <motion.img
                src={activeDept.img}
                alt={activeDept.name}
                className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md flex-shrink-0" // Responsive image
                variants={imageVariants}
              />
              <div className="flex flex-col text-left">
                <motion.h3
                  className="text-2xl font-bold mb-2 text-green-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {activeDept.name}
                </motion.h3>
                <motion.p
                  className="italic mb-4 text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {activeDept.description}
                </motion.p>
                {/* Add more content here if needed for the department */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4" id="testimonials">
        <div className="w-full px-4 sm:px-10 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-700 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-10"></div>
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                name: "Matt Brandon",
                role: "Freelancer",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa...",
              },
              {
                name: "John Larson",
                role: "Entrepreneur",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
                quote: "Quis quorum aliqua sint quem legam fore sunt eram...",
              },
              {
                name: "Saul Goodman",
                role: "CEO & Founder",
                img: "https://randomuser.me/api/portraits/men/44.jpg",
                quote: "Proin iaculis purus consequat sem cure digni ssim donec...",
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded shadow flex flex-col items-center hover:bg-green-50 cursor-pointer transition-all duration-300 transform hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }} // Lift effect on hover
              >
                <p className="text-sm italic text-gray-600 mb-4">“{person.quote}”</p>
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-14 h-14 mx-auto rounded-full mb-2 border-2 border-green-400"
                />
                <h4 className="font-semibold text-gray-800">{person.name}</h4>
                <p className="text-sm text-gray-500">{person.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-gray-50 py-16 px-4" id="doctors">
        <div className="w-full px-4 sm:px-10 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-700 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Doctors
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded-xl shadow text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }} // Lift effect on hover
              >
                <div className="w-full h-56 overflow-hidden rounded mb-4">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="font-bold text-lg text-gray-800">{doc.name}</h4>
                <p className="text-sm text-gray-500">{doc.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery with Automatic Slider */}
      <section className="bg-white py-16 px-4" id="gallery">
        <div className="w-full px-4 sm:px-10 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-700 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gallery
          </motion.h2>
          <div className="relative max-w-2xl mx-auto h-64 overflow-hidden rounded-lg shadow-lg"> {/* Container for slider */}
            {galleryImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: i === currentGalleryImageIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
            ))}
            {/* Gallery Slider Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                    currentGalleryImageIndex === index ? 'bg-green-500' : 'bg-gray-400'
                  } opacity-75`}
                  onClick={() => setCurrentGalleryImageIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4" id="faq">
        <div className="w-full px-4 sm:px-10">
          <motion.h2
            className="text-3xl font-bold text-green-700 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="space-y-4 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "Non consectetur a erat nam at lectus urna duis?",
              "Feugiat scelerisque varius morbi enim nunc faucibus?",
              "Dolor sit amet consectetur adipiscing elit pellentesque?",
              "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
              "Tempus quam pellentesque nec nam aliquam sem et tortor?",
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded shadow hover:bg-green-50 cursor-pointer transition-all duration-300 flex justify-between items-center" // Added flex for arrow
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 5 }} // Slight slide on hover
              >
                <p className="font-semibold text-gray-700">{faq}</p>
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
