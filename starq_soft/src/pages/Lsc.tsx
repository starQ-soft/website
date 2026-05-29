import React, { useEffect, useRef, useState } from 'react';
import logoImage from '../assets/StarQ_logo.png';
import styled, { keyframes } from 'styled-components';
import { LoveCofounderCharacter } from './CharacterGallery';
import { LoveCofounder } from './LoveCofounder';
import { motion, useInView } from 'framer-motion';
import CherryBlossomBackground from './CherryBlossomBackground';
import TransparentBanner from './TransparentBanner';
import { LscGlobalStyle, FirstWrapper, SectionSubtitle, StoryTitle, SecondWrapper, GameDescription, Note } from './LscStyles';
import BackToTop from '../components/BackToTop';
import { Logo } from '../styles';
import { socialLinks } from '../components/footer/FooterConstants';
import LangSelector from '../LangSelector';
import { useLanguage } from '../LanguageContext';

const pv_data = [
  {
    thumbnail: "pv_haruka.png",
    url: "https://www.youtube.com/watch?v=2QZj23vzcsY",
    title: "haruka",
  },
  {
    thumbnail: "pv_shizuka.png",
    url: "https://www.youtube.com/watch?v=9xKjmQ3jpHY",
    title: "shizuka",
  },
  {
    thumbnail: "pv_nana.png",
    url: "https://www.youtube.com/watch?v=TYZ7KtprkDc&t=45s",
    title: "nana",
  },
  {
    thumbnail: "pv_natsumi.png",
    url: "https://www.youtube.com/watch?v=rhEGAtehJbo&t=4s",
    title: "natsumi",
  },
  {
    thumbnail: "pv_rin.png",
    url: "https://www.youtube.com/watch?v=W_wDK8K1LY0",
    title: "rin",
  },
  {
    thumbnail: "pv_shizuka.png",
    url: "https://www.youtube.com/watch?v=Vh2y25FXlDQ",
    title: "shizuka",
  },
];

const contents = {
  'zh-cn': {
    langName: '简体中文',
    navLanguage: '语言',
    pvTitle: 'P V',
    introTitle: '游戏简介',
    introText: [
      '一间合租公寓，一群性格各异的伙伴。',
      '一场关于AI初创公司与令人心动的共创旅程。',
      '在虚拟与现实的交织中，你将如何抉择……',
      '一段充满恋爱与梦想的理想性硬派流程！'
    ],
    progressTitle: '开发进展',
    progressNotes: [
      { date: '2026/01/20', text: 'Script 开发完成！' },
      { date: '2026/02/28', text: 'UI 替换包 成功入库！' },
      { date: '2026/03/27', text: 'AI 交互系统 测试中！' },
      { date: '2026/03/29', text: 'AI 互动系统 调试中！' },
      { date: '2026/03/29', text: 'AI 特效表现 测试中！' }
    ],
    spec: '赛博创业团♥ ',
    promoFeatures: [
      '赛博商战化运作',
      'AI女友互动体验',
      '硬核创业系统',
      '沉浸式剧情体验'
    ],
    btnWishlist: '加入愿望单',
    btnPreorder: '立即预约',
    footerInfo: 'Developer team 最新开发进展确认'
  },
  'ja-jp': {
    langName: '日本語',
    navLanguage: '言語',
    pvTitle: 'ムービー',
    introTitle: 'ゲーム紹介',
    introText: [
      'シェアハウスで暮らす、個性豊かな仲間たち。',
      'AIスタートアップと心ときめく共創の旅。',
      '仮想と現実が交差する中、あなたはどんな選択をするのか……',
      '恋と夢が詰まった理想的でハードなストーリー！'
    ],
    charTitle: '登場キャラクター',
    characters: [
      { name: '石原', title: 'Main Heroine', quote: '「……それで、あなたは？」' },
      { name: 'デザイナー', title: 'Designer', quote: '「これ、徹夜で作ったんだから！」' },
      { name: 'マネージャー', title: 'Operations Manager', quote: '「……明日までに、これを片付けて。」' },
      { name: '投資家', title: 'Investor', quote: '「この程度の資金で、何ができるって？」' },
      { name: 'YOU', title: 'Protagonist', quote: '「……発起人として。」' }
    ],
    progressTitle: '最新の開発進捗',
    progressNotes: [
      { date: '2026/01/20', text: '公式サイトを公開しました。' },
      { date: '2026/02/28', text: 'OPムービーを公開しました。' },
      { date: '2026/03/27', text: 'Steamストアページを公開しました。' },
      { date: '2026/03/27', text: 'Steamストアページを公開しました。' },
      { date: '2026/03/29', text: 'AI 連携システム 調整中！' },
      { date: '2026/03/29', text: 'AI エフェクト テスト中！' }
    ],
    spec: 'スペック',
    staff: 'スタッフ',
    promoFeatures: [
      'サイバービジネス運営',
      'AI彼女とのふれあい',
      'ハードコア起業システム',
      '没入型ストーリー体験'
    ],
    btnWishlist: 'ウィッシュリストに追加',
    btnPreorder: '予約注文',
    footerInfo: 'All rights reserved.'
  }
};


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
  gap: 1.5rem;
  padding-left: 3.5vw;
  width: 22%;
  height: 100%;
  background-color: #fff;
  transition: transform .5s cubic-bezier(.23, 1, .32, 1);
  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 90;
  filter: drop-shadow(-2px 0 4px rgba(0, 0, 0, 0.1));

  a {
    font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #CC1075;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .2s ease;

    &:hover {
      opacity: .6;
    }
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
  to   { opacity: 1; }
`;

const ContentWrapper = styled.div`
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(1px);
  margin: 0 auto;
  position: relative;
  z-index: 10;
  opacity: 0;
  animation: ${contentAppear} 1.2s ease-out 4.5s forwards;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
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
  width: 100%;
  max-width: 48rem;
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
    border-width: 2px;
  }
`;

const IntroBox = styled.div`
  background-color: rgba(255, 228, 228, 0.6);
  border: 4px solid white;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin: 2rem 0;

  @media (min-width: 768px) { flex-direction: row; }

  @media (max-width: 768px) {
    padding: 1rem;
    border-width: 2px;
  }

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
    width: 22rem;
    max-width: 100%;
    height: 12rem;
    background-color: white;
    border: 2px solid #ffb6c1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #9ca3af;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 8rem;
    }
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
  width: 80%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.75rem;
    border-width: 2px;
    gap: 0.5rem;
  }
`;

const StickyNote = styled.div`
  background-color: #fffacd;
  width: 8rem;
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
  .text { font-size: 0.875rem; font-weight: 600; color: #8b4513; }
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

    h4 { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; }

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

const Footer = styled.footer`
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  background-color: #eaeaea;
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
  width: 8rem;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ScreenshotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Screenshot = styled.div`
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(119, 105, 110, 0.3);
  transition: transform 0.3s ease;
  cursor: pointer;

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

// Hold the screenshots until the "// Gallery" title finishes typing
// (~0.8s), then reveal them one after another.
const galleryReveal = {
  hidden: {},
  visible: { transition: { delayChildren: 1, staggerChildren: 0.15 } },
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
  { src: 'cg_thumbnail_1.png', alt: 'LSC-Forest Scene' },
  { src: 'cg_thumbnail_2.png', alt: 'LSC-Battle Scene' },
  { src: 'cg_thumbnail_3.png', alt: 'LSC-Castle' },
  { src: 'cg_thumbnail_4.png', alt: 'LSC-Dragon' },
  { src: 'cg_thumbnail_5.png', alt: 'LSC-Village' },
  { src: 'cg_thumbnail_6.png', alt: 'LSC-Magic Spell' },
];

const getYoutubeEmbedUrl = (url: string) => {
  try {
    const u = new URL(url);
    const videoId = u.searchParams.get('v') ?? '';
    const t = u.searchParams.get('t');
    const startSeconds = t ? parseInt(t.replace(/\D/g, ''), 10) : 0;
    return `https://www.youtube.com/embed/${videoId}${startSeconds ? `?start=${startSeconds}` : ''}`;
  } catch {
    return url;
  }
};

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
  const inView = useInView(ref, { once: true });
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
  const [selectedPvIndex, setSelectedPvIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = contents[lang as keyof typeof contents] ?? contents['ja-jp'];
  const selectedPv = pv_data[selectedPvIndex];

  const navSections = [
    { id: 'char', label: `// ${t.charTitle ?? 'Character'}` },
    { id: 'pv', label: `// ${t.pvTitle}` },
    { id: 'gallery', label: '// Gallery' },
    { id: 'progress', label: `// ${t.progressTitle}` },
    { id: 'product', label: '// 製品情報' },
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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const prevBodyOverflow = document.body.style.overflow;
  //   const prevHtmlOverflow = document.documentElement.style.overflow;
  //   document.body.style.overflow = 'hidden';
  //   document.documentElement.style.overflow = 'hidden';

  //   const bannerImageCount = 5;
  //   const stagger = 0.6;
  //   const animationDuration = 2;
  //   const unlockDelayMs = (bannerImageCount * stagger + animationDuration) * 1000;

  //   const timer = window.setTimeout(() => {
  //     document.body.style.overflow = prevBodyOverflow;
  //     document.documentElement.style.overflow = prevHtmlOverflow;
  //   }, unlockDelayMs);

  //   return () => {
  //     window.clearTimeout(timer);
  //     document.body.style.overflow = prevBodyOverflow;
  //     document.documentElement.style.overflow = prevHtmlOverflow;
  //   };
  // }, []);

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
        <a href="/">
          <Logo src={logoImage} alt="StarQ Logo" />
        </a>
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

      <CherryBlossomBackground petalCount={80} />
      <TransparentBanner
        images={["/lsc-haruka.png", "/lsc-rin.png", "/lsc-natsumi.png", "/lsc-shizuka.png", "/lsc-nana.png",]}
      />
      <ContentWrapper>
        <LoveCofounder />
        <Section>
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >

            <TypingStoryTitle id="char" text={`// ${'charTitle' in t ? t.charTitle : ''}`} />
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
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >

              <TypingStoryTitle id="pv" text={`// ${t.pvTitle}`} />
              <motion.div variants={itemReveal} style={stepStyle}>
                <SectionSubtitle>主題ムービー</SectionSubtitle>
                <PvContainer>
                  <iframe
                    src="https://www.youtube.com/embed/lg0mlF05LPs"
                    title="主題ムービー"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 0 }}
                  />
                </PvContainer>
                <br />
                <SectionSubtitle>キャラ紹介ムービー</SectionSubtitle>
                <PvContainer>
                  <iframe
                    key={selectedPv.url}
                    src={getYoutubeEmbedUrl(selectedPv.url)}
                    title={selectedPv.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 0 }}
                  />
                </PvContainer>
                <IntroBox>
                  {pv_data.map((pv, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedPvIndex(index)}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                    >
                      <div
                        className="image-placeholder"
                        style={{
                          outline: index === selectedPvIndex ? '3px solid #ff69b4' : 'none',
                        }}
                      >
                        <img src={pv.thumbnail} alt={pv.title} />
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#5c3a21' }}>{pv.title}</span>
                    </div>
                  ))}
                </IntroBox>
              </motion.div>
            </motion.div>
          </Section>

          <Section>
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >


              <TypingStoryTitle id="gallery" text="// Gallery" />
              <motion.div variants={itemReveal} style={stepStyle}>
                <SectionContent>
                  <Note>※素材は全て開発中のものであり、予告なく変更される場合があります。</Note>
                  <MotionScreenshotsContainer
                    variants={galleryReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
                viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <TypingStoryTitle id="progress" text={`// ${t.progressTitle}`} />
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

                <TypingStoryTitle id="product" text="// 製品情報" />
                <motion.div variants={itemReveal} style={stepStyle}>
                  <PromotionCard>
                    <div className="promo-details">
                      <div className="promo-column">
                        <h4>{t.spec}</h4>
                        <ul>
                          <li><span>タイトル</span>恋と起業とコファウンダー</li>
                          {/* <li><span>ブランド</span>スターQソフト</li> */}
                          <li><span>ジャンル</span>青春起業ＡＤＶ</li>
                          <li><span>レーティング</span>全年齢対象</li>
                          <li><span>発売日</span>(未定)</li>
                          <li><span>価格</span>(未定)</li>
                          <li><span>対応OS</span>Windows® 10／11</li>
                          <li><span>CPU</span>Intel® Core™ i3第二世代以上推奨</li>
                          <li><span>DISPLAY</span>3840×2160pixel／FullColor以上</li>
                          <li><span>MEMORY</span>2GByte必須／4GByte以上推奨</li>
                          <li><span>HDD</span>	6GB以上</li>
                        </ul>
                      </div>
                      <div className="promo-column">
                        <h4>{t.staff}</h4>
                        <ul>
                          <li><span>企画／プロデューサー</span>星可</li>
                          <li><span>パブリッシャー</span>Pairaki Games</li>
                          <li><span>原画／SD／背景</span>眞海</li>
                          <li><span>キャラクターデザイン</span>眞海</li>
                          <li><span>主題歌</span>「Startup!★Start!!」by Wedoso</li>
                          <li><span>音楽</span>Wedoso</li>
                          <li><span>ＣＧ</span>中乃・トミフミ 他</li>
                          <li><span>ムービー</span>ろど 他</li>
                          <li><span>ディレクター</span>ろど</li>
                          <li><span>特別協力</span>bamboo(milktub/exOVERDRIVE)</li>
                        </ul>
                      </div>
                    </div>
                  </PromotionCard>
                  <Note>※動作環境は予定です。発売までに変更になる可能性があります。</Note>
                </motion.div>
              </motion.div>
              <div className="btn-group">
                <button>{t.btnWishlist}</button>
                <button>{t.btnPreorder}</button>
              </div>
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