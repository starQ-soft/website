import React from 'react';
import styled from 'styled-components';
import steamLogo from "../assets/steam-logo.svg";
import { SteamIcon } from "../styles";

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent; 
  overflow: hidden;
`;

const TransparentImage = styled.img`
position: absolute;
  bottom: 0; 
  left: 50%;
  transform: translateX(-50%);
  width: 100%; 
  height: 100vh;
  object-fit: cover;
  
  z-index: 1;
  pointer-events: none;
  
  animation: fadeInProps 1.5s ease-out forwards;

  @keyframes fadeInProps {
    from { opacity: 0; transform: translate(-50%, 20px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
`;

const ContentBox = styled.div`
  position: relative;
  z-index: 2; /* 在图片之上 */
  text-align: center;
  color: #333; /* 假设是浅色背景，如果是深色请改为 white */
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
    src: string;
    title?: string;
    description?: string;
}

const TransparentBanner: React.FC<TransparentBannerProps> = ({
    src,
    title = "春色正浓",
    description = "透明 PNG 完美融合了背景中的樱花动画，呈现出多维度的视觉层次。"
}) => {
    return (
        <BannerContainer>
            <TransparentImage src={src} alt="Decorative Banner" />
            <ContentBox>
                <h1>{title}</h1>
                <p>{description}</p>
                <button style={{
                    marginTop: '20px',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    border: 'none',
                    background: '#ffd7e6',
                    cursor: 'pointer'
                }}>
                    <SteamIcon src={steamLogo} />
                    Add to Wishlist
                </button>
            </ContentBox>
        </BannerContainer>
    );
};

export default TransparentBanner;