import React, { useState } from 'react';
import styled from 'styled-components';
import { LoveCofounderCharacter } from './CharacterGallery';
import { LoveCofounder } from './LoveCofounder';
import { motion } from 'framer-motion';
import CherryBlossomBackground from './CherryBlossomBackground';
import TransparentBanner from './TransparentBanner';
import { LscGlobalStyle } from './LscStyles';
import BackToTop from '../components/BackToTop';

const contents = {
  'zh-cn': {
    langName: '简体中文',
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
    progressTitle: '最新开发进展',
    progressNotes: [
      { date: '2022/01/20', text: 'Script 开发完成！' },
      { date: '2022/02/28', text: 'UI 替换包 成功入库！' },
      { date: '2022/03/27', text: 'AI 交互系统 测试中！' },
      { date: '2022/03/29', text: 'AI 互动系统 调试中！' },
      { date: '2022/03/29', text: 'AI 特效表现 测试中！' }
    ],
    promoTitle: '赛博创业团',
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

const LscContainer = styled.div`
  min-height: 100vh;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-repeat: repeat;
  opacity: 0.5;
`;

const ContentWrapper = styled.div`
  background-color: #ffffff;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const Section = styled.section`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: ${(props) => props.$marginBottom || '2rem'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.$color || '#5c3a21'};

  span { color: ${(props) => props.$accentColor || '#ffb6c1'}; }
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
  border-radius: 0.5rem;
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
    align-items: center;
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
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  border-top: 2px dashed #ffb6c1;
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
  background-color: #fff;
  color: white;

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
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Screenshot = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(119, 105, 110, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const ScreenshotImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const Lsc = ({ t }) => {
  return (
    <LscContainer>
      <LscGlobalStyle />
      <CherryBlossomBackground petalCount={80} />
      <TransparentBanner 
        src="/lsc.png" 
        title="Cherry Blossom"
        description="Steam商店页面现已公开！"
      />
      <ContentWrapper>
        <LoveCofounder />
        <Section>
          <div style={{ marginTop: '3rem', width: '100%' }}>
            <SectionTitle $accentColor="#ffb6c1">
              <span>◆</span> {t.charTitle} <span>◆</span>
            </SectionTitle>
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
        </Section>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <SectionTitle $accentColor="#ffb6c1">
              <span>◆</span>   {t.pvTitle} <span>◆</span>
            </SectionTitle>
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
              <SectionTitle $accentColor="#ffb6c1">
                <span>◆</span> Gallery <span>◆</span>
              </SectionTitle>
              <GameDescription>
                Immerse yourself in the stunning visuals and detailed environments
                of SevenFold Mirrors.
              </GameDescription>

              <ScreenshotsContainer>
                <Screenshot>
                  <ScreenshotImage
                    src="cg_thumbnail_1.png"
                    alt="SevenFold Mirrors - Forest Scene"
                  />
                </Screenshot>
                <Screenshot>
                  <ScreenshotImage
                    src="cg_thumbnail_2.png"
                    alt="SevenFold Mirrors - Battle Scene"
                  />
                </Screenshot>
                <Screenshot>
                  <ScreenshotImage
                    src="cg_thumbnail_3.png"
                    alt="SevenFold Mirrors - Castle"
                  />
                </Screenshot>
                <Screenshot>
                  <ScreenshotImage
                    src="cg_thumbnail_4.png"
                    alt="SevenFold Mirrors - Dragon"
                  />
                </Screenshot>
                <Screenshot>
                  <ScreenshotImage
                    src="cg_thumbnail_5.png"
                    alt="SevenFold Mirrors - Village"
                  />
                </Screenshot>
                <Screenshot>
                  <ScreenshotImage
                    src="cg_thumbnail_6.png"
                    alt="SevenFold Mirrors - Magic Spell"
                  />
                </Screenshot>
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
          <SectionTitle $accentColor="#ff69b4" $marginBottom="2rem">
            <span>♥</span> {t.progressTitle} <span>♥</span>
          </SectionTitle>
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
      <BackToTop />
    </LscContainer>
  );
};

export default Lsc;