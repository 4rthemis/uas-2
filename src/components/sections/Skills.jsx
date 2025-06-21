import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience.',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Prototyping',
      description: 'Building interactive prototypes to validate design concepts and user flows.',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'User Research',
      description: 'Conducting user research to understand needs and validate design decisions.',
      icon: '🔍',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Design Systems',
      description: 'Developing scalable design systems for consistent user experiences.',
      icon: '🧩',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Interaction Design',
      description: 'Designing engaging interactions that enhance user engagement and satisfaction.',
      icon: '✨',
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Web Design',
      description: 'Creating responsive web experiences tailored to user needs and behaviors.',
      icon: '💻',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in UI/UX Design with a focus on solving problems through 
            thoughtful user experience, research, and design innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {skill.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;