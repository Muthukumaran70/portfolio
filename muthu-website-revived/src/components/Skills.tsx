
const Skills = () => {
  const skillCategories = [
    {
      title: "Structural Design & Analysis",
      icon: "🏗️",
      color: "from-blue-500 to-blue-600",
      skills: ["ETABS 2016", "STAAD.Pro V8i", "AutoCAD 2022", "AutoCAD Civil 3D", "Revit 2020", "SketchUp Pro", "Python Programming"]
    },
    {
      title: "Construction & Planning",
      icon: "📊",
      color: "from-purple-500 to-pink-500",
      skills: ["Primavera P6", "Bill of Quantities (BOQ)", "Bar Bending Schedule (BBS)", "RCC Detailing", "Rate Analysis", "Site Supervision", "Project Management"]
    },
    {
      title: "Quality Assurance & Testing",
      icon: "🔬",
      color: "from-red-500 to-pink-500",
      skills: ["Concrete Slump Test", "Cube Compression Test", "Total Station Survey", "IS 3025 Water Testing", "IS 456 Compliance", "IS 13920 Seismic Design"]
    },
    {
      title: "Documentation & Tools",
      icon: "📝",
      color: "from-green-500 to-teal-500",
      skills: ["Microsoft Excel Advanced", "PowerPoint Presentations", "Word Documentation", "GitHub Version Control", "Technical Report Writing", "Construction Drawings"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive technical skills in civil engineering, from design and analysis to construction management and quality control.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
