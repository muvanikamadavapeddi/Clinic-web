import React, { useEffect , useState} from "react";
import "./App.css";


function Exercises(){
    const careCategories = [
        { name: "Stretching", image: "images/stretching.jpg", bgColor: "bg-blue-200" },
        { name: "Strengthening", image: "images/strengthening.jpg", bgColor: "bg-yellow-200" },
        { name: "Posture Correcting", image: "images/posture.webp", bgColor: "bg-orange-200" },
        { name: "Walking", image: "images/walking.jpg", bgColor: "bg-pink-200" },
        { name: " Lunges", image: "images/lunges.jpg", bgColor: "bg-blue-300" },
        { name: "Pushups", image: "images/pushups.jpg", bgColor: "bg-yellow-300" },
        { name: "Squats", image: "images/squats.webp", bgColor: "bg-red-200" },
        { name: "Burpees", image: "images/Burpees.avif", bgColor: "bg-green-200" },
      ];
       const [selectedImage, setSelectedImage] = useState(null);
        useEffect(() => {
          if (selectedImage) {
            document.body.classList.add("overflow-hidden");
          } else {
            document.body.classList.remove("overflow-hidden");
          }
        
          return () => document.body.classList.remove("overflow-hidden");
        }, [selectedImage]);
        
    
    
    return(
        <>
        <section id="exercises" className='section exercises'>
            <h2 className="mt-15 text-3xl font-bold text-center">Exercises We Should Do !</h2>
            <div className=" overflow-x-auto whitespace-nowrap p-6 custom-scrollbar">
            <div className=" mt-5 flex gap-6">
            {careCategories.map((category, index) => (
                <div
                key={index}
                className={`p-4 rounded-lg shadow-md ${category.bgColor} flex flex-col items-center min-w-[200px]`}
                >
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-24 h-24 object-cover rounded-full mb-4 cursor-pointer"
                    onClick={() => setSelectedImage(category.image)}
                />
                <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
            ))}
            </div>
        </div>

        {/* Display selected image with close button */}
        {selectedImage && (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setSelectedImage(null)}
        >
            {/* Close button */}
            <button
            className="absolute top-[60px] right-[60px] text-white text-3xl font-bold hover:text-red-600"
            onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
            }}
            >
            &times;
            </button>
            <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full p-4"
            />
        </div>
        )}

    </section>

        </>
    )
};
export default Exercises;