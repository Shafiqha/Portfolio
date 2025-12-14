import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SHAFIQHA KHANUM
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Computer Science Student & AI/ML Enthusiast
        </h2>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Passionate about Artificial Intelligence, Machine Learning, Full-Stack Development, 
          and building innovative solutions that make a difference.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-cyan-400 transition-all duration-300"
          >
            View Projects
          </a>
          <button className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-cyan-400 transition-all duration-300 flex items-center gap-2">
            <Download size={16} />
            Download Resume
          </button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:shafiqha@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
