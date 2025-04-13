
import React from 'react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-devops-background to-gray-200">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-3/5 mt-8 md:mt-0 md:pr-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-devops-navy">
            Hi, I'm <span className="text-devops-accent">BOLISETTI LAKSHMAN KUMAR</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Senior DevOps Engineer | Cloud Infrastructure Specialist
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            I bridge the gap between development and operations, streamlining workflows, automating deployments, 
            and building resilient infrastructure for modern applications. With expertise in CI/CD, containerization, 
            and cloud platforms, I help teams deliver software faster and more reliably.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/resume.pdf" 
              className="btn-primary"
              download="lakshman_kumar_resume.pdf"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-devops-navy px-6 py-3 rounded-md font-medium transition-all border border-gray-300 hover:shadow-md inline-flex items-center justify-center">
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center animate-fade-in">
          <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/lovable-uploads/d346ed81-0420-4a30-874c-00db4925269a.png" 
              alt="BOLISETTI LAKSHMAN KUMAR Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
