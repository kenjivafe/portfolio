'use client';

import { ArrowRight, MessageCircle, Linkedin, Github, Code2 } from 'lucide-react';

const Hero = () => {
  const handleScheduleCall = () => {
    // Will be implemented with modal functionality
    console.log('Schedule call clicked');
  };

  return (
    <div className="relative w-full py-12 sm:py-16 px-4 sm:px-6 mx-auto">
      <div className="relative">
    <div className="max-w-6xl lg:px-8 mr-auto ml-auto p-6 lg:p-8 overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border border-gray-100 rounded-[40px]">
          <div className="flex items-center justify-between">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full backdrop-blur-xl text-sm text-gray-600 bg-gray-100 border border-gray-200 shadow-inner shadow-white px-4 py-2">
                  <img src="/logos/Northernware-logo.png" alt="" className="h-6 w-6 inline-block mr-1" />
                  Currently at Northernware.ph • Available March 2026
                </div>

                <div className="space-y-6">
                  <p className="text-md text-gray-600 leading-relaxed">Hi, I am Kenji Von Ashley</p>
                  <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 leading-none">
                    Building smart 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-gray-900"> solutions</span>
                  </h1>

                  <p className="text-md text-gray-600 leading-relaxed max-w-lg">
                    Software Developer focused on creating intuitive, accessible, and delightful user experiences for consumer tech products.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-200 pt-6">
                  <a href="#featured-work" className="group flex items-center justify-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 nav-link">
                    <span>View My Work</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <button 
                    onClick={handleScheduleCall}
                    className="group flex items-center justify-center gap-2 rounded-full shadow-inner shadow-white border border-gray-200 bg-gray-100 text-gray-600 px-6 py-3 text-base font-medium hover:bg-gray-100 hover:scale-105 hover:border-gray-300/50 transition-all duration-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Let&apos;s Talk</span>
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a href="https://linkedin.com/in/kenji-von-ashley" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-100 p-2 shadow-inner shadow-white border border-gray-200 text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/kenjivafe" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-100 p-2 shadow-inner shadow-white border border-gray-200 text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mt-0 lg:mt-0">
                <div className="relative overflow-visible rounded-3xl bg-gradient-to-br from-gray-100 to-gray-100/0 border border-gray-200 shadow-inner shadow-white">
                  <img 
                    src="/professional-headshot.png" 
                    alt="Kenji Von Ashley" 
                    className="w-full h-[550px] max-h-[550px] lg:max-h-[550px] object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-full backdrop-blur-xs shadow-inner shadow-white/40 border border-white/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <Code2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Currently developing</p>
                          <p className="text-xs text-gray-300">Blockchain-based Freelancing Platform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
