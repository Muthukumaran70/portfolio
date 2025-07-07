
import { MapPin, Download, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-blue-600 animate-fade-in">
              <MapPin size={20} />
              <span className="text-sm font-medium">Karaikal, Puducherry</span>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm
              </h1>
              <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight animate-pulse">
                Muthukumaran
              </h2>
            </div>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold text-gray-800">
                Civil Engineer & Structural Designer
              </h3>
              <p className="text-lg text-gray-600 max-w-lg">
                Specializing in RCC design, quantity surveying, and QA/QC with 
                hands-on experience in structural analysis and site supervision.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                <Eye size={20} />
                <span>View My Work</span>
              </button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-full h-96 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img
                src="/lovable-uploads/6ad85cf2-75eb-412c-8aa5-2127765a41f4.png"
                alt="Construction site with cranes at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
