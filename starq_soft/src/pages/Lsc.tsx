import React, { useEffect, useRef, useState } from 'react';
import logoImage from '../assets/StarQ_logo.png';
import styled, { keyframes } from 'styled-components';
import { LoveCofounderCharacter } from './CharacterGallery';
import { LoveCofounder } from './LoveCofounder';
import { motion, useInView } from 'framer-motion';
import CherryBlossomBackground from './CherryBlossomBackground';
import TransparentBanner from './TransparentBanner';
import { LscGlobalStyle, FirstWrapper, SectionSubtitle, StoryTitle, SecondWrapper, Note } from './LscStyles';
import BackToTop from '../components/BackToTop';
import { Logo } from '../styles';
import { socialLinks } from '../components/footer/FooterConstants';
import LangSelector from '../LangSelector';
import { useLanguage } from '../LanguageContext';
import { lscContent } from './lscContent';
import { Link } from 'react-router-dom';

export const LscNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;

const Ham = styled.div<{ $open?: boolean }>`
  position: relative;
  padding: 0;
  z-index: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  span {
    display: block;
    width: 22px;
    height: 1.5px;
    border-radius: 1.5px;
    background-color: ${({ $open }) => ($open ? '#CC1075' : '#2d2d2d')};
    transition: transform .3s ease, opacity .3s ease;
  }

  .top {
    transform: ${({ $open }) => ($open ? 'translateY(7.5px) rotate(45deg)' : 'none')};
  }
  .middle {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }
  .bottom {
    transform: ${({ $open }) => ($open ? 'translateY(-7.5px) rotate(-45deg)' : 'none')};
  }
`;

const SideNav = styled.nav<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem clamp(1.25rem, 3.5vw, 3rem);
  width: clamp(16rem, 24vw, 24rem);
  height: 100%;
  background-color: #fff;
    background-image: repeating-linear-gradient(
    to right,
    #faf6f8 0px,
    #faf6f8 30px,
    #fff 30px,
    #fff 60px
  );
  transition: transform .5s cubic-bezier(.23, 1, .32, 1);
  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 90;
  filter: drop-shadow(-2px 0 4px rgba(0, 0, 0, 0.1));

  a {
    font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
    font-size: clamp(1.05rem, 2vw, 1.75rem);
    font-weight: 700;
    color: #CC1075;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .2s ease;

    &:hover {
      opacity: .6;
    }
  }

  @media (max-width: 768px) {
    width: min(82vw, 22rem);
    gap: 1rem;
    padding-top: 4.5rem;
  }
`;


const LscContainer = styled.div`
  min-height: 100vh;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  position: relative;
  overflow-x: clip;
  width: 100%;
  box-sizing: border-box;
`;

const contentAppear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ContentWrapper = styled.div`
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(1px);
  margin: 0 auto;
  position: relative;
  z-index: 10;
  opacity: 0;
  animation: ${contentAppear} 0.6s ease-out 4.4s forwards;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    opacity: 1;
    animation: none;
  }
`;

const Section = styled.section`
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }
`;


const PvContainer = styled.div`
  width: min(60%, 80rem);
  min-width: 0;
  aspect-ratio: 16 / 9;
  background-color: black;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 90%;
    border-width: 2px;
    margin: 1rem 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
  }
`;

const ProgressBoard = styled.div`
  background-color: #e6c2a5;
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border: 4px solid #d2a679;
  width: min(100%, 64rem);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.75rem;
    border-width: 2px;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }
`;

const StickyNote = styled.div<{ $rotation: string }>`
  background-color: #fffacd;
  width: clamp(7rem, 18vw, 8.5rem);
  padding: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: rotate(${(props) => props.$rotation}deg);

  @media (max-width: 480px) {
    width: calc((100% - 0.5rem) / 2);
    padding: 0.5rem;
  }

  .date {
    font-size: 0.75rem;
    font-weight: bold;
    color: #4b5563;
    border-bottom: 1px solid #d1d5db;
    padding-bottom: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .text { font-size: 0.875rem; font-weight: 600; color: #8b4513; line-height: 1.35; }

  @media (max-width: 480px) {
    transform: none;

    .date { font-size: 0.68rem; }
    .text { font-size: 0.78rem; }
  }
`;

const PromotionCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) { flex-direction: row; }

  @media (max-width: 768px) {
    border-width: 2px;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .promo-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }

    .promo-column {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      @media (min-width: 768px) { align-items: flex-start; }
    }

    h4 {
      font-size: clamp(1.05rem, 3vw, 1.5rem);
      font-weight: bold;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    ul {
      font-size: 0.75rem;
      margin-bottom: 1rem;
      line-height: 1.8;
      list-style: none;
      padding: 0;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
    }

    ul li {
      display: grid;
      grid-template-columns: 10rem 1fr;
      column-gap: 0.75rem;
      align-items: start;
      text-align: left;
      padding: 0.15rem 0;
      margin: 0.5rem 0;
      min-width: 0;
    }

    ul li span {
      color: #302b2b;
      font-weight: bold;
      padding: 0.1rem 0.5rem;
      border-radius: 0.25rem;
      text-align: left;
      box-sizing: border-box;
      width: 100%;
    }

    @media (max-width: 640px) {
      gap: 1.25rem;

      ul {
        font-size: 0.7rem;
        line-height: 1.55;
      }

      ul li {
        grid-template-columns: minmax(5.5rem, 40%) 1fr;
        column-gap: 0.4rem;
        margin: 0.35rem 0;
      }

      ul li span {
        padding: 0.05rem 0.25rem;
      }
    }

    @media (max-width: 420px) {
      ul li {
        grid-template-columns: 1fr;
        row-gap: 0.1rem;
      }
    }

  }
`;

const Footer = styled.footer`
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  background-color: #eaeaea;
  // background-image: repeating-linear-gradient(
  //   to right,
  //   #f3f3f3 0px,
  //   #f3f3f3 30px,
  //   #eaeaea 30px,
  //   #eaeaea 60px
  // );
  padding-top: 5rem;
  padding-bottom: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .social-links {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 480px) {
      gap: 1rem;
    }

    .social-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      text-decoration: none;

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
        color: #111827;
        transition: color 0.3s ease;
      }

      &:hover .icon {
        color: #dd6f94;
      }

      span { font-size: 0.75rem; font-weight: bold; }
    }
  }

  .copyright { text-align: center; font-size: 0.725rem; color: #6b7280; line-height: 1.25; }
`;

const LangSwitcherContainer = styled.div`
  z-index: 50;
  width: 7rem;

  @media (max-width: 480px) {
    width: 6rem;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const ScreenshotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`

const Screenshot = styled.div`
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(119, 105, 110, 0.3);
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 100%;
  min-width: 0;

  &:hover {
    transform: scale(1.02);
  }
`

const ScreenshotImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const MotionScreenshotsContainer = motion.create(ScreenshotsContainer);
const MotionScreenshot = motion.create(Screenshot);

const galleryReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const screenshotItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;

  .modal-content {
    position: relative;
    display: inline-block;
    cursor: default;
  }

  img {
    display: block;
    max-width: 80vw;
    max-height: 65vh;
    object-fit: contain;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 0.5rem solid white;

    @media (max-width: 768px) {
      max-width: 92vw;
      max-height: 70vh;
      border-width: 0.25rem;
    }
  }

  .close-btn {
    position: absolute;
    top: -4rem;
    right: -5rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
      top: -2.5rem;
      right: 0;
    }
  }

  .slick-prev, .slick-next {
    position: absolute;
    top: 50%;
    z-index: 10;
    display: block;
    width: 4em;
    height: 4em;
    padding: 0;
    color: transparent;
    cursor: pointer;
    background: #262526;
    border: none;
    opacity: 0.8;
    border-radius: 50%;
    outline: none;
    transition: transform 0.2s;
    transform: translate(0, -50%);
  }

  .slick-prev::before, .slick-next::before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 1em;
    height: 1em;
    content: "";
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  .slick-prev { left: -6em; }
  .slick-next { right: -6em; }
  .slick-prev::before { transform: translate(-25%, -50%) rotate(-135deg); }
  .slick-next::before { transform: translate(-75%, -50%) rotate(45deg); }

  @media (max-width: 768px) {
    .slick-prev, .slick-next {
      width: 2.5em;
      height: 2.5em;
    }
    .slick-prev { left: 0.5rem; }
    .slick-next { right: 0.5rem; }
  }
`;

const screenshots = [
  // { src: 'cg_thumbnail_1.png', alt: 'LSC-Forest Scene' },
  // { src: 'cg_thumbnail_2.png', alt: 'LSC-Battle Scene' },
  // { src: 'cg_thumbnail_3.png', alt: 'LSC-Castle' },
  { src: `${import.meta.env.BASE_URL}cg_thumbnail_4.png`, alt: 'LSC-Dragon' },
  { src: `${import.meta.env.BASE_URL}cg_thumbnail_5.png`, alt: 'LSC-Village' },
  { src: `${import.meta.env.BASE_URL}cg_thumbnail_6.png`, alt: 'LSC-Magic Spell' },
];

const MotionStoryTitle = motion.create(StoryTitle);

// Two-step reveal: the StoryTitle animates in first, then the
// remaining section content follows via staggerChildren.
const sectionReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const revealViewport = {
  once: true,
  margin: '0px 0px 150px 0px',
} as const;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  margin-left: 0.08em;
  background-color: #dd6f94;
  vertical-align: text-bottom;
  animation: ${blink} 0.8s step-end infinite;
`;

// Typewriter: reveal the title one character at a time once it scrolls into
// view, with a caret that follows the last typed character and disappears
// when typing finishes.
const TypingStoryTitle = ({ id, text }: { id?: string; text: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, revealViewport);
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (!inView || done) return;
    const timer = setTimeout(() => setCount((c) => c + 1), 80);
    return () => clearTimeout(timer);
  }, [inView, done, count]);

  return (
    <MotionStoryTitle id={id} ref={ref}>
      <span style={{ display: 'inline-block' }}>
        <span style={{ whiteSpace: 'pre' }}>{text.slice(0, count)}</span>
        {!done && <Cursor />}
      </span>
    </MotionStoryTitle>
  );
};

const stepStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
} as const;

const Lsc = () => {
  const { lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = lscContent[lang] ?? lscContent['zh-cn']!;

  const navSections = [
    { id: 'char', label: `// ${t.nav.char}` },
    { id: 'pv', label: `// ${t.nav.pv}` },
    { id: 'gallery', label: `// ${t.nav.gallery}` },
    { id: 'progress', label: `// ${t.nav.progress}` },
    { id: 'product', label: `// ${t.nav.product}` },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const showPrev = () => {
    setSelectedIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length));
  };

  const showNext = () => {
    setSelectedIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
  };

  useEffect(() => {
    // Mobile uses a static banner, so it does not need an intro scroll lock.
    if (window.matchMedia('(max-width: 768px)').matches) return;

    window.scrollTo(0, 0);
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Five layers: the last starts at 2.4s and its animation lasts 2s.
    const unlockDelayMs = 4400;
    const timer = window.setTimeout(() => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    }, unlockDelayMs);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', onKey);

    const scrollY = window.scrollY;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [selectedIndex]);

  return (
    <LscContainer>
      <LscGlobalStyle />
      <LscNav>
        <Link to="/">
          <Logo src={logoImage} alt="StarQ Logo" />
        </Link>
        <NavRight>
          <LangSwitcherContainer>
            <LangSelector />
          </LangSwitcherContainer>
          <Ham $open={menuOpen} onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
          </Ham>
        </NavRight>

        <SideNav $open={menuOpen}>
          {navSections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
              {label}
            </a>
          ))}
        </SideNav>
      </LscNav>

      <CherryBlossomBackground count={80} />
      <TransparentBanner
        images={[
          `${import.meta.env.BASE_URL}haruka.gif`,
          `${import.meta.env.BASE_URL}rin.gif`,
          `${import.meta.env.BASE_URL}lsc-natsumi.png`,
          `${import.meta.env.BASE_URL}shizuka.gif`,
          `${import.meta.env.BASE_URL}nana.gif`,
        ]}
        mobileImage={`${import.meta.env.BASE_URL}lsc_mobile.png`}
      />
      <ContentWrapper>
        <LoveCofounder />
        <Section>
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >

            <TypingStoryTitle id="char" text={`// ${t.nav.char}`} />
            <motion.div variants={itemReveal} style={stepStyle}>
              <LoveCofounderCharacter />
            </motion.div>
          </motion.div>
        </Section>

        <FirstWrapper>
          <br />
          <br />
          <br />
          <br />
          <Section>
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >

              <TypingStoryTitle id="pv" text={`// ${t.nav.pv}`} />
              <motion.div variants={itemReveal} style={stepStyle}>
                <SectionSubtitle>{t.pv.themeMovie}</SectionSubtitle>
                <PvContainer>
                  <iframe
                    src="https://www.youtube.com/embed/65X4QUW5ibc"
                    title={t.pv.themeMovie}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 0 }}
                  />
                </PvContainer>
              </motion.div>
            </motion.div>
          </Section>

          <Section>
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >


              <TypingStoryTitle id="gallery" text={`// ${t.nav.gallery}`} />
              <motion.div variants={itemReveal} style={stepStyle}>
                <SectionContent>
                  <Note>{t.galleryNote}</Note>
                  <MotionScreenshotsContainer
                    variants={galleryReveal}
                  >
                    {screenshots.map((img, index) => (
                      <MotionScreenshot
                        key={img.src}
                        variants={screenshotItem}
                        onClick={() => setSelectedIndex(index)}
                      >
                        <ScreenshotImage src={img.src} alt={img.alt} />
                      </MotionScreenshot>
                    ))}
                  </MotionScreenshotsContainer>
                </SectionContent>
              </motion.div>
            </motion.div>
          </Section>

          <SecondWrapper>
            <br />
            <br />
            <br />
            <br />
            <Section>
              <motion.div
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <TypingStoryTitle id="progress" text={`// ${t.nav.progress}`} />
                <motion.div variants={itemReveal} style={stepStyle}>
                  <ProgressBoard>
                    {t.progressNotes.map((note, index) => {
                      const rotation = (Math.random() * 6 - 3).toFixed(2);
                      return (
                        <StickyNote key={index} $rotation={rotation}>
                          <p className="date">{note.date}</p>
                          <p className="text">{note.text}</p>
                        </StickyNote>
                      );
                    })}
                  </ProgressBoard>
                </motion.div>

                <TypingStoryTitle id="product" text={`// ${t.nav.product}`} />
                <motion.div variants={itemReveal} style={stepStyle}>
                  <PromotionCard>
                    <div className="promo-details">
                      <div className="promo-column">
                        <h4>{t.spec.title}</h4>
                        <ul>
                          {t.spec.items.map((item, index) => (
                            <li key={index}><span>{item.label}</span>{item.value}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="promo-column">
                        <h4>{t.staff.title}</h4>
                        <ul>
                          {t.staff.items.map((item, index) => (
                            <li key={index}><span>{item.label}</span>{item.value}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </PromotionCard>
                  <Note>{t.product.note}</Note>
                </motion.div>
              </motion.div>
              {/* <ProductActions>
                <button>{t.product.btnDemo}</button>
                <button>{t.product.btnPreorder}</button>
              </ProductActions> */}
            </Section>

            <Footer>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    className="social-item"
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <div className="icon">{social.icon}</div>
                  </a>
                ))}
              </div>
              <div className="copyright">
                © 2026 StarQ Soft LLC.<br />
                {t.footerInfo}
              </div>
            </Footer>
          </SecondWrapper>
        </FirstWrapper>
      </ContentWrapper>
      <BackToTop variant="lsc" />
      {selectedIndex !== null && (
        <ModalOverlay onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={screenshots[selectedIndex].src} alt={screenshots[selectedIndex].alt} />
            <button className="close-btn" onClick={() => setSelectedIndex(null)} aria-label="Close">✕</button>
            <button className="slick-prev" onClick={showPrev} aria-label="Previous image" />
            <button className="slick-next" onClick={showNext} aria-label="Next image" />
          </div>
        </ModalOverlay>
      )}
    </LscContainer>
  );
};

export default Lsc;
