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

const getLayerSize = ($isHaruka: boolean, $isNana: boolean, $isNatsumi: boolean) => {
  if ($isHaruka) return '85%';
  if ($isNana) return '90%';
  if ($isNatsumi) return '125%';
  return '100%';
};

const LayeredImage = styled.img<{
  $delay: number;
  $isHaruka: boolean;
  $isNana: boolean;
  $isNatsumi: boolean;
}>`
  position: absolute;
  left: ${({ $isHaruka, $isNatsumi }) => ($isHaruka ? '38%' :  $isNatsumi ? '42%' : '50%')};
  top: ${({ $isNana, $isHaruka, $isNatsumi }) => ($isNana ? '-2%' : $isHaruka ? '8%' : $isNatsumi ? '28%' : '0%')};
  transform: translateX(-50%);
  width: ${({ $isHaruka, $isNana, $isNatsumi }) => getLayerSize($isHaruka, $isNana, $isNatsumi)};
  height: ${({ $isHaruka, $isNana, $isNatsumi }) => getLayerSize($isHaruka, $isNana, $isNatsumi).replace('%', 'vh')};
  object-fit: ${({ $isHaruka, $isNana, $isNatsumi }) =>
    ($isHaruka || $isNana || $isNatsumi ? 'contain' : 'cover')};
  z-index: ${({ $isNana }) => ($isNana ? '-1' : '1')};
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
    images: string[];
    mobileImage?: string;
}

const TransparentBanner: React.FC<TransparentBannerProps> = ({
    images,
    mobileImage
}) => {
    return (
        <BannerContainer>
            {mobileImage && <MobileBackground src={mobileImage} alt="" draggable={false} />}
            {images.map((src, i) => (
                <LayeredImage
                    key={src}
                    src={src}
                    alt={`Banner layer ${i + 1}`}
                    $delay={i * 0.6}
                    $isHaruka={src.endsWith('haruka.gif')}
                    $isNana={src.endsWith('nana.gif')}
                    $isNatsumi={src.endsWith('natsumi.gif')}
                />
            ))}
        </BannerContainer>
    );
};

export default TransparentBanner;
