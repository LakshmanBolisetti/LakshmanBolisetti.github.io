import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  slug: string;
}

const ProjectsSection = () => {
  const [projects] = useState<Project[]>([
    {
      title: 'Microservices Deployment Platform',
      description: 'A comprehensive platform for deploying and managing microservices with automated CI/CD pipelines, monitoring, and self-service capabilities for development teams.',
      technologies: ['Kubernetes', 'Helm', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      github: 'https://github.com/username/microservices-platform',
      slug: 'microservices-deployment-platform'
    },
    {
      title: 'Infrastructure Monitoring Solution',
      description: 'End-to-end monitoring solution that provides visibility into infrastructure performance, application metrics, and business KPIs through customizable dashboards.',
      technologies: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'Terraform', 'AWS CloudWatch'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      github: 'https://github.com/username/monitoring-solution',
      slug: 'infrastructure-monitoring-solution'
    },
    {
      title: 'Automated Security Scanner',
      description: 'Security scanning tool that integrates with CI/CD pipelines to identify vulnerabilities in code, dependencies, and container images before deployment to production.',
      technologies: ['Python', 'Docker', 'Jenkins', 'OWASP', 'Trivy', 'GitLab CI'],
      image: 'https://images.unsplash.com/photo-1555066932-d0d5f1c62a09',
      github: 'https://github.com/username/security-scanner',
      slug: 'automated-security-scanner'
    }
  ]);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-devops-background-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-title dark:text-white">Featured Projects</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-devops-dark rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-devops-navy dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-[#b0b0b0] mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-devops-navy dark:text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-devops-navy dark:text-white px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-devops-navy dark:text-[#9eacc9] hover:text-devops-accent dark:hover:text-devops-accent transition-colors"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                  
                  <Link
                    to={`/project/${project.slug}`}
                    className="flex items-center gap-1 text-sm text-devops-navy dark:text-[#9eacc9] hover:text-devops-accent dark:hover:text-devops-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
