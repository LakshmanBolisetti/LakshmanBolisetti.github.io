
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: 'Jan 2021 - Present',
      responsibilities: [
        'Led the migration of the company's infrastructure from traditional VMs to Kubernetes, reducing deployment time by 80%',
        'Implemented a CI/CD pipeline using GitHub Actions and ArgoCD, enabling automated deployments across multiple environments',
        'Designed and implemented a monitoring solution using Prometheus and Grafana, improving incident response time by 65%',
        'Automated infrastructure provisioning with Terraform, reducing the time to create new environments from days to minutes',
        'Mentored junior engineers on DevOps best practices and modern cloud-native technologies'
      ]
    },
    {
      title: 'Cloud Infrastructure Engineer',
      company: 'InnoSoft Inc.',
      location: 'Seattle, WA',
      period: 'Mar 2018 - Dec 2020',
      responsibilities: [
        'Managed AWS infrastructure supporting applications with over 1 million daily users',
        'Implemented Infrastructure as Code using CloudFormation and Terraform, achieving 100% infrastructure documentation',
        'Set up and maintained CI/CD pipelines using Jenkins and AWS CodePipeline',
        'Reduced AWS infrastructure costs by 35% through resource optimization and effective use of spot instances',
        'Collaborated with security team to implement automated security scanning and compliance checks'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'StartApp Technologies',
      location: 'Austin, TX',
      period: 'Jun 2016 - Feb 2018',
      responsibilities: [
        'Containerized legacy applications using Docker, improving deployment consistency and developer productivity',
        'Implemented monitoring and alerting systems using ELK stack and Nagios',
        'Automated backup and disaster recovery processes, reducing recovery time objective (RTO) by 50%',
        'Managed Linux servers and optimized performance for high-traffic web applications',
        'Collaborated with development teams to implement continuous integration practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-devops-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="mt-8 space-y-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 md:top-1/2 w-4 h-4 bg-devops-accent rounded-full border-4 border-white hidden md:block"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <h3 className="text-xl font-bold text-devops-navy">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-devops-accent mt-1 mb-2">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <h5 className="font-semibold text-devops-navy mb-2">Responsibilities:</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <div className="h-2 w-2 mt-2 rounded-full bg-devops-accent mr-2"></div>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for timeline layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
