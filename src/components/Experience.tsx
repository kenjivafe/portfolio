'use client';

import type { Experience } from '@/types';

const ExperienceComponent = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'DICT Region II',
      position: 'Apprentice/Junior Developer',
      period: 'Feb 2025 - Jun 2025',
      duration: '4 months',
      description: 'Designed and developed a Location-based Attendance Monitoring and DTR Generating System, streamlining attendance tracking and automated DTR generation based on verified employee locations.',
      tags: ['Laravel', 'FilamentPHP', 'Tailwind CSS', 'MySQL', 'Google Maps API', 'DomPDF', 'Spatie Permissions'],
      color: 'blue'
    },
    {
      id: '2',
      company: 'Hackthenorth.ph',
      position: 'Apprentice',
      period: 'December 2024 - Present',
      duration: '1 year',
      description: 'Apprentice at a cybersecurity and ethical hacking organization specializing in security audits, vulnerability assessments, and security training programs.',
      tags: ['Cybersecurity', 'Security Audits', 'Vulnerability Assessment', 'Training'],
      color: 'red'
    },
    {
      id: '3',
      company: 'Northernware',
      position: 'Founder/Lead Developer',
      period: 'October 2025 - Present',
      duration: '4 months',
      description: 'Founded and lead my very own software development agency, overseeing project development, client relations, and technical architecture decisions.',
      tags: ['Software Development', 'Leadership', 'Project Management', 'Client Relations'],
      color: 'black'
    }
  ];

  const getCompanyColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500';
      case 'red':
        return 'bg-red-500';
      case 'black':
        return 'bg-black';
      case 'purple':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'indigo':
        return 'bg-indigo-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-400';
      case 'red':
        return 'text-red-400';
      case 'black':
        return 'text-gray-600';
      case 'purple':
        return 'text-purple-400';
      case 'indigo':
        return 'text-indigo-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="max-w-6xl lg:px-8 mr-auto ml-auto p-6 lg:p-8 overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border border-gray-100 rounded-[40px]">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">Experience</h2>
        <p className="text-md text-gray-600">Companies I&apos;ve worked with and roles I&apos;ve taken on.</p>
      </div>

      <div className="space-y-12 border-t border-gray-200 pt-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex gap-0">
            {/* Left Column - Logo and Line */}
            <div className="relative w-12">
              {/* Company Logo */}
              <img 
                src={`/logos/${exp.company === 'DICT Region II' ? 'DICT-logo.png' : 
                       exp.company === 'Hackthenorth.ph' ? 'HTN-logo.png' : 
                       'Northernware-logo.png'}`}
                alt={`${exp.company} logo`}
                className="h-8 w-8 rounded-xl shadow-sm object-cover"
              />
              
              {/* Curved Line SVG */}
              <div className="absolute top-8 left-4">
                <svg width="30" height="50" className="overflow-visible">
                  <path
                    d="M 0 0 L 0 15 Q 0 23 8 23 L 20 23"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              {/* Company Name */}
              <p className={`${getTextColor(exp.color)} font-semibold text-lg leading-tight mb-4 mt-1`}>{exp.company}</p>
              
              {/* Job Title */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">{exp.position}</h3>
                <span className="text-sm font-medium text-gray-600 shrink-0">{exp.period}</span>
              </div>
              
              {/* Job Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
