import React, { useState } from "react";
import { motion } from "framer-motion";
import carr from "../assets/carrer1.jpg";
import Doctorform from "../assets/contactformImage.jpg";

// Language Translations
const translations = {
  en: {
    heroTitle: "Build Your Future with Homeopathy",
    heroSubtitle: "Step into the future of medicine with a healing path that respects nature.",
    whyChoose: "Why Choose Homeopathy?",
    benefits: [
      {
        title: "Holistic Healing",
        desc: "Join a field that treats the body, mind, and spirit with a personalized approach.",
      },
      {
        title: "Growing Demand",
        desc: "More people are choosing natural and side-effect-free alternatives.",
      },
      {
        title: "Respected Profession",
        desc: "Contribute meaningfully to society with ethical and time-tested medicine.",
      },
    ],
    formTitle: "Apply Now",
    formSubtitle: "Fill in your details and start your journey with us.",
    name: "Full Name",
    email: "Email",
    phone: "Phone Number",
    linkedin: "LinkedIn URL",
    portfolio: "Portfolio/Website",
    resumeLabel: "Upload Resume",
    resumeNote: "Only PDF, DOC, or DOCX files are allowed.",
    coverLetter: "Cover Letter (optional)",
    submit: "Submit Application",
    toggleButton: "मराठी",
  },
  mr: {
    heroTitle: "होमिओपॅथीमध्ये तुमचं भविष्य घडवा",
    heroSubtitle: "एक नैसर्गिक आणि उपचारक्षम वैद्यकीय मार्ग स्वीकारा.",
    whyChoose: "होमिओपॅथी का निवडावी?",
    benefits: [
      {
        title: "समग्र उपचार",
        desc: "शरीर, मन आणि आत्म्याच्या समतोलासाठी व्यक्तिगत उपचार.",
      },
      {
        title: "वाढती मागणी",
        desc: "नैसर्गिक आणि दुष्परिणामविरहित पर्यायांची पसंती वाढते आहे.",
      },
      {
        title: "आदरयुक्त व्यवसाय",
        desc: "प्रामाणिक आणि पारंपरिक औषध प्रणालीद्वारे समाजात योगदान द्या.",
      },
    ],
    formTitle: "आता अर्ज करा",
    formSubtitle: "तपशील भरा आणि आमच्याबरोबर तुमची वाटचाल सुरू करा.",
    name: "पूर्ण नाव",
    email: "ईमेल",
    phone: "फोन नंबर",
    linkedin: "LinkedIn लिंक",
    portfolio: "पोर्टफोलिओ / संकेतस्थळ",
    resumeLabel: "रेझ्युमे अपलोड करा",
    resumeNote: "फक्त PDF, DOC किंवा DOCX फाईल्सना अनुमती आहे.",
    coverLetter: "कव्हर लेटर (ऐच्छिक)",
    submit: "अर्ज सबमिट करा",
    toggleButton: "English",
  },
};

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    resume: null,
    coverLetter: "",
  });

  const [isMarathi, setIsMarathi] = useState(false);
  const lang = isMarathi ? translations.mr : translations.en;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(isMarathi ? "तुमचा अर्ज सबमिट झाला आहे!" : "Application submitted!");
  };

  return (
    <div className="bg-white text-gray-800 font-sans relative overflow-hidden">
      {/* Language Toggle Button */}
      <button
        onClick={() => setIsMarathi(!isMarathi)}
        className="fixed bottom-5 left-5 z-50 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-800 transition duration-300"
      >
        {lang.toggleButton}
      </button>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[90vh] sm:h-[80vh] md:h-[75vh] lg:h-[65vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${carr})` }}


      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{lang.heroTitle}</h1>
          <p className="text-lg max-w-2xl mx-auto">{lang.heroSubtitle}</p>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-6 max-w-6xl mx-auto "
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          {lang.whyChoose}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {lang.benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-[#fdf9eb] border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application Form Section */}
      <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" py-20 px-4 md:px-6 " style={{ backgroundColor: "rgb(247, 243, 227)" }}
      >
        <div className="max-w-6xl mx-auto  rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-green-200 transition duration-300" >
          {/* Image */}
          <div className="md:w-1/2 h-[300px] md:h-auto">
            <img
              src={Doctorform}
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 p-6 sm:p-10 space-y-6"
          >
            <h2 className="text-2xl font-bold text-green-700 text-center">{lang.formTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-4">{lang.formSubtitle}</p>

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={lang.name}
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder={lang.email}
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder={lang.phone}
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="linkedin"
                placeholder={lang.linkedin}
                value={formData.linkedin}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <input
                name="portfolio"
                placeholder={lang.portfolio}
                value={formData.portfolio}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {lang.resumeLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-green-400 focus:outline-none file:bg-green-700 file:text-white file:border-none file:px-4 file:py-2 file:rounded-md"
              />
              <p className="text-xs text-gray-500 mt-1">{lang.resumeNote}</p>
            </div>

            <textarea
              name="coverLetter"
              placeholder={lang.coverLetter}
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md font-semibold transition"
            >
              {lang.submit}
            </button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
}