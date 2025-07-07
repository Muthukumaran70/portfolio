
import { MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-blue-600 mb-4">
              <MapPin size={20} />
              <span className="font-medium">Karaikal, Puducherry</span>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a final-year Civil Engineering student at NIT Puducherry. I specialize in 
              RCC design, quantity surveying, and QA/QC. With site-level internship 
              experience and advanced structural tools like ETABS, AutoCAD, and 
              STAAD.Pro, I aim to bridge the gap between design and execution.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Internships</div>
              </div>
              <div className="text-center bg-purple-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
                <div className="text-gray-600 font-medium">Certifications</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">B.Tech – Civil Engineering</h4>
                  <p className="text-blue-600 font-medium">NIT Puducherry</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">2022-2026</div>
                  <div className="text-blue-600 font-semibold">CGPA: 7.25/10</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">HSC – Computer Science</h4>
                  <p className="text-blue-600 font-medium">Karaikal</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">2022</div>
                  <div className="text-blue-600 font-semibold">74.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
