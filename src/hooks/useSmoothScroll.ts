import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href') as string;
        const targetSection = document.querySelector(targetId) as HTMLElement;
        
        if (targetSection) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const targetPosition = targetSection.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
};
