
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Certification {
  title: string;
  issuedBy: string;
  issueDate: string;
  expiryDate: string;
  validationNumber: string;
  image: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuedBy: 'Amazon Web Services',
      issueDate: 'Sep 09, 2023',
      expiryDate: 'Sep 09, 2026',
      validationNumber: '6PH5PJ2C7JQEQQGQ',
      image: '/lovable-uploads/58844062-c36d-415b-943c-1dfcdc2d16b2.png'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuedBy: 'Amazon Web Services',
      issueDate: 'Jan 09, 2023',
      expiryDate: 'Jan 09, 2026',
      validationNumber: '7K0JKHZ15MREQH9G',
      image: '/lovable-uploads/4328c5cd-9a6a-427d-b5f2-7ea7b88d5cce.png'
    },
    {
      title: 'AWS Certified Developer - Associate',
      issuedBy: 'Amazon Web Services',
      issueDate: 'Jan 03, 2023',
      expiryDate: 'Jan 03, 2026',
      validationNumber: 'SHFN8ZJKYJR4Q2WV',
      image: '/lovable-uploads/6e62fec6-27a5-4d34-b3ba-4d7a66bf26f5.png'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-devops-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Certifications</h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-1 bg-gradient-to-r from-devops-accent to-blue-600">
                {/* Empty div for gradient border */}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-devops-accent mr-2" size={24} />
                  <h3 className="font-bold text-xl text-devops-navy">{cert.title}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Issued by:</span> {cert.issuedBy}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Issue Date:</span> {cert.issueDate}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Expiry Date:</span> {cert.expiryDate}
                  </p>
                </div>
                
                <div className="mb-4">
                  <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800 font-medium">
                    Validation: {cert.validationNumber}
                  </Badge>
                </div>
                
                <div className="rounded-md overflow-hidden border border-gray-200 mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full object-cover"
                  />
                </div>
                
                <a 
                  href="https://aws.amazon.com/verification" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-devops-accent hover:underline inline-flex items-center gap-1"
                >
                  Verify <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
