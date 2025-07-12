import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import MakeAppointment from './pages/MakeAppointment';
import Service from './pages/Service';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage'; 
import LoginPage from './pages/Loginpage';
import TaskManagerPage from './pages/TaskManagerPage';
import CareerPage from './pages/Career';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/make-appointment" element={<MakeAppointment />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/events" element={<EventPage />} /> 
        <Route path="/login" element={<LoginPage />} /> {/* Login route */}
        <Route path="/task-manager" element={<TaskManagerPage />} />
        <Route path="/career" element={<CareerPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;