import React from 'react';
import { MessageCircle, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Discovery Call',
      description: 'We start with a friendly chat to understand your vision, goals, and requirements.',
      duration: '1-2 days'
    },
    {
      icon: Lightbulb,
      title: 'Planning & Design',
      description: 'Our team creates wireframes, designs, and a detailed project roadmap.',
      duration: '3-5 days'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We bring your project to life with clean, scalable code and regular updates.',
      duration: '7-8 days'
    },
    {
      icon: CheckCircle,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures everything works perfectly across all devices.',
      duration: '3-5 days'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support and maintenance.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to launch, we follow a proven process that ensures your project is delivered on time and exceeds expectations.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                      {step.duration}
                    </div>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your ideas and see how we can bring them to life with our proven development process.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              onClick={() => window.open('https://calendly.com/navaj-bloch22/30min', '_blank')}
            >
              Schedule a Meeting with Feelize
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
