import React from 'react';
import { ExternalLink, Github, Code, Brain, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multilingual AI-Powered Speech Therapy for Aphasia",
      description: "A comprehensive speech therapy system using advanced AI technologies including Whisper ASR, Wav2Vec2.0, and Siamese networks. Features custom phoneme/prosody scoring, multilingual TTS, AAC features, and real-time visual feedback for lip-sync and mouth tracking.",
      technologies: ["Python", "PyTorch", "FastAPI", "React", "Tailwind CSS", "MySQL", "Whisper ASR", "Wav2Vec2.0"],
      features: [
        "Multilingual support (English, Hindi, Kannada)",
        "Real-time speech recognition and feedback",
        "Custom phoneme and prosody scoring algorithms",
        "Siamese networks for speech pattern analysis",
        "Full-stack web application with modern UI",
        "Real-time lip-sync and mouth tracking visualization"
      ],
      icon: <Brain className="w-6 h-6" />,
      links: {
        github: "https://github.com",
        demo: "https://demo-link.com"
      }
    },
    {
      title: "Project Evaluation System",
      description: "Django-based academic project evaluation system featuring ML-powered student performance prediction with 85%+ accuracy. Includes comprehensive evaluation metrics, interactive dashboards, and MySQL backend for scalable data management.",
      technologies: ["Python", "Django", "MySQL", "TensorFlow", "NumPy", "Pandas", "JavaScript", "Bootstrap"],
      features: [
        "Student Performance Prediction System using ML models",
        "85%+ accuracy in performance predictions",
        "Comprehensive project evaluation metrics",
        "Interactive dashboards for data visualization",
        "Scalable MySQL database backend",
        "RESTful API architecture"
      ],
      icon: <Database className="w-6 h-6" />,
      links: {
        github: "https://github.com",
        demo: "https://demo-link.com"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
