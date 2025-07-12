import React, { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import treatmentImage from "../assets/servicesImagefront.jpg";
import heroBg from "../assets/service-frontpic.jpeg";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import img1 from "../assets/service1.jpg";
import img2 from "../assets/service2.jpg";
import img3 from "../assets/service3.jpg";
import img4 from "../assets/service4.jpg";
import img5 from "../assets/service5.jpg";
import img6 from "../assets/service6.jpg";

// Language Context
const LanguageContext = createContext();

// Language data
const translations = {
  en: {
    // Hero Section
    heroTitle: "Our Services",
    heroSubtitle:
      "Comprehensive homeopathy treatment for a wide range of chronic and acute conditions.",

    // Treatment Section
    treatmentTitle: "Get your natural personalised treatment",
    treatmentFeatures: ["Natural Immunity", "Lasting Benefits"],
    treatmentDescription:
      "Experience the power of natural healing with personalized care, safe remedies, and long-term relief for chronic and acute health issues.",

    // Services Section
    servicesTitle: "Our Homeopathy Services",
    servicesSubtitle:
      "Comprehensive treatment for various health conditions using natural homeopathic remedies.",

    // Services Data
    imageServices: [
      {
        title: "Digestive Health",
        description: [
          "Acidity & Gas",
          "Irritable Bowel Syndrome (IBS)",
          "Piles & Constipation",
          "Liver Disorders",
        ],
        image: img1,
      },
      {
        title: "Skin Wellness",
        description: [
          "Psoriasis & Eczema",
          "Acne & Pimples",
          "Fungal Infections",
          "Allergic Skin Reactions",
        ],
        image: img2,
      },
      {
        title: "Respiratory Care",
        description: [
          "Asthma & Bronchitis",
          "Chronic Cough",
          "Allergic Rhinitis",
          "Sinusitis & Sneezing",
        ],
        image: img3,
      },
      {
        title: "Hormonal Balance",
        description: [
          "Thyroid Disorders",
          "PCOS/PCOD",
          "Menstrual Irregularities",
          "Infertility & Libido Issues",
        ],
        image: img4,
      },
      {
        title: "Neurological Conditions",
        description: [
          "Anxiety and depression",
          "Migraine and headaches",
          "Sleep disorders",
          "Stress-related conditions",
        ],
        image: img5,
      },
      {
        title: "Immune System Support",
        description: [
          "HIV management and support",
          "Autoimmune conditions",
          "Chronic fatigue syndrome",
          "Recurrent infections",
        ],
        image: img6,
      },
    ],

    // CTA Section
    ctaBeginText: "Begin now",
    ctaTitle: "Start using integrative medicine to help you heal and thrive",

    // Action Cards
    actionCards: [
      { title: "Instant Telehealth appointment", bg: "bg-white", link: "/make-appointment" },
      { title: "Chat with a homeopath online", bg: "bg-cream", link: "/contactpage" },
      { title: "Buy homeopathic medicine", bg: "bg-cream",  link: "/make-appointment"},
      { title: "Your personal homeopathic kit", bg: "bg-cream", link: "/contactpage" },
    ],
  },

  mr: {
    // Hero Section
    heroTitle: "आमच्या सेवा",
    heroSubtitle:
      "तीव्र आणि दीर्घकालीन आजारांसाठी सर्वसमावेशक होमिओपॅथी उपचार.",

    // Treatment Section
    treatmentTitle: "आपले नैसर्गिक वैयक्तिक उपचार मिळवा",
    treatmentFeatures: ["नैसर्गिक रोगप्रतिकारक शक्ती", "चिरस्थायी फायदे"],
    treatmentDescription:
      "वैयक्तिक काळजी, सुरक्षित उपचार आणि तीव्र व दीर्घकालीन आरोग्य समस्यांसाठी दीर्घकालीन आराम यासह नैसर्गिक उपचारांची शक्ती अनुभवा.",

    // Services Section
    servicesTitle: "आमच्या होमिओपॅथी सेवा",
    servicesSubtitle:
      "नैसर्गिक होमिओपॅथिक उपचारांचा वापर करून विविध आरोग्य स्थितींसाठी सर्वसमावेशक उपचार.",

    // Services Data
    imageServices: [
      {
        title: "पाचन आरोग्य",
        description: [
          "आम्लता आणि वायू",
          "चिडचिड आतड्यांचा सिंड्रोम (IBS)",
          "बवासीर आणि बद्धकोष्ठता",
          "यकृत विकार",
        ],
        image: img1,
      },
      {
        title: "त्वचा आरोग्य",
        description: [
          "सोरायसिस आणि एक्जिमा",
          "मुंहासे आणि फोड",
          "बुरशीजन्य संक्रमण",
          "एलर्जी त्वचा प्रतिक्रिया",
        ],
        image: img2,
      },
      {
        title: "श्वसन काळजी",
        description: [
          "दमा आणि ब्रॉन्कायटिस",
          "जुनाट खोकला",
          "एलर्जिक राइनाइटिस",
          "सायनस आणि शिंका",
        ],
        image: img3,
      },
      {
        title: "हार्मोनल संतुलन",
        description: [
          "थायरॉइड विकार",
          "PCOS/PCOD",
          "मासिक पाळीची अनियमितता",
          "वंध्यत्व आणि कामवासना समस्या",
        ],
        image: img4,
      },
      {
        title: "न्यूरोलॉजिकल स्थिती",
        description: [
          "चिंता आणि नैराश्य",
          "मायग्रेन आणि डोकेदुखी",
          "झोपेचे विकार",
          "तणाव-संबंधित स्थिती",
        ],
        image: img5,
      },
      {
        title: "रोगप्रतिकारक प्रणाली समर्थन",
        description: [
          "HIV व्यवस्थापन आणि समर्थन",
          "स्वयंप्रतिकारक स्थिती",
          "दीर्घकालीन थकवा सिंड्रोम",
          "वारंवार संक्रमण",
        ],
        image: img6,
      },
    ],

    // CTA Section
    ctaBeginText: "आत्ता सुरू करा",
    ctaTitle:
      "आपल्याला बरे करण्यासाठी आणि भरभराट करण्यासाठी एकत्रित औषध वापरणे सुरू करा",
    ctaDescription:
      "आपली सल्लामसलत बुक करा आणि वैयक्तिक होमिओपॅथी काळजीसह नैसर्गिक उपचारांच्या आपल्या प्रवासाची सुरुवात करा.",

    // Action Cards
    actionCards: [
  { title: "Instant Telehealth appointment", bg: "bg-white", link: "/make-appointment" },
  { title: "Chat with a homeopath online", bg: "bg-cream", link: "/contactpage" },
  { title: "Buy homeopathic medicine", bg: "bg-cream", link: "/make-appointment" },
  { title: "Your personal homeopathic kit", bg: "bg-cream", link: "/contactpage" },
],
  },
};

// Language Provider Component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Language Toggle Component
const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white text-green-600 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 font-semibold"
    >
      <span className="text-lg">🌐</span>
      {language === "en" ? "मराठी" : "English"}
    </button>
  );
};

// Hero Section Component

const HeroSection = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section
      className="relative w-full h-[90vh] sm:h-[80vh] md:h-[75vh] lg:h-[65vh] bg-cover bg-center flex items-center justify-center text-white"
style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up max-w-4xl pt-20">
        <h1 className="text-5xl font-bold mb-4">{t.heroTitle}</h1>
        <p className="text-lg max-w-2xl mx-auto">{t.heroSubtitle}</p>
      </div>
    </section>
  );
};

// Treatment Section Component
const TreatmentSection = () => {
  const { t } = useContext(LanguageContext);
  

  return (
    <section className="py-10 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex justify-center">
  <div className="w-full max-w-[320px] sm:max-w-[340px] aspect-[3/4] rounded-[160px] overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
    <img
      src={treatmentImage}
      alt="Natural treatment"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          <div className="md:w-1/2 text-green-900 md:pl-10 space-y-7">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-wide animate-fade-in-up">
              {t.treatmentTitle}
            </h2>

            {/* Feature List with Icons */}
            <ul className="space-y-3 animate-fade-in-delay">
              {t.treatmentFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-green-700 text-[16px] leading-relaxed"
                >
                  <svg
                    className="w-5 h-5 text-green-600 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Extra Informational Block */}
            <p className="text-green-800 text-[15.5px] leading-relaxed bg-green-50 p-4 rounded-lg shadow-sm animate-fade-in-delay-2">
              Homeopathy is a holistic system of medicine that works by
              stimulating the body's natural healing abilities. With no side
              effects, it's safe for people of all ages — from infants to the
              elderly. Our treatments are tailored to each individual,
              addressing not just symptoms but root causes.
            </p>

            {/* Main Description */}
            <p className="text-gray-700 text-[15.5px] leading-relaxed animate-fade-in-delay-3">
              {t.treatmentDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
// Services Section Component - Updated with green background
const ServicesSection = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section
      className="py-20 "
      style={{ backgroundColor: "rgb(247, 243, 227)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-green-800 mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.imageServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="h-48 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 bg-green-50 rounded-lg shadow-inner transition-transform duration-300 hover:bg-green-100 hover:shadow-md">
  {/* Title */}
  <h3 className="text-2xl font-semibold text-green-900 mb-4 border-b border-green-200 pb-2">
    {service.title}
  </h3>

  {/* Description List */}
  <ul className="space-y-3 mt-4">
    {service.description.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed text-sm sm:text-base">
        {/* Custom bullet icon (or use FontAwesome if installed) */}
        <svg
          className="w-4 h-4 mt-1 text-green-600 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <section className=" py-20 text-black bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start mb-12">
          <div className="lg:col-span-2 space-y-6">
  {/* CTA Beginning Text */}
  <p className="uppercase tracking-wide text-lg font-semibold text-green-700 animate-fade-in">
    {/* ✅ Increased from text-sm to text-lg, and font-medium to font-semibold */}
    {t.ctaBeginText}
  </p>

  {/* CTA Main Title */}
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight animate-fade-in-delay">
    {t.ctaTitle}
  </h2>
</div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.actionCards.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(item.link)} // 👈 Redirect on click
              className={`${
                item.bg === "bg-white" ? "bg-white" : "bg-green-50"
              } rounded-lg p-6 shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[180px] cursor-pointer`}
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                <ArrowUpRight size={16} />
              </div>
              <p className="text-green-800 font-medium mt-10 text-lg leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Services Component
export default function ServicesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-delay {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-delay-2 {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .animate-fade-in-delay {
            animation: fade-in-delay 1s ease-out 0.3s both;
          }

          .animate-fade-in-delay-2 {
            animation: fade-in-delay-2 1s ease-out 0.6s both;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out 0.4s both;
          }
        `}</style>

        <LanguageToggle />
        <HeroSection />
        <TreatmentSection />
        <ServicesSection />
        <CTASection />
      </div>
    </LanguageProvider>
  );
}