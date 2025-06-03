import React, { useState ,useEffect} from 'react';
import './App.css';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import AppointmentForm from "./AppointmentForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Services from './Services';
import Exercises from './Exercises';
import AboutUs from './AboutUs';

function HomePage() {

//navigation
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactPosition = contactSection.getBoundingClientRect().top;
        setIsVisible(contactPosition > 0); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <div className="app bg-white">
      <div className="relative min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between pl-10 pt-10 bg-gradient-to-br from-teal-100 to-white overflow-hidden">
      {/* Floating Green Circle */}
      <div className="absolute bottom-8 right-1/4 w-16 h-16 bg-green-600 rounded-full opacity-30 animate-floating"></div>
      <div className="absolute top-10 right-35 w-16 h-16 bg-green-600 rounded-full opacity-30 animate-floating"></div>
      <div className="absolute top-50 right-7 w-16 h-16 bg-green-600 rounded-full opacity-50 animate-floating"></div>


      
      {/* Bouncing Black Circle */}
      <div className="absolute bottom-7 right-4 w-40 h-40 bg-black rounded-full opacity-20 animate-bouncing"></div>
      {/* Rotating Square */}
      <div className="absolute top-40 left-36 w-20 h-20 bg-teal-400 opacity-50 rotate-45 animate-rotating "></div>

      {/* Dotted Curved Shape */}
      <div className="absolute top-20 left-4/4 w-10 h-10 border-[3px] border-dotted border-teal-600 rounded-full opacity-50 animate-bouncing "></div>

      
      {/* Left Content */}
      <div className="md:w-1/2 z-20 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Healing Through <span className="text-teal-600">Movement</span>
        </h2>
        <p className="mt-6 text-gray-700 text-lg max-w-md">
          Experience expert physiotherapy treatments designed to help you regain mobility and live pain-free.
        </p>
        <Link to="/appointment">
            <button className="mt-6 bg-teal-600 text-white px-8 py-4 rounded-xl shadow-xl text-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
              Book an Appointment
            </button>
          </Link>

      </div>
      {/* Right Content */}
      <div className="md:w-1/2 flex justify-center items-center relative z-20">
        <img 
          src="/images/3.jpg" 
          alt="Physiotherapy Session" 
          className="w-[90%] md:w-[80%] max-w-lg rounded-3xl shadow-xl"
        />
      </div>  
      </div>
    </div>
      {/* Navigation */}
      <nav
      className={`navbar fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-teal-600 text-white transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="logo text-2xl font-bold">Khanvika Physiotherapy</div>
      <div className="nav-links flex space-x-4">
        <button onClick={() => handleNavigation("home")} className="nav-item">
          Home
        </button>
        <button onClick={() => handleNavigation("services")} className="nav-item">
          Services
        </button>
        <button onClick={() => handleNavigation("exercises")} className="nav-item">
          Exercises
        </button>
        <button onClick={() => handleNavigation("about")} className="nav-item">
          About Us
        </button>
        <button onClick={() => handleNavigation("contact")} className="nav-item">
          Contact
        </button>
      </div>
    </nav>

      

<section id="place" className="section bg-white p-8">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">
          World-Class Physiotherapy At Home, Clinic And Online
        </h1>
        <p className="text-lg text-gray-600">
          Choose What Works For You!
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[
          {
            icon: "📍",
            title: "Physiotherapy Near Me",
            description:
              "Go For Result-Oriented Physiotherapy At A Fully-Equipped Khanvika Physiotherapy Clinic Nearby In Your Own Locality.",
          },
          {
            icon: "🏠", 
            title: "Physiotherapy At Home",
            description:
              "Recover With Expert Physiotherapy At Home Conveniently With A Home Visit Physiotherapist.",
          },
          {
            icon: "💻", 
            title: "Online Physiotherapy",
            description:
              "See A Physio Online, So You Need Not Come To Clinic! Tele Physiotherapy Which Is Effective, Convenient & Safe.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="service-card bg-teal-200 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <div className="icon text-4xl text-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-center">{service.title}</h3>
            <p className="text-sm text-center mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  <Services/>
  <Exercises/>
  <AboutUs/>
  <Contact/>    
</div>
  );
}



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
