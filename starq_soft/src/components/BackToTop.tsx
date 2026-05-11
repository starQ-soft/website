import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  width: 10rem; 
  height: 10rem;
  right: 5vw;
  padding: 0;
  overflow: hidden;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  z-index: 999;
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '20px')});
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${({ $isVisible }) => ($isVisible ? 'scale(1.05)' : 'translateY(20px)')};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

type BackToTopProps = {
  variant?: 'main' | 'lsc';
};

const BackToTop = ({ variant = 'main' }: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgSrc =
    variant === 'lsc' ? 'public/topbutton.png' : 'public/main_top_button.png';

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
      aria-label="back to top"
    >
      <img src={imgSrc} alt="back to top" />
    </TopButton>
  );
};

export default BackToTop;