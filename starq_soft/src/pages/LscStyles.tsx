import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { createGlobalStyle } from 'styled-components';

export const LscGlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box; /* 确保 padding 不会撑大容器 */
  }

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden; /* 防止移动端左右晃动 */
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Button = styled(motion.button) <{
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.15s ease;
  cursor: pointer;

  ${({ variant = "primary" }) => {
    switch (variant) {
      case "primary":
        return `
          background: linear-gradient(135deg, #F89BB0 0%, #9c27b0 100%);
          color: white;
          &:hover {
            transform: translateY(-1px);
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          }
        `;
      case "outline":
        return `
          border: 1px solid hsl(var(--primary));
          color: hsl(var(--primary));
          background: transparent;
          &:hover {
            background: hsl(var(--primary));
            color: white;
          }
        `;
      case "ghost":
        return `
          color: hsl(222.2 84% 4.9%);
          background: transparent;
          &:hover {
            background: hsl(210 40% 98%);
          }
        `;
    }
  }}

  ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case "md":
        return `
          padding: 1rem 1.5rem;
          font-size: 1rem;
        `;
      case "lg":
        return `
          padding: 1.5rem 2rem;
          font-size: 1.125rem;
        `;
    }
  }}
`;

export const HeroSection = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 6rem;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
`;

export const HeroImage = styled(motion.div) <{ $backgroundImage: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(233, 30, 99, 0.8) 0%, rgba(156, 39, 176, 0.6) 100%);
`;

export const HeroContent = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 6rem 1rem;
`;

export const Badge = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid hsl(var(--primary));
  border-radius: 9999px;
  color: hsl(var(--primary));
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, #F89BB0 0%, #9c27b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: hsl(215.4 16.3% 46.9%);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
`;

export const HeroActions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

// export const CharacterCarousel = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 0.5rem;
//   width: 100%;

//   .nav-btn {
//     color: #ffb6c1;
//     font-size: 1.875rem;
//     background: none;
//     border: none;
//     cursor: pointer;
//   }

//   .char-list {
//     display: flex;
//     gap: 1rem;
//     overflow-x: auto;
//     padding-bottom: 1rem;
//     scrollbar-width: none; 
//     &::-webkit-scrollbar { display: none; }
//   }
// `;

// export const CharacterCard = styled.div`
//   min-width: 120px;
//   background-color: #fff0f5;
//   border: 2px solid #ffb6c1;
//   border-radius: 0.75rem;
//   padding: 0.5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .avatar {
//     width: 100%;
//     height: 8rem;
//     background-color: white;
//     border-radius: 0.375rem;
//     margin-bottom: 0.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 0.75rem;
//     color: #9ca3af;
//   }

//   h4 { font-weight: bold; font-size: 0.875rem; margin: 0; }
//   span { font-size: 0.625rem; color: #6b7280; margin-bottom: 0.25rem; }
//   p { font-size: 0.625rem; text-align: center; font-style: italic; margin-top: auto; }
// `;


export const FloatingElement = styled(motion.div) <{
  $size: number;
  $opacity: number;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: hsl(var(--primary));
  border-radius: 50%;
  opacity: ${({ $opacity }) => $opacity};
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $right }) => $right && `right: ${$right};`}
`;

// export const Section = styled.section<{ $background?: string }>`
//   padding: 6rem 0;
//   ${({ $background }) =>
//     $background && `background-color: hsl(210 40% 98%);`}
// `;

// export const SectionTitle = styled(motion.h2)`
//   font-size: 2.25rem;
//   font-weight: 700;
//   text-align: center;
//   margin-bottom: 1rem;
//   background: linear-gradient(135deg, #F89BB0 0%, #9c27b0 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// `;

export const StoryContainer = styled.section`
  padding: 100px 20px;
  background-color: #rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  color: #333;
  line-height: 2;
  letter-spacing: 0.05em;
`;

export const StoryTitle = styled.h2`
  font-size: 80px;
  font-weight: 700;
  color: #F89BB0;
  margin: 0;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 110px;
    bottom: 12px;
    width: 60px;
    height: 1px;
    background-color: #F89BB0;
  }
`;

export const StorySubtitle = styled.div`
  font-size: 42px;
  color: #F89BB0;
  margin: 80px 0 60px 0;
  text-align: center;
  font-weight: 400;
  line-height: 1.4;
  
  span {
    display: block;
  }
`;

export const StoryDescription = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #444;
  font-weight: 500;

  p {
    margin-bottom: 1.5em;
  }

  strong {
    color: #a9c1fd;
    font-weight: 600;
  }

  span {
    color: #F89BB0;
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p`
  text-align: center;
  color: hsl(215.4 16.3% 46.9%);
  font-size: 1.125rem;
  margin-bottom: 4rem;
`;

export const ContentSection = styled.section`
  padding: 80px 20px;
  background-color: #fff;
  color: white;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`

export const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const GameDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #ccc;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ScreenshotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Screenshot = styled.div`
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const ScreenshotImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Character Gallery Styles
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #ffbaeb, #ffbacc);
  color: black;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const JapaneseText = styled.h2`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 36px;
  margin: 0;
`;

export const EnglishText = styled.h3`
  font-family: "Cinzel", serif;
  font-size: 24px;
  color: #CC1075;
  margin: 10px 0 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CharacterList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const CharacterTab = styled.button<{ $isSelected: boolean }>`
  background: ${(props) =>
    props.$isSelected
      ? "linear-gradient(45deg, #e186b4, #fc5296)"
      : "transparent"};
  border: 3px solid ${(props) => (props.$isSelected ? "#aa336a" : "#fff")};
  color: white;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 30px;

  &:hover {
    border-color: #CC1075;
    box-shadow: 0 6px 20px rgba(200, 255, 255, 0.4);
  }
`;

export const CharacterName = styled.div`
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
`;

export const CharacterDisplay = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

export const CharacterInfo = styled.div`
  padding: 20px;
`;

export const CharacterHeader = styled.div`
  margin-bottom: 30px;
`;

export const JapaneseName = styled.h3`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 32px;
  margin: 0;
`;

export const EnglishName = styled.h4`
  font-size: 24px;
  color: #CC1075;
  margin: 5px 0;
`;

export const Role = styled.div`
  font-size: 1.5rem;
  color: #CC1075;
  margin-top: 10px;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

export const DetailItem = styled.div``;

export const Label = styled.div`
  font-size: 1.5rem;;
  color: #CC1075;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const Value = styled.div`
  font-size: 1.5rem;
`;

export const Likes = styled.div`
  margin-bottom: 30px;
`;

export const LikesList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const LikeItem = styled.span`
  background: rgba(255, 158, 180, 0.2);
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 1.5rem;;
`;

export const VoiceActor = styled.div``;


// lsc

export const LscContainer = styled.div`
  min-height: 100vh;
  background-color: #fff0f5;
  color: #5c3a21;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  padding-bottom: 3rem;
  position: relative;
  overflow: hidden;
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-repeat: repeat;
  opacity: 0.5;
`;

export const ContentWrapper = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
`;

// export const Section = styled.section`
//   padding: 2.5rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const SectionTitle = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: ${(props) => props.$marginBottom || '2rem'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.$color || '#5c3a21'};

  span { color: ${(props) => props.$accentColor || '#ffb6c1'}; }
`;

export const HeroBanner = styled.div`
  width: 100%;
  height: 20rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0.75rem;
  border: 2px dashed #ffb6c1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff69b4;
`;

export const PvContainer = styled.div`
  width: 100%;
  max-width: 48rem;
  aspect-ratio: 16 / 9;
  background-color: black;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;

  button {
    position: relative;
    z-index: 10;
    background-color: #dc2626;
    color: white;
    border-radius: 9999px;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    font-size: 1.5rem;
  }
`;

export const IntroBox = styled.div`
  background-color: #ffe4e1;
  border: 4px solid white;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) { flex-direction: row; }

  .content {
    flex: 1;
    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.75rem;
      border-bottom: 2px solid #ffb6c1;
      padding-bottom: 0.5rem;
      display: inline-block;
    }
    p { font-size: 0.875rem; line-height: 1.625; }
  }

  .image-placeholder {
    width: 16rem;
    height: 9rem;
    background-color: white;
    border: 2px solid #ffb6c1;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #9ca3af;
  }
`;

export const CharacterCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  .nav-btn {
    color: #ffb6c1;
    font-size: 1.875rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .char-list {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    scrollbar-width: none; 
    &::-webkit-scrollbar { display: none; }
  }
`;

export const CharacterCard = styled.div`
  min-width: 120px;
  background-color: #fff0f5;
  border: 2px solid #ffb6c1;
  border-radius: 0.75rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    width: 100%;
    height: 8rem;
    background-color: white;
    border-radius: 0.375rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #9ca3af;
  }

  h4 { font-weight: bold; font-size: 0.875rem; margin: 0; }
  span { font-size: 0.625rem; color: #6b7280; margin-bottom: 0.25rem; }
  p { font-size: 0.625rem; text-align: center; font-style: italic; margin-top: auto; }
`;

export const ProgressBoard = styled.div`
  background-color: #e6c2a5;
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border: 4px solid #d2a679;
  width: 100%;
`;

export const StickyNote = styled.div`
  background-color: #fffacd;
  width: 8rem;
  padding: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: rotate(${(props) => props.$rotation}deg);

  .date {
    font-size: 0.75rem;
    font-weight: bold;
    color: #4b5563;
    border-bottom: 1px solid #d1d5db;
    padding-bottom: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .text { font-size: 0.875rem; font-weight: 600; color: #8b4513; }
`;

export const PromotionCard = styled.div`
  background-color: #f5deb3;
  border: 4px solid #deb887;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) { flex-direction: row; }

  .promo-image {
    width: 100%;
    height: 10rem;
    background-color: white;
    border: 2px solid white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    @media (min-width: 768px) { width: 50%; }
  }

  .promo-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) { align-items: flex-start; }

    h4 { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; }
    
    ul {
      font-size: 0.75rem;
      margin-bottom: 1rem;
      line-height: 1.5;
      list-style: none;
      padding: 0;
    }

    .btn-group {
      display: flex;
      gap: 0.75rem;
      width: 100%;
      
      button {
        flex: 1;
        background-color: #ffb6c1;
        color: white;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 2px solid white;
        cursor: pointer;
      }
    }
  }
`;

export const Footer = styled.footer`
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  border-top: 2px dashed #ffb6c1;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-links {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;

    .social-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      .icon {
        width: 3rem;
        height: 3rem;
        background-color: white;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
      }
      span { font-size: 0.75rem; font-weight: bold; }
    }
  }

  .copyright { text-align: center; font-size: 0.625rem; color: #6b7280; line-height: 1.25; }
`;

export const LangSwitcherContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 50;
`;

export const LangButton = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffb6c1;
  color: #ff69b4;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;
`;

export const LangMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  border: 2px solid #ffb6c1;
  border-radius: 0.5rem;
  overflow: hidden;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  min-width: 100px;

  button {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #5c3a21;
    font-size: 0.875rem;
    border-bottom: 1px solid #fce7f3;
  }
`;