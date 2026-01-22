import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

function AboutUs() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20" id="top">
      {/* Hero Section */}
      <div className="bg-red-600 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="bg-white text-red-600 p-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                <HomeIcon className="w-5 h-5" />
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">About Our Mission</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16 md:space-y-24">
            {/* Education Impact */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://github.com/noahback12/morethanconqdemo/blob/main/src/Picture/Noah%20Leading%20kids%20to%20christ.jpg?raw=true"
                  alt="Children in Uganda" 
                  className="w-full h-full object-contain"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Education Impact</h2>
                <p className="text-base md:text-lg text-gray-600">
                  At More Than Conquerors, we've long supported Hope for Uganda School in Rakai, a lifeline for kids hit by recent funding cuts. We empower local Ugandan teachers to equip them with English, reading, writing, and math. These skills provide opportunities that is grounded in Jesus's love. Meals provided by the school help combat malnutrition, rampant in rural Rakai. This education transforms lives, offering hope and a brighter future beyond poverty.
                </p>
              </div>
            </div>

            {/* Prison Ministry */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden md:order-2">
                <img 
                  src="https://github.com/noahback12/morethanconqdemo/blob/main/src/Picture/worshippingprisonerssmall.jpg?raw=true"
                  alt="Prison Ministry" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Prison Ministry</h2>
                <p className="text-base md:text-lg text-gray-600">
                  Our prison ministry has touched countless lives, bringing hope and rehabilitation to 
                  those behind bars. We provide spiritual counseling, basic necessities, and support 
                  for families of inmates, helping to break the cycle of poverty and crime. Through 
                  regular visits, prayer sessions, and practical support, we're showing Christ's love 
                  to those who need it most, facilitating genuine transformation and renewal.
                </p>
              </div>
            </div>

            {/* Community Development */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://github.com/noahback12/morethanconqdemo/blob/main/src/Picture/Carryingwateruganda.jpg?raw=true"
                  alt="Community Development" 
                  className="w-full h-full object-contain"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Community Development</h2>
                <p className="text-base md:text-lg text-gray-600">
                  Working alongside local leaders, we've implemented sustainable development projects 
                  that have transformed entire communities. From water access initiatives to 
                  agricultural training programs, we're helping create lasting positive change. Our 
                  approach emphasizes local ownership and leadership, ensuring that improvements are 
                  sustainable and continue to benefit communities for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-red-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            Make a Difference Today
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-8 md:mb-12 max-w-2xl mx-auto">
            Your support helps us continue our mission of serving communities in Uganda through 
            education, spiritual guidance, and prisoner support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.zeffy.com/donation-form/2dc7b3bb-ef67-475a-b39d-144c57083db8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-6 md:px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors text-base"
            >
              Donate Now
            </a>
            <a 
              href="https://m.me/morethanconquerorsaf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;