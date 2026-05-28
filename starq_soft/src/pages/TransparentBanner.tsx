import React from 'react';
import styled, { keyframes } from 'styled-components';
import steamLogo from "../assets/steam-logo.svg";
import { SteamIcon } from "../styles";

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

const ContentBox = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #333;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, #ffb7c5, #95c4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
  }
`;

interface TransparentBannerProps {
    images: string[];
    title?: string;
    description?: string;
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
