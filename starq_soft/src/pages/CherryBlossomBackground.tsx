import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';


interface PetalConfig {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: string;
  color: string;
  drift: string;      // 水平位移量
  rotation: string;   // 初始旋转角度
  timing: string;     // 速度曲线 (贝塞尔曲线)
  swayDuration: string; // 左右摆动周期
  blur: string;       // 景深模糊 (0px - 3px)
}

const COLORS = {
  PINK: '#ffd7e6',
  BLUE: '#d7eaff',
};

// --- 动画定义 ---

// 下落 + 主旋转动画 (drift 为动态注入的水平漂移距离)
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
    /* 每一片落下的水平终点和旋转圈数都不同 */
    transform: translateX(${drift}) rotate(720deg);
    opacity: 0;
  }
`;

// 左右小幅度晃动动画 (模拟风的扰动)
const sway = keyframes`
  0%, 100% { transform: translateX(-15px) rotate(-10deg); }
  50% { transform: translateX(15px) rotate(10deg); }
`;

// --- Styled Components ---

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
  left: ${props => props.left};
  width: ${props => props.size};
  height: ${props => props.size};
  background: ${props => props.color};
  border-radius: 15px 0px; /* 经典形状 */
  opacity: 0.7;
  
  /* --- 景深模糊效果 --- */
  filter: blur(${props => props.blur});

  /* 初始随机旋转基准 */
  transform: rotate(${props => props.rotation});

  /* 组合动画：
     1. 下落动画使用动态生成的 keyframes 和随机的速度曲线
     2. 左右晃动动画模拟微风
  */
  animation: 
    ${props => fallAndRotate(props.drift)} ${props => props.duration} ${props => props.timing} infinite,
    ${sway} ${props => props.swayDuration} ease-in-out infinite;
  
  animation-delay: ${props => props.delay};

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

// --- 组件实现 ---

const CherryBlossomBackground: React.FC<{ count?: number }> = ({ count = 65 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // 用于随机分配的速度曲线
      const timings = [
        'linear', 
        'ease-in', 
        'ease-out', 
        'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        'cubic-bezier(0.25, 0.1, 0.25, 1)'
      ];

      // --- 核心：景深模糊逻辑 ---
      // 生成一个 0 到 1 之间的深度因子 (0 近，1 远)
      const depthFactor = Math.random();
      
      // 根据深度因子计算模糊度：
      // 0.0 - 0.4 深度：保持 0px (完全清晰，强调近景主体)
      // 0.4 - 1.0 深度：线性分布在 0.5px 到 1.5px 之间 (轻微柔化背景)
      let blurValue = 0;
      if (depthFactor > 0.4) {
        blurValue = 0.5 + (depthFactor - 0.4) * 1.67; // 映射到最高 1.5px
      }
      
      const sizeMultiplier = 1 - depthFactor * 0.25; 
      const speedMultiplier = 1 - depthFactor * 0.15;

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        // 结合速度乘数
        duration: `${(8 + Math.random() * 12) * speedMultiplier}s`, // 8s-20s 速度差
        delay: `${Math.random() * -20}s`, // 负延迟让背景瞬间填满
        // 结合尺寸乘数
        size: `${(10 + Math.random() * 10) * sizeMultiplier}px`, // 10px-20px 之间
        color: Math.random() > 0.4 ? COLORS.PINK : COLORS.BLUE,
        drift: `${(Math.random() - 0.5) * 350}px`, // 水平漂移量
        rotation: `${Math.random() * 360}deg`, // 初始旋转
        timing: timings[Math.floor(Math.random() * timings.length)],
        swayDuration: `${2 + Math.random() * 4}s`, // 摇摆频率
        blur: `${blurValue}px`, // 景深模糊值
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