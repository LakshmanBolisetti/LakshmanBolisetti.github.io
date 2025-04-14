
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

interface ProjectDetail {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  steps: string[];
  outcomes: string[];
  tools: string[];
}

const projectDetails: Record<string, ProjectDetail> = {
  'microservices-deployment-platform': {
    title: 'Microservices Deployment Platform',
    description: 'A comprehensive platform for deploying and managing microservices with automated CI/CD pipelines, monitoring, and self-service capabilities for development teams.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    technologies: ['Kubernetes', 'Helm', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'],
    github: 'https://github.com/username/microservices-platform',
    steps: [
      'Analyzed existing deployment workflows and identified bottlenecks',
      'Designed a scalable Kubernetes architecture with multi-environment support',
      'Implemented Helm charts for standardized application deployments',
      'Set up GitOps workflow with ArgoCD for automated deployments',
      'Configured Prometheus and Grafana for comprehensive monitoring',
      'Created developer self-service portal for deployment management'
    ],
    tools: [
      'Kubernetes for container orchestration',
      'Helm for package management',
      'ArgoCD for GitOps deployments',
      'Terraform for infrastructure provisioning',
      'Prometheus & Grafana for monitoring',
      'Harbor as container registry'
    ],
    outcomes: [
      'Reduced deployment time from days to minutes',
      'Improved system reliability with automated rollbacks',
      'Enhanced visibility into application performance',
      'Standardized deployment process across all teams',
      'Enabled self-service capabilities for developers'
    ]
  },
  'infrastructure-monitoring-solution': {
    title: 'Infrastructure Monitoring Solution',
    description: 'End-to-end monitoring solution that provides visibility into infrastructure performance, application metrics, and business KPIs through customizable dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    technologies: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'Terraform', 'AWS CloudWatch'],
    github: 'https://github.com/username/monitoring-solution',
    steps: [
      'Evaluated monitoring requirements across different teams',
      'Designed a centralized monitoring architecture',
      'Deployed Prometheus for metrics collection',
      'Set up Loki for log aggregation and searching',
      'Created custom Grafana dashboards for different stakeholders',
      'Implemented alerting with PagerDuty integration',
      'Automated infrastructure using Terraform'
    ],
    tools: [
      'Prometheus for metrics collection',
      'Loki for log management',
      'Grafana for visualization',
      'Alertmanager for alert routing',
      'AWS CloudWatch for AWS-specific metrics',
      'Terraform for infrastructure as code'
    ],
    outcomes: [
      'Consolidated monitoring across 12+ applications',
      'Reduced MTTR by 40% through improved observability',
      'Created executive dashboards for business KPIs',
      'Implemented SLO tracking for critical services',
      'Automated infrastructure scaling based on metrics'
    ]
  },
  'automated-security-scanner': {
    title: 'Automated Security Scanner',
    description: 'Security scanning tool that integrates with CI/CD pipelines to identify vulnerabilities in code, dependencies, and container images before deployment to production.',
    image: 'https://images.unsplash.com/photo-1555066932-d0d5f1c62a09',
    github: 'https://github.com/username/security-scanner',
    technologies: ['Python', 'Docker', 'Jenkins', 'OWASP', 'Trivy', 'GitLab CI'],
    steps: [
      'Analyzed security requirements and compliance needs',
      'Selected appropriate scanning tools for different vulnerability types',
      'Developed Python wrapper to consolidate scanning results',
      'Integrated scanners into CI/CD pipelines (Jenkins and GitLab)',
      'Created vulnerability database with severity tracking',
      'Implemented automated remediation suggestions',
      'Built reporting dashboard for security teams'
    ],
    tools: [
      'OWASP Dependency Check for dependency scanning',
      'Trivy for container image scanning',
      'SonarQube for code quality and security',
      'Python for integration and reporting',
      'Jenkins and GitLab CI for automation',
      'Docker for containerized execution'
    ],
    outcomes: [
      'Prevented 30+ critical vulnerabilities from reaching production',
      'Reduced manual security review time by 70%',
      'Automated compliance reporting for SOC2 requirements',
      'Improved developer awareness of security best practices',
      'Decreased time to fix vulnerabilities by 45%'
    ]
  }
};

const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetails[slug] : null;
  
  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-devops-background dark:bg-devops-background-dark">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-devops-navy dark:text-white mb-4">Project Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Sorry, the project you are looking for does not exist.</p>
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        </div>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-devops-background dark:bg-devops-background-dark pt-28 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-devops-navy dark:text-white hover:text-devops-accent dark:hover:text-devops-accent transition-colors mb-6">
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
          
          <div className="bg-white dark:bg-devops-dark rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 md:h-80 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-devops-navy dark:text-white">{project.title}</h1>
                
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-devops-navy dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                    <span>View Source</span>
                  </a>
                )}
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{project.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-devops-navy dark:text-[#2a4d80] mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-devops-navy dark:text-[#2a4d80] mb-4">Project Process</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {project.steps.map((step, index) => (
                    <li key={index} className="pl-2">{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-devops-navy dark:text-[#2a4d80] mb-4">Tools Used</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {project.tools.map((tool, index) => (
                    <li key={index} className="pl-2">{tool}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-devops-navy dark:text-[#2a4d80] mb-4">Outcomes</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="pl-2">{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default ProjectDetailsPage;
