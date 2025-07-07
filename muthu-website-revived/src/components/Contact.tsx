
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Karaikal, Puducherry, India",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "muthukumaran8b@gmail.com",
      color: "bg-red-100 text-red-600",
      link: "mailto:muthukumaran8b@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9894006297",
      color: "bg-green-100 text-green-600",
      link: "tel:+919894006297"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/muthukumaran",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/muthukumaran",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: ExternalLink,
      name: "Portfolio",
      url: "https://muthukumaran.netlify.app",
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-pulse">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-bounce"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or chat about civil engineering and structural design. Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Whether you're looking for a civil engineer, want to discuss a project, 
                or just want to network with someone passionate about structural design 
                and construction, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-center space-x-4 transform hover:scale-105 transition-all duration-300">
                    <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center animate-pulse`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block hover:bg-white/50 p-4 rounded-lg transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                    {content}
                  </a>
                ) : (
                  <div key={index} className="p-4 animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="pt-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-bounce`}
                      title={social.name}
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-slide-in-left">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    required
                  />
                </div>
                
                <div className="animate-slide-in-right">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    required
                  />
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none focus:scale-105 focus:shadow-lg"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
