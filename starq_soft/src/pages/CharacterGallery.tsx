"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { CharacterCard, CharacterCarousel } from "./LscStyles";
import { useLanguage } from "../LanguageContext";
import { lscContent } from "./lscContent";

const avatars: string[] = ["me-1.png", "haijin.png", "tani.png", "hayashi.png", "nana.png", "natsumi.png", "rin.png", "takagi.png"];

// Structural (non-localized) character data. All translatable copy — role,
// description, likes, quotes, zodiac, blood type and birthday — lives in
// lscContent.ts and is merged in by index at render time.
const characters: any[] = [
  {
    name: { japanese: ["石", "夜"], read: ["いし", "よる"], english: "Yoru Ishi" },
    image: "me-1.png",
    age: "24",
    height: "178cm",
    weight: "68kg",
    BWH: "92/74/93(cm)",
    voiceActor: "N/A",
    sampleVoices: ["","",""],
  },
  {
    name: { japanese: ["灰", "神"], read: ["はい", "じん"], english: "Hai jin" },
    image: "haijin.png",
    age: "24",
    height: "175cm",
    weight: "62kg",
    BWH: "86/70/87(cm)",
    voiceActor: "大卫",
    sampleVoices: ["CV/haijin-1.m4a", "CV/haijin-2.m4a", "CV/haijin-3.m4a"],
  },
  {
    name: { japanese: ["谷", "遥"], read: ["たに", "はるか"], english: "Haruka Tani" },
    image: "tani.png",
    age: "20",
    height: "158cm",
    weight: "42kg",
    BWH: "75A/58/80(cm)",
    voiceActor: "溯月",
    sampleVoices: ["CV/tani-1.mp3", "CV/tani-2.mp3", "CV/tani-3.mp3"],
  },
  {
    name: { japanese: ["林", "静花"], read: ["はやし", "しずか"], english: "Shizuka Hayashi" },
    image: "hayashi.png",
    age: "24",
    height: "162cm",
    weight: "48kg",
    BWH: "86D/62/85(cm)",
    voiceActor: "缘梦",
    sampleVoices: ["CV/hayashi-1.mp3", "CV/hayashi-2.mp3", "CV/hayashi-3.mp3"],
  },
  {
    name: { japanese: ["原", "奈奈"], read: ["はら", "なな"], english: "Nana Hara" },
    image: "nana.png",
    age: "21",
    height: "160cm",
    weight: "45kg",
    BWH: "80B/60/82(cm)",
    voiceActor: "小鼓单",
    sampleVoices: ["CV/nana-1.mp3", "CV/nana-2.mp3", "CV/nana-3.mp3"],
  },
  {
    name: { japanese: ["夏未", "ブラン"], read: ["なつみ", "ぶらん"], english: "Natsumi　Blanc" },
    image: "natsumi.png",
    age: "25",
    height: "165cm",
    weight: "50kg",
    BWH: "82C/62/83(cm)",
    voiceActor: "阿魂",
    sampleVoices: ["CV/natsumi-1.m4a", "CV/natsumi-2.m4a", "CV/natsumi-3.m4a"],
  },
  {
    name: { japanese: ["森", "鈴"], read: ["もり", "りん"], english: "Rin Mori" },
    image: "rin.png",
    age: "30",
    height: "173cm",
    weight: "55kg",
    BWH: "90E/66/88(cm)",
    voiceActor: "Satori",
    sampleVoices: ["CV/rin-1.mp3", "CV/rin-2.mp3", "CV/rin-3.mp3"],
  },
  {
    name: { japanese: ["高樹", "凌"], read: ["たかぎ", "りょう"], english: "Ryou Takagi" },
    image: "takagi.png",
    age: "28",
    height: "181cm",
    weight: "72kg",
    BWH: "96/78/96(cm)",
    voiceActor: "烧麦",
    sampleVoices: ["CV/takagi-1.mp3", "CV/takagi-2.mp3", "CV/takagi-3.mp3"],
  }
];

export const LoveCofounderCharacter: React.FC = () => {
  const { lang } = useLanguage();
  const t = lscContent[lang] ?? lscContent['zh-cn']!;
  const labels = t.charLabels;
  const isChinese = lang === 'zh-cn' || lang === 'zh-tw';
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);

  const stopCurrent = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
    setPlayingSrc(null);
  };

  const playSample = (src: string) => {
    if (!src) return;
    if (playingSrc === src) {
      stopCurrent();
      return;
    }
    stopCurrent();
    const audio = new Audio(src);
    audio.addEventListener("ended", () => {
      if (currentAudioRef.current === audio) {
        currentAudioRef.current = null;
        setPlayingSrc(null);
      }
    });
    currentAudioRef.current = audio;
    setPlayingSrc(src);
    audio.play().catch(() => {
      if (currentAudioRef.current === audio) {
        currentAudioRef.current = null;
        setPlayingSrc(null);
      }
    });
  };

  useEffect(() => {
    stopCurrent();
    setSelectedVoiceIndex(0);
  }, [selectedCharacter]);

  useEffect(() => {
    return () => {
      stopCurrent();
    };
  }, []);

  const info = t.characters[selectedCharacter];

  return (
    <GalleryContainer>
      <CharacterList>
        <CharacterCarousel>
          {/* <button className="nav-btn">«</button> */}
          <div className="char-list">
            {characters.map((char: any, index: number) => (
              <CharacterCard key={index}
                $isSelected={selectedCharacter === index}
                onClick={() => {
                  stopCurrent();
                  setSelectedCharacter(index);
                }}>
                <div className="avatar">
                  <img src={`${import.meta.env.BASE_URL}${avatars[index].replace(/\.png$/, "-avatar.png")}`} alt={char.name.english} />
                </div>
                {/* <div>{char.name.japanese}</div> */}
              </CharacterCard>
            ))}
          </div>
          {/* <button className="nav-btn">»</button> */}
        </CharacterCarousel>
      </CharacterList>
      <CharacterDisplay>
        {/* <DecoTopLeft src="deco_l.png" alt="" aria-hidden="true" />
        <DecoBottomRight src="deco_r.png" alt="" aria-hidden="true" /> */}
        <AnimatePresence mode="wait">
          <MotionCharacterImage
            key={selectedCharacter}
            src={`${import.meta.env.BASE_URL}${characters[selectedCharacter].image}`}
            alt={characters[selectedCharacter].name.english}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <MotionCharacterInfo
            key={selectedCharacter}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
          <CharacterHeader>
            <div>
              <CharacterNameLine $isJapanese={lang === 'ja-jp'}>
              {characters[selectedCharacter].name.japanese.map((char: string, i: number) => (
                <ruby key={i} style={{ marginBottom: "0.5rem" }}>
                  {['ja-jp', 'zh-cn', 'zh-tw'].includes(lang) && <JapaneseName>{char}</JapaneseName>}
                  {lang === "ja-jp" && (
                    <rt>{characters[selectedCharacter].name.read[i] || ""}</rt>
                  )}&nbsp;
                </ruby>
              ))}
              {!['ja-jp', 'zh-cn', 'zh-tw'].includes(lang) && (
                <EnglishName>
                  {characters[selectedCharacter].name.english}
                </EnglishName>
              )}
              </CharacterNameLine>
              <div>
                {['zh-cn', 'zh-tw'].includes(lang) && <>{labels.cv}: {characters[selectedCharacter].voiceActor}</>}
                {characters[selectedCharacter].sampleVoices
                  // .filter((src: string) => !!src)
                  .map((src: string, i: number) => (
                    <a
                      key={i}
                      href={src}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedVoiceIndex(i);
                        if (isChinese && selectedCharacter !== 0) {
                          playSample(src);
                        }
                      }}
                    >
                      <VoiceButton>
                        <VoiceIcon
                          src={`${import.meta.env.BASE_URL}${isChinese && selectedCharacter > 0
                            ? (playingSrc === src ? "voice-stop.svg" : "voice-play.svg")
                            : "dialog_bubble.png"}`}
                          alt={isChinese && selectedCharacter > 0 ? (playingSrc === src ? "stop" : "play") : "dialog"}
                        />
                      </VoiceButton>
                    </a>
                  ))}
              </div>
            </div>
            <Role>{info.role}</Role>
          </CharacterHeader>
          <Description>
            {info.description}
          </Description>
          <Details>
            <DetailItem>
              <Label>{labels.age}</Label>
              <Value>{characters[selectedCharacter].age}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{labels.birthday}</Label>
              <Value>{info.birthday || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{labels.zodiac}</Label>
              <Value>{info.zodiac || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{labels.bloodType}</Label>
              <Value>{info.bloodType || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{labels.heightWeight}</Label>
              <Value>{characters[selectedCharacter].height} / {characters[selectedCharacter].weight || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{labels.bwh}</Label>
              <Value>{characters[selectedCharacter].BWH || '??'}</Value>
            </DetailItem>
          </Details>
          <QuoteMarkLeft>❝</QuoteMarkLeft>
          <AnimatePresence mode="wait">
            <MotionQuoteText
              key={`${selectedCharacter}-${selectedVoiceIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {info.quotes[selectedVoiceIndex]}
            </MotionQuoteText>
          </AnimatePresence>
          <QuoteMarkRight>❞</QuoteMarkRight>
          <Likes>
            <Label>{labels.likes}</Label>
            <LikesList>
              {info.likes.map((like: string) => (
                <LikeItem key={like}>{like}</LikeItem>
              ))}
            </LikesList>
          </Likes>
          </MotionCharacterInfo>
        </AnimatePresence>
      </CharacterDisplay>
    </GalleryContainer >
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
`;

const CharacterList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const CharacterDisplay = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  animation: ${fadeIn} 0.5s ease-out;
  padding-bottom: 2rem;
  // background: rgba(255, 255, 255, 0.5);
  // border: 2px solid rgba(210, 45, 135, 0.2);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }
`;

const CharacterImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 2px 2px rgba(91, 87, 89, 0.5));

  @media (max-width: 1024px) {
    max-width: 360px;
  }

  @media (max-width: 768px) {
    width: 80%;
    max-width: 288px;
  }

  @media (max-width: 480px) {
    max-width: 65.6vw;
  }
`;

const MotionCharacterImage = motion.create(CharacterImage);

const CharacterInfo = styled.div`
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5rem;
  color: #111827;

  @media (max-width: 1024px) {
    padding: 0.5rem 0;
    margin-top: 0;
  }
`;

const MotionCharacterInfo = motion.create(CharacterInfo);

const CharacterHeader = styled.div`
  margin-bottom: 30px;
`;

const CharacterNameLine = styled.div<{ $isJapanese: boolean }>`
  font-family: ${({ $isJapanese }) => $isJapanese
    ? '"Yu Mincho", "YuMincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Noto Serif JP", "MS PMincho", serif'
    : 'inherit'};
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1rem;

  ruby,
  rt {
    font-family: inherit;
  }

  rt {
    font-size: 0.45em;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.06em;
  }
`;

const JapaneseName = styled.span`
  font: inherit;
  margin: 0;
`;

const EnglishName = styled.h3`
  font-family: "Noto Sans JP", sans-serif;
  font-size: clamp(1.4rem, 4vw, 2rem);
  margin: 0;
`;

const VoiceButton = styled.div`
  display: inline-grid;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #F89BB0 0%, #e07db2 99%, #a896af 100%);
  border: none;
  border-radius: 50%;
  place-items: center;
  cursor: pointer;
  margin-left: 8px;
  padding: 0;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.15);
  }
`;

const VoiceIcon = styled.img`
  width: 12px;
  height: 16px;
`;

const Role = styled.div`
  font-size: clamp(0.95rem, 2.5vw, 1.25rem);
  color: #CC1075;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.25rem);
  line-height: 1.5;
  margin-bottom: 30px;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;

  @media (max-width: 768px) {
    line-height: 1.65;
    margin-bottom: 1.25rem;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;

const DetailItem = styled.div``;

const Label = styled.div`
  font-size: clamp(0.7rem, 2vw, 1rem);
  color: #CC1075;
  text-transform: uppercase;
`;

const Value = styled.div`
  font-size: clamp(0.82rem, 2.4vw, 1.25rem);
`;

const QuoteText = styled.div`
    background: linear-gradient(135deg,  #e0a1b8 0%, #eb6385 15%, #b7a3f3 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-size: clamp(0.85rem, 2vw, 1.25rem);
    letter-spacing: .1em;
    position: relative;
    padding: 1rem 1.5em;
    filter: drop-shadow(0 1px 1px rgba(183, 163, 243, 0.5));

    @media (max-width: 768px) {
      padding: 0.75rem 0.5rem;
      letter-spacing: 0.04em;
      line-height: 1.45;
    }
`;

const MotionQuoteText = motion.create(QuoteText);

const QuoteMarkLeft = styled.p`
    color: #f99bb3;
    text-align: left;
    margin: 0;
    font-size: 2rem;
    filter: drop-shadow(0 1px 1px rgba(183, 163, 243, 0.5));
`;

const QuoteMarkRight = styled.p`
    color: #b7a3f3;
    text-align: right;
    margin: 0;
    font-size: 2rem;
    filter: drop-shadow(0 1px 1px rgba(183, 163, 243, 0.5));
`;

const Likes = styled.div`
`;

const LikesList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const LikeItem = styled.span`
  background: linear-gradient(135deg, #ffadd1 0%, #e07db2 99%, #a896af 100%);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: clamp(0.8rem, 2.4vw, 1.25rem);
`;
