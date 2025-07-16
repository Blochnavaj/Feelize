import React from 'react';

const Technologies = () => {
  const technologies = [
    {
      category: 'Frontend',
      techs: [
        { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
        { name: 'Vue.js', icon: '💚', color: 'from-green-400 to-green-600' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-cyan-600' },
        { name: 'Vite', icon: '⚡', color: 'from-yellow-400 to-orange-500' }
      ]
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
        { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
        { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-800' },
        { name: 'FastAPI', icon: '⚡', color: 'from-teal-400 to-teal-600' },
        { name: 'GraphQL', icon: '🔗', color: 'from-pink-400 to-pink-600' },
        { name: 'REST APIs', icon: '🌐', color: 'from-indigo-400 to-indigo-600' }
      ]
    },
    {
      category: 'Mobile',
      techs: [
        { name: 'React Native', icon: '📱', color: 'from-blue-400 to-purple-500' },
        { name: 'Flutter', icon: '🦋', color: 'from-blue-400 to-cyan-400' },
        { name: 'iOS', icon: '🍎', color: 'from-gray-600 to-gray-800' },
        { name: 'Android', icon: '🤖', color: 'from-green-400 to-green-600' },
        { name: 'Expo', icon: '⚡', color: 'from-purple-400 to-purple-600' },
        { name: 'PWA', icon: '📲', color: 'from-orange-400 to-red-500' }
      ]
    },
    {
      category: 'Database & Cloud',
      techs: [
        { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
        { name: 'Firebase', icon: '🔥', color: 'from-yellow-400 to-orange-500' },
        { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600' },
        { name: 'Vercel', icon: '▲', color: 'from-gray-700 to-gray-900' },
        { name: 'Supabase', icon: '⚡', color: 'from-green-400 to-teal-500' }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use cutting-edge technologies to build scalable, performant, and beautiful applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-purple-100 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-lg">{tech.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Technology evolves fast, and so do we. Our team stays up-to-date with the latest trends 
              and best practices to ensure your project uses the most suitable and modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
