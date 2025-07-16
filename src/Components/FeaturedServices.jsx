 import React from 'react';
import { Smartphone, Globe, Palette, Database, Zap, Shield } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Full-stack web apps built with modern frameworks like React, Next.js, and Node.js',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native iOS/Android']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that users love and convert',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable APIs and database architecture for your applications',
      features: ['RESTful APIs', 'GraphQL', 'Cloud Infrastructure']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Make your apps lightning fast with our optimization expertise',
      features: ['Code Splitting', 'Caching', 'CDN Setup']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and up-to-date',
      features: ['Security Audits', 'Regular Updates', '24/7 Monitoring']
    }
  ];

  return (
    <section id="featured-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we handle every aspect of your digital project with expertise and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;