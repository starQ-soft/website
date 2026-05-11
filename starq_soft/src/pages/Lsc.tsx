import { useEffect, useState } from 'react';
import logoImage from '../assets/StarQ_logo.png';
import styled, { keyframes } from 'styled-components';
import { LoveCofounderCharacter } from './CharacterGallery';
import { LoveCofounder } from './LoveCofounder';
import { motion } from 'framer-motion';
import CherryBlossomBackground from './CherryBlossomBackground';
import TransparentBanner from './TransparentBanner';
import { LscGlobalStyle, StoryTitle } from './LscStyles';
import BackToTop from '../components/BackToTop';
import { NavActions, DropdownContainer, DropdownButton, DropdownMenu, DropdownItem, LangButtonContent, Nav, Logo } from '../styles';

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
    charTitle: '登场角色',
    characters: [
      { name: '石原', title: 'Main Heroine', quote: '「……所以，你是？」' },
      { name: '设计', title: 'Designer', quote: '「这可是我熬夜做出来的！」' },
      { name: '管理', title: 'Operations Manager', quote: '「……明天前，把这搞定。」' },
      { name: '投资', title: 'Investor', quote: '「这点钱，能做出什么花样？」' },
      { name: 'YOU', title: 'Protagonist', quote: '「……作为，发起人。」' }
    ],
    progressTitle: '开发进展',
    progressNotes: [
      { date: '2022/01/20', text: 'Script 开发完成！' },
      { date: '2022/02/28', text: 'UI 替换包 成功入库！' },
      { date: '2022/03/27', text: 'AI 交互系统 测试中！' },
      { date: '2022/03/29', text: 'AI 互动系统 调试中！' },
      { date: '2022/03/29', text: 'AI 特效表现 测试中！' }
    ],
    promoTitle: '赛博创业团♥ ',
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
    pvTitle: 'P V',
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
      { date: '2022/01/20', text: 'スクリプト開発完了！' },
      { date: '2022/02/28', text: 'UI パッケージ実装成功！' },
      { date: '2022/03/27', text: 'AI 対話システム テスト中！' },
      { date: '2022/03/29', text: 'AI 連携システム 調整中！' },
      { date: '2022/03/29', text: 'AI エフェクト テスト中！' }
    ],
    promoTitle: 'サイバースタートアップ',
    promoFeatures: [
      'サイバービジネス運営',
      'AI彼女とのふれあい',
      'ハードコア起業システム',
      '没入型ストーリー体験'
    ],
    btnWishlist: 'ウィッシュリストに追加',
    btnPreorder: '予約注文',
    footerInfo: 'Developer team 最新開発進捗確認'
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
  width: 100vw;
`;


const LscContainer = styled.div`
  min-height: 100vh;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  position: relative;
  overflow-x: clip;
  width: 100vw;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-repeat: repeat;
  opacity: 0.5;
`;

const contentAppear = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ContentWrapper = styled.div`
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(1px);
  margin: 0 auto;
  position: relative;
  z-index: 10;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.08);
  opacity: 0;
  animation: ${contentAppear} 1.2s ease-out 4.5s forwards;
`;

const Section = styled.section`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
`;


const HeroBanner = styled.div`
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

const IntroBox = styled.div`
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
    width: 20rem;
    height: 10rem;
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

const CharacterCarousel = styled.div`
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

const CharacterCard = styled.div`
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
    align-items: flex-start;
    justify-content: center;
    font-size: 0.75rem;
    color: #9ca3af;
  }

  h4 { font-weight: bold; font-size: 0.875rem; margin: 0; }
  span { font-size: 0.625rem; color: #6b7280; margin-bottom: 0.25rem; }
  p { font-size: 0.625rem; text-align: center; font-style: italic; margin-top: auto; }
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
  width: 100%;
`;

const StickyNote = styled.div`
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

const PromotionCard = styled.div`
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

const Footer = styled.footer`
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.1);
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

const LangSwitcherContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 50;
`;

const LangButton = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffb6c1;
  color: #ff69b4;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;
`;

const LangMenu = styled.div`
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

const ContentSection = styled.section`
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const GameDescription = styled.p`
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
  }

  .nav-btn {
    position: absolute;
    top: 40%;
    background: transparent;
    transform: translateY(-50%);
    border: none;
    color: white;
    width: 3rem;
    height: 5rem;
    font-size: 5rem;
    font-weight: 200;
    cursor: pointer;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    transition: opacity 0.2s ease;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

  .nav-btn.prev {
    left: -8vw;
  }

  .nav-btn.next {
    right: -8vw;
  }

  @media (max-width: 768px) {
    .nav-btn.prev {
      left: 0.5rem;
    }
    .nav-btn.next {
      right: 0.5rem;
    }
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

const Lsc = () => {
  const [currentLang, setCurrentLang] = useState<'zh-cn' | 'ja-jp'>('zh-cn');
  const [langOpen, setLangOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const t = contents[currentLang];

  const handleLanguageChange = (lang: 'zh-cn' | 'ja-jp') => {
    setCurrentLang(lang);
    setLangOpen(false);
  };

  const showPrev = () => {
    setSelectedIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length));
  };

  const showNext = () => {
    setSelectedIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const bannerImageCount = 5;
    const stagger = 0.6;
    const animationDuration = 2;
    const unlockDelayMs = (bannerImageCount * stagger + animationDuration) * 1000;

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
        <a href="/">
          <Logo src={logoImage} alt="StarQ Logo" />
        </a>
        <LangSwitcherContainer>
          <NavActions>
            <DropdownContainer>
              <DropdownButton onClick={() => setLangOpen(!langOpen)}>
                <LangButtonContent>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M9.5,17c0.6,3.1,1.7,5,2.5,5s1.9-1.9,2.5-5H9.5z M16.6,17c-0.3,1.7-0.8,3.3-1.4,4.5c2.3-0.8,4.3-2.4,5.5-4.5H16.6z M3.3,17c1.2,2.1,3.2,3.7,5.5,4.5c-0.6-1.2-1.1-2.8-1.4-4.5H3.3z M16.9,15h4.7c0.2-0.9,0.4-2,0.4-3s-0.2-2.1-0.5-3h-4.7c0.2,1,0.2,2,0.2,3S17,14,16.9,15z M9.2,15h5.7c0.1-0.9,0.2-1.9,0.2-3S15,9.9,14.9,9H9.2C9.1,9.9,9,10.9,9,12C9,13.1,9.1,14.1,9.2,15z M2.5,15h4.7c-0.1-1-0.1-2-0.1-3s0-2,0.1-3H2.5C2.2,9.9,2,11,2,12S2.2,14.1,2.5,15z M16.6,7h4.1c-1.2-2.1-3.2-3.7-5.5-4.5C15.8,3.7,16.3,5.3,16.6,7z M9.5,7h5.1c-0.6-3.1-1.7-5-2.5-5C11.3,2,10.1,3.9,9.5,7z M3.3,7h4.1c0.3-1.7,0.8-3.3,1.4-4.5C6.5,3.3,4.6,4.9,3.3,7z" />
                  </svg>
                  {t.navLanguage}
                </LangButtonContent>
              </DropdownButton>
              {langOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={() => handleLanguageChange('ja-jp')}>日本語</DropdownItem>
                  <DropdownItem onClick={() => handleLanguageChange('zh-cn')}>简体中文</DropdownItem>
                </DropdownMenu>
              )}
            </DropdownContainer>
          </NavActions>
        </LangSwitcherContainer>
      </LscNav>
      <CherryBlossomBackground petalCount={80} />
      <TransparentBanner
        images={["/lsc-haruka.png", "/lsc-rin.png", "/lsc-natsumi.png", "/lsc-shizuka.png", "/lsc-nana.png",]}
        title="Cherry Blossom"
        description="Steam商店页面现已公开！"
      />
      {/* <div style={{ height: '100vh', position: 'relative', zIndex: 1 }} /> */}
      <ContentWrapper>
        <LoveCofounder />
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ marginTop: '3rem', width: '100%' }}>

              <StoryTitle>{t.charTitle}</StoryTitle>

              <GameDescription>
                Immerse yourself in the stunning visuals and detailed environments
                of SevenFold Mirrors.
              </GameDescription>
              {/* <CharacterCarousel>
                <button className="nav-btn">«</button>
                <div className="char-list">
                  {t.characters.map((char, index) => (
                    <CharacterCard key={index}>
                      <div className="avatar">[立绘]</div>
                      <h4>{char.name}</h4>
                    </CharacterCard>
                  ))}
                </div>
                <button className="nav-btn">»</button>
              </CharacterCarousel> */}
              <LoveCofounderCharacter />
            </div>
          </motion.div>
        </Section>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >

            <StoryTitle>{t.pvTitle}</StoryTitle>
            <PvContainer>
              <button>▶</button>
            </PvContainer>
            <br />
            <IntroBox>
              {/* <div className="content">
              <h3>{t.introTitle}</h3>
              <p>
                {t.introText.map((line, idx) => (
                  <React.Fragment key={idx}>{line}<br /></React.Fragment>
                ))}
              </p>
            </div> */}
              <div className="image-placeholder">[替换为: 游戏UI截图]</div>
              <div className="image-placeholder">[替换为: 游戏UI截图]</div>
              <div className="image-placeholder">[替换为: 游戏UI截图]</div>
              <div className="image-placeholder">[替换为: 游戏UI截图]</div>
              <div className="image-placeholder">[替换为: 游戏UI截图]</div>
            </IntroBox>
          </motion.div>
        </Section>

        <ContentSection>
          <SectionContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >


              <StoryTitle>Gallery</StoryTitle>

              <ScreenshotsContainer>
                {screenshots.map((img, index) => (
                  <Screenshot key={img.src} onClick={() => setSelectedIndex(index)}>
                    <ScreenshotImage src={img.src} alt={img.alt} />
                  </Screenshot>
                ))}
              </ScreenshotsContainer>
            </motion.div>
          </SectionContent>

        </ContentSection>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <StoryTitle>{t.progressTitle}</StoryTitle>
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

            <PromotionCard>
              <div className="promo-image">[替换为: 赛博创业团 宣传图]</div>
              <div className="promo-details">
                <h4>{t.promoTitle}</h4>
                <ul>
                  {t.promoFeatures.map((feature, idx) => <li key={idx}>• {feature}</li>)}
                </ul>
                <div className="btn-group">
                  <button>{t.btnWishlist}</button>
                  <button>{t.btnPreorder}</button>
                </div>
              </div>
            </PromotionCard>
          </motion.div>
        </Section>

        <Footer>
          <div className="social-links">
            <div className="social-item"><div className="icon" style={{ color: '#ff69b4' }}>📺</div><span>Bilibili</span></div>
            <div className="social-item"><div className="icon" style={{ color: 'black' }}>𝕏</div><span>Twitter</span></div>
            <div className="social-item"><div className="icon" style={{ color: '#5865F2' }}>👾</div><span>Discord</span></div>
            <div className="social-item"><div className="icon" style={{ color: '#3b82f6' }}>🐧</div><span>QQ 群</span></div>
          </div>
          <div className="copyright">
            Official copyright info. Cyber Co creation Info<br />
            {t.footerInfo}
          </div>
        </Footer>
      </ContentWrapper>
      <BackToTop variant="lsc" />
      {selectedIndex !== null && (
        <ModalOverlay onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={screenshots[selectedIndex].src} alt={screenshots[selectedIndex].alt} />
            <h1>dfsdfdsa</h1>
            <button className="close-btn" onClick={() => setSelectedIndex(null)} aria-label="Close">✕</button>
            <button className="nav-btn prev" onClick={showPrev} aria-label="Previous image">‹</button>
            <button className="nav-btn next" onClick={showNext} aria-label="Next image">›</button>
          </div>
        </ModalOverlay>
      )}
    </LscContainer>
  );
};

export default Lsc;