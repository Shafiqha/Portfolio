import React from 'react';

const Skills = () => {
  const skillsData = {
    "Languages": ["Python", "Java", "C", "C++", "SQL", "JavaScript", "PHP", "HTML", "CSS"],
    "Frameworks & Libraries": ["Springboot", "Django", "React", "TensorFlow", "NumPy", "Pandas", "OpenCV"],
    "Cloud & DevOps": ["AWS", "Git", "GitHub", "Docker", "REST APIs"],
    "Databases": ["MySQL", "SQLite", "PostgreSQL"],
    "Tools & IDE": ["Figma", "VS Code", "PyCharm", "Jupyter"]
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Always learning new technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
