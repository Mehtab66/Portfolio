import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Update dot position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0)`;
      }
      
      // Update ring position (with slight lag/ease handled by CSS transition usually, or manual easing)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default CustomCursor;
