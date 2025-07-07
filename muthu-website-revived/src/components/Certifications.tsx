
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { 
      name: "ETABS Structural Analysis", 
      icon: "🏗️",
      issuer: "Computers and Structures Inc.",
      year: "2024",
      category: "Software"
    },
    { 
      name: "AutoCAD Professional", 
      icon: "📐",
      issuer: "Autodesk",
      year: "2023",
      category: "Design"
    },
    { 
      name: "STAAD.Pro Advanced", 
      icon: "🔧",
      issuer: "Bentley Systems",
      year: "2024",
      category: "Analysis"
    },
    { 
      name: "Revit Architecture", 
      icon: "🏢",
      issuer: "Autodesk",
      year: "2023",
      category: "BIM"
    },
    { 
      name: "Python for Engineers", 
      icon: "🐍",
      issuer: "Coursera",
      year: "2023",
      category: "Programming"
    },
    { 
      name: "Advanced Excel", 
      icon: "📊",
      issuer: "Microsoft",
      year: "2022",
      category: "Tools"
    },
    { 
      name: "Construction Management", 
      icon: "👷",
      issuer: "IIT Madras",
      year: "2024",
      category: "Management"
    },
    { 
      name: "Water & Wastewater Treatment", 
      icon: "💧",
      issuer: "NPTEL",
      year: "2023",
      category: "Environmental"
    },
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];
  const categoryColors = {
    "Software": "from-blue-500 to-blue-600",
    "Design": "from-green-500 to-green-600",
    "Analysis": "from-purple-500 to-purple-600",
    "BIM": "from-red-500 to-red-600",
    "Programming": "from-yellow-500 to-yellow-600",
    "Tools": "from-indigo-500 to-indigo-600",
    "Management": "from-pink-500 to-pink-600",
    "Environmental": "from-teal-500 to-teal-600"
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional certifications and specialized training in civil engineering software, construction management, and technical skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${categoryColors[cert.category]} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                <Award size={24} />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <div className="text-2xl mb-2">{cert.icon}</div>
                <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                
                <div className="flex items-center justify-center space-x-1 text-gray-500 mb-3">
                  <Calendar size={14} />
                  <span className="text-xs">{cert.year}</span>
                </div>
                
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[cert.category]} text-white mb-3`}>
                  {cert.category}
                </span>
                
                <div className="flex justify-center">
                  <ExternalLink className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
