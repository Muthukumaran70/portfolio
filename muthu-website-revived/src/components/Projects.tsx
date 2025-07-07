
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "G+5 RCC Apartment Design",
      description: "936 m² G+5 apartment design under IS 456, IS 875, IS 1893. Seismic analysis: story drift, base shear. Reduced steel by 15% through layout optimization.",
      technologies: ["ETABS", "AutoCAD"],
      githubUrl: "#",
      liveUrl: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 transform hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                  <img
                    src="/lovable-uploads/6c05b0c9-4f55-40e7-8a1d-a859aa38db26.png"
                    alt="Structural engineering drawing of RCC apartment design"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
