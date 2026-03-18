import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 5vw;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: #ec4899;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(249, 83, 83, 0.15);
  z-index: 999;
  
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '20px')});
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #db2777;
    transform: ${({ $isVisible }) => ($isVisible ? 'translateY(-5px) scale(1.05)' : 'translateY(20px)')};
    box-shadow: 0 6px 15px rgba(255, 124, 165, 0.2);
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <TopButton 
      $isVisible={isVisible} 
      onClick={scrollToTop} 
      aria-label="回到顶部"
    >
      ↑
    </TopButton>
  );
};

export default BackToTop;