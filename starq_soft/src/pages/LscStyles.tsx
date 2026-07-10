import styled, { createGlobalStyle } from "styled-components";

export const LscGlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
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
  border: 2px solid rgb(248, 248, 248);
  padding: 2rem 1rem;
  background-color: #fff;
  backdrop-filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1));
  width: min(92%, 960px);
  margin: 0 auto;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  color: #111827;
  line-height: 2;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    width: calc(100% - 1.5rem);
    padding: 1.5rem 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02em;
  }
`;

export const StoryTitle = styled.h2`
  font-size: clamp(1.6rem, 5vw, 3rem);
  font-weight: 700;
  background: linear-gradient(135deg, #222222 0%, #8d6680 80%, #CC1075 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 5rem 0;
  scroll-margin-top: 6rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  max-width: 100%;
  overflow-wrap: anywhere;

  @media (max-width: 1024px) {
    margin: 3rem 0;
  }

  @media (max-width: 768px) {
    font-size: clamp(1.35rem, 8vw, 2.25rem);
    margin: 2rem 0;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 7vw, 1.75rem);
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
  font-size: clamp(1rem, 3vw, 1.5rem);
  text-align: center;
  line-height: 1.35;
  max-width: 100%;
`

export const StorySubtitle = styled.div`
  font-size: clamp(1.5rem, 4vw, 2.625rem);
  color: #F89BB0;
  margin: 80px 0 60px 0;
  text-align: center;
  font-weight: 400;
  line-height: 1.4;
  
  span {
    display: block;
  }

  @media (max-width: 768px) {
    margin: 2.5rem 0 2rem;
  }
`;

export const StoryDescription = styled.div`
  text-align: center;
  font-size: clamp(0.85rem, 0.85vw, 1rem);
  line-height: 2.4;
  color: #1a1315;
  font-weight: 500;
  
  p {
    margin: 1.5em;
  }

  strong {
    color: #9b9ad2;
    font-weight: 600;
    padding: 0.25em 0.5em;
    background: #f7f1ff;
  }

  span {
    color: #CC1075;
    font-size: clamp(1rem, 1.25vw, 1.25rem);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.9;
    text-align: left;

    p {
      margin: 1.5em;
    }
  }
`;

export const GameDescription = styled.p`
  font-size: clamp(1.1rem, 4vw, 2.5rem);
  line-height: 1.6;
  letter-spacing: 0.18em;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  text-shadow: 
    0 0 2px #ffffff, 
    0 0 10px #0a1b29, 
    0 0 8px #007cb1, 
    0 0 5px #033e5a, 
    0 0 3px #001e2c;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  filter: saturate(1.5);
  drop-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: clamp(1rem, 5vw, 1.5rem);
    letter-spacing: 0.08em;
    padding: 0 0.75rem;
  }
`

export const Note = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  background: linear-gradient(135deg,  #ffd7e6 0%, #f99bb3 15%, #a3c1f3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  text-align: center;
  max-width: min(100%, 56rem);

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0 0.5rem;
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
    gap: 1.75rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;

    .nav-btn {
      display: none;
    }

    .char-list {
      flex-wrap: wrap;
      justify-content: center;
      overflow-x: visible;
      width: 100%;
      gap: 0.75rem;
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
    width: calc((100% - 1.5rem) / 3);
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

export const FirstWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: -1;
    clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0 100%);
    background-color: #fff;
    opacity: 0.8;
`;

export const SecondWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: -1;
    clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
    background-color: #f7f7f7;
  //   background-image: repeating-linear-gradient(
  //   to right,
  //   #f7f7f7 0px,
  //   #f7f7f7 30px,
  //   #f3f3f3 30px,
  //   #f3f3f3 60px
  // );
    opacity: 1;
`;
