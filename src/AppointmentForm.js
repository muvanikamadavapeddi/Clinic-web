import React, { useState } from "react";
import './App.css';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Contact from "./Contact";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
    appointmentDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Details:", formData);
    alert("Appointment booked successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Background Image - Half Height */}
      <div
        className="w-full h-[80vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: "url(https://bodytonicclinic.co.uk/wp-content/uploads/2024/06/Questions-1024x768.jpg)"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Hero Text */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white text-center" 
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
            Khanvika Physiotherapy
          </h1>
          <p className="text-4xl md:text-5xl font-semibold text-center" 
             style={{ 
               color: "#d4ff00",
               textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
               fontStyle: "italic"
             }}>
            Pain-relief Balm
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              required
              className="p-4 rounded-lg bg-white border-2 border-gray-200 placeholder-gray-500 text-gray-700 focus:outline-none focus:border-blue-500 text-lg"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="PHONE NUMBER"
              required
              className="p-4 rounded-lg bg-white border-2 border-gray-200 placeholder-gray-500 text-gray-700 focus:outline-none focus:border-blue-500 text-lg"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              className="p-4 rounded-lg bg-white border-2 border-gray-200 placeholder-gray-500 text-gray-700 focus:outline-none focus:border-blue-500 text-lg"
              onChange={handleChange}
            />
            <input
              type="datetime-local"
              name="appointmentDate"
              required
              className="p-4 rounded-lg bg-white border-2 border-gray-200 placeholder-gray-500 text-gray-700 focus:outline-none focus:border-blue-500 text-lg"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="HOW CAN WE HELP YOU?"
              required
              className="p-4 rounded-lg bg-white border-2 border-gray-200 placeholder-gray-500 text-gray-700 focus:outline-none focus:border-blue-500 text-lg md:col-span-2 h-32 resize-none"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 p-4 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
   <Contact/>
        </div>
  );
}

export default AppointmentForm;