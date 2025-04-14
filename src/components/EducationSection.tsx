
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
      degree: 'B.Tech (Civil Engineering)',
      institution: 'Bonam Venkata Chalamayya Institute of Technology and Science, Amalapuram',
      year: '2020',
      description: 'Affiliated to J.N.T.University, Kakinada. Graduated with 8.1 CGPA.'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Vidyanidhi Junior College, Amalapuram',
      year: '2016',
      description: 'Board of Intermediate Education, A.P. Graduated with 90%.'
    },
    {
      degree: 'Class X',
      institution: 'St.Johns High School, Amalapuram',
      year: '2014',
      description: 'Board of Secondary Education, A.P. Graduated with 9.2 GPA.'
    }
  ];

  return (
    <section id="education" className="py-16 bg-white dark:bg-devops-background-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationItems.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-devops-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="bg-devops-accent bg-opacity-10 dark:bg-opacity-20 p-3 rounded-lg">
                  <GraduationCap size={24} className="text-devops-accent" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-devops-navy dark:text-white">{edu.degree}</h3>
                  <h4 className="text-base font-medium text-gray-700 dark:text-gray-300">{edu.institution}</h4>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                  
                  {edu.description && (
                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">{edu.description}</p>
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
