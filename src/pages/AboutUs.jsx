import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook
import myImage from "../assets/About-limitedtimeImage.jpg";
import doctorImage from "../assets/woman-sitting.jpg";
import bottlesImage from "../assets/About-medicineimage.jpg";
import bgImage from "../assets/Abtbgimage.jpg";
import heroBg from "../assets/servicesfontpagedn.jpg";

export default function AboutUs() {
  const [isMarathi, setIsMarathi] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleLanguageToggle = () => setIsMarathi(!isMarathi);

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      {/* Language Toggle Button (Optional) */}
      <button
        onClick={handleLanguageToggle}
        className="fixed bottom-4 left-4 z-50 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
      >
        🌐 {isMarathi ? "English" : "मराठी"}
      </button>

      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] md:h-[75vh] lg:h-[65vh] bg-cover bg-center flex items-center justify-center text-white"
style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up max-w-4xl pt-20">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Restoring health naturally with trusted homeopathy care tailored just for you.
          </p>
        </div>
      </section>

      {/* Clinic Introduction */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16 mt-16 px-4 md:px-[50px]">
        <div className="w-full h-full">
          <img
            src={myImage}
            alt="Clinic Introduction"
            className="w-full h-full object-cover shadow-xl"
          />
        </div>

        <div className="text-gray-800 md:pr-[50px]">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            {isMarathi ? "डॉ. कोळे होमिओपॅथी क्लिनिक" : "Dr. Kolhe Homeopathy Clinic"}
          </h1>
          <h3 className="text-xl font-semibold mb-4">
            {isMarathi ? "नाशिकमधील प्रीमियम आरोग्य सेवा" : "Premier Healthcare Excellence in Nashik"}
          </h3>
          <p className="mb-4">
            {isMarathi
              ? "सर्व वयोगटातील रुग्णांसाठी आधुनिक वैद्यकीय मानकांसह पारंपरिक होमिओपॅथी उपचारांची सेवा."
              : "Providing traditional homeopathic treatment with modern medical standards for patients of all age groups."}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {isMarathi ? (
              <>
                <li>रुग्णासाठी वैयक्तिकृत उपचार दृष्टिकोन.</li>
                <li>नैसर्गिक रोगप्रतिकारक शक्ती वाढवणारे औषधनिर्माण.</li>
                <li>रुग्ण प्रतिसादांवर आधारित सातत्यपूर्ण उपचार पद्धती.</li>
                <li>उच्च मानकांची फीडबॅक प्रणाली आणि दस्तऐवजीकरण.</li>
              </>
            ) : (
              <>
                <li>Personalized treatments tailored to the patient.</li>
                <li>Natural remedies that boost immunity.</li>
                <li>Consistent care based on patient feedback.</li>
                <li>High-standard documentation and reporting.</li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-green-900 text-white py-16 px-6 md:px-20 rounded-xl mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={bottlesImage} alt="Homeopathy Bottles" className="rounded-2xl shadow-xl" />
          <div>
            <p className="text-green-300 uppercase tracking-widest mb-2 font-medium">
              {isMarathi ? "हे कसे कार्य करते" : "How it works"}
            </p>
            <h3 className="text-3xl font-bold mb-4 leading-tight">
              {isMarathi ? "संपूर्ण उपचार दृष्टिकोन" : "A holistic approach to healing"}
            </h3>
            <p className="text-gray-200 mb-6">
              {isMarathi
                ? "क्लासिकल होमिओपॅथी औषधांची शंभर वर्षांची परंपरा जपणारी खास शेल्फ."
                : "A curated shelf of classical remedies representing over a century of healing wisdom."}
            </p>

            {/* ✅ Redirect on Button Click */}
            <button
              onClick={() => navigate("/make-appointment")}
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-full transition"
            >
              {isMarathi ? "अपॉइंटमेंट बुक करा" : "Book Appointment"}
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-[#fdf9eb] text-[#004d40] py-20 px-6 rounded-xl mb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          {/* Left Block */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold pl-[50px] leading-snug">
              {isMarathi ? (
                <>
                  प्रीमियम <br /> नैसर्गिक आणि <br /> समग्र उपचार
                </>
              ) : (
                <>
                  Premium <br /> Natural & <br /> Holistic Treatment
                </>
              )}
            </h2>

            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">❤</span>
              <div className="pl-2">
                <h4 className="font-semibold">
                  {isMarathi ? "प्रमुख आरोग्य सेवा संस्था" : "Leading Healthcare Institution"}
                </h4>
                <p className="text-gray-700 text-sm">
                  {isMarathi
                    ? "नाशिकमधील प्रीमियम होमिओपॅथी केंद्र जे पारंपरिक उपचार व आधुनिक मानक एकत्र आणते."
                    : "Nashik’s trusted center combining traditional healing with modern care."}
                </p>
              </div>
            </div>
          </div>

          {/* Middle Image */}
          <div className="rounded-full overflow-hidden shadow-xl w-72 h-[480px] mx-auto">
            <img src={doctorImage} alt="Doctor" className="object-cover w-full h-full" />
          </div>

          {/* Right Block */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🔬</span>
              <div>
                <h4 className="font-semibold mb-1">
                  {isMarathi ? "शास्त्रीय उपचार व रोगप्रतिकार शक्ती" : "Scientific Immunity-Based Treatment"}
                </h4>
                <p className="text-gray-700 text-sm">
                  {isMarathi
                    ? "संशोधनावर आधारित औषधे व नैसर्गिक उपचार."
                    : "Backed by research and designed to boost natural defenses."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">📋</span>
              <div>
                <h4 className="font-semibold mb-1">
                  {isMarathi ? "विस्तृत दस्तऐवजीकरण" : "Complete Documentation"}
                </h4>
                <p className="text-gray-700 text-sm">
                  {isMarathi
                    ? "रुग्णांचे रेकॉर्ड आणि फीडबॅकद्वारे अचूक सेवा."
                    : "Transparent care with proper records and feedback systems."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="mt-16 px-4">
        <h3 className="text-3xl font-bold mb-10 text-center text-green-700">
          {isMarathi ? "आमचा प्रवास" : "Our Journey"}
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[
            { year: "2010", text: isMarathi ? "क्लिनिकची स्थापना" : "Clinic founded in Nashik" },
            { year: "2015", text: isMarathi ? "५०००+ यशस्वी रुग्ण" : "Treated 5000+ patients successfully" },
            { year: "2022", text: isMarathi ? "डिजिटल सल्ला सुरू" : "Introduced digital homeopathy consultation" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdf9eb] rounded-xl shadow-md p-6 w-full md:w-1/3 text-center transition-transform hover:scale-105 hover:shadow-xl"
            >
              <h4 className="text-xl font-bold text-[#004d40] mb-2">{item.year}</h4>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Banner Section */}
      <div
        className="bg-cover bg-center bg-no-repeat py-16 px-6 mt-10 rounded-xl"
style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto text-center bg-white/80 p-10 rounded-xl">
          <p className="uppercase font-semibold tracking-widest text-green-700">
            {isMarathi ? "विशेष सेवा" : "Exclusive Services"}
          </p>
          <h2 className="text-4xl text-green-800 mb-6">
            {isMarathi
              ? "नैतिकदृष्ट्या निवडलेले प्रीमियम घटक"
              : "Ethically sourced premium ingredients"}
          </h2>

          <div className="flex justify-center gap-6 text-lg font-medium text-gray-700 mb-6">
            {["Immunity", "Vitality", "Strength"].map((item, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <span className="text-green-600 text-xl">✔</span>
                {isMarathi ? ["इम्युनिटी", "उत्साहीपणा", "शक्ती"][idx] : item}
              </div>
            ))}
          </div>

          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            {isMarathi
              ? "तुमच्या गरजा लक्षात घेऊन निवडलेली उपचारपद्धती जी तुमच्या शरीर, मन आणि भावनांवर प्रभाव टाकते."
              : "A thoughtfully designed care system tailored to your physical, mental, and emotional well-being."}
          </p>
        </div>
      </div>
    </div>
  );
}