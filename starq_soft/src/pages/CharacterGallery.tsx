"use client";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CharacterCard, type SectionTitle, CharacterCarousel } from "./LscStyles";

const avatars: any[] = ["me-1.png", "haijin.png", "tani.png", "hayashi.png", "nana.png", "natsumi.png", "rin.png", "takagi.png"];

const characters: any[] = [
  {
    "name": {
      "japanese": ["石", "夜"],
      "read": ["いし", "よ"],
      "english": "Ishi Yo"
    },
    role: "大学应届毕业生（待业中）",
    description:
      "本作主人公。茨木大学计算机系毕业，曾是众人眼中的“优等生”，毕业后却在经济下行和内卷加剧等多重打击下，求职路上接连碰壁，只能暂时宅在出租屋中成为一名「社畜候补」。为人认真踏实，冷静可靠，拥有强烈的社会责任感。",
    image: "me-1.png",
    age: "24",
    height: "178cm",
    weight: "68kg",
    likes: ["编程", "摄影", "组装模型", "看纪录片"],
    voiceActor: "",
    bloodType: "A型"
  },
  {
    "name": {
      "japanese": ["灰", "神"],
      "read": ["はい", "じん"],
      "english": "Hai jin"
    },
    role: "大学应届毕业生（待业中）",
    description:
      "茨木大学工商管理系毕业，男主的合租室友兼多年玩伴。曾经是个教科书级的富二代，后来家道中落。天性散漫，做事全凭一时兴起。虽然有点吊儿郎当，却意外了解不少旁门左道，一开口就是金句频出，擅长嘴皮子功夫，堪称画饼届鬼才。",
    image: "haijin.png",
    age: "24",
    height: "175cm",
    weight: "62kg",
    likes: [ "赛车", "玩德扑","打台球","电子游戏"],
    voiceActor: "大卫",
    zodiac: "射手座",
    birthday: "12月4日",
    bloodType: "AB型"
  },
  {
    "name": {
      "japanese": ["谷", "遥"],
      "read": ["たに", "はるか"],
      "english": "Tani Haruka"
    },
    role: "UI/UX设计师（实习生）",
    description:
      "茨木大学视觉设计系大二在校生，拥有极强的审美直觉和绘画天赋。平时话很少却观察力惊人，对色彩感知敏锐，对美感有强烈的追求，非常注重细节。性格并不张扬却意外地有主见，莫名地容易害羞，内心情感细腻。",
    image: "tani.png",
    age: "20",
    height: "158cm",
    weight: "42kg",
    BWH: "78/58/80(cm)",
    likes: ["绘画", "逛画展",  "做手工", "户外写生"],
    voiceActor: "溯月",
    zodiac: "双鱼座",
    birthday: "3月9日",
    bloodType: "A型"
  },
  {
    "name": {
      "japanese": ["林", "静"],
      "read": ["はやし", "しずか"],
      "english": "Hayashi Shizuka"
    },
    role: "前端工程师",
    description:
      "侧面扎着单马尾的女生，总是戴着一副细框眼镜，安静内向，不爱说话，似乎有点轻微社恐，对大多数社交场合感到局促，总是埋头默默写代码，认为还是跟机器打交道轻松。对待工作非常努力认真，经常加班到很晚。",
    image: "hayashi.png",
    age: "24",
    height: "162cm",
    weight: "48kg",
    BWH: "86/62/85(cm)",
    likes: ["记手账", "逛书店", "追电视剧", "整理房间"],
    voiceActor: "缘梦",
    zodiac: "处女座",
    birthday: "9月17日",
    bloodType: "O型"
  },
  {
    name: {
      japanese: ["原", "奈奈"],
      read: ["はら", "なな"],
      english: "Hara Nana",
    },
    role: "营销策划",
    description:
      "16岁便开始投身自媒体，因敏锐的流量嗅觉被知名MCN相中并成为头部主播，打造过多支病毒式传播的爆款短视频，后来逐渐意识到被当作工具人难以长久而主动退出。凭借多年打磨出的直觉，对人性弱点和传播逻辑有着极高的洞察力。",
    image: "nana.png",
    age: "21",
    height: "160cm",
    weight: "45kg",
    BWH: "80/60/82(cm)",
    likes: ["购物", "炒股", "看综艺","美食探店"],
    voiceActor: "小鼓单",
    zodiac: "狮子座",
    birthday: "8月7日",
    bloodType: "AB型"
  },
  {
    name: {
      japanese: ["夏", "未"],
      read: ["なつ", "み"],
      english: "Natsu Mi",
    },
    role: "产品经理",
    description:
      "对产品有自己的理解和追求，注重用户体验，不想为了数据美观而妥协，愿意花大量时间进行市场调研，在当今这种商业背景下显得有点理想主义，希望打造用户真正需要的产品。",
    image: "natsumi.png",
    age: "25",
    height: "165cm",
    weight: "50kg",
    BWH: "82/62/83(cm)",
    likes: ["插花", "看话剧", "听音乐会","喝下午茶"],
    voiceActor: "阿魂",
    zodiac: "巨蟹座",
    birthday: "7月8日",
    bloodType: "O型"
  },
  {
    "name": {
      "japanese": ["森", "鈴"],
      "read": ["もり", "りん"],
      "english": "Mori Rin"
    },
    role: "天使投资人",
    description:
      "Woman Combination (WC) 投资基金创始人。在创投圈被尊称为「神之天使投资人」，她出手的项目几乎都能获得超额回报，命中率率高达90%。总是身穿干练西装与包臀短裙，高跟鞋一踏地，气场瞬间两米八。眼神锐利，对市场方向敏锐且有独到见解，投资判断极其精准，擅长用犀利的提问将创业者击溃。",
    image: "rin.png",
    age: "30",
    height: "173cm",
    weight: "55kg",
    BWH: "90/66/88(cm)",
    likes: ["潜水", "滑雪","红酒品鉴","古董收藏"],
    voiceActor: "Satori",
    zodiac: "摩羯座",
    birthday: "1月9日",
    bloodType: "B型"
  },
  {
    "name": {
      "japanese": ["高", "樹"],
      "read": ["たか", "ぎ"],
      "english": "Taka gi"
    },
    role: "明星创业公司CEO",
    description:
      "AI创业公司「SYNTH♥」创始人兼CEO，思丹佛大学计算机科学+MBA双学位，拥有惊人的执行力和商业洞见。中学时代便以独立开发者的身份活跃在各大极客社区，连续三次创业都颇有成绩，曾在知名科技公司CloseAI工作，参与过大型多模态训练项目。",
    image: "takagi.png",
    age: "28",
    height: "181cm",
    weight: "72kg",
    likes: ["阅读", "攀岩", "拼乐高", "分析财报"],
    voiceActor: "烧麦",
    zodiac: "白羊座",
    birthday: "3月28日",
    bloodType: "B型"
  },
];

export const LoveCofounderCharacter: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const GradientText = styled.span`
    background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `;

  return (
    <GalleryContainer>
      <CharacterList>
        <CharacterCarousel>
          <button className="nav-btn">«</button>
          <div className="char-list">
            {characters.map((char, index) => (
              <CharacterCard key={index} 
              // $isSelected={selectedCharacter === index}
                onClick={() => setSelectedCharacter(index)}>
                <div className="avatar">
                  <img src={avatars[index]} alt={char.name.english} />
                </div>
                <div>{char.name.japanese}</div>
                {/* <div>{char.name.english}</div> */}
              </CharacterCard>
            ))}
          </div>
          <button className="nav-btn">»</button>
        </CharacterCarousel>
        {/* {characters.map((character, index) => (
          <CharacterTab
            key={index}
            $isSelected={selectedCharacter === index}
            onClick={() => setSelectedCharacter(index)}
          >
            <CharacterName>
              <div>{character.name.japanese}</div>
              <div>{character.name.english}</div>
            </CharacterName>
          </CharacterTab>
        ))} */}
      </CharacterList>
      <CharacterDisplay>
        <CharacterImage
          src={characters[selectedCharacter].image}
          alt={characters[selectedCharacter].name.english}
        />
        <CharacterInfo>
          <CharacterHeader>
            <div>
              <div>{characters[selectedCharacter].name.japanese.map((char, i) => (
                <ruby key={i} style={{ marginRight: "2px" }}>
                  <JapaneseName>{char}</JapaneseName>
                  <rt>{characters[selectedCharacter].name.read[i] || ""}</rt>&nbsp;
                </ruby>
              ))}
                <EnglishName>
                  {characters[selectedCharacter].name.english}
                </EnglishName>
              </div>
            </div>
            <Role>{characters[selectedCharacter].role}</Role>
          </CharacterHeader>
          <Description>
            {characters[selectedCharacter].description}
          </Description>
          <Details>
            <DetailItem>
              <Label>Age</Label>
              <Value>{characters[selectedCharacter].age}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Blood Type</Label>
              <Value>{characters[selectedCharacter].bloodType || '??'}</Value>
            </DetailItem>
          </Details>
          <Details>
            <DetailItem>
              <Label>Height</Label>
              <Value>{characters[selectedCharacter].height}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Weight</Label>
              <Value>{characters[selectedCharacter].weight || '??'}</Value>
            </DetailItem>
          </Details>
          <Details>
            <DetailItem>
              <Label>Birthday</Label>
              <Value>{characters[selectedCharacter].birthday || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Zodiac</Label>
              <Value>{characters[selectedCharacter].zodiac || '??'}</Value>
            </DetailItem>
          </Details>
          <Likes>
            <Label>Likes</Label>
            <LikesList>
              {characters[selectedCharacter].likes.map((like) => (
                <LikeItem key={like}>{like}</LikeItem>
              ))}
            </LikesList>
          </Likes>
        </CharacterInfo>
      </CharacterDisplay>
    </GalleryContainer>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #ffbaeb, #ffbacc);
  color: black;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const JapaneseText = styled.h2`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 36px;
  margin: 0;
`;

const EnglishText = styled.h3`
  font-family: "Cinzel", serif;
  font-size: 24px;
  color: #CC1075;
  margin: 10px 0 0;
  text-transform: uppercase;
  letter-spacing: 2px;
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

const CharacterTab = styled.button<{ $isSelected: boolean }>`
  background: ${(props) =>
    props.$isSelected
      ? "linear-gradient(45deg, #e186b4, #fc5296)"
      : "transparent"};
  border: 3px solid ${(props) => (props.$isSelected ? "#aa336a" : "#fff")};
  color: white;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 30px;

  &:hover {
    border-color: #CC1075;
    box-shadow: 0 6px 20px rgba(200, 255, 255, 0.4);
  }
`;

const CharacterName = styled.div`
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
`;

const CharacterDisplay = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 360px;
  }
`;

const CharacterInfo = styled.div`
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0.5rem 0;
  }
`;

const CharacterHeader = styled.div`
  margin-bottom: 30px;
`;

const JapaneseName = styled.h3`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 32px;
  margin: 0;
`;

const EnglishName = styled.h4`
  font-size: 24px;
  color: #CC1075;
  margin: 5px 0;
`;

const Role = styled.div`
  font-size: 1.25rem;
  color: #CC1075;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 30px;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", "SimSun", serif;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DetailItem = styled.div``;

const Label = styled.div`
  font-size: 1rem;;
  color: #CC1075;
  text-transform: uppercase;
`;

const Value = styled.div`
  font-size: 1.25rem;
`;

const Likes = styled.div`
`;

const LikesList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const LikeItem = styled.span`
  background: rgba(255, 158, 180, 0.2);
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 1.25rem;;
`;

const VoiceActor = styled.div``;