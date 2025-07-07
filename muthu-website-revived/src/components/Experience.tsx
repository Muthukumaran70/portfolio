
import { Calendar, CheckCircle, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Ravi Associates",
      position: "Structural Drafting & Quantity Surveying Intern",
      location: "Chennai, Tamil Nadu",
      duration: "May 2024 - June 2024",
      type: "Internship",
      responsibilities: [
        "Drafted detailed AutoCAD layouts for G+2 and G+3 RCC residential buildings",
        "Created accurate Bill of Quantities (BOQ) using Microsoft Excel with material specifications",
        "Reviewed structural detailing for beams, columns, and slabs as per IS 456:2000 and IS 13920:2016",
        "Assisted in preparation of bar bending schedules (BBS) for reinforcement steel",
        "Conducted site visits to understand construction processes and quality control measures"
      ]
    },
    {
      company: "PWD - Irrigation and Public Health Department",
      position: "STP/WTP Foundation and Lab QA - Intern",
      location: "Karaikal, Puducherry",
      duration: "2 June 2024",
      type: "Internship",
      responsibilities: [
        "Supervised the construction of isolated footings and a 120 m² raft foundation for RCC sewage treatment tanks",
        "Performed 50+ IS 3025-compliant lab tests (e.g., alkalinity, hardness, chloride, calcium) to verify water quality",
        "Ensured adherence to quality control standards through daily documentation and verification of lab test reports"
      ]
    },
    {
      company: "Public Works Department - Buildings & Roads Division",
      position: "Civil Site Engineer - Intern",
      location: "Karaikal, Puducherry",
      duration: "2 June 2024",
      type: "Internship",
      responsibilities: [
        "Monitored site execution of a 60-meter-long RCC retaining wall and a three-span culvert project",
        "Utilized Total Station for high-precision layout and ensured steel placement accuracy with BBS adherence",
        "Improved reinforcement alignment by 30% by resolving site congestion issues through rigorous QA inspections"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Hands-on experience in structural design, drafting, and construction management through internships and academic projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  🏢
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.position}</p>
                      <div className="flex items-center space-x-2 text-gray-500 mt-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.duration}</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                        <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
