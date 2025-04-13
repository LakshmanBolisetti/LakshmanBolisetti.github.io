
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { 
  Docker, 
  Kubernetes, 
  Github, 
  Terminal, 
  CloudCog, 
  Database,
  Code,
  Server,
  BarChart,
  Lock
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  details: string[];
}

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      name: 'Docker',
      icon: Docker,
      details: [
        'Writing Dockerfiles to containerize applications',
        'Managing multi-container environments with Docker Compose',
        'Optimizing Docker images for security and performance',
        'Setting up Docker registries for image management',
        'Implementing Docker Swarm for container orchestration'
      ]
    },
    {
      name: 'Kubernetes',
      icon: Kubernetes,
      details: [
        'Designing and deploying production-grade Kubernetes clusters',
        'Creating and managing Kubernetes resources (Pods, Deployments, Services)',
        'Implementing Helm charts for application deployment',
        'Setting up monitoring and logging solutions',
        'Managing resource allocation and auto-scaling'
      ]
    },
    {
      name: 'CI/CD',
      icon: Github,
      details: [
        'Designing and maintaining CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI',
        'Implementing automated testing strategies',
        'Setting up deployment strategies (blue/green, canary)',
        'Creating infrastructure validation workflows',
        'Automating security scanning in the pipeline'
      ]
    },
    {
      name: 'Terraform',
      icon: CloudCog,
      details: [
        'Writing infrastructure as code for multiple cloud providers',
        'Managing state files and implementing remote backends',
        'Creating reusable Terraform modules',
        'Setting up Terraform Cloud workspaces',
        'Implementing automated infrastructure testing'
      ]
    },
    {
      name: 'Linux/Unix',
      icon: Terminal,
      details: [
        'Managing and hardening Linux servers',
        'Shell scripting for automation tasks',
        'Performance tuning and troubleshooting',
        'Setting up cron jobs and systemd services',
        'Implementing user management and permissions'
      ]
    },
    {
      name: 'AWS',
      icon: CloudCog,
      details: [
        'Designing highly available and fault-tolerant architectures',
        'Implementing security best practices with IAM',
        'Managing EC2, S3, RDS, Lambda and ECS resources',
        'Setting up VPCs, subnets, and security groups',
        'Implementing CloudWatch monitoring and alerts'
      ]
    },
    {
      name: 'Ansible',
      icon: Server,
      details: [
        'Writing playbooks for configuration management',
        'Implementing roles for code reusability',
        'Managing infrastructure using Ansible Tower/AWX',
        'Creating dynamic inventories for cloud environments',
        'Integrating with CI/CD pipelines for consistent deployments'
      ]
    },
    {
      name: 'Databases',
      icon: Database,
      details: [
        'Setting up and managing SQL and NoSQL databases',
        'Implementing database replication and high availability',
        'Performance tuning and query optimization',
        'Database backup and recovery strategies',
        'Managing database migrations in CI/CD pipelines'
      ]
    },
    {
      name: 'Programming',
      icon: Code,
      details: [
        'Python scripting for automation and tools',
        'Go programming for DevOps utilities',
        'Bash scripting for system administration',
        'JavaScript/Node.js for web applications',
        'Building custom tools for DevOps workflows'
      ]
    },
    {
      name: 'Monitoring',
      icon: BarChart,
      details: [
        'Setting up Prometheus and Grafana for metrics',
        'Implementing ELK stack for logging',
        'Creating custom dashboards for system visibility',
        'Configuring alerts and notifications',
        'Implementing distributed tracing with Jaeger/Zipkin'
      ]
    },
    {
      name: 'Security',
      icon: Lock,
      details: [
        'Implementing security scanning in CI/CD pipelines',
        'Setting up network security policies',
        'Managing secrets with Hashicorp Vault',
        'Implementing compliance as code',
        'Container security and vulnerability management'
      ]
    },
    {
      name: 'Git',
      icon: Github,
      details: [
        'Managing code repositories and workflows',
        'Implementing branching strategies (Gitflow, trunk-based)',
        'Setting up GitHub/GitLab workflows',
        'Code review processes and best practices',
        'Automating repository maintenance tasks'
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-devops-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="skill-icon"
              onClick={() => setSelectedSkill(skill)}
            >
              <skill.icon size={40} className="text-devops-accent mb-3" />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
        
        {selectedSkill && (
          <div className="modal-backdrop" onClick={() => setSelectedSkill(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <selectedSkill.icon size={32} className="text-devops-accent" />
                  <h3 className="text-2xl font-bold text-devops-navy">{selectedSkill.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2 text-devops-navy">My Capabilities:</h4>
                <ul className="space-y-2">
                  {selectedSkill.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 mt-2 rounded-full bg-devops-accent mr-2"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm italic">
                  Click anywhere outside this window to close
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
