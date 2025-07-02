// src/pages/Doctors.jsx
import React from 'react';

const Doctors = () => {
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
      img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8yOV9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9tYWxlX2luZGlhbl9kb2N0b3JfaF8xNjdkY2ExMi0zY2NlLTQ2NDItOTJkYy02M2U2NDA4ZDEwMjAucG5n.png",
    },
    {
      name: "Amanda Jepson",
      title: "Neurosurgeon",
      img: "https://t3.ftcdn.net/jpg/03/05/69/00/360_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4" id="doctors">
      <div className="w-full px-4 sm:px-10 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">Doctors</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow text-center hover:shadow-lg transition"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
