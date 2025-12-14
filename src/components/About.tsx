import React from 'react';

const About = () => {
  const strengths = [
    'Teamwork',
    'Critical Thinking', 
    'Leadership',
    'Problem-solving',
    'Adaptability',
    'Time Management'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am a passionate Computer Science student at PES Institute of Technology and Management, 
              Shivamogga, with a strong foundation in Artificial Intelligence, Machine Learning, and 
              Full-Stack Development. My academic journey has been marked by consistent excellence 
              with a GPA of 8.9, and I'm driven by the desire to create innovative solutions that 
              address real-world challenges.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My expertise spans across multiple domains including AI/ML algorithms, web development 
              frameworks, cloud platforms, and database management. I have hands-on experience in 
              developing comprehensive applications that integrate cutting-edge technologies with 
              practical functionality.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Through various hackathons, projects, and certifications, I've developed strong 
              problem-solving abilities and a collaborative mindset. I believe in continuous learning 
              and staying updated with the latest technological advancements to deliver impactful solutions.
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{strength}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">GPA</span>
                <span className="text-xl font-semibold text-cyan-400">8.9/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Graduation</span>
                <span className="text-xl font-semibold text-cyan-400">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
