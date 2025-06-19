import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const locationPoints = [
    { name: "Kisan Path", distance: "2.5 km" },
    { name: "Chinhat Market", distance: "3 km" },
    { name: "Eldeco Tiraha", distance: "3 km" },
    { name: "BBD University", distance: "4.7 km" },
    { name: "Ayodhya Road", distance: "5 km" },
    { name: "High Court", distance: "6 km" },
    { name: "Gomti Nagar Railway Station", distance: "7 km" }
  ];

  return (
    <section id="location" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prime <span className="font-bold" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Location</span>
          </h2>
          <div className="w-20 h-1 bg-[#c46a32] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Strategically located in the heart of the city with convenient access to key destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div 
            className={`relative rounded-lg overflow-hidden h-96 lg:h-auto transition-opacity duration-1000 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.493024734816!2d81.03236727451933!3d26.760653064683555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a2c1916a4d%3A0x12f1ea059469cfea!2sAmor%20Villas!5e0!3m2!1sen!2sin!4v1716452762049!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Project location map"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
                <span className="font-medium text-gray-800">AMOR </span>
              </div>
            </div>
          </div>

          {/* Location info */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold mb-6">Connectivity</h3>
              <div className="space-y-4">
                {locationPoints.map((point, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <div className="flex items-center">
                      <div className="bg-yellow-100 p-2 rounded-full mr-4">
                        <div className="h-2 w-2 rounded-full" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}></div>
                      </div>
                      <span className="font-medium">{point.name}</span>
                    </div>
                    <span className="text-gray-600">{point.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">About the Area</h3>
              <p className="mb-4 text-gray-300">
                Located in one of the city's most prestigious neighborhoods, AMOR offers residents 
                the perfect blend of connectivity and tranquility. The surrounding area features lush 
                greenery, premium educational institutions, healthcare facilities, and entertainment options.
              </p>
              <p className="text-gray-300">
                With seamless access to major highways and public transportation, navigating the city 
                from AMOR is effortless, making it the ideal location for those who value both 
                convenience and exclusivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;