"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { CharacterCard, CharacterCarousel } from "./LscStyles";

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
      "本作主人公。茨木大学计算机系本科毕业，学生时代成绩优异，是众人眼中的「优等生」。毕业后却在经济下行和内卷加剧等多重打击下，求职路上接连碰壁，只能成为一名「社畜候补」，暂时宅在出租屋中每天在网上投递简历寻找未来的出路。为人认真踏实，遇事冷静，理性可靠，对周围的人和事都拥有着强烈的责任感。",
    image: "me-1.png",
    age: "24",
    height: "178cm",
    weight: "68kg",
    BWH: "92/74/93(cm)",
    likes: ["编程", "摄影", "模型组装"],
    voiceActor: "（无）",
    sampleVoices: [""],
    bloodType: "A型",
    quotes: [
      "虽然看起来毫无头绪，但只要把问题逐个拆解开，总能找到解决办法。",
      "既然决定要做，我就会负责到底，半途而废不是我的风格。",
      "又被拒了吗……没关系，重新整理一下简历，明天继续投递吧。"
    ]
  },
  {
    "name": {
      "japanese": ["灰", "神"],
      "read": ["はい", "じん"],
      "english": "Hai jin"
    },
    role: "大学应届毕业生（待业中）",
    description:
      "与男主的合租室友兼多年玩伴。茨木大学工商管理系本科毕业，却没什么商业常识。拥有一头乱糟糟的银白色灰发和总是睡不醒的眼神。曾经是个教科书级的富二代，后来家道中落。天性散漫，做事全凭一时兴起。虽然有点吊儿郎当，却意外了解不少旁门左道，一开口就是金句频出，擅长嘴皮子功夫，堪称画饼届鬼才。",
    image: "haijin.png",
    age: "24",
    height: "175cm",
    weight: "62kg",
    BWH: "86/70/87(cm)",
    likes: ["玩德扑", "打台球", "电子游戏"],
    voiceActor: "大卫",
    sampleVoices: ["CV/haijin-1.m4a", "CV/haijin-2.m4a", "CV/haijin-3.m4a"],
    zodiac: "射手座",
    birthday: "12月4日",
    bloodType: "AB型",
    quotes: [
      "兄弟，格局！格局要打开！现在的投资圈看的是什么？是产品吗？错！是情绪价值！",
      "我出钱，你出命，一起走向人生巅峰！",
      "你懂什么？初创公司要的就是气场！"
    ]
  },
  {
    "name": {
      "japanese": ["谷", "遥"],
      "read": ["たに", "はるか"],
      "english": "Tani Haruka"
    },
    role: "UI/UX设计师（实习生）",
    description:
      "茨木大学视觉设计系大二在校生，非常害羞，莫名地容易脸红，内心情感丰富细腻。拥有极强的审美直觉和绘画天赋。平时话不多却观察力惊人，对色彩把控惊人，执着于美感，注重每一个细节。性格并不张扬却意外地有主见，有自己独特的理解和追求，喜欢把生活中的点滴美好都融入到创作中，在设计方面的天赋和潜力总是令人刮目相看。",
    image: "tani.png",
    age: "20",
    height: "158cm",
    weight: "42kg",
    BWH: "75A/58/80(cm)",
    likes: ["逛画展", "做手工", "户外写生"],
    voiceActor: "溯月",
    sampleVoices: ["CV/tani-1.mp3", "CV/tani-2.mp3", "CV/tani-3.mp3"],
    zodiac: "双鱼座",
    birthday: "3月9日",
    bloodType: "A型",
    quotes: [
      "我、我觉得……这里有点怪怪的……可以让我修改一下吗？",
      "交给我吧！我一定会创作出最完美的作品！",
      "那个……请相信我吧！因为……我相信学长你！"
    ]
  },
  {
    "name": {
      "japanese": ["林", "静"],
      "read": ["はやし", "しずか"],
      "english": "Hayashi Shizuka"
    },
    role: "前端工程师",
    description:
      "侧面扎着微卷单马尾的不起眼女生，总是戴着一副细框眼镜。安静内向，不爱说话，似乎有点轻微社恐，因毕业于二流大学而不太自信，对大多数社交场合感到局促。对待工作极其认真，任劳任怨，做事细心但有些墨守成规。不太擅长沟通，习惯埋头默默写代码，认为还是跟机器打交道更轻松自在。",
    image: "hayashi.png",
    age: "24",
    height: "162cm",
    weight: "48kg",
    BWH: "86D/62/85(cm)",
    likes: ["记手账", "逛书店", "追电视剧"],
    voiceActor: "缘梦",
    sampleVoices: ["CV/hayashi-1.mp3", "CV/hayashi-2.mp3", "CV/hayashi-3.mp3"],
    zodiac: "处女座",
    birthday: "9月17日",
    bloodType: "O型",
    quotes: [
      "那个……之前交代的事情都做好了……还有什么需要帮忙的吗？",
      "果然……还是跟电脑打交道比较轻松……",
      "对不起……我会努力不拖大家的后腿的……"
    ]
  },
  {
    name: {
      japanese: ["原", "奈奈"],
      read: ["はら", "なな"],
      english: "Hara Nana",
    },
    role: "营销策划",
    description:
      "性格活泼、有点毒舌的网红主播，16岁便开始做自媒体，后被某知名MCN相中，对「流量密码」有着敏锐的嗅觉，亲手制造过不少病毒式传播的爆款短视频。总是言辞犀利、思维敏捷，对人性理解透彻，擅长IP包装，目前在某爆火的社交平台上经营着「奈奈大女王」账号，打造独立女性人设，收获千万粉丝。对赚钱有种强烈的渴望，动不动就把「得加钱」挂在嘴边。",
    image: "nana.png",
    age: "21",
    height: "160cm",
    weight: "45kg",
    BWH: "80B/60/82(cm)",
    likes: ["购物", "看综艺", "美食探店"],
    voiceActor: "小鼓单",
    sampleVoices: ["CV/nana-1.mp3", "CV/nana-2.mp3", "CV/nana-3.mp3"],
    zodiac: "狮子座",
    birthday: "8月7日",
    bloodType: "AB型",
    quotes: [
      "哼哼！听我的！这些都是流量密码，包你直接原地起飞！",
      "什么情怀不情怀的，在互联网上，抓不住眼球的东西统统都是垃圾！",
      "先说好了，娶我可是很贵的！得加钱！"
    ]
  },
  {
    name: {
      japanese: ["夏", "未"],
      read: ["なつ", "み"],
      english: "Natsu Mi",
    },
    role: "产品经理",
    description:
      "拥有法国血统的混血美人，说话总是轻声细语让人如沐春风。作为一个产品经理，有着罕见的“理性与同理心并存”的特质，对产品有自己的理解和追求。言辞温和，逻辑清晰，总是能把混乱的想法变成可执行的步骤。注重用户体验，不想为了数据美观而妥协，愿意花大量时间进行市场调研，在当今这种商业背景下显得有点理想主义，希望打造用户真正需要的产品。",
    image: "natsumi.png",
    age: "25",
    height: "165cm",
    weight: "50kg",
    BWH: "82C/62/83(cm)",
    likes: ["插花", "芭蕾舞", "听音乐会"],
    voiceActor: "阿魂",
    sampleVoices: ["CV/natsumi-1.mp3", "CV/natsumi-2.mp3", "CV/natsumi-3.mp3"],
    zodiac: "巨蟹座",
    birthday: "7月8日",
    bloodType: "O型",
    quotes: [
      "我只是想做一些温柔而有价值的东西。",
      "不管路有多远，只要方向是对的，我们总能到达。",
      "这就妥协了？向现实低头可不是你的风格。"
    ]
  },
  {
    "name": {
      "japanese": ["森", "鈴"],
      "read": ["もり", "りん"],
      "english": "Mori Rin"
    },
    role: "天使投资人",
    description:
      "Woman Combination (WC) 投资基金创始人。在创投圈被尊称为「神之投资天使」，她出手的项目几乎都能获得超额回报，命中率率高达90%。总是身穿紫色天鹅绒西装与包臀短裙，高跟鞋一踏地，气场瞬间两米八。精明干练，眼神锐利，对市场方向敏锐且有独到见解，投资判断极其精准，擅长用犀利的提问将创业者击溃。",
    image: "rin.png",
    age: "30",
    height: "173cm",
    weight: "55kg",
    BWH: "90E/66/88(cm)",
    likes: ["滑雪", "红酒品鉴", "古董收藏"],
    voiceActor: "Satori",
    sampleVoices: ["CV/rin-1.mp3", "CV/rin-2.mp3", "CV/rin-3.mp3"],
    zodiac: "摩羯座",
    birthday: "1月9日",
    bloodType: "B型",
    quotes: [
      "我投资的，不是你们现在的产品，而是你，和你的未来。",
      "别用梦想打动我，用数据和执行力说话。",
      "只有足够强大，才能主宰自己的命运！"
    ]
  },
  {
    "name": {
      "japanese": ["高", "樹"],
      "read": ["たか", "ぎ"],
      "english": "Taka gi"
    },
    role: "明星创业公司CEO",
    description:
      "AI创业公司「SYNTH♥」创始人兼CEO，狐布斯30 under 30精英，思丹佛大学计算机科学和MBA双学位以及人工智能PhD，拥有惊人的执行力和商业洞见。从小接触编程，中学时代便以独立开发者的身份活跃在各大开源极客社区并积累了大量影响力，连续三次创业都颇有成绩，曾在知名科技公司CloseAI工作，参与过大型多模态训练项目。",
    image: "takagi.png",
    age: "28",
    height: "181cm",
    weight: "72kg",
    BWH: "96/78/96(cm)",
    likes: ["阅读", "财报分析", "股市研究"],
    voiceActor: "烧麦",
    sampleVoices: ["CV/takagi-1.mp3", "CV/takagi-2.mp3", "CV/takagi-3.mp3"],
    zodiac: "白羊座",
    birthday: "3月28日",
    bloodType: "B型",
    quotes: [
      "人类的情感，本质上是一种模式混沌，但模式是可以被建模的。",
      "恋爱？那是一种低效率、高耗能、高风险且充满冗余的激素博弈。",
      "你们那种草台班子，不倒闭就谢天谢地了。"
    ]
  }
];

export const LoveCofounderCharacter: React.FC = () => {
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

  return (
    <GalleryContainer>
      <CharacterList>
        <CharacterCarousel>
          {/* <button className="nav-btn">«</button> */}
          <div className="char-list">
            {characters.map((char, index) => (
              <CharacterCard key={index}
                $isSelected={selectedCharacter === index}
                onClick={() => {
                  stopCurrent();
                  setSelectedCharacter(index);
                }}>
                <div className="avatar">
                  <img src={avatars[index].replace(/\.png$/, "-avatar.png")} alt={char.name.english} />
                </div>
                {/* <div>{char.name.japanese}</div> */}
              </CharacterCard>
            ))}
          </div>
          {/* <button className="nav-btn">»</button> */}
        </CharacterCarousel>
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
              <div>CV: {characters[selectedCharacter].voiceActor}
                {characters[selectedCharacter].sampleVoices
                  .filter((src: string) => !!src)
                  .map((src: string, i: number) => (
                    <a
                      key={i}
                      href={src}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedVoiceIndex(characters[selectedCharacter].sampleVoices.indexOf(src));
                        playSample(src);
                      }}
                    >
                      <div style={{
                        display: "inline-grid",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#e186b4",
                        border: "none",
                        borderRadius: "50%",
                        placeItems: "center",
                        cursor: "pointer",
                        marginLeft: "8px",
                        padding: 0
                      }}>
                        <img
                          src={playingSrc === src ? "voice-stop.svg" : "voice-play.svg"}
                          alt={playingSrc === src ? "stop" : "play"}
                          style={{ width: "12px", height: "16px" }
                          }

                        />
                      </div>
                    </a>
                  ))}
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
              <Label>Birthday</Label>
              <Value>{characters[selectedCharacter].birthday || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Zodiac</Label>
              <Value>{characters[selectedCharacter].zodiac || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Blood Type</Label>
              <Value>{characters[selectedCharacter].bloodType || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Height/Weight</Label>
              <Value>{characters[selectedCharacter].height} / {characters[selectedCharacter].weight || '??'}</Value>
            </DetailItem>
            <DetailItem>
              <Label>BWH</Label>
              <Value>{characters[selectedCharacter].BWH || '??'}</Value>
            </DetailItem>
          </Details>
          <QuoteMarkLeft>❝</QuoteMarkLeft>
          <QuoteText>{characters[selectedCharacter].quotes[selectedVoiceIndex]}</QuoteText>
          <QuoteMarkRight>❞</QuoteMarkRight>
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
  margin-top: 5rem;

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

const QuoteText = styled.div`
    color: #907683;
    font-family: serif;
    font-size: 1.5rem;
    letter-spacing: .1em;
    position: relative;
    padding: 1rem 1.5em;
`;

const QuoteMarkLeft = styled.p`
    color: #a57a8f;
    text-align: left;
    margin: 0;
    font-size: 2rem;
`;

const QuoteMarkRight = styled.p`
    color: #a57a8f;
    text-align: right;
    margin: 0;
    font-size: 2rem;
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
  background: #e186b4;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;;
`;