import { motion, type Variants } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";
import steamLogo from "../assets/steam-logo.svg";
import { SteamIcon } from "../styles";
import { StoryContainer, StoryTitle, StorySubtitle, StoryDescription, GameDescription } from "./LscStyles";

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
  background: linear-gradient(135deg,  #ffd7e6 0%, #f99bb3 15%, #a3c1f3 100%);
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
                <p>
                  <GradientText>
                    <motion.span variants={wordItem} style={{ display: "inline-block" }}>
                      <b style={{ fontSize: "2em" }}>恋</b>と
                    </motion.span>

                    <motion.span variants={wordItem} style={{ display: "inline-block" }}>
                      <b style={{ fontSize: "2em" }}>起業</b>と
                    </motion.span>
                  </GradientText>
                </p>
                <p>
                  <GradientText>
                    <motion.span variants={wordItem} style={{ display: "inline-block" }}>
                      <b style={{ fontSize: "1.25em" }}>コファウンダー</b>
                    </motion.span>
                  </GradientText>
                </p>
              </HeroTitle>

              <HeroDescription variants={fadeInUp}>
                <p>一间合租公寓，一群性格各异的伙伴，</p>
                <p>和一段热血、迷茫、令人心动的共创旅程。</p>
              </HeroDescription>

              <GameDescription>
                Steam商店页面现已公开！
              </GameDescription>

              <HeroActions variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Button>
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

      <Section>
        <StoryContainer>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <MotionStoryTitle variants={fadeInUp}>// STORY</MotionStoryTitle>

            <MotionStorySubtitle variants={fadeInUp}>
              共同开启的冒险!<br />
            </MotionStorySubtitle>

            <MotionStoryDescription variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <span>「我们一起创业吧！」</span>
              </motion.div>
              <motion.p variants={fadeInUp}>大学毕业后，求职无果的你，被室友一顿忽悠，<br />莫名其妙地踏上了一段从未设想过的道路……</motion.p>
              <motion.p variants={fadeInUp}><strong>零经验、零资源、零薪资——</strong></motion.p>
              <motion.p variants={fadeInUp}>唯一拥有的，是一个比你还不靠谱的合伙人，<br />以及一款连名字都没取好的<span>「AI女友计划」</span>。</motion.p>
              <motion.p variants={fadeInUp}>这是一次不知能否成功的冒险，在人生的空白期里，<br />尝试去<span>「创造自己的答案」</span>。</motion.p>
              <br />
              <br />
            </MotionStoryDescription>
          </motion.div>
        </StoryContainer>
      </Section>
    </div>
  );
}
