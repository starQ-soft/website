import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
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
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: 7rem;
  z-index: 50;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    background-color: #fdf2f8;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 10rem;
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
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 25rem;
  margin-top: 1.5rem;
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(275deg, #e97aa3 0%, #e97292 50%, #f24677 100%);
  color: white;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  width: 80%;
  margin: 0 auto;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.01);
  }
`;

export const ScrollableContainer = styled.section`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 3rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);

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
    padding-bottom: 10px;
  }
`;

export const SteamIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  vertical-align: middle;
`;

export const PreorderText = styled.div`
  font-size: 1.75rem;
  text-align: center;
  font-weight: 500;
`;

export const Main = styled.main`
  width: 100%;
  padding: 4rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 5rem;
`;

export const SectionHeader = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  padding-bottom: 0.25rem;
  color: #e45580;
  // border-bottom: 2px #ec799a solid;
  align-items: baseline;
  margin: 1rem auto;
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
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

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
    box-shadow: ${({ $upcoming }) => $upcoming ? 'none' : '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'};
    transform: ${({ $upcoming }) => $upcoming ? 'none' : 'translateY(-4px)'};
  }
`;


export const Footer = styled.footer`
  width: 100vw;
  background:  linear-gradient(180deg, #ff668f 0%, #e97292 50%, #f993b0 100%);
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

  @media (max-width: 640px) {
    padding: 40px 15px 15px;
  }
`;

export const AboutBox = styled.div`
  padding: 2rem;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 80%;
  margin: 5rem auto;

  p {
    font-size: 0.875rem;
    line-height: 1.8;
    width: 100%;
    margin: 0 auto;
    font-weight: 500;
  }
`;

export const FormContainer = styled.form`
  max-width: 50vw;
  margin: 0 auto;
  padding: 3rem 5rem;
  background-color: rgba(240, 240, 240, 0.85);
  border: 1px solid #eee;
  backdrop-filter: blur(4px);
  border-radius: 8px;
  font-family: sans-serif;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

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
  font-size: 14px;
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
  font-size: 12px;
  margin: 1rem 0;

  input {
    margin-right: 8px;
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
    background-color: #ff76bb;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 640px) {
    justify-content: center;
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
  background: rgb(252, 175, 202);

  &:hover {
    transform: translateY(-3px);
    color: #fff;
    background: linear-gradient(275deg, rgb(230, 103, 150) 0%, #eb386b 50%, #f24677 100%);
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

export const LangButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #333;
`;

export const ProductBannerLink = styled.a`
  text-decoration: none;
`;

export const StatusMessage = styled.p`
  margin-top: 12px;
  font-size: 14px;
`;