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
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transition: opacity 0.3s ease-in-out;
  }
  img.hover {
    opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    bottom: 1rem;
    right: 1rem;
  }

  @media (max-width: 480px) {
    width: 4rem;
    height: 4rem;
  }
`;

type BackToTopProps = {
  variant?: 'main' | 'lsc';
};

const BackToTop = ({ variant = 'main' }: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const baseSrc =
    variant === 'lsc' ? 'public/topbutton' : 'public/main_top_button';

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
      $isHovered={isHovered}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="back to top"
    >
      <img className="base" src={`${baseSrc}.png`} alt="back to top" />
      <img className="hover" src={`${baseSrc}_hover.png`} alt="" aria-hidden="true" />
    </TopButton>
  );
};

export default BackToTop;