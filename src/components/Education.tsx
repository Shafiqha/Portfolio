import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <div className="flex items-start space-x-6">
            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Engineering in Computer Science
              </h3>
              
              <div className="text-lg text-cyan-400 mb-4">
                PES Institute of Technology and Management
              </div>
              
              <div className="text-gray-300 mb-6">
                Shivamogga, Karnataka
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-white">2022 - 2026</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">GPA</div>
                    <div className="text-white font-semibold">8.9/10</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning", 
                    "Data Structures & Algorithms",
                    "Web Development",
                    "Database Management",
                    "Cloud Computing",
                    "Software Engineering",
                    "Computer Networks"
                  ].map((area, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span>Expected Graduation: June 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
