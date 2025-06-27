import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const StickyInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sticky form submitted:', formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  const phoneNumber = '+914071242692';

  return (
    <>
      {/* Desktop Version */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1A1815] shadow-lg z-30 border-t border-[#3A3835] hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Enquire or call us:</span>
              <a 
                href={`tel:${phoneNumber}`}
                className="font-semibold hover:text-[#D26A3B] transition-colors duration-300 flex items-center text-[#D26A3B]"
              >
                <Phone className="h-4 w-4 mr-2" />
                {phoneNumber}
              </a>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 flex items-center justify-end gap-4 max-w-3xl">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex-1 px-4 py-2 border border-[#3A3835] bg-[#2A2825] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D26A3B] placeholder-white/60"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 px-4 py-2 border border-[#3A3835] bg-[#2A2825] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D26A3B] placeholder-white/60"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex-1 px-4 py-2 border border-[#3A3835] bg-[#2A2825] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D26A3B] placeholder-white/60"
                required
              />
              <button
                type="submit"
                className="text-white py-2 px-6 rounded-md hover:bg-[#B85A2B] transition-colors duration-300 whitespace-nowrap"
                style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}>
        <div className="grid grid-cols-2" style={{height: '60px'}}>
          <a
            href={`tel:${phoneNumber}`}
            className="text-white py-3 px-4 flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-black hover:bg-opacity-10"
          >
            <Phone className="h-5 w-5" />
            Call Us
          </a>
          <a
            href="#contact"
            className="text-white py-3 px-4 flex items-center justify-center transition-colors duration-300 hover:bg-black hover:bg-opacity-10"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyInquiry;