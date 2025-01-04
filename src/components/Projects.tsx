import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and TypeScript',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center text-gray-700 hover:text-gray-900">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-gray-700 hover:text-gray-900">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}