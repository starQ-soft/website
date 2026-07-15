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
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

export interface BannerLayer {
  src: string;
  size: string;
  left: string;
  top: string;
  objectFit?: 'contain' | 'cover';
  zIndex?: number;
}

const LayeredImage = styled.img<{
  $delay: number;
  $layer: BannerLayer;
}>`
  position: absolute;
  left: ${({ $layer }) => $layer.left};
  top: ${({ $layer }) => $layer.top};
  transform: translateX(-50%);
  width: ${({ $layer }) => $layer.size};
  height: ${({ $layer }) => $layer.size.replace('%', 'vh')};
  object-fit: ${({ $layer }) => $layer.objectFit ?? 'cover'};
  z-index: ${({ $layer }) => $layer.zIndex ?? 1};
  pointer-events: none;
  opacity: 0;
  animation: ${riseIn} 2s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay}s;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileBackground = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`;

interface TransparentBannerProps {
    images: BannerLayer[];
    mobileImage?: string;
}

const TransparentBanner: React.FC<TransparentBannerProps> = ({
    images,
    mobileImage
}) => {
    return (
        <BannerContainer>
            {mobileImage && <MobileBackground src={mobileImage} alt="" draggable={false} />}
            {images.map((layer, i) => (
                <LayeredImage
                    key={layer.src}
                    src={layer.src}
                    alt={`Banner layer ${i + 1}`}
                    $delay={i * 0.6}
                    $layer={layer}
                />
            ))}
        </BannerContainer>
    );
};

export default TransparentBanner;
