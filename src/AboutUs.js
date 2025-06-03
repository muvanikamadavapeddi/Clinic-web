import React, { useState ,useEffect} from 'react';
import "./App.css";

function AboutUs(){
    const [reviews, setReviews] = useState([
        { id: 1, name: "Alexander Rity", avatar: "https://i.pravatar.cc/50?img=1", rating: 5.0, text: "Great service!", time: "4 months ago" },
        { id: 2, name: "Emma Creight", avatar: "https://i.pravatar.cc/50?img=2", rating: 4.0, text: "Affordable and comfortable!", time: "3 months ago" },
      ]);
      
      const [newReview, setNewReview] = useState({ name: "", text: "", rating: 0 });
      const [hoverRating, setHoverRating] = useState(0);
      const [showForm, setShowForm] = useState(false);
    
      // Calculate overall rating dynamically
      const overallRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
    
      const addReview = () => {
        if (newReview.name.trim() && newReview.text.trim() && newReview.rating > 0) {
          setReviews([
            ...reviews,
            {
              id: reviews.length + 1,
              name: newReview.name,
              avatar: `https://i.pravatar.cc/50?img=${reviews.length + 3}`,
              rating: newReview.rating,
              text: newReview.text,
              time: "Just now",
            },
          ]);
          setNewReview({ name: "", text: "", rating: 0 });
          setShowForm(false);
        }
      };
    return(
        <>
            <section id="about" className='section about bg-teal-100 m-20 rounded-lg'>
      <h2 className="text-3xl font-bold text-center mt-2">About Us</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://t4.ftcdn.net/jpg/00/58/37/63/360_F_58376364_bzuxjKuNbfCJjHUh2618UOyzzpfdal92.jpg"
          alt="Clinic"
          className="m-10 rounded-lg"
        />
        <div className="md:w-1/2 p-6">
         
          <p className="mt-4 text-15 ">
          At <span className='font-bold'>Khanvika Physiotherapy Clinic</span>, we are dedicated to helping you move better, feel stronger, and live pain-free. With a team of experienced physiotherapists, we provide expert care tailored to your specific needs, ensuring a personalized and effective treatment plan.
          </p>
          <h3 className='mt-6 text-xl'>Our Mission</h3>
          <p className="mt-4 text-15 ">Our mission is to promote healing, restore mobility, and enhance overall well-being through evidence-based physiotherapy treatments. Whether you're recovering from an injury, managing chronic pain, or looking to improve your physical health, we are here to support your journey.</p>
        </div>
      </div>
      </section>
      <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* Rating Summary */}
      <h2 className="text-2xl font-bold">Reviews</h2>
      <div className="flex items-center mt-4">
        <span className="text-4xl font-bold">{overallRating}</span>
        <div className="ml-3">
        <div className="flex">
  {Array.from({ length: 5 }).map((_, index) => (
    <span key={index} className="relative">
      {index + 1 <= Math.floor(overallRating) ? (
        // Fully filled star
        <span className="text-yellow-500">★</span>
      ) : index < overallRating ? (
        // Half-filled star
        <span className="text-yellow-500">
          <span className="absolute overflow-hidden w-1/2">★</span>
          <span className="text-gray-300">★</span>
        </span>
      ) : (
        // Empty star
        <span className="text-gray-300">★</span>
      )}
    </span>
  ))}
</div>
          <p className="text-gray-500 text-sm">{reviews.length} ratings</p>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="mt-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 mb-4">
            <div className="flex items-center">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <h3 className="font-semibold">{review.name}   <div className="flex">
  {Array.from({ length: 5 }).map((_, index) => (
    <span key={index} className="relative">
      {index + 1 <= Math.floor(overallRating) ? (
        // Fully filled star
        <span className="text-yellow-500">★</span>
      ) : index < overallRating ? (
        // Half-filled star
        <span className="text-yellow-500">
          <span className="absolute overflow-hidden w-1/2">★</span>
          <span className="text-gray-300">★</span>
        </span>
      ) : (
        // Empty star
        <span className="text-gray-300">★</span>
      )}
    </span>
  ))}
</div>
</h3>
        <p className="text-sm text-gray-500">{review.time}</p>
        </div>
        
    </div>
    <p className="text-gray-700 mt-2">{review.text}</p>
    </div>
))}
</div>

{/* Button to Open Review Form */}
<button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded" onClick={() => setShowForm(true)}>
Add Your Review
</button>

{/* Review Form */}
{showForm && (
<div className="mt-4 p-4 border rounded shadow">
    <input
    type="text"
    className="w-full p-2 border rounded mb-2"
    placeholder="Your Name"
    value={newReview.name}
    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
    />
    <textarea
    className="w-full p-2 border rounded mb-2"
    rows="3"
    placeholder="Write your review..."
    value={newReview.text}
    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
    ></textarea>
    {/* ⭐ Star Rating Selector */}
    <div className="flex space-x-1 text-2xl cursor-pointer">
    {[1, 2, 3, 4, 5].map((num) => (
        <span
        key={num}
        onClick={() => setNewReview({ ...newReview, rating: num })}
        onMouseEnter={() => setHoverRating(num)}
        onMouseLeave={() => setHoverRating(0)}
        className={
            num <= (hoverRating || newReview.rating) ? "text-yellow-500" : "text-gray-300"
        }
        >
        ★
        </span>
    ))}
    </div>
    <button className="mt-2 px-4 py-2 bg-teal-500 text-white rounded" onClick={addReview}>
    Submit Review
    </button>
</div>
)}
    </div>

  </>
    )
};

export default AboutUs;