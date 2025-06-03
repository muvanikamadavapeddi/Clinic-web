import React, { useState } from "react";
import './App.css';


function Services(){
    return(
        <>
        <section id="services" className="section services bg-white p-8 mb-5">
<h2 className="text-3xl font-bold text-center">Our Services</h2>
<div className="services-container mt-8 space-y-8">
  {[
    { 
      title: 'Musculoskeletal Therapy', 
      description: 'Musculoskeletal therapy, also known as musculoskeletal physiotherapy, focuses on restoring movement and function for people with injuries or illnesses affecting their muscles, bones, joints, and connective tissues.', 
      image: '/images/Musculoskeletal Therapy.jpg', 
      link: 'https://aimst.edu.my/event-news/what-musculoskeletal-physiotherapy/'
    },
    { 
      title: 'Neurological Rehab', 
      description: 'Neurological rehabilitation, or neuro-rehab, is a specialized field of healthcare that helps individuals recover from neurological conditions affecting movement and function.', 
      image: '/images/neurorehab.jpg',
      link:'https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/neurological-rehabilitation' 
    },
    { 
      title: 'Sports Injury Management', 
      description: 'Sports injury management involves a combination of immediate care, diagnosis, treatment, and rehabilitation to help athletes recover from injuries and return to their sport safely.', 
      image: '/images/sports.jpg',
      link:'https://my.clevelandclinic.org/health/diseases/22093-sports-injuries' 
    },
    { 
      title: 'Post-Surgical Recovery', 
      description: 'Post-surgical recovery involves a period of care and rehabilitation after surgery to regain strength, mobility, and overall well-being.', 
      image: '/images/injury recovery.jpg',
      link:'https://www.physio.co.uk/treatments/physiotherapy/post-surgical-rehabilitation.php'  
    },
    { 
      title: 'Pediatric Physiotherapy', 
      description: 'Pediatric physiotherapy, also known as Paediatric physiotherapy, is a specialized area of physical therapy that focuses on the treatment and care of children from birth to 19 years.', 
      image: '/images/pediatric.jpg',
      link:'https://www.physio-pedia.com/Introduction_to_Paediatric_Physiotherapy'  
    },
    { 
      title: 'Geriatric Physiotherapy', 
      description: 'Geriatric physiotherapy focuses on the assessment, treatment, and prevention of age-related health problems in older adults using physical therapy techniques.', 
      image: '/images/geriatic.jpg',
      link:'https://www.physio-pedia.com/Physiotherapy_and_Older_People'  
    },
  ]
  //split into three
    .reduce((rows, service, index) => {
      if (index % 3 === 0) rows.push([]);
      rows[rows.length - 1].push(service);
      return rows;
    }, [])
    .map((row, rowIndex) => (
      <div key={rowIndex} className="services-row grid grid-cols-1 sm:grid-cols-3 gap-8">
        {row.map((service, index) => (
          <div key={service.id} className="service-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={service.image} alt={service.title} className="w-40 h-40 mx-auto mb-4 rounded-xl md:w-40 md:h-40 object-cover"/>
              <h3 className="text-xl font-bold text-center">{service.title}</h3>
              <p className="text-sm text-center mt-2">{service.description}</p>
              <a href={service.link} className="bg-teal-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition duration-300 mt-4 block text-center">
                Learn More
              </a>
          </div>
        ))}
      </div>
    ))}
</div>
</section></>
    )
};
export default Services;
