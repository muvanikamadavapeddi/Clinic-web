import React, { useState } from "react";
import './App.css';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Contact(){
    return(
        <>
            <section id="contact" className='contact'>
                  <footer className="bg-gradient-to-r from-teal-900 to-black text-white py-5">
                  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                  <h2 className="text-2xl font-bold mt-10 text-white">Khanvika physiotherapy</h2>
                  <div className="flex justify-center mt-10 space-x-6">
              <a href="#" className=" bg-gradient-to-bl p-3 rounded-xl text-white hover:bg-gradient-to-r hover:bg-blue-500 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className=" bg-gradient-to-bl p-3 rounded-xl text-white hover:bg-gradient-to-r hover:bg-blue-500 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className=" bg-gradient-to-bl p-3 rounded-xl text-white hover:bg-gradient-to-r hover:bg-blue-500 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className=" bg-gradient-to-bl p-3 rounded-xl text-white hover:bg-gradient-to-r hover:bg-blue-500 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className=" bg-gradient-to-bl p-3 rounded-xl text-white hover:bg-gradient-to-r hover:bg-blue-500 hover:text-white transition">
                <FaYoutube size={24} />
              </a>
            </div>
            
            
                  </div>
                  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mt-14 mb-10">
                  <div style={{ flex: 1 }}>
                        <iframe
                          title="Khanvika Physiotherapy Clinic"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15249.967861487135!2d79.6243054!3d17.1462634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34db000b2198f3%3A0x8839ef3eee17794f!2sKHANVIKA%20PHYSIOTHERAPY%20CLINIC!5e0!3m2!1sen!2sin!4v1718553442264!5m2!1sen!2sin"
                          width="100%"
                          height="300"
                          style={{ border: "0" }}
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
            
                    {/* Logo & Contact Info */}
                    <div>
                      <div className="text-sm">
                        <p className="text-blue-400 font-semibold">ADDRESS</p>
                        <p>4JWF+GP3, Rajeevnagar, Vidyanagar, Suryapet, Telangana 508213 - Opposite to Ram Murthy Hospital</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-blue-400 font-semibold">CALL US</p>
                        <p>9876543210</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-blue-400 font-semibold">EMAIL</p>
                        <p>Khanvika@gmail.com</p>
                      </div>
                    </div>
            
                    {/* Clients Section */}
                    <div>
                      <h3 className="text-blue-400 font-semibold mb-3 text-center pr-7">WHY CHOOSE US?</h3>
                      <ul className="text-sm space-y-2 text-left pl-12">
                        {["Expert Care", "Personalized Approach", "State-of-the-Art Facility", "Compassionate Service"].map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                      </ul>
                    </div>
            
                    {/* Marketing Services Section */}
                    <div>
                      <h3 className="text-blue-400 font-semibold mb-3 text-center pr-20">OUR SERVICES</h3>
                      <ul className="text-sm space-y-2 text-left">
                        {["Pain Management & Rehabilitation", "Post-Surgery Recovery", "Sports Injury Treatment", "Postural Correction & Ergonomic Advice", "Neurological & Orthopedic Physiotherapy",
                          "Geriatric & Pediatric Physiotherapy"].map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                      </ul>
                    </div>
                    
                  </div>
                  <span className='font-sans text-white'>At Khanvika Physiotherapy Clinic, we believe in healing with care and helping you regain control of your health. Book an appointment today and take the first step toward a pain-free life!</span>
                  <p className='text-center'>© All Rights Reserved.</p>
                </footer>
                </section>
        </>
    )
};

export default Contact;