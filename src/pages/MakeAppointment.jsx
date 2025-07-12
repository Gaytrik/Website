import React, { useState, useEffect  } from 'react'; // Import useEffect
import { motion } from 'framer-motion';
import CaseRecordForm from '../components/CaseRecord';

const MakeAppointment = () => {
  // const departments = [
  //   {
  //     name: "Cardiology",
  //     description:
  //       "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint... Qui laudantium consequatur laborum sit qui ad sapiente...",
  //     img: "https://themewagon.github.io/MediCio/assets/img/departments-1.jpg",
  //   },
  //   {
  //     name: "Neurology",
  //     description:
  //       "Neurology focuses on treating disorders of the nervous system including the brain, spinal cord, and nerves. It encompasses various subspecialties like epilepsy, stroke, and neurodegenerative diseases.",
  //     img: "https://themewagon.github.io/MediCio/assets/img/departments-2.jpg",
  //   },
  //   {
  //     name: "Hepatology",
  //     description:
  //       "Hepatology deals with the study, prevention, diagnosis, and management of diseases that affect the liver, gallbladder, biliary tree, and pancreas.",
  //     img: "https://themewagon.github.io/MediCio/assets/img/departments-3.jpg",
  //   },
  //   {
  //     name: "Pediatrics",
  //     description:
  //       "Pediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents, ensuring their healthy development.",
  //     img: "https://themewagon.github.io/MediCio/assets/img/departments-4.jpg",
  //   },
  //   {
  //     name: "Ophthalmologists",
  //     description:
  //       "Ophthalmologists specialize in medical and surgical care for eye conditions including vision correction, eye diseases, and injuries.",
  //     img: "https://themewagon.github.io/MediCio/assets/img/departments-5.jpg",
  //   },
  // ];

  // const galleryImages = [
  //   "https://c4.wallpaperflare.com/wallpaper/978/657/202/medicine-hospital-wallpaper-preview.jpg",
  //   "https://images.unsplash.com/photo-1512678080530-7760d81faba6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
  //   "https://media.gettyimages.com/id/1632593384/video/hospital-bed-senior-patient-and-nurse-talk-with-night-check-and-healthcare-monitor-in-icu.jpg?s=640x640&k=20&c=lcRHHqtbceERY3WCLytuYotxIFUO0pnmDb2iaNuUefE=",
  //   "https://t3.ftcdn.net/jpg/02/40/12/90/360_F_240129027_9CzFqJCSp7teZIOcnotj1igTBSJDwhjw.jpg",
  //   "https://c0.wallpaperflare.com/preview/988/68/836/patient-nurse-human-activity.jpg",
  // ];

  // const doctors = [
  //   {
  //     name: "Walter White",
  //     title: "Chief Medical Officer",
  //     img: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?semt=ais_hybrid&w=740",
  //   },
  //   {
  //     name: "Sarah Jhonson",
  //     title: "Anesthesiologist",
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  //   },
  //   {
  //     name: "William Anderson",
  //     title: "Cardiology",
  //     img: "https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg",
  //   },
  //   {
  //     name: "Amanda Jepson",
  //     title: "Neurosurgeon",
  //     img: "https://t3.ftcdn.net/jpg/03/05/69/00/360_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg",
  //   },
  // ];

  // const [activeDept, setActiveDept] = useState(departments[0]);
  // const [currentGalleryImageIndex, setCurrentGalleryImageIndex] = useState(0); // State for gallery slider

  // // Effect for automatic gallery image transitions
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentGalleryImageIndex((prevIndex) =>
  //       (prevIndex + 1) % galleryImages.length
  //     );
  //   }, 4000); // Change image every 4 seconds

  //   return () => clearInterval(interval);
  // }, [galleryImages.length]);

  // // Framer Motion variants for staggered animations
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  // const departmentItemVariants = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0 },
  //   hover: { scale: 1.05, color: '#16A34A' }, // Darker green on hover
  //   tap: { scale: 0.95 },
  // };

  // const contentVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  // };

  // const imageVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  // };


  return (
    <div className="text-gray-800 w-full overflow-x-hidden">
     <CaseRecordForm/>
      {/* Updated Departments Section with Flexbox */}
    </div>
  );
};

export default MakeAppointment;
