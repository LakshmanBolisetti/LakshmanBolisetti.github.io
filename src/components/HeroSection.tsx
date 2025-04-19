import React, { useState, useEffect, useCallback } from 'react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Lakshman";
  
  const startTyping = useCallback(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Add pause before resetting
        setTimeout(() => {
          setText('');
          startTyping();
        }, 3000); // 3 second pause between cycles
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cleanup = startTyping();
    return cleanup;
  }, [startTyping]);

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-devops-background to-gray-200 dark:from-devops-background-dark dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-3/5 mt-8 md:mt-0 md:pr-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-devops-navy dark:text-white min-h-[72px]">
            <span className="text-devops-navy dark:text-white">{text.slice(0, 8)}</span>
            <span className="text-[#0074D9]">{text.slice(8)}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            DevOps Engineer | Cloud Infrastructure Specialist
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            I bridge the gap between development and operations, streamlining workflows, automating deployments, 
            and building resilient infrastructure for modern applications. With expertise in CI/CD, containerization, 
            and cloud platforms, I help teams deliver software faster and more reliably.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/resume.pdf" 
              className="btn-primary"
              download="lakshman_bolisetti_resume.pdf"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a href="#contact" className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-devops-navy dark:text-white px-6 py-3 rounded-md font-medium transition-all border border-gray-300 dark:border-gray-600 hover:shadow-md inline-flex items-center justify-center">
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center animate-fade-in">
          <div className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <img 
              src="/lovable-uploads/0c280965-b20c-459f-a6c6-79d9cb2457e9.png" 
              alt="Lakshman Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
