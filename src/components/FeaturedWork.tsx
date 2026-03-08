'use client';

import { ExternalLink, Laptop, MapPin, Heart } from 'lucide-react';
import { Project } from '@/types';

const FeaturedWork = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'SPUP AdServIS',
      description: 'A capstone project for St. Paul University Philippines\' Office of the Vice President for Administrative and General Services. This system streamlines and automates the university\'s administrative service processes, making them paperless and more efficient.',
      image: 'https://i.ibb.co/B26yKqCQ/SPUP-Ad-Serv-IS-Mockup.jpg',
      tags: ['Web Development', 'Process Automation', 'System Design'],
      type: 'Mobile Responsive • Web Application',
      icon: 'laptop'
    },
    {
      id: '2',
      title: 'Geofence Attendance Monitoring',
      description: 'An attendance monitoring system developed for the Department of Information and Communications Technology (DICT). Uses geofencing technology to ensure attendance can only be marked within designated locations, ensuring authenticity and integrity in attendance tracking.',
      image: 'https://i.ibb.co/GQJhg8dX/geofence-attendance.png',
      tags: ['Mobile Development', 'Geofencing', 'Location Services'],
      type: 'Mobile Responsive • Web Application',
      icon: 'map-pin'
    },
    {
      id: '3',
      title: 'Doctor Smile',
      description: 'A modern dental clinic appointment system designed to streamline scheduling, patient management, and decision-making for dental professionals. The system allows patients to book appointments, dentists to manage availability, and both parties to track records efficiently.',
      image: 'https://i.ibb.co/d4yMLBXH/doctor-smile.png',
      tags: ['Appointment System', 'Patient Management', 'Web Development'],
      type: 'Web Application',
      icon: 'heart'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'laptop':
        return <Laptop className="h-4 w-4 text-green-400" />;
      case 'map-pin':
        return <MapPin className="h-4 w-4 text-blue-400" />;
      case 'heart':
        return <Heart className="h-4 w-4 text-green-400" />;
      default:
        return <Laptop className="h-4 w-4 text-gray-400" />;
    }
  };

  const getIconColor = (iconName: string) => {
    switch (iconName) {
      case 'laptop':
        return 'bg-green-500/20';
      case 'map-pin':
        return 'bg-blue-500/20';
      case 'heart':
        return 'bg-green-500/20';
      default:
        return 'bg-gray-500/20';
    }
  };

  const getTextColor = (iconName: string) => {
    switch (iconName) {
      case 'laptop':
        return 'text-green-400';
      case 'map-pin':
        return 'text-blue-400';
      case 'heart':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleCaseStudyClick = (projectName: string) => {
    console.log(`Opening ${projectName} case study...`);
    // In a real scenario, navigate to case study page
  };

  return (
    <div className="max-w-6xl lg:px-8 mr-auto ml-auto p-6 lg:p-8 overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border border-gray-100 rounded-[40px]">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">Featured Work</h2>
        <p className="text-md text-gray-600 max-w-xl">
          A selection of projects spanning mobile apps, web platforms, and emerging technologies.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-gray-200 p-6 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-lg ${getIconColor(project.icon)} flex items-center justify-center`}>
                  {getIcon(project.icon)}
                </div>
                <span className={`text-sm font-medium ${getTextColor(project.icon)}`}>{project.type}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-md text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => handleCaseStudyClick(project.title)}
                className={`group inline-flex items-center gap-2 ${getTextColor(project.icon)} font-medium hover:text-blue-300 transition-colors duration-300`}
              >
                <span>View Case Study</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 group-hover:scale-105 transition-transform duration-500 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
