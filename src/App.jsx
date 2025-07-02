// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/footer';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import MakeAppointment from './pages/MakeAppointment';
import Department from './pages/Department';
import Service from './pages/Service';
import ContactPage from './pages/ContactPage';
import Doctors from './pages/Doctor';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/make-appointment" element={<MakeAppointment />} />
        <Route path="/department" element={<Department />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contactpage" element={<ContactPage/>} />
         <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
