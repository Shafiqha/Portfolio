import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle",
      year: "2024",
      description: "Professional certification in OCI Generative AI services and applications"
    },
    {
      title: "React & Django Full Stack",
      issuer: "Various Online Platforms",
      year: "2024",
      description: "Comprehensive full-stack development certification covering React frontend and Django backend"
    },
    {
      title: "AWS Academy Graduate",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "AWS Academy program completion with cloud computing fundamentals"
    },
    {
      title: "Machine Learning Algorithms in 7 Days",
      issuer: "Online Learning Platform",
      year: "2023",
      description: "Intensive ML algorithms and implementation certification"
    }
  ];

  const hackathons = [
    {
      name: "Smart India Hackathon",
      achievement: "Top 10 Teams",
      year: "2024",
      description: "National-level hackathon focusing on innovative solutions for real-world problems"
    },
    {
      name: "Hack2Skill (Accenture)",
      achievement: "Participant",
      year: "2023",
      description: "Corporate hackathon organized by Accenture for skill development"
    },
    {
      name: "Infosys Springboard iAccelerate",
      achievement: "Participant",
      year: "2023",
      description: "Innovation accelerator program by Infosys for emerging technologies"
    }
  ];

  const activities = [
    {
      role: "Event Coordinator",
      event: "Idea Launch Event",
      organization: "IIT Bombay",
      year: "2024",
      description: "Organized and conducted idea pitching and innovation event"
    },
    {
      role: "Organizer",
      event: "FOSS Hackathon",
      organization: "College Level",
      year: "2023",
      description: "Conducted Free and Open Source Software hackathon for students"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                      <div className="text-sm text-cyan-400 mb-2">{cert.issuer} • {cert.year}</div>
                      <p className="text-sm text-gray-400">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Hackathons</h3>
            <div className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{hackathon.name}</h4>
                      <div className="text-sm text-cyan-400 mb-2">{hackathon.year}</div>
                      <p className="text-sm text-gray-400 mb-2">{hackathon.description}</p>
                      <div className="inline-flex items-center space-x-1 px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span>{hackathon.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Activities</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <ExternalLink className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{activity.event}</h4>
                      <div className="text-sm text-cyan-400 mb-1">{activity.organization} • {activity.year}</div>
                      <div className="text-sm text-gray-300 mb-2">{activity.role}</div>
                      <p className="text-sm text-gray-400">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
