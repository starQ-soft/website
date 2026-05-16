import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';


interface PetalConfig {
  id: number;
  $left: string;
  $duration: string;
  $delay: string;
  $size: string;
  $color: string;
  $drift: string;
  $rotation: string;
  $timing: string;
  $swayDuration: string;
  $blur: string;
}

const COLORS = {
  PINK: '#ffd7e6',
  BLUE: '#d7eaff',
};

const fallAndRotate = (drift: string) => keyframes`
  0% {
    top: -10%;
    transform: translateX(0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    top: 110%;
    transform: translateX(${drift}) rotate(720deg);
    opacity: 0;
  }
`;

const sway = keyframes`
  0%, 100% { transform: translateX(-15px) rotate(-10deg); }
  50% { transform: translateX(15px) rotate(10deg); }
`;


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
  background: transparent;
`;

const SakuraPetal = styled.div<PetalConfig>`
  position: absolute;
  left: ${props => props.$left};
  width: ${props => props.$size};
  height: ${props => props.$size};
  background: ${props => props.$color};
  border-radius: 15px 0px;
  opacity: 0.7;
  filter: blur(${props => props.$blur});
  transform: rotate(${props => props.$rotation});
  animation:
    ${props => fallAndRotate(props.$drift)} ${props => props.$duration} ${props => props.$timing} infinite,
    ${sway} ${props => props.$swayDuration} ease-in-out infinite;

  animation-delay: ${props => props.$delay};

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    transform: rotate(15deg);
    top: -1px;
    left: -1px;
  }
`;


const CherryBlossomBackground: React.FC<{ count?: number }> = ({ count = 65 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const timings = [
        'linear',
        'ease-in',
        'ease-out',
        // 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        // 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      ];

      const depthFactor = Math.random();

      let blurValue = 0;
      if (depthFactor > 0.4) {
        blurValue = 0.5 + (depthFactor - 0.4) * 1.67;
      }

      const sizeMultiplier = 1 - depthFactor * 0.25;
      const speedMultiplier = 1 - depthFactor * 0.15;

      return {
        id: i,
        $left: `${Math.random() * 100}%`,
        $duration: `${(25 + Math.random() * 12) * speedMultiplier}s`, // 8s-20s 速度差
        $delay: `${Math.random() * -20}s`, // 负延迟让背景瞬间填满
        $size: `${(10 + Math.random() * 10) * sizeMultiplier}px`, // 10px-20px 之间
        $color: Math.random() > 0.4 ? COLORS.PINK : COLORS.BLUE,
        $drift: `${(Math.random() - 0.5) * 350}px`, // 水平漂移量
        $rotation: `${Math.random() * 360}deg`, // 初始旋转
        $timing: timings[Math.floor(Math.random() * timings.length)],
        $swayDuration: `${5 + Math.random() * 4}s`, // 摇摆频率
        $blur: `${blurValue}px`, // 景深模糊值
      };
    });
  }, [count]);

  return (
    <Container>
      {petals.map((p) => (
        <SakuraPetal key={p.id} {...p} />
      ))}
    </Container>
  );
};

export default CherryBlossomBackground;