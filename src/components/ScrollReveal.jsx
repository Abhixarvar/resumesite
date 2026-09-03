import React, { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Toggle visibility based on intersection
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: "0px 0px -50px 0px" // Slightly before it hits the bottom
    });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
