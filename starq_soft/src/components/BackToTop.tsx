import { useState, useEffect } from 'react';
import styled from 'styled-components';

type TopButtonProps = {
  $isVisible: boolean;
  $isHovered: boolean;
};

const TopButton = styled.button<TopButtonProps>`
  position: fixed;
  bottom: 0;
  bottom: env(safe-area-inset-bottom, 0px);
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
    width: 11rem;
    height: 11rem;
    right: 1rem;
  }

  @media (max-width: 480px) {
    width: 12rem;
    height: 12rem;
  }
`;

type BackToTopProps = {
  variant?: 'main' | 'lsc';
};

const BackToTop = ({ variant = 'main' }: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const baseSrc =
    variant === 'lsc' ? 'topbutton' : 'main_top_button';

  useEffect(() => {
    let frameId = 0;
    const toggleVisibility = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        setIsVisible((current) => {
          const next = window.scrollY > 300;
          return current === next ? current : next;
        });
        frameId = 0;
      });
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.cancelAnimationFrame(frameId);
    };
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
      <img className="base" src={`${import.meta.env.BASE_URL}${baseSrc}.png`} alt="back to top" />
      <img className="hover" src={`${import.meta.env.BASE_URL}${baseSrc}_hover.png`} alt="" aria-hidden="true" />
    </TopButton>
  );
};

export default BackToTop;
