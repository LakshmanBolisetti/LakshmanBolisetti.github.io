
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

const EducationSection = () => {
  const educationItems: Education[] = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      year: '2014 - 2016',
      description: 'Specialized in Distributed Systems and Cloud Computing. Thesis on "Automated Deployment Strategies for Microservice Architectures".'
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of California, Berkeley',
      year: '2010 - 2014',
      description: 'Focus on Software Engineering and Systems Programming. Participated in the university\'s open-source initiative.'
    },
    {
      degree: 'Professional Certification',
      institution: 'AWS Certified DevOps Engineer - Professional',
      year: '2019'
    },
    {
      degree: 'Professional Certification',
      institution: 'Certified Kubernetes Administrator (CKA)',
      year: '2020'
    },
    {
      degree: 'Professional Certification',
      institution: 'HashiCorp Certified Terraform Associate',
      year: '2021'
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationItems.map((edu, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-devops-accent bg-opacity-10 p-3 rounded-lg">
                  <GraduationCap size={24} className="text-devops-accent" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-devops-navy">{edu.degree}</h3>
                  <h4 className="text-base font-medium text-gray-700">{edu.institution}</h4>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                  
                  {edu.description && (
                    <p className="mt-3 text-gray-600 text-sm">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
