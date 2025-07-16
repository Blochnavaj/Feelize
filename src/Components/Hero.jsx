import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const terminalLines = [
    '$ npm create feelize-app',
    '✓ Installing dependencies...',
    '✓ Setting up project structure...',
    '✓ Configuring build tools...',
    '✓ Adding some magic ✨',
    '✓ Your app is ready!',
    '💜 Built with love by Feelize'
  ];

  useEffect(() => {
    const typeWriter = () => {
      if (currentLineIndex < terminalLines.length) {
        const currentLine = terminalLines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          setTerminalText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Move to next line
          setTerminalText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          
          // Add delay between lines
          setTimeout(() => {}, 500);
        }
      } else {
        // Reset animation after completion
        setTimeout(() => {
          setTerminalText('');
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
        }, 3000);
      }
    };

    const timer = setTimeout(typeWriter, currentLineIndex === 0 && currentCharIndex === 0 ? 1000 : 100);
    return () => clearTimeout(timer);
  }, [currentCharIndex, currentLineIndex, terminalLines]);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Vibe Coding as a Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              We Build Apps That
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mt-3 leading-relaxed">
                Feel Amazing
              </span>
          </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Feelize is your dedicated development team that crafts web applications, mobile apps, and digital experiences with the perfect vibe. We don't just code – we create digital magic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group text-lg font-semibold"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* <button 
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-purple-300 hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>View Our Work</span>
          </button> */}
        </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Apps Built</div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Terminal Animation */}
          <div className="relative">
            <div className="relative z-10">
              {/* Terminal Window */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">feelize-terminal</span>
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 h-64 font-mono text-sm">
                  <div className="text-green-400">
                    <pre className="whitespace-pre-wrap leading-relaxed">
                      {terminalText}
                      <span className="animate-pulse bg-green-400 w-2 h-5 inline-block ml-1"></span>
                    </pre>
                  </div>
                </div>
              </div>
              
              {/* Floating Code Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">React.js</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg p-3 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Lightning Fast</span>
                </div>
              </div>
              
              <div className="absolute top-1/3 -left-6 bg-white rounded-lg shadow-lg p-2 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="text-xs font-mono text-gray-700">{'</>'}</div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl transform -rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
