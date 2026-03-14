'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronDown, Award } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Header = () => {
  const [localTime, setLocalTime] = useState('--:--:--');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCertificatesDropdownOpen, setIsCertificatesDropdownOpen] = useState(false);

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
    // Download the actual resume file
    const link = document.createElement('a');
    link.href = '/Kenji-Resume-2025.pdf';
    link.download = 'Kenji-Resume-2025.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Resume downloaded successfully!');
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

              {/* Certificates Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCertificatesDropdownOpen(!isCertificatesDropdownOpen)}
                  className="hidden sm:flex items-center gap-2 rounded-full bg-white text-gray-600 px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  <Award className="h-4 w-4" />
                  <span>Certificates</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isCertificatesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCertificatesDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">General Certificates</div>
                      <a href="/certificates/C3SA by CyberWarFare Labs.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">C3SA by CyberWarFare Labs</a>
                      <a href="/certificates/Cisco Data Analytics Essentials.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Cisco Data Analytics Essentials</a>
                      <a href="/certificates/Cisco Ethical Hacker.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Cisco Ethical Hacker</a>
                      <a href="/certificates/Cisco Intro to Cybersecurity.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Cisco Intro to Cybersecurity</a>
                      <a href="/certificates/Cisco Linux Unhatched.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Cisco Linux Unhatched</a>
                      <a href="/certificates/GDSC 2022-2023.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">GDSC 2022-2023</a>
                      <a href="/certificates/Gmetrix ITS Cybersecurity.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Gmetrix ITS Cybersecurity</a>
                      <a href="/certificates/Hackthenorth.ph Membership.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Hackthenorth.ph Membership</a>
                      <a href="/certificates/Pearson ITS Cybersecurity Certificate.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Pearson ITS Cybersecurity Certificate</a>
                      <a href="/certificates/TryHackMe Advent of Cyber 2024.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">TryHackMe Advent of Cyber 2024</a>
                      <a href="/certificates/TryHackMe Introduction to Cyber Security.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">TryHackMe Introduction to Cyber Security</a>
                      <a href="/certificates/TryHackMe Pre Security.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">TryHackMe Pre Security</a>


                      <div className="px-4 py-2 mt-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">DICT Certificates</div>
                      <a href="/certificates/DICT Certificates/Digital Defense - Building Strong Cyber Hygiene.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Digital Defense - Building Strong Cyber Hygiene</a>
                      <a href="/certificates/DICT Certificates/Introduction to Power BI Essentials.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Introduction to Power BI Essentials</a>
                      <a href="/certificates/DICT Certificates/Orientation on the National Cybersecurity Plan 2023-2028.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Orientation on the National Cybersecurity Plan 2023-2028</a>
                      <a href="/certificates/DICT Certificates/Spark Advocacy.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">Spark Advocacy</a>
                    </div>
                  </div>
                )}
              </div>

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
