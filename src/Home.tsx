import React from 'react';
import { Heart, School, Users, HandHelping as Hands, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center pt-20 md:pt-16"
        style={{
          backgroundImage: 'url("/kidswaitingforchristmasboxes.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
            Empowering Communities Through Christ's Love
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            For over 30 years, we've been serving communities in Uganda through education, 
            prisoner support, and spiritual guidance.
          </p>
          <Link to="/aboutus#top" className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors text-base">
            Learn More <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900">
            Our Impact in Uganda
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <ImpactCard 
              icon={<School className="w-8 h-8 text-red-600" />}
              title="Education in Rakai"
              description="Supporting a school that provides Christ-centered education, English language learning, and essential life skills to children in Rakai, Uganda."
            />
            <ImpactCard 
              icon={<Users className="w-8 h-8 text-red-600" />}
              title="30+ Years of Partnership"
              description="Working hand-in-hand with a Ugandan family for over three decades, enabling Ugandans to support Ugandans effectively."
            />
            <ImpactCard 
              icon={<Hands className="w-8 h-8 text-red-600" />}
              title="Prisoner Support"
              description="Providing material aid and spiritual support to prisoners across Uganda, sharing Christ's message of hope and redemption."
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Christ-Centered Mission</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Through faith and dedication, we've built lasting relationships in Uganda that enable us 
                to make a real difference. Our partnership with a local Ugandan family spans over three 
                decades, allowing us to understand and serve the community's needs effectively.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                We believe in empowering communities through Christ's teachings, focusing on education 
                and spiritual support. Our work extends from classrooms to prisons, touching lives and 
                spreading hope wherever we go.
              </p>
              <Link 
                to="/aboutus#top" 
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors text-base"
              >
                Join Our Mission <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
            <div 
              className="h-[300px] md:h-[500px] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: 'url("/Kidsaftersoccer.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
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
            <Link to="/aboutus#top" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ImpactCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
}

export default Home;