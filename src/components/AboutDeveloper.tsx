import React from 'react';
import developerImage from '../assets/images/e555c794-ef5f-4f4b-852c-c563778e2575.jpg';

const pointsGroup1 = [
  "HMMI began in 1965 when Haji Mohammad Ishaq and Haji Mohammad Ali started trading potatoes with honesty and determination.",
  "They expanded their operations by establishing Chinhat Cold Storage in 1972, which grew steadily over two decades.",
  "The second generation, including Mohammad Aslam and Mohammad Akram, helped scale the business further.",
  "After Mohammad Akram's passing in 2017, the leadership continued with a strong sense of purpose and unity.",
  "By 2020, with three cold storages at different locations in Lucknow & Barabanki, the capacity had reached 3,32,000 quintals, making HMMI a known name in agricultural storage.<br/>The third generation—Faisal, Zeeshan, Suhail, and Shoaib—brought fresh vision and energy."
];

const pointsGroup2 = [
  "Haji Ishaq's early investment in agricultural land later became the foundation for a major shift.<br/>Driven by Zeeshan's passion for construction, the family launched the CCS Infratech Project AMOR on 10 acres of converted land.",
  "This marked HMMI's expansion into infrastructure and real estate with a RERA-approved venture.<br/>Today, HMMI stands as a legacy of growth—from agriculture to real estate—built on integrity and family values."
];

const AboutDeveloper: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1815]">
      <div className="container mx-auto px-4">
        {/* Header Centered */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex flex-wrap justify-center items-center gap-2">
            <span className="text-white">About Developer -</span>
            <span className="font-bold" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>CCS INFRATECH</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={developerImage}
              alt="CCS Infra Tech Developer"
              className="rounded-2xl shadow-lg object-cover w-full max-w-lg h-80 md:h-[28rem]"
            />
          </div>
          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <ul className="space-y-2 text-white/90 text-base list-disc pl-5">
              {pointsGroup1.map((point, idx) => (
                <li key={idx}><span className="block leading-relaxed" dangerouslySetInnerHTML={{__html: point}} /></li>
              ))}
            </ul>
            <div className="mt-4" />
            <ul className="space-y-2 text-white/90 text-base list-disc pl-5">
              {pointsGroup2.map((point, idx) => (
                <li key={idx}><span className="block leading-relaxed" dangerouslySetInnerHTML={{__html: point}} /></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper; 