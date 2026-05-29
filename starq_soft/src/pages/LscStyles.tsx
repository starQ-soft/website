import styled, { createGlobalStyle } from "styled-components";

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

  body {
    display: block; /* override index.css flex centering so #root spans full width on wide screens */
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;

export const StoryContainer = styled.section`
  border: 2px solid #f5d2d2;
  padding: 2rem 1rem;
  background-color: #fff;
  backdrop-filter: blur(1px);
  width: 60%;
  margin: 0 auto;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  color: #111827;
  line-height: 2;
  letter-spacing: 0.05em;
`;

export const StoryTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #dd6f94 0%, #F89BB0 50%, #A7C5FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 5rem 0;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin: 3rem 0;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 2rem 0;
    align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -2rem;
    width: 60%;
    min-width: 100px;
    height: 1px;
    background-color: #3a3a3a;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const SectionSubtitle = styled.h2`
    border-bottom: 1px dashed #9b96af;
    color: #9b96af;
  `

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
  line-height: 5rem;
  color: #111827;
  font-weight: 500;

  p {
    margin-bottom: 1.5em;
  }

  strong {
    color: #9aaad2;
    font-weight: 600;
  }

  span {
    color: #CC1075;
    font-size: 2.5rem;
  }
`;

export const GameDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  background: linear-gradient(135deg,  #ffd7e6 0%, #f99bb3 15%, #a3c1f3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const CharacterCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  :hover {
    border-color: #f69db3;
    opacity: 1;
  }

  .nav-btn {
    color: #ffb6c1;
    font-size: 1.875rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .char-list {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;

    .nav-btn {
      display: none;
    }

    .char-list {
      flex-wrap: wrap;
      justify-content: center;
      overflow-x: visible;
      width: 100%;
    }
  }
`;

export const CharacterCard = styled.div<{ $isSelected?: boolean }>`
  min-width: 120px;
  flex: 0 0 auto;
  border: 2px solid ${(props) => (props.$isSelected ? "#ff0088" : "#aaa")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg,  #f69db3 0%, rgb(251, 146, 202) 45%, #d0e1fd 100%);
  color: #fffcfb;
  opacity: ${(props) => (props.$isSelected ? 1 : 0.8)};
  cursor: pointer;

  @media (max-width: 480px) {
    min-width: 0;
    width: calc((100% - 2rem) / 3);
    .avatar { height: 5rem; }
  }

  :hover {
   opacity: 1; 
   transition: opacity 0.3s ease;
  }

  .avatar {
    width: 100%;
    height: 8rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
  }

  h4 { font-weight: bold; font-size: 0.875rem; margin: 0; }
  span { font-size: 0.625rem; color: #6b7280; margin-bottom: 0.25rem; }
  p { font-size: 0.625rem; text-align: center; font-style: italic; margin-top: auto; }
`;

export const FirstWrapper = styled.p`
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: -1;
    clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0 100%);
    background-color: #fff;
    opacity: 0.8;
`;

export const SecondWrapper = styled.p`
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: -1;
    clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
    background-color: #f7f7f7;
    opacity: 1;
`;
