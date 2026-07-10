import { motion, type Variants } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";
import steamLogo from "../assets/steam-logo.svg";
import { SteamIcon } from "../styles";
import { StoryContainer, StoryTitle, StorySubtitle, StoryDescription, GameDescription } from "./LscStyles";
import { useLanguage } from "../LanguageContext";
import { lscContent, type StorySegment } from "./lscContent";

// Render an inline story run, turning "\n" into <br/> and applying emphasis.
const renderStoryText = (text: string) =>
  text.split("\n").map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ));

const renderStorySegments = (segments: StorySegment[]) =>
  segments.map((segment, i) => {
    const content = renderStoryText(segment.t);
    if (segment.em === "span") return <span key={i}>{content}</span>;
    if (segment.em === "strong") return <strong key={i}>{content}</strong>;
    return <Fragment key={i}>{content}</Fragment>;
  });

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.15s ease;
  cursor: pointer;
  margin-top: 20px;
  padding: 12px 30px;
  border: none;
  outline: none;
  border-radius: 50px;
  background: linear-gradient(135deg,  #0a1823 0%, #033e5a 15%, #007cb1 100%);
  color: white;

  &:hover,
  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    border: none;
    transform: translateY(-1px);
    filter: saturate(1.5);
    drop-shadow: 0 1rem 2rem rgba(255, 172, 191, 0.6);
  }
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
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 6rem 1rem;
`;

const HeroTitle = styled.div`
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-weight: 700;

  p {
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const GradientText = styled.span`
  display: inline-block;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  color: #33333b;
  font-size: 1.2em;
  line-height: 1.4;
  padding-bottom: 0.1em;

  b {
    font-weight: 800;
    font-size: 1.5em;
    line-height: 1;
    background: linear-gradient(180deg, #fba8c3 0%,  #dd6f94 20%, #5a5860 50%, #33333b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroDescription = styled(motion.div)`
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  font-size: 1.5rem;
  color: hsl(215.4 16.3% 46.9%);
  margin: 5rem auto;
  max-width: 600px;

  text-shadow: 1px 0px 5px #ffffff, 0px -1px 5px #ffffff, -1px 0px 5px #ffffff, 0px 1px 5px #ffffff, 1px 0px 5px #ffffff, 0px -1px 5px #ffffff, -1px 0px 5px #ffffff, 0px 1px 5px #ffffff, 1px 0px 0px #ffffff, 0px -1px 0px #ffffff, -1px 0px 0px #ffffff, 1px 0px 0px #ffffff, 1px 0px 0px #ffffff, 0px -1px 0px #ffffff, -1px 0px 0px #ffffff, 0px 1px 0px #ffffff, 1px 0px 0px #ffffff, 0px -1px 0px #ffffff, -1px 0px 0px #ffffff, 0px 1px 0px #ffffff;

  p {
    margin-top: 1.5rem;
  }
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

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" }
  },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const wordItem: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
};

const MotionStoryTitle = motion.create(StoryTitle);
const MotionStorySubtitle = motion.create(StorySubtitle);
const MotionStoryDescription = motion.create(StoryDescription);

export const LoveCofounder: React.FC = () => {
  const { lang } = useLanguage();
  const t = lscContent[lang] ?? lscContent['zh-cn']!;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    // "lsc-nana.png",
    // "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop",
    // "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
  ];

  const wordVariant1 = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const wordVariant2 = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
  };

  const wordVariant3 = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
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
              <HeroTitle>
                {t.hero.title.map((line, lineIndex) => (
                  <p key={lineIndex}>
                    <GradientText>
                      {line.map((part, partIndex) => (
                        <motion.span key={partIndex} variants={wordItem} style={{ display: "inline-block" }}>
                          <b style={{ fontSize: part.size ?? "2em" }}>{part.big}</b>{part.small}
                        </motion.span>
                      ))}
                    </GradientText>
                  </p>
                ))}
              </HeroTitle>

              <HeroDescription variants={fadeInUp}>
                {t.hero.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </HeroDescription>

              <GameDescription>
                {t.hero.gameDescription}
              </GameDescription>

              <HeroActions variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Button>
                    {/* <Play size={20} /> */}
                    <SteamIcon src={steamLogo} />
                    {t.hero.wishlist}
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

      <Section>
        <StoryContainer>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <MotionStoryTitle variants={fadeInUp}>{t.story.title}</MotionStoryTitle>

            <MotionStorySubtitle variants={fadeInUp}>
              {t.story.subtitle}<br />
            </MotionStorySubtitle>

            <MotionStoryDescription variants={staggerContainer}>
              {t.story.paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={fadeInUp}>
                  {renderStorySegments(paragraph.segments)}
                </motion.p>
              ))}
              <br />
              <br />
            </MotionStoryDescription>
          </motion.div>
        </StoryContainer>
      </Section>
    </div>
  );
}
