import { motion } from "framer-motion";
import styled from "styled-components";
import { Play, Heart, Star, Download, Calendar, Users } from "lucide-react";
import { useState, useEffect } from "react";
import steamLogo from "../assets/steam-logo.svg";
import { SteamIcon } from "../styles";
import { StoryContainer, StoryTitle, StorySubtitle, StoryDescription } from "./LscStyles";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Button = styled(motion.button) <{
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
          background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
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

const HeroSection = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 6rem;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
`;

const HeroImage = styled(motion.div) <{ $backgroundImage: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  // background: linear-gradient(135deg, rgba(233, 30, 99, 0.8) 0%, rgba(156, 39, 176, 0.6) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 6rem 1rem;
`;

const Badge = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid hsl(var(--primary));
  border-radius: 9999px;
  color: hsl(var(--primary));
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroDescription = styled(motion.p)`
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  font-size: 1.25rem;
  color: hsl(215.4 16.3% 46.9%);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroActions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FloatingElement = styled(motion.div) <{
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

const Section = styled.section<{ $background?: string }>`
  padding: 6rem 0;
  ${({ $background }) =>
    $background && `background-color: hsl(210 40% 98%);`}
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDescription = styled.p`
  text-align: center;
  color: hsl(215.4 16.3% 46.9%);
  font-size: 1.125rem;
  margin-bottom: 4rem;
`;

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
};


export const LoveCofounder: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    "lsc.png",
    // "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop",
    // "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <HeroBackground>
          {heroImages.map((image, index) => (
            <HeroImage
              key={index}
              $backgroundImage={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 0.1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          <HeroOverlay />
        </HeroBackground>

        <Container>
          <HeroContent>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <HeroTitle variants={fadeInUp}>
                <GradientText>恋と起業とコファウンダー</GradientText>
              </HeroTitle>

              <HeroDescription variants={fadeInUp}>
                <p>一间合租公寓，一群性格各异的伙伴，</p>
                <p>和一段热血、迷茫、令人心动的共创旅程。</p>
              </HeroDescription>

              <HeroActions variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Button size="lg">
                    {/* <Play size={20} /> */}
                    <SteamIcon src={steamLogo} />
                    Add to Wishlist
                  </Button>
                </motion.div>
                {/* <motion.div {...scaleOnHover}>
                  <Button variant="outline" size="lg">
                    <Download size={20} />
                    ダウンロード
                  </Button> 
                </motion.div> */}
              </HeroActions>
            </motion.div>
          </HeroContent>
        </Container>

        {/* Floating elements */}
        <FloatingElement
          $size={16}
          $opacity={0.6}
          $top="25%"
          $left="40px"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <FloatingElement
          $size={24}
          $opacity={0.4}
          $top="33%"
          $right="80px"
          animate={{ y: [0, -30, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <FloatingElement
          $size={12}
          $opacity={0.6}
          $bottom="25%"
          $left="25%"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </HeroSection>

      {/* Featured Games */}
      <Section $background="muted">
        <StoryContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <StoryTitle>STORY</StoryTitle>

            <StorySubtitle>
              共同开启的冒险<br />
              「我们一起创业吧！」
            </StorySubtitle>

            <StoryDescription>
              <p>大学毕业后，求职无果的你，被室友一顿忽悠，<br />莫名其妙地踏上了一段从未设想过的道路……</p>
              <p><strong>零经验、零资源、零薪资——</strong></p>
              <p>唯一拥有的，是一个比你还不靠谱的合伙人，<br />以及一款连名字都没取好的<strong>「AI女友计划」</strong>。</p>
              <p>这是一次不知能否成功的冒险，在人生的空白期里，<br />尝试去<strong>「创造自己的答案」</strong>。</p>
            </StoryDescription>
          </motion.div>
        </StoryContainer>
      </Section>
    </div>
  );
}
