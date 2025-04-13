
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-devops-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-devops-navy">Contact Information</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to me for any opportunities, collaborations, or even just to say hello!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-devops-accent bg-opacity-10 p-3 rounded-lg">
                  <Mail size={20} className="text-devops-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <a href="mailto:Lakshmankumarbolisetti@gmail.com" className="text-devops-navy hover:text-devops-accent transition-colors">
                    Lakshmankumarbolisetti@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-devops-accent bg-opacity-10 p-3 rounded-lg">
                  <Phone size={20} className="text-devops-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <a href="tel:+918143624813" className="text-devops-navy hover:text-devops-accent transition-colors">
                    8143624813
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-devops-accent bg-opacity-10 p-3 rounded-lg">
                  <Linkedin size={20} className="text-devops-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/lakshman-kumar-bolisetti/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-devops-navy hover:text-devops-accent transition-colors"
                  >
                    linkedin.com/in/lakshman-kumar-bolisetti
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-devops-navy">Send Me a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-devops-accent focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-devops-accent focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-devops-accent focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
