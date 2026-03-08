'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Header = () => {
  const [localTime, setLocalTime] = useState('--:--:--');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      setLocalTime(`${hh}:${mm}:${ss}`);
    };

    // Set initial time immediately
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    // Simulate resume download
    console.log('Resume downloaded successfully!');
    // In a real scenario, trigger actual file download
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#index" className="group flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 nav-link">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium text-gray-600">
                  Kenji Von Ashley/ <span className="tabular-nums" suppressHydrationWarning>{localTime}</span>
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#featured-work" className="text-sm text-gray-500 hover:text-white transition-colors duration-300 nav-link">Work</a>
              <a href="#experience" className="text-sm text-gray-500 hover:text-white transition-colors duration-300 nav-link">Experience</a>
              <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors duration-300 nav-link">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <button 
                onClick={handleResumeDownload}
                className="hidden sm:flex items-center gap-2 rounded-full bg-white text-gray-600 px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </button>

              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-xl z-100 transform transition-transform duration-300">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 p-6">
              <a href="#featured-work" className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 nav-link" onClick={toggleMobileMenu}>Work</a>
              <a href="#experience" className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 nav-link" onClick={toggleMobileMenu}>Experience</a>
              <a href="#contact" className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 nav-link" onClick={toggleMobileMenu}>Contact</a>
            </nav>
            <div className="p-6 mt-auto">
              <button 
                onClick={() => {
                  handleResumeDownload();
                  toggleMobileMenu();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-base font-medium hover:bg-gray-100 transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
