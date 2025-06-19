import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  const stats: StatItem[] = [
    { value: 8, label: '8.5 Acres Land', suffix: '+' },
    { value: 80, label: 'Bespoke Villas', suffix: '' },
    { value: 34, label: 'Amenities', suffix: '+' },
    { value: 5, label: 'Star Club House', suffix: '★' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to <span className="text-[#c46a32]">AMOR Villas</span>
            </h2>
            <div className="w-20 h-1 bg-[#c46a32] mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
            The finest homes await you at Amor Villas, a new luxury community where elegance meets affordability.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
            Thoughtfully designed spaces and exceptional attention to detail make Amor Villas a place you'll admire and a home you'll truly love.
            </p>
            <a 
              href="#amenities" 
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Discover Features
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 ${
                  isInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-end mb-2">
                  <CountUp 
                    end={stat.value} 
                    isInView={isInView} 
                    className="text-4xl md:text-5xl font-bold text-[#c46a32]" 
                  />
                  <span className="text-2xl md:text-3xl font-bold text-[#c46a32]">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  isInView: boolean;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, isInView, className }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds
      
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end]);
  
  return <span className={className}>{count}</span>;
};

export default About;