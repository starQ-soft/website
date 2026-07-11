import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #1f2937;
    background-color: #ffffff;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  
`;

export const GlobalContainer = styled.div`
  font-family: 'Fredoka', 'Varela Round', 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  letter-spacing: 0.03em;
  color: #5f4d52;
  background-color: #ffffff;
  @media (min-width: 768px) {
    width: 80vw;
    margin: 0 auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5vw; 
  border-bottom: 1px solid #e5e7eb;
  
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
`;

export const Logo = styled.img`
  height: 45px; 
  width: auto;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;

  @media (min-width: 768px) {
    display: flex;
  }

  a:hover {
    color: #FF5C8A;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: inherit;

  &:hover {
    color: #FF5C8A;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 1.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: 7.7rem;
  z-index: 50;
  overflow: hidden;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: #111827;
  
  &:hover {
  color: #FF5C8A;
    background-color: #fdf2f8;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 10rem;

  @media (max-width: 768px) {
    width: 5rem;
  }
`;

export const Hero = styled.header<{ $bgImage?: string }>`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 600px;
  background: linear-gradient(to right, #1e3a8a, #6b21a8, #831843);
  background-image: ${({ $bgImage }) => $bgImage ? `url(${$bgImage})` : 'none'};
  display: flex;
  align-items: center;
  padding: 0 5vw;
  overflow: hidden;
`;

// Holds the sliding banner slides behind the hero content.
export const HeroSlides = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

export const HeroSlide = styled.div<{ $bgImage?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ $bgImage }) => $bgImage ? `url(${$bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  will-change: transform;
`;

export const HeroDots = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 0.625rem;
`;

export const HeroDot = styled.button<{ $active?: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)')};
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #ffffff;
    transform: scale(1.2);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 50%;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 60%;
  }
`;

export const PrimaryButton = styled.button`
  width: fit-content;
  padding: 1rem 2rem;
  min-width: 300px;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  margin: 1rem auto;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.15s ease;
  cursor: pointer;
  margin-top: 20px;
  border: none;
  outline: none;
  border-radius: 50px;
  background: linear-gradient(135deg,  #0a1823 0%, #033e5a 15%, #007cb1 100%);
  color: white;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.01);
  }
`;

export const ScrollableContainer = styled.section`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 3rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }

  & > :first-child {
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

export const SteamIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  vertical-align: middle;
`;

export const PreorderText = styled.div`
  font-size: 3rem;
  text-align: center;
  font-weight: 500;
  text-shadow: 
    0 0 2px #ffffff, 
    0 0 10px #0a1b29, 
    0 0 8px #007cb1, 
    0 0 5px #033e5a, 
    0 0 3px #001e2c;

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 2vw, 2rem);
    letter-spacing: 0.08em;
    padding: 0 0.75rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 4rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 5rem;

  @media (max-width: 640px) {
    padding: 2rem 2vw;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.25rem;
  color: #fa4b91;
  // border-bottom: 2px #ec799a dotted;
  align-items: baseline;
  margin: 1rem auto;
`;

// Decorative sparkle rendered from public/twinkle.svg. Uses a CSS mask so
// the glyph picks up the surrounding text color via currentColor.
export const Twinkle = styled.span`
  display: inline-block;
  width: 1em;
  height: 0.75em;
  margin-left: 0.5em;
  vertical-align: middle;
  background-color: currentColor;
  -webkit-mask: url(${import.meta.env.BASE_URL}twinkle.svg) no-repeat center / contain;
  mask: url(${import.meta.env.BASE_URL}twinkle.svg) no-repeat center / contain;
`;

export const NewsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  border-bottom: 1px dashed #e5e7eb;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const TypeBadge = styled.span<{ $bgColor?: string }>`
  background-color: ${({ $bgColor }) => $bgColor ?? '#16a34a'};
  color: white;
  padding: 0.125rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  width: 80px;
  text-align: center;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const NewsDate = styled.span`
  color: #9ca3af;
  font-size: 0.75rem;
  margin-left: auto;
  font-weight: 500;
`;

export const ProductHeaderArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  color: #db2777;
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
`;

interface ProductBannerProps {
  $bgImage?: string;
  $upcoming?: boolean;
}

export const ProductBanner = styled.div<ProductBannerProps>`
  width: 100%;
  aspect-ratio: 21 / 9;
  position: relative;
  isolation: isolate;

  background-image: ${({ $bgImage }) => $bgImage ? `url(${$bgImage})` : 'none'};
  background-color: #f3f4f6;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }

  color: ${({ $bgImage }) => $bgImage ? '#ffffff' : '#9ca3af'};
  text-shadow: ${({ $bgImage }) => $bgImage ? '0 2px 8px rgba(0,0,0,0.8)' : 'none'};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.35);
    z-index: 0;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
  &:hover::before {
    background: rgba(255,255,255,0.15);
  }

  &:hover {
    box-shadow: ${({ $upcoming }) => $upcoming ? 'none' : '0 10px 15px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'};
    transform: ${({ $upcoming }) => $upcoming ? 'none' : 'translateY(-4px)'};
    border: ${({ $upcoming }) => $upcoming ? '2px solid #e5e7eb' : ' 2px solid #f3bed1'};
  }
`;


export const Footer = styled.footer`
  position: relative;
  width: 100vw;
  background: linear-gradient(180deg, #ffa8ba 0%, #f68da3 50%, #ef7790 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${import.meta.env.BASE_URL}star_bg.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    mix-blend-mode: multiply;
    opacity: 0.4;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const FooterTop = styled.footer`
  width: 100vw;
  height: 0.5rem;
  background: repeating-linear-gradient(
    -45deg, 
    #ffd88f, 
    #ffd88f 20px, 
    #ee819e 20px, 
    #ee819e 40px
  );
`;

export const FooterContent = styled.div`
  width: 100%;
  padding: 0 5vw; 
      padding: 4rem 0;
  text-align: center;
  padding: 5rem 0 2rem 0;
  margin-top: auto;
  opacity: 0.9;
  color: #fff;

  @media (max-width: 640px) {
    padding: 40px 15px 15px;
  }
`;

export const AboutBox = styled.div`
  padding: 2rem;
  align-items: flex-end;
  justify-content: space-between;
  width: 80%;

  p {
    font-size: 0.875rem;
    line-height: 1.8;
    width: 100%;
    margin: 0 auto;
    font-weight: 500;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 50vw;
  margin: 0 auto;
  padding: 3rem 5rem;
  background-color: rgba(252, 252, 252, 0.85);
  border: 1px solid #eee;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 8px;
  font-family: sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2rem 1rem;
  }

  @media (max-width: 420px) {
    padding: 1.5rem 0.75rem;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #555;
  margin-bottom: 24px;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #FF5C8A;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #FF5C8A;
  }
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 4px;
  font-size: 12px;
  margin: 1rem 0;
  text-align: center;
  line-height: 1.5;

  input {
    margin-right: 8px;
    flex: 0 0 auto;
  }

  a {
    color: #FF5C8A;
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  background-color: #FF5C8A;
  width: 50%;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem auto;
  &:hover {
    background-color: #ff7099;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
`;

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    color: #fff;
    background: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
  }
`;


export const Copyright = styled.div`
  margin-top: 2rem;
  color: #fff;
  text-align: center;
`;

export const LangButtonContent = styled.span<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  letter-spacing: 0.75px;
  gap: 6px;
  color: ${({ $open }) => ($open ? '#FF5C8A' : '#111827')};
  transition: color 0.2s ease;

  &:hover {
    color: #FF5C8A;
  }
`;

export const ProductBannerLink = styled.a`
  text-decoration: none;
`;

export const StatusMessage = styled.p`
  margin-top: 12px;
  font-size: 14px;
`;
