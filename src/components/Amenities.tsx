import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface AmenityItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Amenities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const amenitiesRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (amenitiesRef.current) {
      amenitiesRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (amenitiesRef.current) {
      amenitiesRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const amenities: AmenityItem[] = [
    {
      title: "Clubhouse",
      description: "A central space to relax, socialize, and host gatherings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-2m-4 0v-6H9v6m-4 0a2 2 0 01-2-2V10z" />
        </svg>
      )
    },
    {
      title: "Swimming Pool",
      description: "Refresh and unwind in a crystal-clear pool.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15s1 0 2-.5 2-.5 3 0 2 .5 3 0 2-.5 3 0 2 .5 3 0 2-.5 3 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10z" />
        </svg>
      )
    },
    {
      title: "Table Tennis",
      description: "Indoor fun with a fast-paced table tennis zone.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 14l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Pool Table",
      description: "Chill and play a game of billiards with friends.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="16" cy="8" r="1.5" />
          <circle cx="12" cy="14" r="1.5" />
        </svg>
      )
    },
    {
      title: "Gymnasium",
      description: "State-of-the-art fitness center to keep you healthy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 3v3m12-3v3M3 9h18M6 21v-6m12 6v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Banquet Hall",
      description: "Host grand celebrations in an elegant setting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 20h18M4 4h16v12H4z" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Cricket Turf",
      description: "Enjoy a match on our well-maintained cricket turf.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 20l8-16m0 16L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Basketball Court",
      description: "Full-size court for casual games and serious play.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Jogging Track",
      description: "A dedicated path to keep your fitness journey on track.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 17h7m-7 0l-4-8m4 8l-5-2m5 2l1.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Open Gym",
      description: "Work out in the fresh air with open-air equipment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 6v12M18 6v12M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Yoga Area",
      description: "Peaceful space for yoga and mindfulness.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6v3m0 0c-4 0-4 6 0 6m0-6c4 0 4 6 0 6M5 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Kids' Play Area",
      description: "Safe and fun zone designed especially for children.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="6" r="2" />
          <path d="M4 20l4-8m0 0l4 8m-4-8l-4 8M20 20l-4-8m0 0l-4 8m4-8l4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const specifications = [
    { label: "Structure", value: "RCC framed structure with shear walls" },
    { label: "Walls", value: "Brick/Concrete block masonry" },
    { label: "Flooring", value: "Imported marble in living/dining and bedrooms" },
    { label: "Doors", value: "Solid core flush doors with premium hardware" },
    { label: "Windows", value: "Double glazed UPVC/aluminum windows" },
    { label: "Kitchen", value: "Modular kitchen with premium appliances" },
    { label: "Bathroom", value: "Designer tiles and premium fittings" },
    { label: "Electrical", value: "Concealed copper wiring with smart controls" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (amenitiesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = amenitiesRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          amenitiesRef.current.scrollLeft = 0; // Reset to start
        } else {
          amenitiesRef.current.scrollBy({ left: 1, behavior: 'smooth' }); // Scroll right
        }
      }
    }, 30); // Adjust the interval for speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="amenities" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lifestyle <span className="font-bold" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Amenities</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experience a life of luxury with our exclusive world-class amenities designed to elevate your everyday living.
          </p>
        </div>

        {/* Amenities Grid with Scroll Indicators */}
        <div className="relative mb-16">
          <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${amenitiesRef.current && amenitiesRef.current.scrollLeft > 0 ? '' : 'hidden'}`} onClick={scrollLeft}>
            <div className="bg-gray-200 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${amenitiesRef.current && (amenitiesRef.current.scrollWidth > amenitiesRef.current.clientWidth) ? '' : 'hidden'}`} onClick={scrollRight}>
            <div className="bg-gray-200 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div ref={amenitiesRef} className="flex overflow-x-auto space-x-4">
            {amenities.map((item, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ minWidth: '200px', transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Remove the specification section */}
        {/* <div className="specification-section">
          <h3>Specifications</h3>
          <p>Details about specifications...</p>
        </div> */}
      </div>
    </section>
  );
};

export default Amenities;