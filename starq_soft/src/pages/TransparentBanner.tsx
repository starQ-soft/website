import React from 'react';
import styled, { keyframes } from 'styled-components';

const riseIn = keyframes`
  from { opacity: 0; transform: translate(-50%, 40px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
`;

const BannerContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  overflow: hidden;
  z-index: 0;
`;

const LayeredImage = styled.img<{ $delay: number }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  animation: ${riseIn} 2s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay}s;
`;

interface TransparentBannerProps {
    images: string[];
}

const TransparentBanner: React.FC<TransparentBannerProps> = ({
    images
}) => {
    return (
        <BannerContainer>
            {images.map((src, i) => (
                <LayeredImage
                    key={src}
                    src={src}
                    alt={`Banner layer ${i + 1}`}
                    $delay={i * 0.6}
                />
            ))}
        </BannerContainer>
    );
};

export default TransparentBanner;
