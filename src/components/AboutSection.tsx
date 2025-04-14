
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-devops-background-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="mt-6 text-lg text-gray-700 dark:text-gray-300 space-y-4 max-w-4xl">
          <p>
            With over 3.5+ years of experience in DevOps and cloud infrastructure, I specialize in designing, implementing, and 
            maintaining robust CI/CD pipelines that enable teams to deliver software efficiently and reliably.
          </p>
          
          <p>
            My approach combines technical expertise with a deep understanding of development workflows. I believe in 
            automation-first principles, infrastructure as code, and creating self-service platforms that empower 
            development teams while maintaining operational excellence.
          </p>
          
          <p>
            I'm passionate about knowledge sharing and staying on top of industry trends. When I'm not optimizing 
            infrastructure or automating deployments, you can find me contributing to open-source projects, 
            speaking at tech meetups, or experimenting with new tools and technologies.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-devops-accent mb-2">CI/CD Pipelines</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing automated workflows for continuous integration and delivery
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-devops-accent mb-2">Infrastructure as Code</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Managing cloud resources through code for consistency and reliability
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-devops-accent mb-2">Cloud Architecture</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Designing scalable and cost-effective cloud infrastructure solutions
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-devops-accent mb-2">Monitoring & Observability</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing systems to monitor performance and troubleshoot issues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
