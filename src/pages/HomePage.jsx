import React, { useState, createContext, useContext ,usena} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Language Context
const LanguageContext = createContext();

// Language data
const translations = {
  en: {
    // Header
    healing: "Healing",
    with: "with",
    nature: "nature",
    bookCall: "Book a free call here",
    subtitle: "Homeopathy & Alternative Medicine Clinic",

    // About Us Summary
    aboutTitle: "About Dr. Kolhe Homeopathic Center",
    aboutSubtitle: "Premier Healthcare Excellence in Nashik",
    knowMoreButton: "Know More",
    aboutCards: [
      {
        icon: "🏥",
        title: "Leading Healthcare Institution",
        description: "Dr. Kolhe Homeopathic Center stands as Nashik's premier healthcare destination, recognized for delivering exceptional homeopathic treatment with a commitment to excellence. Our center combines traditional homeopathic wisdom with modern healthcare standards."
      },
      {
        icon: "🔬",
        title: "Evidence-Based Treatment & Immunity Solutions",
        description: "We pride ourselves on practicing evidence-based homeopathy, ensuring every treatment protocol is backed by scientific research. Our specialized immunity-boosting medicines strengthen your body's natural defense mechanisms."
      },
      {
        icon: "📋",
        title: "Comprehensive Patient Care & Documentation",
        description: "We maintain meticulous patient records and feedback systems to ensure continuity of care. Every patient interaction and treatment response is carefully documented and analyzed for personalized healthcare solutions."
      }
    ],

    // Info Cards / Our Approach
    approachTitle: "Our Approach",
    approachSubtitle: "Discover the gentle power of natural healing through our comprehensive range of alternative medicine services.",
    infoCards: [
      {
        icon: "🌱",
        title: "Natural Healing",
        description: "Harness the power of nature with our carefully selected herbal remedies and holistic treatments."
      },
      {
        icon: "💊",
        title: "Homeopathy",
        description: "Personalized homeopathic treatments tailored to your unique constitution and health needs."
      },
      {
        icon: "🧘‍♀",
        title: "Mind-Body Balance",
        description: "Integrate mental, emotional, and physical wellness through our comprehensive approach."
      },
      {
        icon: "🌸",
        title: "Gentle Care",
        description: "Experience healing without harsh side effects through our gentle, natural treatment methods."
      }
    ],

    // Begin Healing Journey CTA
    journeyTitle: "Start Your Natural Wellness Journey with Dr. Kolhe",
    journeySubtitle: "Begin your path to health and balance through holistic, root-cause healing.",
    bookAppointment: "Book Appointment",
    beginNow: "Start Now",
    chatHomeopath: "Chat with Homeopath",
    buyMedicines: "Buy Medicines",
    buildKit: "Build Your Kit",

    // Services Section
    servicesTitle: "Comprehensive Homeopathic Treatments",
    servicesSubtitle: "Explore a wide range of chronic and acute conditions treated at our center.",
    servicesList: [
      { icon: "🫁", title: "Respiratory", desc: "Asthma, allergies, sinusitis" },
      { icon: "🧠", title: "Neurological", desc: "Migraines, insomnia, stress" },
      { icon: "🦴", title: "Musculoskeletal", desc: "Arthritis, joint pain" },
      { icon: "🩺", title: "General Health", desc: "Chronic fatigue, immunity" }
    ],

    // Telehealth
    telehealthTitle: "Are you unable to visit? Book a telehealth consultation.",
    telehealthDesc: "We offer secure, professional remote consultations to help you heal from the comfort of your home.",
    bookFreeCall: "Free Call",

    // Call to Action
    ctaTitle: "In an emergency? Need help now?",
    ctaSubtitle: "Our experienced practitioners are here to help you on your journey to natural wellness. Book your consultation today and discover the healing power of nature.",
    ctaButton: "Make an Appointment"
  },

  mr: {
    // Header
    healing: "निरोग",
    with: "करणे",
    nature: "निसर्गाने",
    bookCall: "मोफत कॉल बुक करा",
    subtitle: "होमिओपॅथी आणि पर्यायी वैद्यकीय क्लिनिक",

    // About Us Summary
    aboutTitle: "डॉ. कोल्हे होमिओपॅथिक सेंटर बद्दल",
    aboutSubtitle: "नाशिकमधील प्रमुख आरोग्य सेवा उत्कृष्टता",
    knowMoreButton: "अधिक जाणून घ्या",
    aboutCards: [
      {
        icon: "🏥",
        title: "अग्रणी आरोग्य सेवा संस्था",
        description: "डॉ. कोल्हे होमिओपॅथिक सेंटर नाशिकचे प्रमुख आरोग्य सेवा केंद्र म्हणून ओळखले जाते, जे उत्कृष्टतेच्या वचनबद्धतेसह अपवादात्मक होमिओपॅथिक उपचार प्रदान करते. आमचे केंद्र पारंपारिक होमिओपॅथिक शहाणपणाला आधुनिक आरोग्य सेवा मानकांसह एकत्र करते."
      },
      {
        icon: "🔬",
        title: "पुरावा-आधारित उपचार आणि रोगप्रतिकारक शक्ती समाधान",
        description: "आम्ही पुरावा-आधारित होमिओपॅथीचा सराव करण्यात अभिमान बाळगतो, प्रत्येक उपचार पद्धती वैज्ञानिक संशोधन आणि सिद्ध पद्धतींनी समर्थित आहे याची खात्री करतो. आमची विशेष रोगप्रतिकारक शक्ती वाढवणारी औषधे आपल्या शरीराच्या नैसर्गिक संरक्षण यंत्रणा मजबूत करतात."
      },
      {
        icon: "📋",
        title: "सर्वसमावेशक रुग्ण सेवा आणि दस्तऐवजीकरण",
        description: "आम्ही काळजी आणि उपचार प्रभावीतेची सातत्य सुनिश्चित करण्यासाठी सावधगिरीने रुग्ण नोंदी आणि फीडबॅक प्रणाली राखतो. प्रत्येक रुग्ण संपर्क, उपचार प्रतिसाद आणि फीडबॅक काळजीपूर्वक दस्तऐवजीकरण आणि विश्लेषण केले जाते."
      }
    ],

    // Info Cards / Our Approach
    approachTitle: "आमचा दृष्टिकोन",
    approachSubtitle: "आमच्या पर्यायी वैद्यकीय सेवांच्या सर्वसमावेशक श्रेणीद्वारे नैसर्गिक उपचारांची सौम्य शक्ती शोधा.",
    infoCards: [
      {
        icon: "🌱",
        title: "नैसर्गिक उपचार",
        description: "आमच्या काळजीपूर्वक निवडलेल्या हर्बल उपचार आणि समग्र उपचारांसह निसर्गाची शक्ती वापरा."
      },
      {
        icon: "💊",
        title: "होमिओपॅथी",
        description: "आपल्या अद्वितीय संविधान आणि आरोग्य गरजांनुसार वैयक्तिकृत होमिओपॅथिक उपचार."
      },
      {
        icon: "🧘‍♀",
        title: "मन-शरीर संतुलन",
        description: "आमच्या सर्वसमावेशक दृष्टिकोनाद्वारे मानसिक, भावनिक आणि शारीरिक कल्याण एकत्रित करा."
      },
      {
        icon: "🌸",
        title: "सौम्य काळजी",
        description: "आमच्या सौम्य, नैसर्गिक उपचार पद्धतींद्वारे कठोर साइड इफेक्ट्सशिवाय उपचार अनुभवा."
      }
    ],

    // Begin Healing Journey CTA
    journeyTitle: "डॉ. कोल्हे यांच्यासह नैसर्गिक आरोग्य प्रवास सुरू करा",
    journeySubtitle: "मूल कारणांवर उपचार करून आरोग्य व समतोल मिळवा.",
    bookAppointment: "अपॉइंटमेंट बुक करा",
    beginNow: "सुरू करा",
    chatHomeopath: "होमिओपॅथशी चॅट करा",
    buyMedicines: "औषधे खरेदी करा",
    buildKit: "आपला किट तयार करा",

    // Services Section
    servicesTitle: "व्यापक होमिओपॅथिक उपचार",
    servicesSubtitle: "आमच्या क्लिनिकमध्ये विविध तीव्र व दीर्घकालीन आजारांवर उपचार केले जातात.",
    servicesList: [
      { icon: "🫁", title: "श्वसन", desc: "दमा, ॲलर्जी, सायनस" },
      { icon: "🧠", title: "मेंदूचे विकार", desc: "मायग्रेन, झोपेचा त्रास, तणाव" },
      { icon: "🦴", title: "सांधेदुखी", desc: "आर्थरायटिस, सांधेदुखी" },
      { icon: "🩺", title: "सामान्य आरोग्य", desc: "थकवा, रोगप्रतिकारक शक्ती वाढवा" }
    ],

    // Telehealth
    telehealthTitle: "येऊ शकत नाही? टेलिहेल्थ सल्ला बुक करा.",
    telehealthDesc: "आपल्या घरी राहून सुरक्षित आणि व्यावसायिक ऑनलाइन सल्ला घ्या.",
    bookFreeCall: "मोफत कॉल",

    // Call to Action
    ctaTitle: "आणीबाणीत? आत्ताच मदत हवी?",
    ctaSubtitle: "आमचे अनुभवी चिकित्सक आपल्या नैसर्गिक कल्याणाच्या प्रवासात मदत करण्यासाठी येथे आहेत. आज आपली सल्लामसलत बुक करा आणि निसर्गाची उपचार शक्ती शोधा.",
    ctaButton: "अपॉइंटमेंट घ्या"
  }
};



// Language Provider Component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'mr' : 'en'));
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
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
      className="fixed bottom-10 left-4 z-50 bg-white text-green-600 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 font-semibold"
    >
      <span className="text-lg">🌐</span>
      {language === 'en' ? 'मराठी' : 'English'}
    </button>
  );
};


// HealingSection Component
const HealingSection = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleBookCallClick = () => {
    navigate('/make-appointment');
  };  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="src/assets/Home-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-blue-50/70 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 py-50 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-6xl font-semibold text-green-900 animate-fade-in">{t.healing}</h1>
            <h2 className="text-3xl md:text-5xl font-medium text-green-700 animate-fade-in-delay">{t.with}</h2>
          </div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-semibold text-green-800 mb-10 animate-fade-in-up">{t.nature}</h2>
            <div className="relative inline-block">
              <div className="relative w-36 h-36 mx-auto mb-6 group cursor-pointer" onClick={handleBookCallClick} >
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 250 250">
                  <defs>
                    <path
                      id="circle-path"
                      d="M125,125 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                      fill="none"
                    />
                  </defs>
                  <text fontSize="14" fill="green" fontWeight="600">
                    <textPath href="#circle-path" startOffset="0%">
                      {t.bookCall} • {t.bookCall} • {t.bookCall} • {t.bookCall} • {t.bookCall}
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-transform group-hover:scale-110 transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-light text-green-800 drop-shadow-md animate-fade-in-delay-2">
            {t.subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
};


// About Us Summary Section
const AboutUsSummarySection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-green-800 mb-4">{t.aboutTitle}</h2>
          <p className="text-lg text-green-600 font-medium mb-8">{t.aboutSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.aboutCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4 text-center">{card.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">{card.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/about-us"
            className="inline-block bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-800 transition duration-300"
          >
            {t.knowMoreButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

// InfoCard Component
const InfoCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    <div className="text-4xl mb-4 text-center">{icon}</div>
    <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

const InfoCardsSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-green-800 mb-4">{t.approachTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.approachSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};


// Call to Action Section
const CallToActionSection = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          {t.ctaTitle}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 animate-fade-in-delay leading-relaxed">
          {t.ctaSubtitle}
        </p>
        <button className="inline-block bg-white text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 animate-zoom-in">
          {t.ctaButton}
        </button>
      </div>
    </section>
  );
};

// OnlineConsultationSection Component
import contactBg from '../assets/Contact-visitbgImage.jpg';
import servicesBg from '../assets/Services-blackandwhite.jpg';
import Float from '../components/FloatContacticon';


const BeginHealingJourneySection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-4xl mx-auto px-4 text-center ">
        <h2 className="text-4xl font-light text-green-800 mb-4">{t.journeyTitle}</h2>
        <p className="text-lg md:text-xl text-green-800 mb-10">{t.journeySubtitle}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <Link to="/make-appointment" className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 transition-all duration-300">{t.bookAppointment}</Link>
          <Link to="/about-us" className="bg-white text-green-700 border border-green-700 px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-50 transition-all duration-300">{t.beginNow}</Link>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-20" style={{ backgroundColor: '#F7F3E3' }}>
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-light text-green-800 mb-4 text-center">{t.servicesTitle}</h2>
    <p className="text-lg text-green-800 text-center mb-12">{t.servicesSubtitle}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {t.servicesList.map((service, idx) => (
        <div key={service.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <span className="text-4xl mb-3">{service.icon}</span>
          <h3 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h3>
          <p className="text-gray-700">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

const OnlineConsultationSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden bg-green-100">
      <img src={contactBg} alt="Telehealth Background" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
      <div className="relative z-10 max-w-4xl w-full mx-auto bg-green-900/90 rounded-3xl shadow-2xl px-8 py-12 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-light text-white mb-4">{t.telehealthTitle}</h2>
          <p className="text-lg mb-2 text-green-100">{t.telehealthDesc}</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-36 h-36" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="70" fill="#fff" />
              <text x="100" y="110" textAnchor="middle" fontSize="16" fill="#166534" fontWeight="bold">
                {t.bookFreeCall}
              </text>
            </svg>
            <Link
              to="/make-appointment"
              className="absolute inset-0 m-auto w-20 h-20 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-110 text-2xl font-bold"
              aria-label={t.bookFreeCall}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main HomePage Component
function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fade-in-delay {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes zoom-in {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          
          .animate-fade-in-delay {
            animation: fade-in-delay 1s ease-out 0.3s both;
          }
          
          .animate-fade-in-delay-2 {
            animation: fade-in 1s ease-out 0.6s both;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out 0.4s both;
          }
          
          .animate-zoom-in {
            animation: zoom-in 0.8s ease-out 0.8s both;
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
        
        <LanguageToggle />
        <HealingSection />
        <AboutUsSummarySection />
        <InfoCardsSection />
        <BeginHealingJourneySection />
        <ServicesSection />
        <OnlineConsultationSection />
        {/* contaus and whatapp icon components */}
                  <Float/>
      </div>
    </LanguageProvider>
  );
}

export default HomePage;