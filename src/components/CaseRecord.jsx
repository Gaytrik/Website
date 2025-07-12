import React, { useState } from 'react';
import doctorBg from '../assets/make it appointment.jpg';
import { Star } from 'lucide-react';
import axios from 'axios';


const content = {
  en: {
    hero: {
      title: "You are now\none step closer\nto healing",
      description:
        "Experience natural healing with personalized homeopathic care tailored to your needs.\nWe focus on treating the root cause, not just symptoms, ensuring long-lasting wellness.\nTrusted by thousands for safe, gentle, and effective holistic treatment.",
      buttonText: "Book Appointment",
    },
    form: {
      heading: "Let’s connect",
      name: "Your name",
      phone: "Mobile Number",
      email: "Email",
      dob: "Date of Birth",
      sex: "Sex",
      maritalStatus: "Marital Status",
      education: "Education",
      message: "Message",
      submit: "Send Message",
      options: {
        male: "Male",
        female: "Female",
        other: "Other",
        married: "Married",
        unmarried: "Unmarried",
        choose: "Choose option",
      },
    },
    langBtn: "मराठीत पाहा",
  },

  mr: {
    hero: {
      title: "आपण आता\nबरे होण्याच्या\nएक पाऊल जवळ आहात",
      description:
        "आपल्या गरजेनुसार सानुकूल होमिओपॅथिक उपचारांसह नैसर्गिक बरेपणाचा अनुभव घ्या.\nआम्ही केवळ लक्षणे नाही तर मूळ कारणावर उपचार करतो, दीर्घकालीन आरोग्यासाठी.\nहजारो रुग्णांचा विश्वास असलेला, सुरक्षित व सौम्य उपचारांचा अनुभव घ्या.",
      buttonText: "अपॉइंटमेंट बुक करा",
    },
    form: {
      heading: "आपल्याशी संपर्क साधा",
      name: "तुमचे नाव",
      phone: "मोबाईल नंबर",
      email: "ईमेल",
      dob: "जन्मतारीख",
      sex: "लिंग",
      maritalStatus: "वैवाहिक स्थिती",
      education: "शिक्षण",
      message: "संदेश",
      submit: "संदेश पाठवा",
      options: {
        male: "पुरुष",
        female: "महिला",
        other: "इतर",
        married: "विवाहित",
        unmarried: "अविवाहित",
        choose: "पर्याय निवडा",
      },
    },
    langBtn: "View in English",
  },
};
const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white text-green-600 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 font-semibold"
    >
      <span className="text-lg">🌐</span>
      {language === 'en' ? 'मराठी' : 'English'}
    </button>
  );
};

const AppointmentSection = () => {
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    sex: '',
    education: '',
    maritalStatus: '',
    phone: '',
    email: '',
    countryCode: '+91',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const t = content[language];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/form', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        dob: '',
        sex: '',
        maritalStatus: '',
        education: '',
        phone: '',
        email: '',
        countryCode: '+91',
        message: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Something went wrong while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f0f7ff]">
      {/* Hero Section */}
      <section className="bg-[#dff0ff] py-28 relative min-h-[90vh] flex items-center">
        <button
          onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
          className="absolute top-6 right-6 bg-[#1e4e4e] text-white px-4 py-2 rounded-full text-sm hover:bg-[#163f3f] transition"
        >
          {t.langBtn}
        </button>
      
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-12 gap-12">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1e2a38] leading-tight whitespace-pre-line">
              {t.hero.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {t.hero.description}
            </p>
            <button className="bg-[#1e4e4e] text-white text-base font-semibold px-8 py-4 rounded-full shadow-md hover:bg-[#163f3f] transition duration-300">
              {t.hero.buttonText}
            </button>
          </div>

          {/* Right: Image with Badge */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <div className="absolute -top-4 -left-4 z-10 bg-green-500 text-white text-center rounded-full w-[140px] h-[140px] flex flex-col items-center justify-center shadow-lg">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="white" stroke="white" />
                ))}
              </div>
              <div className="font-bold text-lg">4.5 / 5.0</div>
              <div className="text-sm leading-tight font-medium">
                from over 1500 <br /> reviews
              </div>
            </div>
            <img
              src={doctorBg}
              alt="Healing Section"
              className="w-[320px] md:w-[400px] lg:w-[480px] rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#f9f6ea] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Doctor Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={doctorBg}
              alt="Doctor"
              className="h-[580px] w-full max-w-[650px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#164a3d] mb-6 text-center">{t.form.heading}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">{t.form.name} *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t.form.phone} *</label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleChange('countryCode', e.target.value)}
                      className="w-1/3 border border-gray-300 p-3 rounded-md"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="Phone number"
                      className="w-2/3 border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">{t.form.email} *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t.form.dob} *</label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">{t.form.sex} *</label>
                  <select
                    required
                    value={formData.sex}
                    onChange={(e) => handleChange('sex', e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                  >
                    <option value="">{t.form.options.choose}</option>
                    <option value="Male">{t.form.options.male}</option>
                    <option value="Female">{t.form.options.female}</option>
                    <option value="Other">{t.form.options.other}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t.form.maritalStatus} *</label>
                  <select
                    required
                    value={formData.maritalStatus}
                    onChange={(e) => handleChange('maritalStatus', e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                  >
                    <option value="">{t.form.options.choose}</option>
                    <option value="Married">{t.form.options.married}</option>
                    <option value="Unmarried">{t.form.options.unmarried}</option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-sm font-medium mb-1">{t.form.education} *</label>
                <input
                  type="text"
                  required
                  value={formData.education}
                  onChange={(e) => handleChange('education', e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">{t.form.message}</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#164a3d]"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#164a3d] hover:bg-[#123c30] text-white font-semibold py-3 px-8 rounded-full transition"
                >
                  {loading ? 'Submitting...' : t.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AppointmentSection;