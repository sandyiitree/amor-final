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

  const phoneNumber = '+911234567890';

  return (
    <>
      {/* Desktop Version */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-30 border-t border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 font-medium">Enquire or call us:</span>
              <a 
                href={`tel:${phoneNumber}`}
                className="text-[#c46a32] font-semibold hover:text-yellow-700 transition-colors duration-300 flex items-center"
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
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c46a32]"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c46a32]"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c46a32]"
                required
              />
              <button
                type="submit"
                className="bg-[#c46a32] text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors duration-300 whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="fixed bottom-0 left-0 right-0 grid grid-cols-2 md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-[#c46a32] text-white py-3 px-4 flex items-center justify-center gap-2 hover:bg-yellow-700 transition-colors duration-300"
        >
          <Phone className="h-5 w-5" />
          Call Us
        </a>
        <a
          href="#contact"
          className="bg-gray-800 text-white py-3 px-4 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300"
        >
          Enquire Now
        </a>
      </div>
    </>
  );
};

export default StickyInquiry;