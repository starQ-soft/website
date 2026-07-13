import type { LanguageCode } from '../LanguageContext';

// ---------------------------------------------------------------------------
// Localized content for the "Love, Startup & Co-founder" (LSC) page set.
// All user-facing copy for Lsc.tsx, LoveCofounder.tsx and CharacterGallery.tsx
// lives here so the components stay free of hardcoded strings.
// ---------------------------------------------------------------------------

// A single piece of the stylized hero title, e.g. a big word + a small suffix.
export interface TitlePart {
  big: string;
  small: string;
  size?: string;
}

// An inline run of story text; `em` controls emphasis styling. `\n` becomes <br/>.
export interface StorySegment {
  t: string;
  em?: 'span' | 'strong';
}

export interface StoryParagraph {
  segments: StorySegment[];
}

export interface LabeledItem {
  label: string;
  value: string;
}

export interface ProgressNote {
  date: string;
  text: string;
}

export interface CharacterText {
  role: string;
  description: string;
  likes: string[];
  quotes: string[];
  zodiac: string;
  bloodType: string;
  birthday: string;
}

export interface LscContent {
  nav: {
    char: string;
    pv: string;
    gallery: string;
    progress: string;
    product: string;
  };
  pv: {
    themeMovie: string;
    charMovie: string;
  };
  galleryNote: string;
  progressNotes: ProgressNote[];
  spec: { title: string; items: LabeledItem[] };
  staff: { title: string; items: LabeledItem[] };
  product: {
    btnDemo: string;
    btnPreorder: string;
    note: string;
  };
  footerInfo: string;
  hero: {
    title: TitlePart[][];
    description: string[];
    gameDescription: string;
    wishlist: string;
  };
  story: {
    title: string;
    subtitle: string;
    paragraphs: StoryParagraph[];
  };
  charLabels: {
    age: string;
    birthday: string;
    zodiac: string;
    bloodType: string;
    heightWeight: string;
    bwh: string;
    likes: string;
    cv: string;
  };
  characters: CharacterText[];
}

export const lscContent: Partial<Record<LanguageCode, LscContent>> = {
  'ja-jp': {
    nav: {
      char: `登場キャラクター`,
      pv: `ムービー`,
      gallery: `ギャラリー`,
      progress: `最新の進展`,
      product: `製品情報`,
    },
    pv: {
      themeMovie: `主題ムービー`,
      charMovie: `キャラ紹介ムービー`,
    },
    galleryNote: `※素材は全て開発中のものであり、予告なく変更される場合があります。`,
    progressNotes: [
      { date: '2026/07/11', text: `公式サイトを正式公開しました。` },
      { date: '2026/07/12', text: `初公開PVを公開しました。` },
      { date: '2026/07/13', text: `Steamストアページを公開しました。` },
    ],
    spec: {
      title: `スペック`,
      items: [
        { label: `タイトル`, value: `恋と起業とコファウンダー` },
        { label: `ジャンル`, value: `青春起業ＡＤＶ` },
        { label: `レーティング`, value: `全年齢対象` },
        { label: `発売日`, value: `(未定)` },
        { label: `価格`, value: `(未定)` },
        { label: `対応OS`, value: `Windows® 10／11` },
        { label: `CPU`, value: `Intel® Core™ i3 第二世代以上推奨` },
        { label: `DISPLAY`, value: `3840×2160pixel／FullColor以上` },
        { label: `MEMORY`, value: `2GByte必須／4GByte以上推奨` },
        { label: `HDD`, value: `6GB以上` },
      ],
    },
    staff: {
      title: `スタッフ`,
      items: [
        { label: `企画／制作`, value: `StarQ Soft` },
        { label: `パブリッシャー`, value: `Pairaki Games` },
        { label: `シナリオ／キャラクターデザイン`, value: `星可` },
        { label: `原画ＣＧ／SD／背景`, value: `眞海` },
        { label: `主題歌`, value: `「Startup!★Start!!」by Wedoso` },
        { label: `音楽`, value: `Wedoso` },
        { label: `ムービー`, value: `星可` },
        { label: `動効`, value: `幽浮小花` },
        { label: `協力`, value: `終焉、 y3 ほか` },
        { label: `特別協力`, value: `小笠原` },
      ],
    },
    product: {
      btnDemo: `ウィッシュリストに追加`,
      btnPreorder: `予約注文`,
      note: `※動作環境は予定です。発売までに変更になる可能性があります。`,
    },
    footerInfo: `All rights reserved.`,
    hero: {
      title: [
        [
          { big: `恋`, small: `と`, size: '2em' },
          { big: `起業`, small: `と`, size: '2em' },
        ],
        [{ big: `コファウンダー`, small: ``, size: '1.25em' }],
      ],
      description: [
        `一つのシェアハウス、個性豊かな仲間たち。`,
        `そして熱く、迷い、心ときめく共創の旅。`,
      ],
      gameDescription: `Steamストアページ公開中！`,
      wishlist: `ウィッシュリストに追加`,
    },
    story: {
      title: `// ストーリー`,
      subtitle: `「一緒に起業しよう！」`,
      paragraphs: [
        { segments: [{ t: `共に始まる冒険！`, em: 'span' }] },
        {
          segments: [
            {
              t: `大学を卒業し、就職もままならない君は、ルームメイトに丸め込まれ、\n思いもよらなかった道へと足を踏み入れる……`,
            },
          ],
        },
        { segments: [{ t: `経験ゼロ、資金ゼロ、給料ゼロ——`, em: 'strong' }] },
        {
          segments: [
            { t: `手にあるのは、君よりも頼りない共同創業者と、\n名前すらまともに決まっていない` },
            { t: `「AI彼女計画」`, em: 'span' },
            { t: `だけ。` },
          ],
        },
        {
          segments: [
            { t: `成功するかどうかも分からない冒険。人生の空白期に、\n` },
            { t: `「自分だけの答えを創り出す」`, em: 'span' },
            { t: `ことに挑む。` },
          ],
        },
      ],
    },
    charLabels: {
      age: `年齢`,
      birthday: `誕生日`,
      zodiac: `星座`,
      bloodType: `血液型`,
      heightWeight: `身長/体重`,
      bwh: `スリーサイズ`,
      likes: `好きなもの`,
      cv: `CV`,
    },
    characters: [
      {
        role: `大学新卒（求職中）`,
        description: `本作の主人公。茨木大学情報工学科を卒業し、学生時代は成績優秀で誰もが認める「優等生」だった。しかし卒業後は不況と過当競争の波に揉まれ、就職活動は失敗の連続。「社畜候補」として下宿に引きこもり、毎日ネットで履歴書を送りながら将来の道を探している。真面目で堅実、何事にも冷静で理性的かつ頼れる性格で、周囲の人や物事に強い責任感を抱いている。`,
        likes: [`プログラミング`, `写真撮影`, `プラモ作り`],
        quotes: [
          `今はまるで見当もつかないけど、問題を一つずつ分解していけば、必ず解決策は見つかるはずだ。`,
          `やると決めた以上は最後まで責任を持つ。途中で投げ出すのは性に合わない。`,
          `……大丈夫、もう一度考えを整理して、明日また続けよう。`,
        ],
        zodiac: ``,
        bloodType: ``,
        birthday: ``,
      },
      {
        role: `大学新卒（引きこもり）`,
        description: `主人公のルームメイトであり、長年の遊び仲間。茨木大学経営学科を卒業したが、ビジネスの常識はまるでない。ボサボサの銀灰色の髪と、いつも寝足りなさそうな目つきが特徴。かつては絵に描いたような御曹司だったが、その後実家は没落した。生まれつき自由奔放で、何事も気分次第。チャラついて見えるが、意外と裏ワザに詳しく、口を開けば名言の連発。口先の達人で、夢物語を語らせれば右に出る者なし。`,
        likes: [`ポーカー`, `ビリヤード`, `ゲーム`],
        quotes: [
          `兄弟、スケールだよ！視野を広げろ！今の投資業界が見てるのは何だ？製品か？違う！感情的価値だ！`,
          `金は俺が出す、お前は命を張れ。一緒に人生の頂点へ行こうぜ！`,
          `お前に何が分かる？スタートアップに必要なのはオーラだ！`,
        ],
        zodiac: `射手座`,
        bloodType: `AB型`,
        birthday: `12月4日`,
      },
      {
        role: `UI/UXデザイナー（インターン）`,
        description: `茨木大学ビジュアルデザイン学科の2年生。生まれつき内気で、理由もなくすぐ顔を赤らめてしまう。控えめで普段は口数が少なく、豊かで繊細な内面を絵で表現することを好む。並外れた美的センスと画才の持ち主で、観察力が鋭く、色彩のコントロールに長け、美しさにこだわり細部まで気を配る。日常の小さな幸せを作品に織り込むのが得意で、デザインにおける才能と将来性はいつも周囲を驚かせる。`,
        likes: [`美術展めぐり`, `手芸`, `屋外スケッチ`],
        quotes: [
          `あ、あの……ここ、ちょっと変だと思うんです……直してもいいですか？`,
          `任せてください！わたし、必ず……最高の作品を作ってみせます！`,
          `信じてください！だって……わたしは先輩を信じてますから！`,
        ],
        zodiac: `魚座`,
        bloodType: `A型`,
        birthday: `3月9日`,
      },
      {
        role: `ジュニアフロントエンドエンジニア`,
        description: `横で結んだ緩く巻いたサイドポニーが特徴の、目立たない女の子。いつも細いフレームの眼鏡をかけている。物静かで内向的、口数は少なく、軽い人見知りもあるようだ。二流大学の出身であることに引け目を感じ、たいていの社交の場では居心地が悪い。仕事には極めて真面目で、文句一つ言わず黙々とこなす。細かい作業は丁寧だが、やや杓子定規なところも。コミュニケーションは苦手で、ひたすらコードを書くほうが性に合い、人より機械と向き合うほうが気楽だと思っている。`,
        likes: [`手帳をつける`, `書店めぐり`, `ドラマ鑑賞`],
        quotes: [
          `あの……さっき頼まれたことは全部終わりました……ほかに手伝えることはありますか？`,
          `やっぱり……パソコンと向き合ってるほうが気楽……`,
          `ごめんなさい……みんなの足を引っ張らないよう頑張ります……`,
        ],
        zodiac: `乙女座`,
        bloodType: `O型`,
        birthday: `9月17日`,
      },
      {
        role: `マーケティングプランナー`,
        description: `明るくて少々毒舌な人気配信者。16歳でSNS発信を始め、のちに有名MCNにスカウトされた。「バズの法則」への嗅覚が鋭く、これまで数々のバズり短編動画を自ら生み出してきた。弁が立ち頭の回転も速く、人間心理を見抜くのが得意で、IPブランディングに長ける。現在は大人気SNSで「ナナ女王様」アカウントを運営し、自立した女性像を打ち出して数千万のフォロワーを獲得。お金への執着が強く、何かと「追加料金ね」が口癖。`,
        likes: [`ショッピング`, `バラエティ番組`, `食べ歩き`],
        quotes: [
          `ふふん！あたしに任せて！これ全部バズの法則、一気に跳ねること間違いなしよ！`,
          `情緒だなんだって、ネットじゃ目を引けないものは全部ゴミなの！`,
          `言っとくけど、あたしを嫁にするのは高いわよ！追加料金ね！`,
        ],
        zodiac: `獅子座`,
        bloodType: `AB型`,
        birthday: `8月7日`,
      },
      {
        role: `プロダクトマネージャー`,
        description: `フランスの血を四分の一引く混血の美女。立ち居振る舞いは優雅で言葉遣いも穏やか、いつも柔らかな声音で話し、その場を和ませる。一般的なプロダクトマネージャーとは違う稀有な雰囲気を持ち、独自の理解と理想を抱いていて、今のビジネス環境ではやや理想主義に映る。ユーザー体験を何より重視し、数字の見栄えのために妥協することを嫌う。市場調査に惜しみなく時間をかけ、ユーザーが本当に必要とし愛する製品を作りたいと願っている。`,
        likes: [`生け花`, `バレエ`, `コンサート鑑賞`],
        quotes: [
          `わたしはただ、優しくて価値のあるものを作りたいだけなんです。`,
          `どんなに道が遠くても、方向さえ正しければ、いつかきっとたどり着けます。`,
          `もう妥協するの？現実に頭を下げるなんて、あなたらしくないわ。`,
        ],
        zodiac: `蟹座`,
        bloodType: `O型`,
        birthday: `7月8日`,
      },
      {
        role: `エンジェル投資家`,
        description: `投資ファンド「Woman Combination（WC）」の創設者。ベンチャー業界では「投資の女神」と崇められ、彼女が出資した案件はほぼ例外なく桁外れのリターンを生み、的中率は90%にも上る。いつも紫のベルベットのスーツとタイトなミニスカートをまとい、ハイヒールで一歩踏み出せば一瞬で場を圧倒する存在感。やり手で抜け目がなく、鋭い眼差しの持ち主。市場の動向に敏感で独自の見解を持ち、投資判断は極めて的確。鋭い質問で起業家を打ちのめすことで知られる。`,
        likes: [`スキー`, `ワインのテイスティング`, `アンティーク収集`],
        quotes: [
          `私が投資するのは今の製品じゃない。あなた自身と、あなたの未来によ。`,
          `夢で私を動かそうとしないで。データと実行力で語りなさい。`,
          `人は十分に強くなって初めて、自分の運命を支配できるのよ！`,
        ],
        zodiac: `山羊座`,
        bloodType: `B型`,
        birthday: `1月9日`,
      },
      {
        role: `ユニコーン企業の創業者兼CEO`,
        description: `AIスタートアップ「SYNTH♥」の創業者兼CEO。フォーブス「30 Under 30」に選ばれた俊英で、スタンフォード大学でコンピュータサイエンスとMBAの二つの学位、さらに人工知能のPhDを取得。驚異的な実行力とビジネス洞察力を併せ持つ。幼い頃からプログラミングに親しみ、学生時代にはインディー開発者として各地のオープンソース系ギークコミュニティで活躍し、大きな影響力を築いた。三度の連続起業をいずれも成功させ、かつては著名テック企業CloseAIに在籍し、大規模マルチモーダル学習プロジェクトにも携わった。`,
        likes: [`読書`, `財務分析`, `株式市場の研究`],
        quotes: [
          `人間の感情とは本質的にパターンのカオスだ。だが、パターンはモデル化できる。`,
          `恋愛？あれは非効率で高コスト、高リスクで冗長性だらけのホルモンゲームだ。`,
          `お前らみたいな寄せ集めの素人集団、潰れないだけ御の字だろう。`,
        ],
        zodiac: `牡羊座`,
        bloodType: `B型`,
        birthday: `3月28日`,
      },
    ],
  },

  'en-us': {
    nav: {
      char: `Characters`,
      pv: `Movies`,
      gallery: `Gallery`,
      progress: `Latest Progress`,
      product: `Product Info`,
    },
    pv: {
      themeMovie: `Theme Movie`,
      charMovie: `Character Movies`,
    },
    galleryNote: `* All assets shown are in development and subject to change without notice.`,
    progressNotes: [
      { date: '2026/07/11', text: `The official website is now live.` },
      { date: '2026/07/12', text: `The first promotional video has been released.` },
      { date: '2026/07/13', text: `The Steam store page is now live.` },
    ],
    spec: {
      title: `Spec`,
      items: [
        { label: `Title`, value: `Love, Startup & Co-founder` },
        { label: `Genre`, value: `Love and startup ADV` },
        { label: `Rating`, value: `All ages` },
        { label: `Release Date`, value: `(TBD)` },
        { label: `Price`, value: `(TBD)` },
        { label: `OS`, value: `Windows® 10 / 11` },
        { label: `CPU`, value: `Intel® Core™ i3 2nd Gen or higher recommended` },
        { label: `DISPLAY`, value: `3840×2160 pixels / Full Color or higher` },
        { label: `MEMORY`, value: `2 GB required / 4 GB or more recommended` },
        { label: `HDD`, value: `6 GB or more` },
      ],
    },
    staff: {
      title: `Staff`,
      items: [
        { label: `Planning / Production`, value: `StarQ Soft` },
        { label: `Publisher`, value: `Pairaki Games` },
        { label: `Scenario / Character Design`, value: `星可` },
        { label: `Art CG / SD / Backgrounds`, value: `眞海` },
        { label: `Theme Song`, value: `"Startup!★Start!!" by Wedoso` },
        { label: `Music`, value: `Wedoso` },
        { label: `Movie`, value: `星可` },
        { label: `Motion Effects`, value: `幽浮小花` },
        { label: `Additional Support`, value: `終焉， y3 et al.` },
        { label: `Special Thanks`, value: `小笠原` },
      ],
    },
    product: {
      btnDemo: `Add to Wishlist`,
      btnPreorder: `Pre-order`,
      note: `* System requirements are tentative and subject to change before release.`,
    },
    footerInfo: `All rights reserved.`,
    hero: {
      title: [
        [{ big: `Love`, small: `,`, size: '2em' }],
        [{ big: `Startup`, small: ` &`, size: '2em' }],
        [{ big: `Co-founder`, small: ``, size: '1.5em' }],
      ],
      description: [
        `One shared apartment, a group of wildly different companions,`,
        `and a passionate, bewildering, heart-fluttering journey of creating together.`,
      ],
      gameDescription: `The Steam Store is Now Open!`,
      wishlist: `Add to Wishlist`,
    },
    story: {
      title: `// STORY`,
      subtitle: `"Let's start a company!"`,
      paragraphs: [
        { segments: [{ t: `An Adventure We Begin Together!`, em: 'span' }] },
        {
          segments: [
            {
              t: `After graduating from college with no success in your job search, your roommate talks you into it,\nand you stumble onto a path you'd never imagined...`,
            },
          ],
        },
        { segments: [{ t: `No experience, no resources, no pay——`, em: 'strong' }] },
        {
          segments: [
            { t: `All you have is a group of co-founders even less reliable than you,\nand an ` },
            { t: `"AI Girlfriend Project"`, em: 'span' },
            { t: ` that doesn't even have a proper name yet.` },
          ],
        },
        {
          segments: [
            { t: `It's an adventure with no guarantee of success. In this blank chapter of life,\nyou set out to ` },
            { t: `"create your own answer."`, em: 'span' },
          ],
        },
      ],
    },
    charLabels: {
      age: `Age`,
      birthday: `Birthday`,
      zodiac: `Zodiac`,
      bloodType: `Blood Type`,
      heightWeight: `Height/Weight`,
      bwh: `BWH`,
      likes: `Likes`,
      cv: `CV`,
    },
    characters: [
      {
        role: `Fresh university graduate (job hunting now)`,
        description: `The protagonist of this story. A computer science graduate of Ibaraki University, he was an excellent student known to everyone as a model student. After graduation, however, amid an economic downturn and intensifying competition, repeated setbacks in the job market left him stuck in his rented room, sending out résumés online every day in search of a way forward. Earnest and steady, he stays calm under pressure. A rational, dependable person who is always carrying a strong sense of responsibility toward everyone and everything around him.`,
        likes: [`Programming`, `Photography`, `Model building`],
        quotes: [
          `I've got no clue where to start, but if I break the problem down piece by piece, there's always a solution.`,
          `Once I decide to do something, I see it through. Quitting halfway isn't my style.`,
          `...It's fine. Let me sort out my thoughts and pick it up again tomorrow.`,
        ],
        zodiac: ``,
        bloodType: ``,
        birthday: ``,
      },
      {
        role: `Fresh university graduate (shut-in)`,
        description: `The protagonist's roommate and childhood buddy. As a fresh graduate of Ibaraki University with business management degree, however, he has no business sense at all. Always has a messy mop of silver-gray hair and perpetually half-asleep eyes. He was once a textbook-perfect rich kid, but his family later fell on hard times. Laid-back by nature, he acts purely on whim. Slacker though he seems, he's surprisingly well-versed in all sorts of shortcuts and schemes sometimes. He is a silver-tongued story-teller, and a downright genius at selling pipe dreams.`,
        likes: [`Poker`, `Billiards`, `Video games`],
        quotes: [
          `Bro, think BIG! You gotta open up your horizons! What does the investment world care about these days? Products? Wrong! It's emotional value!`,
          `I put up the money, you put up your life—together we'll reach the summit!`,
          `What do you know? What a startup needs is presence!`,
        ],
        zodiac: `Sagittarius`,
        bloodType: `AB`,
        birthday: `December 4`,
      },
      {
        role: `UI/UX Designer (Intern)`,
        description: `A second-year visual design student at Ibaraki University. Somehow shy by nature and prone to blushing for no reason. She rarely says much, preferring to express her delicate inner feelings through arts. Gifted with an exceptional eye for aesthetics and a talent for drawing, she is sharply observant, masterful with color, devoted to beauty, and attentive to every detail. She is good at capturing the little joys of everyday life into her work, and her talent and potential in design never fail to impress people.`,
        likes: [`Visiting art exhibits`, `Crafting`, `Outdoor sketching`],
        quotes: [
          `I, um... I think... something's a little off here... Could I please fix it?`,
          `Just leave it to me! I'll definitely... create something absolutely perfect!`,
          `Please believe in me! Because... I believe in you, senpai!`,
        ],
        zodiac: `Pisces`,
        bloodType: `A`,
        birthday: `March 9`,
      },
      {
        role: `Junior Front-end Engineer`,
        description: `A quiet girl with a slightly wavy side ponytail, always wearing thin-rimmed glasses. As an introvert, she doesn't talk much and seems to have mild social anxiety. Graduated from a second-tier university, she lacks confidence and feels awkward in most social settings. She is extremely conscientious about her work and used to quietly burying herself in code. Not very good at communication, she often finds it far more comfortable to deal with machines than people.`,
        likes: [`Journaling`, `Browsing bookstores`, `Binge-watching dramas`],
        quotes: [
          `Um... I've finished everything you asked for earlier... Is there anything else I can help with?`,
          `As I thought... dealing with computers is just so much easier...`,
          `I'm sorry... I'll try hard not to hold everyone back...`,
        ],
        zodiac: `Virgo`,
        bloodType: `O`,
        birthday: `September 17`,
      },
      {
        role: `Marketing Planner`,
        description: `A lively, sharp-tongued influencer and livestreamer. She started creating content at the age of 16 and was later scouted by a famous MCN agency. With a keen nose for what goes viral, she's personally churned out plenty of smash-hit short videos. Quick-witted and razor-sharp with words, she understands human nature inside out and excels at personal branding. She currently runs the "Queen Nana" account on a wildly popular social platform, cultivating an independent-woman persona and has millions of followers. She has a fierce hunger for money, forever dropping the line "that's an extra cost".`,
        likes: [`Shopping`, `Variety shows`, `Foodie hopping`],
        quotes: [
          `Heh heh! Listen to me! These are the secrets to going viral—guaranteed to send you straight to the moon!`,
          `Sentiment, schmentiment. On the internet, anything that can't grab eyeballs is just trash!`,
          `Just so we're clear—marrying me won't come cheap! That'll cost extra!`,
        ],
        zodiac: `Leo`,
        bloodType: `AB`,
        birthday: `August 7`,
      },
      {
        role: `Product Manager`,
        description: `A multiracial beauty who is one-quarter French. Graceful in manner and gentle in speech, her soft voice puts everyone at ease. Unlike typical product managers, Natsumi carries a rare air, with her own distinctive understanding and ideals that come across as a touch idealistic in today's business climate. Deeply committed to user experience, she refuses to compromise just to make the numbers look good, and willingly spends ample time on market research, hoping to build products that users genuinely need and love.`,
        likes: [`Flower arranging`, `Ballet`, `Concerts`],
        quotes: [
          `I just want to make something gentle and worthwhile.`,
          `No matter how long the road, as long as the direction is right, we'll get there in the end.`,
          `Giving up already? Bowing to reality isn't like you.`,
        ],
        zodiac: `Cancer`,
        bloodType: `O`,
        birthday: `July 8`,
      },
      {
        role: `Angel Investor`,
        description: `Founder of the Woman Combination (WC) investment fund. Revered in venture-capital circles as the "Angel of Investment", nearly every project she backs delivers outsized returns, with a hit rate as high as 90%. Always clad in a purple velvet suit and a pencil skirt, her presence fills the room at the moment her heels touch the floor. She has a keen, original read on market trends and an uncannily precise eye for investment—famous for demolishing founders with sharp questions.`,
        likes: [`Skiing`, `Wine tasting`, `Antique collecting`],
        quotes: [
          `I'm not investing in your current product—I'm investing in you, and in your future.`,
          `Don't try to move me with dreams. Speak to me with data and execution.`,
          `Only those strong enough can take command of their own destiny!`,
        ],
        zodiac: `Capricorn`,
        bloodType: `B`,
        birthday: `January 9`,
      },
      {
        role: `Founder and CEO of a Unicorn Startup`,
        description: `Founder and CEO of the AI startup SYNTH♥, a Forbes 30 Under 30 honoree with dual degrees in Computer Science and an MBA from Spamfold, plus a PhD in artificial intelligence. He boasts astonishing execution and business insight. Coding since childhood, he was active as an indie developer across major open-source geek communities back in his school days, building considerable influence. He has launched three successful startups in a row and once worked at the renowned tech company CloseAI, taking part in large-scale multimodal training projects.`,
        likes: [`Reading`, `Analyzing financial reports`, `Studying the stock market`],
        quotes: [
          `Human emotion is, at its core, a kind of pattern chaos—but patterns can be modeled.`,
          `Love? That's a low-efficiency, high-energy-cost, high-risk hormonal game riddled with redundancy.`,
          `A ragtag outfit like yours? You should count yourselves lucky if you don't go bankrupt.`,
        ],
        zodiac: `Aries`,
        bloodType: `B`,
        birthday: `March 28`,
      },
    ],
  },

  'zh-cn': {
    nav: {
      char: `登场角色`,
      pv: `PV影片`,
      gallery: `画廊`,
      progress: `最新进展`,
      product: `产品信息`,
    },
    pv: {
      themeMovie: `主题影片`,
      charMovie: `角色介绍影片`,
    },
    galleryNote: `※所有素材均为开发中内容，可能在不另行通知的情况下发生变更。`,
    progressNotes: [
      { date: '2026/07/11', text: `官方网站正式上线。` },
      { date: '2026/07/12', text: `首曝PV影片公开。` },
      { date: '2026/07/13', text: `Steam商店页面已上线。` },
      // { date: '2026/07/15', text: `Steam商店页面已上线。` },
      // { date: '2026/03/29', text: `AI联动系统调试中！` },
      // { date: '2026/03/29', text: `AI特效测试中！` },
    ],
    spec: {
      title: `规格`,
      items: [
        { label: `标题`, value: `恋爱、创业、合伙人` },
        { label: `类型`, value: `青春创业ADV` },
        { label: `分级`, value: `全年龄` },
        { label: `发售日`, value: `(待定)` },
        { label: `价格`, value: `(待定)` },
        { label: `支持系统`, value: `Windows® 10／11` },
        { label: `CPU`, value: `推荐 Intel® Core™ i3 第二代及以上` },
        { label: `显示`, value: `3840×2160像素／全彩及以上` },
        { label: `内存`, value: `必须 2GB／推荐 4GB 及以上` },
        { label: `硬盘`, value: `6GB 以上` },
      ],
    },
    staff: {
      title: `制作人员`,
      items: [
        { label: `企划／制作`, value: `StarQ Soft` },
        { label: `发行`, value: `Pairaki Games` },
        { label: `剧本／角色设计`, value: `星可` },
        { label: `原画CG／SD／背景`, value: `眞海` },
        { label: `主题曲`, value: `「Startup!★Start!!」by Wedoso` },
        { label: `音乐`, value: `Wedoso` },
        { label: `影片`, value: `星可` },
        { label: `动效`, value: `幽浮小花` },
        { label: `协力`, value: `终焉 等` },
        { label: `特别鸣谢`, value: `小笠原` },
      ],
    },
    product: {
      btnDemo: `加入愿望单`,
      btnPreorder: `预购`,
      note: `※运行环境为暂定内容，正式发售前可能会有变更。`,
    },
    footerInfo: `All rights reserved.`,
    hero: {
      title: [
        [{ big: `恋爱`, small: `、`, size: '2em' }],
        [{ big: `创业`, small: `、`, size: '2em' }],
        [{ big: `合伙人`, small: ``, size: '1.5em' }],
      ],
      description: [
        `一间合租公寓，一群性格各异的伙伴，`,
        `和一段热血、迷茫、令人心动的共创旅程。`,
      ],
      gameDescription: `Steam商店页面现已公开！`,
      wishlist: `加入愿望单`,
    },
    story: {
      title: `// 剧情简介`,
      subtitle: `「我们一起创业吧！」`,
      paragraphs: [
        { segments: [{ t: `共同开启的冒险！`, em: 'span' }] },
        {
          segments: [
            {
              t: `大学毕业后，求职无果的你，被室友一顿忽悠，\n莫名其妙地踏上了一段从未设想过的道路……`,
            },
          ],
        },
        { segments: [{ t: `零经验、零资源、零薪资——`, em: 'strong' }] },
        {
          segments: [
            { t: `唯一拥有的，是一群比你还不靠谱的合伙人，\n以及一款连名字都没取好的` },
            { t: `「AI女友计划」`, em: 'span' },
            { t: `。` },
          ],
        },
        {
          segments: [
            { t: `这是一次不知能否成功的冒险，在人生的空白期里，\n尝试去` },
            { t: `「创造自己的答案」`, em: 'span' },
            { t: `。` },
          ],
        },
      ],
    },
    charLabels: {
      age: `年龄`,
      birthday: `生日`,
      zodiac: `星座`,
      bloodType: `血型`,
      heightWeight: `身高/体重`,
      bwh: `三围`,
      likes: `喜好`,
      cv: `CV`,
    },
    characters: [
      {
        role: `大学应届毕业生（求职中）`,
        description: `本作主人公。茨木大学计算机系本科毕业，学生时代成绩优异，是众人眼中的「优等生」。毕业后却在经济下行和内卷加剧等多重打击下，求职路上接连碰壁，只能成为一名「社畜候补」，暂时宅在出租屋中每天在网上投递简历寻找未来的出路。为人认真踏实，遇事冷静，理性可靠，对周围的人和事都拥有着强烈的责任感。`,
        likes: [`编程`, `摄影`, `模型组装`],
        quotes: [
          `虽然暂时毫无头绪，但只要把问题逐个拆解开，总能找到解决办法。`,
          `既然决定要做，就会负责到底，半途而废不是我的风格。`,
          `……没关系，重新整理一下思路，明天继续吧。`,
        ],
        zodiac: ``,
        bloodType: ``,
        birthday: ``,
      },
      {
        role: `大学应届毕业生（家里蹲）`,
        description: `与男主的合租室友兼多年玩伴。茨木大学工商管理系本科毕业，却没什么商业常识。拥有一头乱糟糟的银白色灰发和总是睡不醒的眼神。曾经是个教科书级的富二代，后来家道中落。天性散漫，做事全凭一时兴起。虽然有点吊儿郎当，却意外了解不少旁门左道，一开口就是金句频出，擅长嘴皮子功夫，堪称画饼届鬼才。`,
        likes: [`玩德扑`, `打台球`, `电子游戏`],
        quotes: [
          `兄弟，格局！格局要打开！现在的投资圈看的是什么？是产品吗？错！是情绪价值！`,
          `我出钱，你出命，一起走向人生巅峰！`,
          `你懂什么？初创公司要的就是气场！`,
        ],
        zodiac: `射手座`,
        bloodType: `AB型`,
        birthday: `12月4日`,
      },
      {
        role: `UI/UX设计师（实习生）`,
        description: `茨木大学视觉设计系大二在校生，生性害羞，莫名地容易脸红。性格并不张扬，平时话不多，更喜欢用艺术表达内心丰富细腻的情感。拥有过人的审美直觉和绘画天赋，观察力敏锐，对色彩把控力极强，执着于美感，注重每一个细节。擅长把生活中的点滴美好都融入到创作中，在设计方面的天赋和潜力总是令人刮目相看。`,
        likes: [`逛画展`, `做手工`, `户外写生`],
        quotes: [
          `我、我觉得……这里有点怪的……可以让我修改一下吗？`,
          `放心交给我吧！我一定会……创作出最完美的作品！`,
          `请相信我吧！因为……我相信学长你！`,
        ],
        zodiac: `双鱼座`,
        bloodType: `A型`,
        birthday: `3月9日`,
      },
      {
        role: `初级前端工程师`,
        description: `侧面扎着微卷单马尾的不起眼女生，总是戴着一副细框眼镜。安静内向，不爱说话，似乎有点轻微社恐，毕业于二流大学而不太自信，对大多数社交场合感到局促。对待工作极其认真，任劳任怨，做事细心但有些墨守成规。不太擅长沟通，习惯埋头默默写代码，认为还是跟机器打交道更轻松自在。`,
        likes: [`记手账`, `逛书店`, `追电视剧`],
        quotes: [
          `那个……之前交代的事情都做好了……还有什么需要帮忙的吗？`,
          `果然……还是跟电脑打交道比较轻松……`,
          `对不起……我会努力不拖大家的后腿的……`,
        ],
        zodiac: `处女座`,
        bloodType: `O型`,
        birthday: `9月17日`,
      },
      {
        role: `营销策划`,
        description: `性格活泼、有点毒舌的网红主播，16岁便开始做自媒体，后被某知名MCN相中，对「流量密码」有着敏锐的嗅觉，亲手制造过不少病毒式传播的爆款短视频。总是言辞犀利、思维敏捷，对人性理解透彻，擅长IP包装，目前在某爆火的社交平台上经营着「奈奈大女王」账号，打造独立女性人设，收获千万粉丝。对赚钱有种强烈的渴望，动不动就把「得加钱」挂在嘴边。`,
        likes: [`购物`, `看综艺`, `美食探店`],
        quotes: [
          `哼哼！听我的！这些都是流量密码，包你直接原地起飞！`,
          `什么情怀不情怀的，在互联网上，抓不住眼球的东西通通都是垃圾！`,
          `先说好了，娶我可是很贵的！得加钱！`,
        ],
        zodiac: `狮子座`,
        bloodType: `AB型`,
        birthday: `8月7日`,
      },
      {
        role: `产品经理`,
        description: `拥有四分之一法国血统的混血美人，举止优雅，言辞温和，说话总是轻声细语让人如沐春风。有着与众不同的罕见气质，对事物有自己独特的理解和追求，在当今这种商业背景下显得有点理想主义。非常注重用户体验，不想为了数据美观而妥协，愿意花大量时间进行市场调研，希望打造用户真正需要且喜爱的产品。`,
        likes: [`插花`, `芭蕾舞`, `听音乐会`],
        quotes: [
          `我只是想做一些温柔而有价值的东西。`,
          `不管路有多远，只要方向是对的，我们总能到达。`,
          `这就妥协了吗？向现实低头可不是你的风格。`,
        ],
        zodiac: `巨蟹座`,
        bloodType: `O型`,
        birthday: `7月8日`,
      },
      {
        role: `天使投资人`,
        description: `Woman Combination (WC) 投资基金创始人。在创投圈被尊称为「神之投资天使」，她出手的项目几乎都能获得超额回报，命中率高达90%。总是身穿紫色天鹅绒西装与包臀短裙，高跟鞋一踏地，气场瞬间两米八。精明干练，眼神锐利，对市场方向敏锐且有独到见解，投资判断极其精准，擅长用犀利的提问将创业者击溃。`,
        likes: [`滑雪`, `红酒品鉴`, `古董收藏`],
        quotes: [
          `我投资的，不是你们现在的产品，而是你，和你的未来。`,
          `别用梦想打动我，用数据和执行力说话。`,
          `人只有足够强大，才能主宰自己的命运！`,
        ],
        zodiac: `摩羯座`,
        bloodType: `B型`,
        birthday: `1月9日`,
      },
      {
        role: `独角兽创业公司创始人兼CEO`,
        description: `AI创业公司「SYNTH♥」创始人兼CEO，狐布斯30 under 30精英，思班佛大学计算机科学和MBA双学位以及人工智能PhD，拥有惊人的执行力和商业洞见。从小接触编程，中学时代便以独立开发者的身份活跃在各大开源极客社区并积累了大量影响力，连续三次创业都颇有成绩，曾在知名科技公司CloseAI工作，参与过大型多模态训练项目。`,
        likes: [`阅读`, `财报分析`, `股市研究`],
        quotes: [
          `人类的情感，本质上是一种模式混沌，但模式是可以被建模的。`,
          `恋爱？那是一种低效率、高耗能、高风险且充满冗余的激素博弈。`,
          `你们那种草台班子，不倒闭就谢天谢地了。`,
        ],
        zodiac: `白羊座`,
        bloodType: `B型`,
        birthday: `3月28日`,
      },
    ],
  },

  'zh-tw': {
    nav: {
      char: `登場角色`,
      pv: `影片`,
      gallery: `畫廊`,
      progress: `最新進展`,
      product: `產品資訊`,
    },
    pv: {
      themeMovie: `主題影片`,
      charMovie: `角色介紹影片`,
    },
    galleryNote: `※所有素材均為開發中內容，可能在不另行通知的情況下發生變更。`,
    progressNotes: [
      { date: '2026/07/11', text: `官方網站正式上線。` },
      { date: '2026/07/12', text: `首支PV影片公開。` },
      { date: '2026/07/13', text: `Steam商店頁面已上線。` },
    ],
    spec: {
      title: `規格`,
      items: [
        { label: `標題`, value: `戀愛、創業、合夥人` },
        { label: `類型`, value: `青春創業ADV` },
        { label: `分級`, value: `全年齡` },
        { label: `發售日`, value: `(待定)` },
        { label: `價格`, value: `(待定)` },
        { label: `支援系統`, value: `Windows® 10／11` },
        { label: `CPU`, value: `推薦 Intel® Core™ i3 第二代及以上` },
        { label: `顯示`, value: `3840×2160像素／全彩及以上` },
        { label: `記憶體`, value: `必須 2GB／推薦 4GB 及以上` },
        { label: `硬碟`, value: `6GB 以上` },
      ],
    },
    staff: {
      title: `製作人員`,
      items: [
        { label: `企劃／製作`, value: `StarQ Soft` },
        { label: `發行`, value: `Pairaki Games` },
        { label: `劇本／角色設計`, value: `星可` },
        { label: `原畫CG／SD／背景`, value: `眞海` },
        { label: `主題曲`, value: `「Startup!★Start!!」by Wedoso` },
        { label: `音樂`, value: `Wedoso` },
        { label: `影片`, value: `星可` },
        { label: `動效`, value: `幽浮小花` },
        { label: `協力`, value: `終焉、 y3 等` },
        { label: `特別鳴謝`, value: `小笠原` },
      ],
    },
    product: {
      btnDemo: `加入願望清單`,
      btnPreorder: `預購`,
      note: `※運行環境為暫定內容，正式發售前可能會有變更。`,
    },
    footerInfo: `All rights reserved.`,
    hero: {
      title: [
        [{ big: `戀愛`, small: `、`, size: '2em' }],
        [{ big: `創業`, small: `、`, size: '2em' }],
        [{ big: `合夥人`, small: ``, size: '1.5em' }],
      ],
      description: [
        `一間合租公寓，一群性格各異的夥伴，`,
        `和一段熱血、迷茫、令人心動的共創旅程。`,
      ],
      gameDescription: `Steam商店頁面現已公開！`,
      wishlist: `加入願望清單`,
    },
    story: {
      title: `// STORY`,
      subtitle: `「我們一起創業吧！」`,
      paragraphs: [
        { segments: [{ t: `共同開啟的冒險！`, em: 'span' }] },
        {
          segments: [
            {
              t: `大學畢業後，求職無果的你，被室友一頓忽悠，\n莫名其妙地踏上了一段從未設想過的道路……`,
            },
          ],
        },
        { segments: [{ t: `零經驗、零資源、零薪資——`, em: 'strong' }] },
        {
          segments: [
            { t: `唯一擁有的，是一群比你還不靠譜的合夥人，\n以及一款連名字都沒取好的` },
            { t: `「AI女友計畫」`, em: 'span' },
            { t: `。` },
          ],
        },
        {
          segments: [
            { t: `這是一次不知能否成功的冒險，在人生的空白期裡，\n嘗試去` },
            { t: `「創造自己的答案」`, em: 'span' },
            { t: `。` },
          ],
        },
      ],
    },
    charLabels: {
      age: `年齡`,
      birthday: `生日`,
      zodiac: `星座`,
      bloodType: `血型`,
      heightWeight: `身高/體重`,
      bwh: `三圍`,
      likes: `喜好`,
      cv: `CV`,
    },
    characters: [
      {
        role: `大學應屆畢業生（待業中）`,
        description: `本作主人公。茨木大學電腦系本科畢業，學生時代成績優異，是眾人眼中的「優等生」。畢業後卻在經濟下行和內捲加劇等多重打擊下，求職路上接連碰壁，只能成為一名「社畜候補」，暫時宅在出租屋中每天在網上投遞履歷尋找未來的出路。為人認真踏實，遇事冷靜，理性可靠，對周圍的人和事都擁有著強烈的責任感。`,
        likes: [`程式設計`, `攝影`, `模型組裝`],
        quotes: [
          `雖然暫時毫無頭緒，但只要把問題逐個拆解開，總能找到解決辦法。`,
          `既然決定要做，就會負責到底，半途而廢不是我的風格。`,
          `……沒關係，重新整理一下思路，明天繼續吧。`,
        ],
        zodiac: ``,
        bloodType: ``,
        birthday: ``,
      },
      {
        role: `大學應屆畢業生（家裡蹲）`,
        description: `與男主的合租室友兼多年玩伴。茨木大學工商管理系本科畢業，卻沒什麼商業常識。擁有一頭亂糟糟的銀白色灰髮和總是睡不醒的眼神。曾經是個教科書級的富二代，後來家道中落。天性散漫，做事全憑一時興起。雖然有點吊兒郎當，卻意外了解不少旁門左道，一開口就是金句頻出，擅長嘴皮子功夫，堪稱畫餅界鬼才。`,
        likes: [`玩德州撲克`, `打撞球`, `電子遊戲`],
        quotes: [
          `兄弟，格局！格局要打開！現在的投資圈看的是什麼？是產品嗎？錯！是情緒價值！`,
          `我出錢，你出命，一起走向人生巔峰！`,
          `你懂什麼？初創公司要的就是氣場！`,
        ],
        zodiac: `射手座`,
        bloodType: `AB型`,
        birthday: `12月4日`,
      },
      {
        role: `UI/UX設計師（實習生）`,
        description: `茨木大學視覺設計系大二在校生，生性害羞，莫名地容易臉紅。性格並不張揚，平時話不多，更喜歡用圖像表達內心豐富細膩的情感。擁有過人的審美直覺和繪畫天賦，觀察力敏銳，對色彩把控力極強，執著於美感，注重每一個細節。擅長把生活中的點滴美好都融入到創作中，在設計方面的天賦和潛力總是令人刮目相看。`,
        likes: [`逛畫展`, `做手工`, `戶外寫生`],
        quotes: [
          `我、我覺得……這裡有點怪的……可以讓我修改一下嗎？`,
          `放心交給我吧！我一定會……創作出最完美的作品！`,
          `請相信我吧！因為……我相信學長你！`,
        ],
        zodiac: `雙魚座`,
        bloodType: `A型`,
        birthday: `3月9日`,
      },
      {
        role: `初級前端工程師`,
        description: `側面紮著微捲單馬尾的不起眼女生，總是戴著一副細框眼鏡。安靜內向，不愛說話，似乎有點輕微社恐，因畢業於二流大學而不太自信，對大多數社交場合感到侷促。對待工作極其認真，任勞任怨，做事細心但有些墨守成規。不太擅長溝通，習慣埋頭默默寫程式，認為還是跟機器打交道更輕鬆自在。`,
        likes: [`記手帳`, `逛書店`, `追電視劇`],
        quotes: [
          `那個……之前交代的事情都做好了……還有什麼需要幫忙的嗎？`,
          `果然……還是跟電腦打交道比較輕鬆……`,
          `對不起……我會努力不拖大家的後腿的……`,
        ],
        zodiac: `處女座`,
        bloodType: `O型`,
        birthday: `9月17日`,
      },
      {
        role: `行銷企劃`,
        description: `性格活潑、有點毒舌的網紅主播，16歲便開始做自媒體，後被某知名MCN相中，對「流量密碼」有著敏銳的嗅覺，親手製造過不少病毒式傳播的爆款短影片。總是言辭犀利、思維敏捷，對人性理解透徹，擅長IP包裝，目前在某爆紅的社交平台上經營著「奈奈大女王」帳號，打造獨立女性人設，收穫千萬粉絲。對賺錢有種強烈的渴望，動不動就把「得加錢」掛在嘴邊。`,
        likes: [`購物`, `看綜藝`, `美食探店`],
        quotes: [
          `哼哼！聽我的！這些都是流量密碼，包你直接原地起飛！`,
          `什麼情懷不情懷的，在網路上，抓不住眼球的東西通通都是垃圾！`,
          `先說好了，娶我可是很貴的！得加錢！`,
        ],
        zodiac: `獅子座`,
        bloodType: `AB型`,
        birthday: `8月7日`,
      },
      {
        role: `產品經理`,
        description: `擁有四分之一法國血統的混血美人，舉止優雅，言辭溫和，說話總是輕聲細語讓人如沐春風。有著與一般產品經理不同的罕見氣質，有自己獨特的理解和追求，在當今這種商業背景下顯得有點理想主義。非常注重使用者體驗，不想為了數據美觀而妥協，願意花大量時間進行市場調研，希望打造使用者真正需要且喜愛的產品。`,
        likes: [`插花`, `芭蕾舞`, `聽音樂會`],
        quotes: [
          `我只是想做一些溫柔而有價值的東西。`,
          `不管路有多遠，只要方向是對的，我們總能到達。`,
          `這就妥協了嗎？向現實低頭可不是你的風格。`,
        ],
        zodiac: `巨蟹座`,
        bloodType: `O型`,
        birthday: `7月8日`,
      },
      {
        role: `天使投資人`,
        description: `Woman Combination (WC) 投資基金創始人。在創投圈被尊稱為「神之投資天使」，她出手的項目幾乎都能獲得超額回報，命中率高達90%。總是身穿紫色天鵝絨西裝與包臀短裙，高跟鞋一踏地，氣場瞬間兩米八。精明幹練，眼神銳利，對市場方向敏銳且有獨到見解，投資判斷極其精準，擅長用犀利的提問將創業者擊潰。`,
        likes: [`滑雪`, `紅酒品鑑`, `古董收藏`],
        quotes: [
          `我投資的，不是你們現在的產品，而是你，和你的未來。`,
          `別用夢想打動我，用數據和執行力說話。`,
          `人只有足夠強大，才能主宰自己的命運！`,
        ],
        zodiac: `摩羯座`,
        bloodType: `B型`,
        birthday: `1月9日`,
      },
      {
        role: `獨角獸新創公司創辦人兼CEO`,
        description: `AI創業公司「SYNTH♥」創始人兼CEO，狐布斯30 under 30精英，思班佛大學電腦科學和MBA雙學位以及人工智慧PhD，擁有驚人的執行力和商業洞見。從小接觸程式設計，中學時代便以獨立開發者的身份活躍在各大開源極客社區並累積了大量影響力，連續三次創業都頗有成績，曾在知名科技公司CloseAI工作，參與過大型多模態訓練專案。`,
        likes: [`閱讀`, `財報分析`, `股市研究`],
        quotes: [
          `人類的情感，本質上是一種模式混沌，但模式是可以被建模的。`,
          `戀愛？那是一種低效率、高耗能、高風險且充滿冗餘的激素博弈。`,
          `你們那種草台班子，不倒閉就謝天謝地了。`,
        ],
        zodiac: `牡羊座`,
        bloodType: `B型`,
        birthday: `3月28日`,
      },
    ],
  },
  'ko-kr': {
    "nav": {
      "char": "등장인물",
      "pv": "PV 영상",
      "gallery": "갤러리",
      "progress": "최신 소식",
      "product": "제품 정보"
    },
    "pv": {
      "themeMovie": "테마 영상",
      "charMovie": "캐릭터 소개 영상"
    },
    "galleryNote": "※모든 소재는 개발 중인 내용이며, 별도의 공지 없이 변경될 수 있습니다.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "공식 웹사이트가 정식으로 공개되었습니다."
      },
      {
        "date": "2026/07/12",
        "text": "첫 공개 PV 영상이 공개되었습니다."
      },
      {
        "date": "2026/07/13",
        "text": "Steam 상점 페이지가 공개되었습니다."
      }
    ],
    "spec": {
      "title": "사양",
      "items": [
        {
          "label": "제목",
          "value": "사랑, 창업, 공동 창업자"
        },
        {
          "label": "장르",
          "value": "청춘 창업 ADV"
        },
        {
          "label": "이용 등급",
          "value": "전체 이용가"
        },
        {
          "label": "출시일",
          "value": "(미정)"
        },
        {
          "label": "가격",
          "value": "(미정)"
        },
        {
          "label": "지원 OS",
          "value": "Windows® 10／11"
        },
        {
          "label": "CPU",
          "value": "Intel® Core™ i3 2세대 이상 권장"
        },
        {
          "label": "디스플레이",
          "value": "3840×2160픽셀／풀 컬러 이상"
        },
        {
          "label": "메모리",
          "value": "2GB 필수／4GB 이상 권장"
        },
        {
          "label": "저장 공간",
          "value": "6GB 이상"
        }
      ]
    },
    "staff": {
      "title": "제작진",
      "items": [
        {
          "label": "기획／제작",
          "value": "StarQ Soft"
        },
        {
          "label": "퍼블리싱",
          "value": "Pairaki Games"
        },
        {
          "label": "시나리오／캐릭터 디자인",
          "value": "星可"
        },
        {
          "label": "원화 CG／SD／배경",
          "value": "眞海"
        },
        {
          "label": "주제가",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "음악",
          "value": "Wedoso"
        },
        {
          "label": "영상",
          "value": "星可"
        },
        {
          "label": "모션 효과",
          "value": "幽浮小花"
        },
        {
          "label": "협력",
          "value": "终焉 외"
        },
        {
          "label": "특별 감사",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "찜 목록에 추가",
      "btnPreorder": "예약 구매",
      "note": "※시스템 요구 사항은 잠정 내용이며 정식 출시 전 변경될 수 있습니다."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "사랑",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "창업",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "공동 창업자",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "한 채의 셰어하우스, 각기 다른 개성을 지닌 동료들,",
        "그리고 열정과 방황, 설렘이 교차하는 공동 창작의 여정."
      ],
      "gameDescription": "Steam 상점 페이지 공개 중!",
      "wishlist": "찜 목록에 추가"
    },
    "story": {
      "title": "// 줄거리",
      "subtitle": "「우리, 함께 창업하자!」",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "함께 시작하는 모험!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "대학을 졸업했지만 취업에 실패한 당신은 룸메이트의 말에 휘말려,\n생각지도 못했던 길에 얼떨결에 발을 들이게 된다……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "경험 제로, 자원 제로, 급여 제로——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "가진 것이라곤 당신보다 더 믿음직스럽지 못한 공동 창업자들과,\n이름조차 제대로 정하지 못한 "
            },
            {
              "t": "「AI 여자친구 프로젝트」",
              "em": "span"
            },
            {
              "t": "뿐."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "성공할 수 있을지조차 알 수 없는 모험. 인생의 공백기 속에서,\n"
            },
            {
              "t": "「나만의 답을 만들어 내는 것」",
              "em": "span"
            },
            {
              "t": "에 도전한다."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "나이",
      "birthday": "생일",
      "zodiac": "별자리",
      "bloodType": "혈액형",
      "heightWeight": "키/몸무게",
      "bwh": "신체 사이즈",
      "likes": "취미",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "대학 신입 졸업생(구직 중)",
        "description": "본작의 주인공. 이바라키대학교 컴퓨터공학과를 졸업했으며, 재학 시절 성적이 뛰어나 모두가 인정하는 「우등생」이었다. 그러나 졸업 후 경기 침체와 치열해진 경쟁의 이중고 속에서 취업에 번번이 실패한다. 결국 「예비 직장 노예」가 되어 임대주택에 틀어박힌 채 매일 온라인으로 이력서를 보내며 미래의 출구를 찾고 있다. 성실하고 착실하며, 위기에도 침착하고 이성적이다. 믿음직한 성격으로 주변 사람과 일에 강한 책임감을 지닌다.",
        "likes": [
          "프로그래밍",
          "사진 촬영",
          "모형 조립"
        ],
        "quotes": [
          "아직은 전혀 감이 안 오지만, 문제를 하나씩 쪼개다 보면 반드시 해결책을 찾을 수 있을 거야.",
          "하겠다고 결정한 이상 끝까지 책임질 거야. 중간에 포기하는 건 내 방식이 아니야.",
          "……괜찮아. 생각을 다시 정리하고 내일 계속하자."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "대학 신입 졸업생(은둔형 외톨이)",
        "description": "남자 주인공의 룸메이트이자 오랜 친구. 이바라키대학교 경영학과를 졸업했지만 비즈니스 상식은 거의 없다. 헝클어진 은회색 머리와 늘 잠이 덜 깬 듯한 눈빛이 특징이다. 한때는 교과서에 나올 법한 재벌 2세였지만 이후 집안이 몰락했다. 천성적으로 느슨하고 모든 일을 순간의 기분대로 한다. 다소 건들거려 보이지만 의외로 온갖 편법에 밝고, 입만 열면 명언을 쏟아낸다. 말재주가 뛰어나며 허황된 청사진을 그리는 데는 천재적이다.",
        "likes": [
          "텍사스 홀덤",
          "당구",
          "비디오 게임"
        ],
        "quotes": [
          "형제여, 스케일이야! 시야를 넓혀! 요즘 투자 업계가 보는 게 뭔데? 제품? 아니야! 감정적 가치라고!",
          "돈은 내가 대고, 목숨은 네가 걸어. 같이 인생의 정상으로 가자!",
          "네가 뭘 알아? 스타트업에 필요한 건 바로 아우라야!"
        ],
        "zodiac": "사수자리",
        "bloodType": "AB형",
        "birthday": "12월 4일"
      },
      {
        "role": "UI/UX 디자이너(인턴)",
        "description": "이바라키대학교 시각디자인학과 2학년 재학생. 타고난 수줍음이 많고 별다른 이유 없이 쉽게 얼굴이 붉어진다. 성격이 조용하고 평소 말수가 적으며, 풍부하고 섬세한 내면의 감정을 예술로 표현하는 것을 좋아한다. 뛰어난 미적 직감과 그림 재능을 지녔고 관찰력이 예리하며 색채를 다루는 능력이 탁월하다. 아름다움에 집착하고 모든 디테일을 꼼꼼히 챙긴다. 일상의 작은 행복을 작품에 담는 데 능하며, 디자인 재능과 잠재력은 늘 주변을 놀라게 한다.",
        "likes": [
          "미술 전시 관람",
          "수공예",
          "야외 스케치"
        ],
        "quotes": [
          "저, 저기……여기가 조금 이상한 것 같아요……제가 수정해도 될까요?",
          "저에게 맡겨 주세요! 반드시……가장 완벽한 작품을 만들어 낼게요!",
          "저를 믿어 주세요! 왜냐하면……저도 선배를 믿으니까요!"
        ],
        "zodiac": "물고기자리",
        "bloodType": "A형",
        "birthday": "3월 9일"
      },
      {
        "role": "주니어 프런트엔드 엔지니어",
        "description": "옆으로 살짝 웨이브진 포니테일을 묶고 늘 가는 테 안경을 쓰는 수수한 여자아이. 조용하고 내향적이며 말수가 적고 가벼운 대인 불안도 있는 듯하다. 이류 대학 출신이라는 사실에 자신감이 부족해 대부분의 사교 자리에서 어색해한다. 일에는 극도로 성실하고 불평 없이 묵묵히 해낸다. 꼼꼼하지만 다소 원칙에만 얽매이는 면도 있다. 의사소통이 서툴러 고개를 숙이고 코드를 쓰는 데 익숙하며, 사람보다 기계를 상대하는 편이 훨씬 편하다고 생각한다.",
        "likes": [
          "다이어리 꾸미기",
          "서점 구경",
          "드라마 정주행"
        ],
        "quotes": [
          "저기……아까 부탁하신 일은 전부 끝냈어요……또 도와드릴 일이 있을까요?",
          "역시……컴퓨터를 상대하는 편이 더 편해……",
          "죄송해요……모두에게 폐를 끼치지 않도록 노력할게요……"
        ],
        "zodiac": "처녀자리",
        "bloodType": "O형",
        "birthday": "9월 17일"
      },
      {
        "role": "마케팅 기획",
        "description": "활발하고 조금 독설적인 인기 인플루언서 겸 스트리머. 16세부터 콘텐츠를 만들기 시작했고 이후 유명 MCN에 발탁되었다. 「트래픽 공식」에 대한 감각이 날카로워 직접 수많은 바이럴 숏폼 영상을 만들어 냈다. 말이 날카롭고 두뇌 회전이 빠르며 인간 심리를 꿰뚫어 보고 IP 브랜딩에 능하다. 현재 인기 소셜 플랫폼에서 「나나 대여왕」 계정을 운영하며 독립적인 여성 이미지를 구축해 수천만 팔로워를 보유한다. 돈에 대한 욕망이 강하고 툭하면 「추가 비용이야」를 입에 달고 산다.",
        "likes": [
          "쇼핑",
          "예능 시청",
          "맛집 탐방"
        ],
        "quotes": [
          "흥! 내 말만 들어! 이게 전부 트래픽 공식이야. 바로 떡상하게 해 줄게!",
          "감성이니 뭐니 해도 인터넷에서 시선을 못 끄는 건 전부 쓰레기야!",
          "미리 말해 두는데, 나랑 결혼하려면 비싸! 추가 비용이야!"
        ],
        "zodiac": "사자자리",
        "bloodType": "AB형",
        "birthday": "8월 7일"
      },
      {
        "role": "프로덕트 매니저",
        "description": "프랑스 혈통이 4분의 1 섞인 혼혈 미인. 행동이 우아하고 말투가 온화하며 늘 부드러운 목소리로 주변을 편안하게 한다. 일반적인 프로덕트 매니저와는 다른 희귀한 분위기를 지녔고, 사물에 대한 독자적인 이해와 이상을 품어 오늘날의 비즈니스 환경에서는 다소 이상주의적으로 보인다. 사용자 경험을 매우 중시하며 숫자를 보기 좋게 만들기 위해 타협하는 것을 싫어한다. 시장 조사에 많은 시간을 기꺼이 쓰며 사용자가 진정으로 필요로 하고 사랑할 제품을 만들고 싶어 한다.",
        "likes": [
          "꽃꽂이",
          "발레",
          "콘서트 감상"
        ],
        "quotes": [
          "저는 그저 다정하고 가치 있는 것을 만들고 싶을 뿐이에요.",
          "길이 아무리 멀어도 방향만 옳다면 언젠가는 반드시 도착할 수 있어요.",
          "벌써 타협하는 건가요? 현실에 고개 숙이는 건 당신답지 않아요."
        ],
        "zodiac": "게자리",
        "bloodType": "O형",
        "birthday": "7월 8일"
      },
      {
        "role": "엔젤 투자자",
        "description": "투자 펀드 Woman Combination(WC)의 창립자. 벤처 투자 업계에서 「신의 투자 천사」로 불리며, 그녀가 투자한 프로젝트는 거의 예외 없이 초과 수익을 내고 적중률은 90%에 달한다. 늘 보라색 벨벳 정장과 타이트한 미니스커트를 입고 있으며 하이힐이 바닥에 닿는 순간 압도적인 존재감을 뿜어낸다. 영리하고 유능하며 눈빛이 날카롭다. 시장의 흐름을 민감하게 읽고 독자적인 통찰을 지녔으며, 투자 판단이 극도로 정확하다. 날카로운 질문으로 창업자를 무너뜨리는 것으로 유명하다.",
        "likes": [
          "스키",
          "와인 시음",
          "골동품 수집"
        ],
        "quotes": [
          "내가 투자하는 건 지금의 제품이 아니야. 바로 당신과 당신의 미래지.",
          "꿈으로 날 움직이려 하지 마. 데이터와 실행력으로 말해.",
          "사람은 충분히 강해져야만 자신의 운명을 지배할 수 있어!"
        ],
        "zodiac": "염소자리",
        "bloodType": "B형",
        "birthday": "1월 9일"
      },
      {
        "role": "유니콘 스타트업 창립자 겸 CEO",
        "description": "AI 스타트업 「SYNTH♥」의 창립자 겸 CEO. 「Forbes 30 Under 30」에 선정된 인재로, 스탠퍼드대학교 컴퓨터과학과 MBA 복수 학위 및 인공지능 PhD를 보유했다. 놀라운 실행력과 비즈니스 통찰을 겸비했다. 어릴 때부터 프로그래밍을 접했고 중학생 시절부터 인디 개발자로 여러 오픈 소스 긱 커뮤니티에서 활동하며 큰 영향력을 쌓았다. 세 번의 연속 창업에서 모두 성과를 냈고, 유명 기술 기업 CloseAI에서 대규모 멀티모달 학습 프로젝트에 참여한 경력도 있다.",
        "likes": [
          "독서",
          "재무제표 분석",
          "주식시장 연구"
        ],
        "quotes": [
          "인간의 감정은 본질적으로 패턴의 혼돈이다. 하지만 패턴은 모델링할 수 있지.",
          "연애? 그건 비효율적이고 에너지 소모가 크며 위험하고 중복투성이인 호르몬 게임이야.",
          "너희 같은 오합지졸은 망하지 않는 것만으로도 다행이지."
        ],
        "zodiac": "양자리",
        "bloodType": "B형",
        "birthday": "3월 28일"
      }
    ]
  },
  'es-es': {
    "nav": {
      "char": "Personajes",
      "pv": "Vídeos PV",
      "gallery": "Galería",
      "progress": "Últimos avances",
      "product": "Información del producto"
    },
    "pv": {
      "themeMovie": "Vídeo temático",
      "charMovie": "Vídeos de presentación de personajes"
    },
    "galleryNote": "※Todos los materiales pertenecen a una versión en desarrollo y pueden cambiar sin previo aviso.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "Se ha inaugurado oficialmente el sitio web."
      },
      {
        "date": "2026/07/12",
        "text": "Se ha publicado el primer vídeo PV."
      },
      {
        "date": "2026/07/13",
        "text": "La página de Steam ya está disponible."
      }
    ],
    "spec": {
      "title": "Especificaciones",
      "items": [
        {
          "label": "Título",
          "value": "Amor, Startup y Socios"
        },
        {
          "label": "Género",
          "value": "ADV juvenil de emprendimiento"
        },
        {
          "label": "Clasificación",
          "value": "Para todos los públicos"
        },
        {
          "label": "Fecha de lanzamiento",
          "value": "(Por determinar)"
        },
        {
          "label": "Precio",
          "value": "(Por determinar)"
        },
        {
          "label": "Sistema operativo",
          "value": "Windows® 10／11"
        },
        {
          "label": "CPU",
          "value": "Intel® Core™ i3 de 2.ª generación o superior recomendado"
        },
        {
          "label": "Pantalla",
          "value": "3840×2160 píxeles／color completo o superior"
        },
        {
          "label": "Memoria",
          "value": "2 GB obligatorios／4 GB o más recomendados"
        },
        {
          "label": "Almacenamiento",
          "value": "6 GB o más"
        }
      ]
    },
    "staff": {
      "title": "Equipo",
      "items": [
        {
          "label": "Planificación／Producción",
          "value": "StarQ Soft"
        },
        {
          "label": "Distribución",
          "value": "Pairaki Games"
        },
        {
          "label": "Guion／Diseño de personajes",
          "value": "星可"
        },
        {
          "label": "Arte CG／SD／Fondos",
          "value": "眞海"
        },
        {
          "label": "Tema principal",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "Música",
          "value": "Wedoso"
        },
        {
          "label": "Vídeo",
          "value": "星可"
        },
        {
          "label": "Efectos de movimiento",
          "value": "幽浮小花"
        },
        {
          "label": "Colaboración",
          "value": "终焉 y otros"
        },
        {
          "label": "Agradecimientos especiales",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "Añadir a la lista de deseados",
      "btnPreorder": "Reservar",
      "note": "※Los requisitos del sistema son provisionales y pueden cambiar antes del lanzamiento."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "Amor",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Startup",
            "small": " y",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Socios",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "Un piso compartido, un grupo de compañeros con personalidades muy distintas,",
        "y un viaje de creación conjunta lleno de pasión, dudas y emociones."
      ],
      "gameDescription": "¡La página de Steam ya está disponible!",
      "wishlist": "Añadir a la lista de deseados"
    },
    "story": {
      "title": "// HISTORIA",
      "subtitle": "«¡Montemos una empresa juntos!»",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "¡Una aventura que comienza juntos!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Tras graduarte de la universidad sin conseguir empleo, tu compañero de piso te convence y,\nsin saber muy bien cómo, acabas tomando un camino que jamás habías imaginado……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Cero experiencia, cero recursos, cero sueldo——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Lo único que tienes es un grupo de socios aún menos fiables que tú\ny un "
            },
            {
              "t": "«Proyecto Novia IA»",
              "em": "span"
            },
            {
              "t": " que ni siquiera tiene un nombre definitivo."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Una aventura cuyo éxito nadie puede garantizar. En este vacío de tu vida,\nintentarás "
            },
            {
              "t": "«crear tu propia respuesta»",
              "em": "span"
            },
            {
              "t": "."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "Edad",
      "birthday": "Cumpleaños",
      "zodiac": "Signo zodiacal",
      "bloodType": "Grupo sanguíneo",
      "heightWeight": "Altura/Peso",
      "bwh": "Medidas",
      "likes": "Aficiones",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "Recién graduado universitario (buscando empleo)",
        "description": "El protagonista. Graduado en Informática por la Universidad de Ibaraki, destacó por sus excelentes notas y era considerado un alumno ejemplar. Sin embargo, tras graduarse, la recesión económica y la competencia extrema convirtieron su búsqueda de empleo en una sucesión de fracasos. Convertido en un «candidato a esclavo corporativo», se encierra temporalmente en su piso alquilado y envía currículos por internet cada día, buscando una salida para su futuro. Es serio, constante, sereno ante los problemas, racional y fiable, y siente una gran responsabilidad hacia las personas y los asuntos que lo rodean.",
        "likes": [
          "Programación",
          "Fotografía",
          "Montaje de maquetas"
        ],
        "quotes": [
          "Aunque ahora no tenga ni idea, si descompongo el problema paso a paso, siempre acabaré encontrando una solución.",
          "Si decido hacerlo, asumiré la responsabilidad hasta el final. Abandonar a mitad de camino no va conmigo.",
          "……No pasa nada. Ordenaré mis ideas y continuaré mañana."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "Recién graduado universitario (recluido en casa)",
        "description": "Compañero de piso y amigo de muchos años del protagonista. Se graduó en Administración de Empresas por la Universidad de Ibaraki, pero carece por completo de sentido común empresarial. Tiene el cabello plateado grisáceo siempre revuelto y una mirada perpetuamente somnolienta. Antes fue el típico hijo de familia rica, hasta que su casa cayó en desgracia. Es despreocupado por naturaleza y actúa según el impulso del momento. Aunque parece un holgazán, conoce sorprendentemente muchos trucos y atajos; cada vez que abre la boca suelta una frase memorable. Es un maestro de la labia y un auténtico genio vendiendo castillos en el aire.",
        "likes": [
          "Póquer Texas Hold’em",
          "Billar",
          "Videojuegos"
        ],
        "quotes": [
          "¡Hermano, perspectiva! ¡Amplía tu visión! ¿Qué mira hoy el mundo de la inversión? ¿El producto? ¡No! ¡El valor emocional!",
          "Yo pongo el dinero y tú la vida. ¡Juntos llegaremos a la cima!",
          "¿Qué sabrás tú? ¡Lo que necesita una startup es presencia!"
        ],
        "zodiac": "Sagitario",
        "bloodType": "AB",
        "birthday": "4 de diciembre"
      },
      {
        "role": "Diseñadora UI/UX (becaria)",
        "description": "Estudiante de segundo año de Diseño Visual en la Universidad de Ibaraki. Es tímida por naturaleza y se ruboriza con facilidad sin motivo aparente. De carácter discreto y poco habladora, prefiere expresar mediante el arte sus emociones ricas y delicadas. Posee una intuición estética y un talento para el dibujo excepcionales, una gran capacidad de observación y un dominio extraordinario del color. Persigue la belleza y cuida cada detalle. Sabe incorporar a sus obras las pequeñas alegrías de la vida cotidiana, y su talento y potencial para el diseño nunca dejan de sorprender.",
        "likes": [
          "Visitar exposiciones",
          "Manualidades",
          "Dibujo al aire libre"
        ],
        "quotes": [
          "Y-yo creo que…… aquí hay algo un poco raro…… ¿Puedo corregirlo?",
          "¡Déjamelo a mí! Voy a…… crear la obra más perfecta.",
          "¡Confía en mí! Porque…… yo confío en ti, senpai."
        ],
        "zodiac": "Piscis",
        "bloodType": "A",
        "birthday": "9 de marzo"
      },
      {
        "role": "Ingeniera front-end junior",
        "description": "Una chica discreta con una coleta lateral ligeramente ondulada y unas gafas de montura fina. Es tranquila, introvertida y poco habladora, y parece sufrir cierta ansiedad social. Haber estudiado en una universidad de segunda categoría le genera inseguridad y se siente incómoda en la mayoría de situaciones sociales. Es extremadamente responsable en el trabajo, no se queja y cumple sus tareas con cuidado, aunque a veces se apega demasiado a las normas. No se le da bien comunicarse y prefiere escribir código en silencio; considera que tratar con máquinas es mucho más sencillo que tratar con personas.",
        "likes": [
          "Llevar una agenda",
          "Visitar librerías",
          "Ver series"
        ],
        "quotes": [
          "Eh…… ya he terminado todo lo que me encargaste antes…… ¿Hay algo más en lo que pueda ayudar?",
          "Como pensaba…… tratar con ordenadores es mucho más fácil……",
          "Lo siento…… me esforzaré para no ser una carga para todos……"
        ],
        "zodiac": "Virgo",
        "bloodType": "O",
        "birthday": "17 de septiembre"
      },
      {
        "role": "Planificadora de marketing",
        "description": "Una influencer y streamer alegre y algo mordaz. Empezó a crear contenido a los 16 años y más tarde fue descubierta por una conocida agencia MCN. Tiene un olfato excepcional para las «claves del tráfico» y ha creado personalmente numerosos vídeos cortos de éxito viral. Habla con agudeza, piensa rápido, comprende muy bien la psicología humana y destaca en la creación de marcas e IP. Actualmente gestiona la cuenta «Gran Reina Nana» en una popular plataforma social, donde proyecta una imagen de mujer independiente y reúne decenas de millones de seguidores. Tiene una intensa obsesión por ganar dinero y repite constantemente: «Eso cuesta extra».",
        "likes": [
          "Compras",
          "Programas de variedades",
          "Descubrir restaurantes"
        ],
        "quotes": [
          "¡Je! ¡Hazme caso! Estas son las claves del tráfico. ¡Te harán despegar al instante!",
          "¿Sentimientos? En internet, todo lo que no consiga atraer miradas es basura.",
          "Te lo advierto: casarte conmigo sale caro. ¡Eso cuesta extra!"
        ],
        "zodiac": "Leo",
        "bloodType": "AB",
        "birthday": "7 de agosto"
      },
      {
        "role": "Jefa de producto",
        "description": "Una belleza mestiza con una cuarta parte de ascendencia francesa. Sus gestos son elegantes, sus palabras suaves y su voz siempre cálida, capaz de hacer que cualquiera se sienta cómodo. Posee un aire poco común y una visión propia de las cosas; en el entorno empresarial actual puede parecer algo idealista. Da máxima prioridad a la experiencia de usuario y se niega a comprometerla para que los datos resulten más atractivos. Está dispuesta a dedicar mucho tiempo a la investigación de mercado y desea crear productos que los usuarios necesiten y amen de verdad.",
        "likes": [
          "Arreglos florales",
          "Ballet",
          "Conciertos"
        ],
        "quotes": [
          "Solo quiero crear algo amable y valioso.",
          "No importa lo largo que sea el camino: mientras la dirección sea correcta, acabaremos llegando.",
          "¿Ya vas a ceder? Inclinarte ante la realidad no es propio de ti."
        ],
        "zodiac": "Cáncer",
        "bloodType": "O",
        "birthday": "8 de julio"
      },
      {
        "role": "Inversora ángel",
        "description": "Fundadora del fondo de inversión Woman Combination (WC). En el mundo del capital riesgo es venerada como el «ángel divino de la inversión»: casi todos los proyectos que respalda obtienen retornos extraordinarios, con una tasa de acierto de hasta el 90 %. Siempre viste un traje de terciopelo morado y una minifalda ajustada; basta el golpe de sus tacones para dominar toda la sala. Es inteligente, eficaz y de mirada afilada. Percibe con precisión las tendencias del mercado, tiene opiniones propias y toma decisiones de inversión extremadamente certeras. Es famosa por destrozar a los emprendedores con preguntas incisivas.",
        "likes": [
          "Esquí",
          "Cata de vinos",
          "Coleccionar antigüedades"
        ],
        "quotes": [
          "No invierto en vuestro producto actual. Invierto en ti y en tu futuro.",
          "No intentes conmoverme con sueños. Háblame con datos y capacidad de ejecución.",
          "¡Solo cuando una persona es lo bastante fuerte puede dominar su propio destino!"
        ],
        "zodiac": "Capricornio",
        "bloodType": "B",
        "birthday": "9 de enero"
      },
      {
        "role": "Fundador y CEO de una startup unicornio",
        "description": "Fundador y CEO de la startup de IA «SYNTH♥». Elegido para Forbes 30 Under 30, posee una doble titulación en Informática y un MBA por la Universidad de Stanford, además de un doctorado en Inteligencia Artificial. Combina una capacidad de ejecución asombrosa con una gran visión empresarial. Programa desde niño y ya en secundaria participaba como desarrollador independiente en importantes comunidades geek de código abierto, acumulando una enorme influencia. Ha logrado buenos resultados en tres startups consecutivas y trabajó en la conocida empresa tecnológica CloseAI, donde participó en grandes proyectos de entrenamiento multimodal.",
        "likes": [
          "Lectura",
          "Análisis financiero",
          "Estudio del mercado bursátil"
        ],
        "quotes": [
          "Las emociones humanas son, en esencia, un caos de patrones. Pero los patrones pueden modelarse.",
          "¿Amor? Es un juego hormonal ineficiente, costoso, arriesgado y lleno de redundancias.",
          "Un grupo improvisado como el vuestro debería dar gracias si no acaba en bancarrota."
        ],
        "zodiac": "Aries",
        "bloodType": "B",
        "birthday": "28 de marzo"
      }
    ]
  },
  'ru-ru': {
    "nav": {
      "char": "Персонажи",
      "pv": "PV-видео",
      "gallery": "Галерея",
      "progress": "Последние новости",
      "product": "Информация о продукте"
    },
    "pv": {
      "themeMovie": "Тематическое видео",
      "charMovie": "Видео о персонажах"
    },
    "galleryNote": "※Все материалы находятся в разработке и могут быть изменены без предварительного уведомления.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "Официальный сайт запущен."
      },
      {
        "date": "2026/07/12",
        "text": "Опубликован первый PV-ролик."
      },
      {
        "date": "2026/07/13",
        "text": "Страница игры в Steam уже открыта."
      }
    ],
    "spec": {
      "title": "Системные требования",
      "items": [
        {
          "label": "Название",
          "value": "Любовь, стартап и партнёры"
        },
        {
          "label": "Жанр",
          "value": "Молодёжная предпринимательская ADV"
        },
        {
          "label": "Рейтинг",
          "value": "Для всех возрастов"
        },
        {
          "label": "Дата выхода",
          "value": "(Не определена)"
        },
        {
          "label": "Цена",
          "value": "(Не определена)"
        },
        {
          "label": "ОС",
          "value": "Windows® 10／11"
        },
        {
          "label": "Процессор",
          "value": "Рекомендуется Intel® Core™ i3 2-го поколения или новее"
        },
        {
          "label": "Экран",
          "value": "3840×2160 пикселей／полноцветный режим или выше"
        },
        {
          "label": "Память",
          "value": "2 ГБ обязательно／4 ГБ или больше рекомендуется"
        },
        {
          "label": "Накопитель",
          "value": "6 ГБ или больше"
        }
      ]
    },
    "staff": {
      "title": "Команда",
      "items": [
        {
          "label": "Концепция／Продюсирование",
          "value": "StarQ Soft"
        },
        {
          "label": "Издатель",
          "value": "Pairaki Games"
        },
        {
          "label": "Сценарий／Дизайн персонажей",
          "value": "星可"
        },
        {
          "label": "CG-арт／SD／Фоны",
          "value": "眞海"
        },
        {
          "label": "Главная песня",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "Музыка",
          "value": "Wedoso"
        },
        {
          "label": "Видео",
          "value": "星可"
        },
        {
          "label": "Анимационные эффекты",
          "value": "幽浮小花"
        },
        {
          "label": "Сотрудничество",
          "value": "终焉 и другие"
        },
        {
          "label": "Особая благодарность",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "Добавить в желаемое",
      "btnPreorder": "Предзаказ",
      "note": "※Системные требования предварительные и могут измениться до выхода игры."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "Любовь",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Стартап",
            "small": " и",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Партнёры",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "Одна съёмная квартира, компания совершенно разных людей",
        "и совместное путешествие, полное страсти, сомнений и трепета."
      ],
      "gameDescription": "Страница игры в Steam уже открыта!",
      "wishlist": "Добавить в желаемое"
    },
    "story": {
      "title": "// ИСТОРИЯ",
      "subtitle": "«Давай создадим компанию вместе!»",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "Приключение, которое начинается вместе!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "После университета ты так и не находишь работу. Сосед по квартире уговаривает тебя,\nи ты неожиданно вступаешь на путь, о котором прежде даже не думал……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Ноль опыта, ноль ресурсов, ноль зарплаты——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "У тебя есть лишь партнёры, которые ещё менее надёжны, чем ты,\nи "
            },
            {
              "t": "«Проект ИИ-девушки»",
              "em": "span"
            },
            {
              "t": ", у которого пока даже нет нормального названия."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Приключение без гарантии успеха. В этот пустой период жизни\nты пытаешься "
            },
            {
              "t": "«создать собственный ответ»",
              "em": "span"
            },
            {
              "t": "."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "Возраст",
      "birthday": "День рождения",
      "zodiac": "Знак зодиака",
      "bloodType": "Группа крови",
      "heightWeight": "Рост/Вес",
      "bwh": "Параметры",
      "likes": "Интересы",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "Недавний выпускник (ищет работу)",
        "description": "Главный герой. Окончил факультет информатики Университета Ибараки и во время учёбы считался отличником. Но после выпуска экономический спад и ужесточившаяся конкуренция превращают поиск работы в череду неудач. Став «кандидатом в корпоративные рабы», он временно запирается в съёмной квартире и ежедневно рассылает резюме через интернет, пытаясь найти путь в будущее. Он серьёзен, практичен, спокоен в трудных ситуациях, рассудителен и надёжен, а также обладает сильным чувством ответственности за окружающих людей и дела.",
        "likes": [
          "Программирование",
          "Фотография",
          "Сборка моделей"
        ],
        "quotes": [
          "Пока у меня нет ни единой зацепки, но если разбирать проблему по частям, решение обязательно найдётся.",
          "Раз уж я решил это сделать, то доведу дело до конца. Бросать на полпути — не в моём стиле.",
          "……Ничего. Я ещё раз приведу мысли в порядок и продолжу завтра."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "Недавний выпускник (сидит дома)",
        "description": "Сосед главного героя по квартире и его давний приятель. Окончил факультет делового администрирования Университета Ибараки, но почти не обладает деловым здравым смыслом. Его отличают растрёпанные серебристо-серые волосы и вечно сонный взгляд. Когда-то он был образцовым богатым наследником, но затем его семья разорилась. По натуре беззаботен и действует по настроению. Хотя выглядит несерьёзно, неожиданно хорошо знает всевозможные хитрости, сыплет яркими фразами и виртуозно продаёт несбыточные мечты.",
        "likes": [
          "Техасский холдем",
          "Бильярд",
          "Видеоигры"
        ],
        "quotes": [
          "Брат, масштаб! Расширь горизонты! На что сегодня смотрят инвесторы? На продукт? Нет! На эмоциональную ценность!",
          "Я даю деньги, ты ставишь жизнь. Вместе доберёмся до вершины!",
          "Что ты понимаешь? Стартапу нужна аура!"
        ],
        "zodiac": "Стрелец",
        "bloodType": "AB",
        "birthday": "4 декабря"
      },
      {
        "role": "UI/UX-дизайнер (стажёр)",
        "description": "Студентка второго курса факультета визуального дизайна Университета Ибараки. От природы застенчива и легко краснеет без причины. Тихая и немногословная, она предпочитает выражать богатые и тонкие чувства через искусство. Обладает выдающимся эстетическим чутьём и талантом к рисованию, остро наблюдает за деталями и великолепно управляет цветом. Она стремится к красоте, внимательно относится к каждой мелочи и умеет вплетать маленькие радости повседневности в свои работы. Её талант и потенциал в дизайне неизменно впечатляют окружающих.",
        "likes": [
          "Художественные выставки",
          "Рукоделие",
          "Рисование на природе"
        ],
        "quotes": [
          "М-мне кажется…… здесь что-то немного не так…… Можно я исправлю?",
          "Положитесь на меня! Я обязательно…… создам идеальную работу!",
          "Пожалуйста, поверьте мне! Потому что…… я верю в вас, сэмпай!"
        ],
        "zodiac": "Рыбы",
        "bloodType": "A",
        "birthday": "9 марта"
      },
      {
        "role": "Младший фронтенд-разработчик",
        "description": "Неприметная девушка с слегка волнистым боковым хвостом и тонкой оправой очков. Тихая, замкнутая и немногословная, она, похоже, испытывает лёгкую социальную тревожность. Из-за диплома университета второго эшелона ей не хватает уверенности, и большинство общественных ситуаций заставляет её чувствовать себя неловко. Она чрезвычайно добросовестна, не жалуется и тщательно выполняет работу, хотя порой слишком строго следует правилам. Общение даётся ей тяжело, поэтому она предпочитает молча писать код и считает, что с машинами работать гораздо проще, чем с людьми.",
        "likes": [
          "Ведение ежедневника",
          "Книжные магазины",
          "Сериалы"
        ],
        "quotes": [
          "Эм…… я закончила всё, о чём вы просили…… Могу ещё чем-нибудь помочь?",
          "Как я и думала…… с компьютерами намного проще……",
          "Простите…… я постараюсь никого не подвести……"
        ],
        "zodiac": "Дева",
        "bloodType": "O",
        "birthday": "17 сентября"
      },
      {
        "role": "Специалист по маркетингу",
        "description": "Жизнерадостная и немного язвительная инфлюенсерша и стримерша. Начала создавать контент в шестнадцать лет, а позже была замечена известным MCN-агентством. У неё исключительное чутьё на «формулу трафика», и она лично создала множество вирусных коротких роликов. Остра на язык, быстро соображает, прекрасно понимает человеческую психологию и умеет продвигать IP. Сейчас ведёт аккаунт «Великая королева Нана» на популярной социальной платформе, создаёт образ независимой женщины и собрала десятки миллионов подписчиков. Сильно одержима заработком и постоянно повторяет: «Это за дополнительную плату».",
        "likes": [
          "Шопинг",
          "Развлекательные шоу",
          "Поиск новых ресторанов"
        ],
        "quotes": [
          "Хе-хе! Слушай меня! Это и есть формула трафика. Взлетишь мгновенно!",
          "Какие ещё чувства? В интернете всё, что не привлекает взгляд, — мусор!",
          "Сразу предупреждаю: жениться на мне дорого! Это за дополнительную плату!"
        ],
        "zodiac": "Лев",
        "bloodType": "AB",
        "birthday": "7 августа"
      },
      {
        "role": "Продакт-менеджер",
        "description": "Красавица смешанного происхождения, на четверть француженка. Она элегантна в движениях, мягка в речи и всегда говорит спокойным голосом, который располагает окружающих. Ей присуща редкая атмосфера и собственный взгляд на вещи; в современном деловом мире она выглядит несколько идеалистичной. Она ставит пользовательский опыт превыше всего и не желает жертвовать им ради красивых показателей. Готова тратить много времени на исследование рынка и мечтает создавать продукты, которые пользователям действительно нужны и которые они смогут полюбить.",
        "likes": [
          "Икебана",
          "Балет",
          "Концерты"
        ],
        "quotes": [
          "Я просто хочу создавать что-то доброе и ценное.",
          "Неважно, насколько долог путь: если направление верное, мы обязательно придём.",
          "Уже сдаёшься? Склоняться перед реальностью — это не в твоём стиле."
        ],
        "zodiac": "Рак",
        "bloodType": "O",
        "birthday": "8 июля"
      },
      {
        "role": "Бизнес-ангел",
        "description": "Основательница инвестиционного фонда Woman Combination (WC). В венчурной индустрии её почитают как «божественного ангела инвестиций»: почти каждый поддержанный ею проект приносит сверхприбыль, а точность решений достигает 90 %. Она неизменно носит фиолетовый бархатный костюм и облегающую мини-юбку; стоит её каблукам коснуться пола, как её присутствие заполняет всю комнату. Умна, деловита и обладает острым взглядом. Тонко чувствует тенденции рынка, имеет собственную позицию и принимает исключительно точные инвестиционные решения. Известна тем, что уничтожает предпринимателей острыми вопросами.",
        "likes": [
          "Лыжи",
          "Дегустация вина",
          "Коллекционирование антиквариата"
        ],
        "quotes": [
          "Я инвестирую не в ваш нынешний продукт. Я инвестирую в тебя и твоё будущее.",
          "Не пытайся тронуть меня мечтами. Говори данными и исполнением.",
          "Только став достаточно сильным, человек может управлять собственной судьбой!"
        ],
        "zodiac": "Козерог",
        "bloodType": "B",
        "birthday": "9 января"
      },
      {
        "role": "Основатель и CEO стартапа-единорога",
        "description": "Основатель и CEO ИИ-стартапа «SYNTH♥». Вошёл в рейтинг Forbes 30 Under 30, получил два диплома — по информатике и MBA — в Стэнфордском университете, а также PhD по искусственному интеллекту. Обладает удивительной исполнительностью и деловой проницательностью. Программирует с детства и уже в средней школе участвовал как независимый разработчик в крупных сообществах открытого ПО, где приобрёл значительное влияние. Три его последовательных стартапа добились заметных результатов. Ранее он работал в известной технологической компании CloseAI и участвовал в крупных проектах мультимодального обучения.",
        "likes": [
          "Чтение",
          "Анализ финансовой отчётности",
          "Изучение фондового рынка"
        ],
        "quotes": [
          "Человеческие эмоции по сути являются хаосом паттернов. Но паттерны можно моделировать.",
          "Любовь? Это неэффективная, энергозатратная, рискованная гормональная игра, полная избыточности.",
          "Такой сборище любителей, как вы, должно радоваться уже тому, что не обанкротилось."
        ],
        "zodiac": "Овен",
        "bloodType": "B",
        "birthday": "28 марта"
      }
    ]
  },
  'vi-vn': {
    "nav": {
      "char": "Nhân vật",
      "pv": "Video PV",
      "gallery": "Thư viện",
      "progress": "Tiến độ mới nhất",
      "product": "Thông tin sản phẩm"
    },
    "pv": {
      "themeMovie": "Video chủ đề",
      "charMovie": "Video giới thiệu nhân vật"
    },
    "galleryNote": "※Tất cả tư liệu đều đang trong quá trình phát triển và có thể thay đổi mà không báo trước.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "Trang web chính thức đã ra mắt."
      },
      {
        "date": "2026/07/12",
        "text": "Video PV đầu tiên đã được công bố."
      },
      {
        "date": "2026/07/13",
        "text": "Trang cửa hàng Steam đã được mở."
      }
    ],
    "spec": {
      "title": "Thông số",
      "items": [
        {
          "label": "Tiêu đề",
          "value": "Tình Yêu, Khởi Nghiệp & Đồng Sáng Lập"
        },
        {
          "label": "Thể loại",
          "value": "ADV thanh xuân khởi nghiệp"
        },
        {
          "label": "Phân loại",
          "value": "Mọi lứa tuổi"
        },
        {
          "label": "Ngày phát hành",
          "value": "(Chưa xác định)"
        },
        {
          "label": "Giá",
          "value": "(Chưa xác định)"
        },
        {
          "label": "Hệ điều hành hỗ trợ",
          "value": "Windows® 10／11"
        },
        {
          "label": "CPU",
          "value": "Khuyến nghị Intel® Core™ i3 thế hệ 2 trở lên"
        },
        {
          "label": "Hiển thị",
          "value": "3840×2160 pixel／đầy đủ màu sắc trở lên"
        },
        {
          "label": "Bộ nhớ",
          "value": "Bắt buộc 2 GB／khuyến nghị 4 GB trở lên"
        },
        {
          "label": "Dung lượng",
          "value": "6 GB trở lên"
        }
      ]
    },
    "staff": {
      "title": "Đội ngũ sản xuất",
      "items": [
        {
          "label": "Lên kế hoạch／Sản xuất",
          "value": "StarQ Soft"
        },
        {
          "label": "Phát hành",
          "value": "Pairaki Games"
        },
        {
          "label": "Kịch bản／Thiết kế nhân vật",
          "value": "星可"
        },
        {
          "label": "CG gốc／SD／Bối cảnh",
          "value": "眞海"
        },
        {
          "label": "Ca khúc chủ đề",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "Âm nhạc",
          "value": "Wedoso"
        },
        {
          "label": "Video",
          "value": "星可"
        },
        {
          "label": "Hiệu ứng chuyển động",
          "value": "幽浮小花"
        },
        {
          "label": "Hợp tác",
          "value": "终焉 và những người khác"
        },
        {
          "label": "Cảm ơn đặc biệt",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "Thêm vào danh sách mong muốn",
      "btnPreorder": "Đặt trước",
      "note": "※Cấu hình vận hành hiện chỉ là dự kiến và có thể thay đổi trước khi phát hành chính thức."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "Tình Yêu",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Startup",
            "small": " &",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Đồng Sáng Lập",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "Một căn hộ ở ghép, những người bạn với cá tính khác nhau,",
        "và hành trình đồng sáng tạo đầy nhiệt huyết, lạc lối và rung động."
      ],
      "gameDescription": "Trang cửa hàng Steam hiện đã mở!",
      "wishlist": "Thêm vào danh sách mong muốn"
    },
    "story": {
      "title": "// CỐT TRUYỆN",
      "subtitle": "「Chúng ta cùng khởi nghiệp nhé!」",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "Cuộc phiêu lưu bắt đầu cùng nhau!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Sau khi tốt nghiệp đại học nhưng không tìm được việc, bạn bị người bạn cùng phòng thuyết phục,\nrồi bất ngờ bước lên một con đường chưa từng tưởng tượng……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Không kinh nghiệm, không tài nguyên, không lương——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Thứ duy nhất bạn có là một nhóm đồng sáng lập còn thiếu tin cậy hơn cả bạn,\ncùng một "
            },
            {
              "t": "「Dự án Bạn gái AI」",
              "em": "span"
            },
            {
              "t": " thậm chí còn chưa có tên chính thức."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Đây là cuộc phiêu lưu chưa ai biết có thành công hay không. Trong khoảng trống của cuộc đời,\nbạn thử "
            },
            {
              "t": "「tạo ra câu trả lời của riêng mình」",
              "em": "span"
            },
            {
              "t": "."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "Tuổi",
      "birthday": "Sinh nhật",
      "zodiac": "Cung hoàng đạo",
      "bloodType": "Nhóm máu",
      "heightWeight": "Chiều cao/Cân nặng",
      "bwh": "Số đo ba vòng",
      "likes": "Sở thích",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "Sinh viên mới tốt nghiệp (đang tìm việc)",
        "description": "Nhân vật chính. Tốt nghiệp ngành Khoa học Máy tính tại Đại học Ibaraki, thời sinh viên có thành tích xuất sắc và được mọi người xem là “học sinh ưu tú”. Tuy nhiên sau khi tốt nghiệp, suy thoái kinh tế cùng cạnh tranh ngày càng khốc liệt khiến hành trình tìm việc liên tục thất bại. Trở thành một “ứng viên nô lệ công sở”, cậu tạm thời ru rú trong căn nhà thuê, mỗi ngày gửi hồ sơ trực tuyến để tìm lối đi cho tương lai. Cậu nghiêm túc, vững vàng, bình tĩnh trước mọi việc, lý trí và đáng tin cậy, đồng thời có tinh thần trách nhiệm mạnh mẽ với con người và sự việc xung quanh.",
        "likes": [
          "Lập trình",
          "Chụp ảnh",
          "Lắp ráp mô hình"
        ],
        "quotes": [
          "Tạm thời chưa có manh mối, nhưng chỉ cần tách vấn đề ra từng phần thì chắc chắn sẽ tìm được cách giải quyết.",
          "Đã quyết định làm thì tôi sẽ chịu trách nhiệm đến cùng. Bỏ cuộc giữa chừng không phải phong cách của tôi.",
          "……Không sao. Sắp xếp lại suy nghĩ rồi ngày mai tiếp tục."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "Sinh viên mới tốt nghiệp (ở lì trong nhà)",
        "description": "Bạn cùng phòng và bạn chơi lâu năm của nam chính. Tốt nghiệp ngành Quản trị Kinh doanh tại Đại học Ibaraki nhưng gần như không có kiến thức kinh doanh. Có mái tóc xám bạc rối bù và ánh mắt lúc nào cũng như chưa ngủ đủ. Từng là một cậu ấm điển hình, nhưng sau đó gia đình sa sút. Bản tính lười nhác, làm mọi việc theo hứng nhất thời. Dù trông khá bất cần, cậu lại biết nhiều mánh khóe, hễ mở miệng là tung ra câu nói đáng nhớ. Cậu rất giỏi ăn nói và có thể xem là thiên tài trong việc vẽ nên những chiếc bánh đầy hứa hẹn.",
        "likes": [
          "Chơi Texas Hold’em",
          "Bi-a",
          "Trò chơi điện tử"
        ],
        "quotes": [
          "Anh em, phải nhìn đại cục! Mở rộng tầm mắt đi! Giới đầu tư bây giờ nhìn vào gì? Sản phẩm à? Sai! Là giá trị cảm xúc!",
          "Tôi bỏ tiền, cậu bỏ mạng. Cùng nhau đi tới đỉnh cao cuộc đời!",
          "Cậu biết gì chứ? Startup cần nhất chính là khí chất!"
        ],
        "zodiac": "Nhân Mã",
        "bloodType": "AB",
        "birthday": "4 tháng 12"
      },
      {
        "role": "Nhà thiết kế UI/UX (thực tập sinh)",
        "description": "Sinh viên năm hai ngành Thiết kế Thị giác tại Đại học Ibaraki. Bẩm sinh nhút nhát và dễ đỏ mặt không rõ lý do. Tính cách kín đáo, ít nói, thích dùng nghệ thuật để bộc lộ thế giới nội tâm phong phú và tinh tế. Cô có trực giác thẩm mỹ và năng khiếu hội họa vượt trội, khả năng quan sát nhạy bén, kiểm soát màu sắc xuất sắc, luôn theo đuổi cái đẹp và chú ý tới từng chi tiết. Cô giỏi đưa những niềm vui nhỏ bé trong cuộc sống vào tác phẩm, khiến tài năng và tiềm năng thiết kế luôn làm mọi người kinh ngạc.",
        "likes": [
          "Đi xem triển lãm",
          "Làm đồ thủ công",
          "Vẽ ngoài trời"
        ],
        "quotes": [
          "M-mình thấy…… chỗ này hơi lạ…… Cho mình sửa lại được không?",
          "Cứ giao cho mình! Mình nhất định sẽ…… tạo ra tác phẩm hoàn hảo nhất!",
          "Xin hãy tin mình! Bởi vì…… mình tin tiền bối!"
        ],
        "zodiac": "Song Ngư",
        "bloodType": "A",
        "birthday": "9 tháng 3"
      },
      {
        "role": "Kỹ sư front-end sơ cấp",
        "description": "Một cô gái mờ nhạt với mái tóc đuôi ngựa lệch hơi xoăn và cặp kính gọng mảnh. Cô trầm lặng, hướng nội, ít nói và có vẻ hơi sợ giao tiếp xã hội. Việc tốt nghiệp một trường đại học hạng hai khiến cô thiếu tự tin và lúng túng trong phần lớn các dịp giao tiếp. Cô cực kỳ nghiêm túc với công việc, không ngại khó và làm việc cẩn thận, dù đôi lúc hơi cứng nhắc. Không giỏi giao tiếp, cô quen cúi đầu lặng lẽ viết mã và cho rằng làm việc với máy móc nhẹ nhàng hơn nhiều so với con người.",
        "likes": [
          "Ghi sổ tay",
          "Đi hiệu sách",
          "Xem phim truyền hình"
        ],
        "quotes": [
          "Ừm…… những việc được giao lúc nãy mình làm xong hết rồi…… Còn gì cần mình giúp không?",
          "Quả nhiên…… làm việc với máy tính vẫn nhẹ nhàng hơn……",
          "Xin lỗi…… mình sẽ cố gắng không làm mọi người chậm lại……"
        ],
        "zodiac": "Xử Nữ",
        "bloodType": "O",
        "birthday": "17 tháng 9"
      },
      {
        "role": "Chuyên viên hoạch định marketing",
        "description": "Một streamer nổi tiếng hoạt bát và hơi độc miệng. Bắt đầu làm nội dung từ năm mười sáu tuổi, sau đó được một MCN nổi tiếng phát hiện. Cô có khứu giác nhạy bén với “công thức lưu lượng” và tự tay tạo ra nhiều video ngắn lan truyền mạnh. Lời lẽ sắc sảo, đầu óc nhanh nhạy, cô hiểu rõ tâm lý con người và giỏi xây dựng thương hiệu IP. Hiện cô vận hành tài khoản “Nữ hoàng Nana” trên một nền tảng xã hội cực kỳ nổi tiếng, xây dựng hình tượng phụ nữ độc lập và thu hút hàng chục triệu người theo dõi. Cô cực kỳ khao khát kiếm tiền và luôn miệng nói “phải trả thêm”.",
        "likes": [
          "Mua sắm",
          "Xem chương trình giải trí",
          "Khám phá quán ăn"
        ],
        "quotes": [
          "Hừm! Nghe tôi đi! Đây đều là công thức lưu lượng, bảo đảm bay thẳng lên trời!",
          "Tình cảm gì chứ? Trên mạng, thứ không bắt được ánh mắt đều là rác!",
          "Nói trước nhé, cưới tôi tốn kém lắm! Phải trả thêm!"
        ],
        "zodiac": "Sư Tử",
        "bloodType": "AB",
        "birthday": "7 tháng 8"
      },
      {
        "role": "Quản lý sản phẩm",
        "description": "Một mỹ nhân lai mang một phần tư dòng máu Pháp. Cử chỉ thanh lịch, lời nói dịu dàng và giọng nói luôn nhẹ nhàng khiến người khác cảm thấy dễ chịu. Cô có khí chất hiếm thấy, sở hữu cách hiểu và lý tưởng riêng; trong bối cảnh kinh doanh hiện nay, điều đó khiến cô có phần lý tưởng hóa. Cô đặc biệt coi trọng trải nghiệm người dùng, không muốn thỏa hiệp chỉ để số liệu đẹp hơn, sẵn sàng dành nhiều thời gian nghiên cứu thị trường và hy vọng tạo ra sản phẩm mà người dùng thực sự cần và yêu thích.",
        "likes": [
          "Cắm hoa",
          "Ba lê",
          "Nghe hòa nhạc"
        ],
        "quotes": [
          "Tôi chỉ muốn làm ra những thứ dịu dàng và có giá trị.",
          "Dù con đường xa đến đâu, chỉ cần hướng đi đúng thì cuối cùng chúng ta cũng sẽ tới nơi.",
          "Đã thỏa hiệp rồi sao? Cúi đầu trước hiện thực không giống phong cách của bạn."
        ],
        "zodiac": "Cự Giải",
        "bloodType": "O",
        "birthday": "8 tháng 7"
      },
      {
        "role": "Nhà đầu tư thiên thần",
        "description": "Nhà sáng lập quỹ đầu tư Woman Combination (WC). Trong giới đầu tư mạo hiểm, cô được tôn là “thiên thần đầu tư của thần”; gần như mọi dự án cô rót vốn đều tạo ra lợi nhuận vượt trội, với tỷ lệ chính xác tới 90%. Cô luôn mặc bộ vest nhung tím cùng váy ngắn ôm sát; chỉ cần gót giày chạm đất là khí thế lập tức áp đảo cả căn phòng. Cô thông minh, quyết đoán, ánh mắt sắc bén, nhạy cảm với xu hướng thị trường và có quan điểm độc đáo. Phán đoán đầu tư của cô cực kỳ chính xác, nổi tiếng với việc đánh gục doanh nhân bằng những câu hỏi sắc như dao.",
        "likes": [
          "Trượt tuyết",
          "Thử rượu vang",
          "Sưu tầm đồ cổ"
        ],
        "quotes": [
          "Tôi đầu tư không phải vào sản phẩm hiện tại của các bạn, mà là vào chính bạn và tương lai của bạn.",
          "Đừng dùng giấc mơ để lay động tôi. Hãy nói bằng dữ liệu và năng lực thực thi.",
          "Chỉ khi đủ mạnh, con người mới có thể làm chủ vận mệnh của mình!"
        ],
        "zodiac": "Ma Kết",
        "bloodType": "B",
        "birthday": "9 tháng 1"
      },
      {
        "role": "Nhà sáng lập kiêm CEO startup kỳ lân",
        "description": "Nhà sáng lập kiêm CEO của startup AI “SYNTH♥”. Là gương mặt Forbes 30 Under 30, anh có bằng kép Khoa học Máy tính và MBA của Đại học Stanford, cùng bằng tiến sĩ Trí tuệ Nhân tạo. Anh sở hữu năng lực thực thi đáng kinh ngạc và tầm nhìn kinh doanh sâu sắc. Tiếp xúc với lập trình từ nhỏ, ngay từ thời trung học anh đã hoạt động với tư cách nhà phát triển độc lập trong nhiều cộng đồng mã nguồn mở lớn và tích lũy ảnh hưởng đáng kể. Ba lần khởi nghiệp liên tiếp đều đạt thành tích tốt; anh từng làm việc tại công ty công nghệ nổi tiếng CloseAI và tham gia các dự án huấn luyện đa phương thức quy mô lớn.",
        "likes": [
          "Đọc sách",
          "Phân tích báo cáo tài chính",
          "Nghiên cứu thị trường chứng khoán"
        ],
        "quotes": [
          "Cảm xúc của con người về bản chất là một hỗn loạn của các mẫu hình. Nhưng mẫu hình có thể được mô hình hóa.",
          "Tình yêu? Đó là trò chơi hormone kém hiệu quả, tốn năng lượng, rủi ro cao và đầy dư thừa.",
          "Một đội ngũ chắp vá như các người, không phá sản đã là may lắm rồi."
        ],
        "zodiac": "Bạch Dương",
        "bloodType": "B",
        "birthday": "28 tháng 3"
      }
    ]
  },
  'fr-fr': {
    "nav": {
      "char": "Personnages",
      "pv": "Vidéos promotionnelles",
      "gallery": "Galerie",
      "progress": "Dernières avancées",
      "product": "Informations produit"
    },
    "pv": {
      "themeMovie": "Vidéo thématique",
      "charMovie": "Vidéos de présentation des personnages"
    },
    "galleryNote": "※Tous les éléments présentés sont en cours de développement et peuvent être modifiés sans préavis.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "Le site officiel est désormais en ligne."
      },
      {
        "date": "2026/07/12",
        "text": "La toute première vidéo promotionnelle a été publiée."
      },
      {
        "date": "2026/07/13",
        "text": "La page Steam est désormais en ligne."
      }
    ],
    "spec": {
      "title": "Configuration",
      "items": [
        {
          "label": "Titre",
          "value": "Amour, Startup et Associés"
        },
        {
          "label": "Genre",
          "value": "ADV jeunesse et entrepreneuriat"
        },
        {
          "label": "Classification",
          "value": "Tous publics"
        },
        {
          "label": "Date de sortie",
          "value": "(À déterminer)"
        },
        {
          "label": "Prix",
          "value": "(À déterminer)"
        },
        {
          "label": "Système pris en charge",
          "value": "Windows® 10／11"
        },
        {
          "label": "Processeur",
          "value": "Intel® Core™ i3 2e génération ou supérieur recommandé"
        },
        {
          "label": "Affichage",
          "value": "3840×2160 pixels／couleurs complètes ou supérieur"
        },
        {
          "label": "Mémoire",
          "value": "2 Go requis／4 Go ou plus recommandés"
        },
        {
          "label": "Stockage",
          "value": "6 Go ou plus"
        }
      ]
    },
    "staff": {
      "title": "Équipe",
      "items": [
        {
          "label": "Concept／Production",
          "value": "StarQ Soft"
        },
        {
          "label": "Édition",
          "value": "Pairaki Games"
        },
        {
          "label": "Scénario／Character design",
          "value": "星可"
        },
        {
          "label": "Illustrations CG／SD／Décors",
          "value": "眞海"
        },
        {
          "label": "Chanson thème",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "Musique",
          "value": "Wedoso"
        },
        {
          "label": "Vidéo",
          "value": "星可"
        },
        {
          "label": "Effets animés",
          "value": "幽浮小花"
        },
        {
          "label": "Collaboration",
          "value": "终焉 et autres"
        },
        {
          "label": "Remerciements particuliers",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "Ajouter à la liste de souhaits",
      "btnPreorder": "Précommander",
      "note": "※La configuration requise est provisoire et peut être modifiée avant la sortie."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "Amour",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Startup",
            "small": " et",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Associés",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "Une colocation, des partenaires aux personnalités très différentes,",
        "et un voyage de création commune fait de passion, de doutes et d’émotions."
      ],
      "gameDescription": "La page Steam est désormais ouverte !",
      "wishlist": "Ajouter à la liste de souhaits"
    },
    "story": {
      "title": "// HISTOIRE",
      "subtitle": "« Créons une entreprise ensemble ! »",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "Une aventure qui commence ensemble !",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Fraîchement diplômé mais sans emploi, tu te laisses convaincre par ton colocataire\net t’engages, presque malgré toi, sur une voie que tu n’avais jamais envisagée……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Zéro expérience, zéro ressource, zéro salaire——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Tu n’as pour tout bagage qu’une équipe d’associés encore moins fiables que toi\net un "
            },
            {
              "t": "« Projet Petite Amie IA »",
              "em": "span"
            },
            {
              "t": " qui n’a même pas encore de vrai nom."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Une aventure dont personne ne peut garantir le succès. Dans ce passage à vide de ta vie,\ntu tenteras de "
            },
            {
              "t": "« créer ta propre réponse »",
              "em": "span"
            },
            {
              "t": "."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "Âge",
      "birthday": "Anniversaire",
      "zodiac": "Signe astrologique",
      "bloodType": "Groupe sanguin",
      "heightWeight": "Taille/Poids",
      "bwh": "Mensurations",
      "likes": "Loisirs",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "Jeune diplômé universitaire (en recherche d’emploi)",
        "description": "Le protagoniste. Diplômé en informatique de l’université d’Ibaraki, il obtenait d’excellents résultats et passait pour un « élève modèle ». Mais après son diplôme, le ralentissement économique et la concurrence toujours plus féroce transforment sa recherche d’emploi en une série d’échecs. Devenu un « futur esclave d’entreprise », il reste provisoirement enfermé dans son appartement loué et envoie chaque jour des CV en ligne, à la recherche d’une voie d’avenir. Sérieux et fiable, il garde son calme, raisonne avec lucidité et ressent une forte responsabilité envers les personnes et les choses qui l’entourent.",
        "likes": [
          "Programmation",
          "Photographie",
          "Montage de maquettes"
        ],
        "quotes": [
          "Je n’ai encore aucune piste, mais si je décompose le problème étape par étape, je finirai forcément par trouver une solution.",
          "Puisque j’ai décidé de le faire, j’en assumerai la responsabilité jusqu’au bout. Abandonner en chemin, ce n’est pas mon genre.",
          "……Ce n’est rien. Je vais remettre mes idées en ordre et reprendre demain."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "Jeune diplômé universitaire (reclus chez lui)",
        "description": "Colocataire du protagoniste et compagnon de longue date. Diplômé en gestion d’entreprise de l’université d’Ibaraki, il n’a pourtant aucun bon sens commercial. Il arbore des cheveux gris argent toujours ébouriffés et un regard perpétuellement ensommeillé. Autrefois fils à papa exemplaire, il a vu sa famille perdre toute sa fortune. Désinvolte par nature, il agit selon ses envies du moment. Malgré son air peu sérieux, il connaît quantité de combines et de raccourcis. Dès qu’il ouvre la bouche, il enchaîne les formules mémorables. Beau parleur hors pair, c’est un génie lorsqu’il s’agit de vendre des rêves.",
        "likes": [
          "Poker Texas Hold’em",
          "Billard",
          "Jeux vidéo"
        ],
        "quotes": [
          "Frérot, vois grand ! Élargis ton horizon ! Qu’est-ce que les investisseurs regardent aujourd’hui ? Le produit ? Faux ! La valeur émotionnelle !",
          "Je mets l’argent, tu mets ta vie. Ensemble, on atteindra le sommet !",
          "Qu’est-ce que tu en sais ? Une startup, ça a besoin d’aura !"
        ],
        "zodiac": "Sagittaire",
        "bloodType": "AB",
        "birthday": "4 décembre"
      },
      {
        "role": "Designer UI/UX (stagiaire)",
        "description": "Étudiante en deuxième année de design visuel à l’université d’Ibaraki. Timide de nature, elle rougit facilement sans raison apparente. Discrète et peu bavarde, elle préfère exprimer par l’art ses émotions riches et délicates. Dotée d’une intuition esthétique et d’un talent pour le dessin exceptionnels, elle possède un sens aigu de l’observation et maîtrise remarquablement les couleurs. Obsédée par la beauté, elle prête attention au moindre détail. Elle sait intégrer à ses créations les petits bonheurs du quotidien, et son talent comme son potentiel ne cessent d’impressionner son entourage.",
        "likes": [
          "Visiter des expositions",
          "Travaux manuels",
          "Croquis en plein air"
        ],
        "quotes": [
          "J-je crois que…… quelque chose cloche un peu ici…… Je peux le corriger ?",
          "Laissez-moi faire ! Je vais…… créer l’œuvre la plus parfaite possible !",
          "Faites-moi confiance ! Parce que…… moi aussi, je crois en vous, senpai !"
        ],
        "zodiac": "Poissons",
        "bloodType": "A",
        "birthday": "9 mars"
      },
      {
        "role": "Ingénieure front-end junior",
        "description": "Une jeune fille discrète portant une queue-de-cheval latérale légèrement ondulée et de fines lunettes. Calme, introvertie et peu bavarde, elle semble souffrir d’une légère anxiété sociale. Complexée par son diplôme obtenu dans une université de second rang, elle se sent mal à l’aise dans la plupart des situations sociales. Extrêmement consciencieuse, elle travaille sans se plaindre et accomplit ses tâches avec soin, même si elle manque parfois de souplesse. Peu douée pour la communication, elle préfère garder la tête baissée et coder en silence, estimant qu’il est bien plus facile de traiter avec des machines qu’avec des humains.",
        "likes": [
          "Tenir un journal",
          "Parcourir les librairies",
          "Regarder des séries"
        ],
        "quotes": [
          "Euh…… j’ai terminé tout ce que vous m’aviez demandé…… Est-ce qu’il y a autre chose que je peux faire ?",
          "Comme je le pensais…… c’est tellement plus simple de travailler avec des ordinateurs……",
          "Désolée…… je ferai de mon mieux pour ne ralentir personne……"
        ],
        "zodiac": "Vierge",
        "bloodType": "O",
        "birthday": "17 septembre"
      },
      {
        "role": "Responsable marketing",
        "description": "Une influenceuse et streameuse vive, à la langue bien pendue. Elle a commencé à créer du contenu à seize ans avant d’être repérée par une célèbre agence MCN. Elle possède un flair exceptionnel pour les « recettes du buzz » et a personnellement produit de nombreuses vidéos courtes devenues virales. Vive d’esprit et acérée dans ses propos, elle comprend parfaitement la psychologie humaine et excelle dans le branding d’IP. Elle gère aujourd’hui le compte « Grande Reine Nana » sur une plateforme sociale extrêmement populaire, où elle cultive une image de femme indépendante et rassemble des dizaines de millions d’abonnés. Obsédée par l’argent, elle répète sans cesse : « Ce sera en supplément. »",
        "likes": [
          "Shopping",
          "Émissions de variétés",
          "Découverte de restaurants"
        ],
        "quotes": [
          "Hé hé ! Écoute-moi ! Ce sont les recettes du buzz. Je te garantis que ça va décoller !",
          "Les sentiments ? Sur Internet, tout ce qui n’attire pas l’œil est bon pour la poubelle !",
          "Je te préviens : m’épouser coûte cher ! Ce sera en supplément !"
        ],
        "zodiac": "Lion",
        "bloodType": "AB",
        "birthday": "7 août"
      },
      {
        "role": "Cheffe de produit",
        "description": "Une beauté métisse ayant un quart de sang français. Élégante dans ses gestes et douce dans ses paroles, elle parle toujours d’une voix apaisante. Elle possède une aura rare et une compréhension très personnelle des choses ; dans le monde des affaires actuel, ses idéaux peuvent paraître quelque peu naïfs. Elle accorde une importance absolue à l’expérience utilisateur et refuse de la sacrifier pour embellir les chiffres. Prête à consacrer beaucoup de temps aux études de marché, elle rêve de créer des produits dont les utilisateurs ont réellement besoin et qu’ils aimeront vraiment.",
        "likes": [
          "Art floral",
          "Ballet",
          "Concerts"
        ],
        "quotes": [
          "Je veux simplement créer quelque chose de doux et de précieux.",
          "Peu importe la longueur du chemin : tant que la direction est la bonne, nous finirons par arriver.",
          "Tu renonces déjà ? Baisser la tête devant la réalité, ça ne te ressemble pas."
        ],
        "zodiac": "Cancer",
        "bloodType": "O",
        "birthday": "8 juillet"
      },
      {
        "role": "Investisseuse providentielle",
        "description": "Fondatrice du fonds d’investissement Woman Combination (WC). Dans le milieu du capital-risque, elle est vénérée comme « l’ange divin de l’investissement » : presque tous les projets qu’elle soutient génèrent des rendements hors norme, avec un taux de réussite pouvant atteindre 90 %. Toujours vêtue d’un tailleur de velours violet et d’une minijupe moulante, elle impose sa présence dès que ses talons touchent le sol. Fine, efficace et dotée d’un regard perçant, elle lit les tendances du marché avec une grande précision et possède une vision très personnelle. Ses décisions d’investissement sont redoutablement justes, et elle est célèbre pour mettre les entrepreneurs en pièces à coups de questions incisives.",
        "likes": [
          "Ski",
          "Dégustation de vin",
          "Collection d’antiquités"
        ],
        "quotes": [
          "Je n’investis pas dans votre produit actuel. J’investis en toi et dans ton avenir.",
          "N’essaie pas de m’émouvoir avec des rêves. Parle-moi avec des données et de l’exécution.",
          "Ce n’est qu’en devenant assez fort que l’on peut maîtriser son propre destin !"
        ],
        "zodiac": "Capricorne",
        "bloodType": "B",
        "birthday": "9 janvier"
      },
      {
        "role": "Fondateur et PDG d’une startup licorne",
        "description": "Fondateur et PDG de la startup d’IA « SYNTH♥ ». Lauréat du classement Forbes 30 Under 30, il possède un double diplôme en informatique et un MBA de l’université Stanford, ainsi qu’un doctorat en intelligence artificielle. Il combine une capacité d’exécution stupéfiante à un remarquable sens des affaires. Initié très tôt à la programmation, il participait déjà au collège, en tant que développeur indépendant, aux principales communautés open source et geek, où il s’est forgé une grande influence. Il a obtenu de solides résultats lors de trois créations d’entreprise successives et a travaillé pour la célèbre société technologique CloseAI sur de grands projets d’entraînement multimodal.",
        "likes": [
          "Lecture",
          "Analyse financière",
          "Étude des marchés boursiers"
        ],
        "quotes": [
          "Les émotions humaines sont, au fond, un chaos de motifs. Mais les motifs peuvent être modélisés.",
          "L’amour ? Un jeu hormonal inefficace, énergivore, risqué et saturé de redondances.",
          "Une bande d’amateurs comme vous devrait déjà s’estimer heureuse de ne pas faire faillite."
        ],
        "zodiac": "Bélier",
        "bloodType": "B",
        "birthday": "28 mars"
      }
    ]
  },
  'it-it': {
    "nav": {
      "char": "Personaggi",
      "pv": "Video PV",
      "gallery": "Galleria",
      "progress": "Ultimi aggiornamenti",
      "product": "Informazioni sul prodotto"
    },
    "pv": {
      "themeMovie": "Video tematico",
      "charMovie": "Video di presentazione dei personaggi"
    },
    "galleryNote": "※Tutti i materiali mostrati sono in fase di sviluppo e possono cambiare senza preavviso.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "Il sito ufficiale è ora online."
      },
      {
        "date": "2026/07/12",
        "text": "È stato pubblicato il primo video PV."
      },
      {
        "date": "2026/07/13",
        "text": "La pagina del negozio Steam è ora disponibile."
      }
    ],
    "spec": {
      "title": "Specifiche",
      "items": [
        {
          "label": "Titolo",
          "value": "Amore, Startup e Soci"
        },
        {
          "label": "Genere",
          "value": "ADV giovanile sull’imprenditoria"
        },
        {
          "label": "Classificazione",
          "value": "Per tutte le età"
        },
        {
          "label": "Data di uscita",
          "value": "(Da definire)"
        },
        {
          "label": "Prezzo",
          "value": "(Da definire)"
        },
        {
          "label": "Sistema operativo",
          "value": "Windows® 10／11"
        },
        {
          "label": "CPU",
          "value": "Intel® Core™ i3 di 2ª generazione o superiore consigliato"
        },
        {
          "label": "Schermo",
          "value": "3840×2160 pixel／colori completi o superiore"
        },
        {
          "label": "Memoria",
          "value": "2 GB richiesti／4 GB o più consigliati"
        },
        {
          "label": "Archiviazione",
          "value": "6 GB o più"
        }
      ]
    },
    "staff": {
      "title": "Staff",
      "items": [
        {
          "label": "Ideazione／Produzione",
          "value": "StarQ Soft"
        },
        {
          "label": "Pubblicazione",
          "value": "Pairaki Games"
        },
        {
          "label": "Sceneggiatura／Character design",
          "value": "星可"
        },
        {
          "label": "Illustrazioni CG／SD／Sfondi",
          "value": "眞海"
        },
        {
          "label": "Sigla",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "Musica",
          "value": "Wedoso"
        },
        {
          "label": "Video",
          "value": "星可"
        },
        {
          "label": "Effetti di movimento",
          "value": "幽浮小花"
        },
        {
          "label": "Collaborazione",
          "value": "终焉 e altri"
        },
        {
          "label": "Ringraziamenti speciali",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "Aggiungi alla lista dei desideri",
      "btnPreorder": "Preordina",
      "note": "※I requisiti di sistema sono provvisori e possono cambiare prima dell’uscita."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "Amore",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Startup",
            "small": " e",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Soci",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "Un appartamento condiviso, un gruppo di compagni dalle personalità più diverse,",
        "e un viaggio creativo fatto di passione, smarrimento e batticuore."
      ],
      "gameDescription": "La pagina Steam è ora disponibile!",
      "wishlist": "Aggiungi alla lista dei desideri"
    },
    "story": {
      "title": "// STORIA",
      "subtitle": "«Avviamo un’impresa insieme!»",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "Un’avventura che comincia insieme!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Dopo la laurea, senza essere riuscito a trovare lavoro, ti lasci convincere dal tuo coinquilino\ne finisci per imboccare una strada che non avevi mai immaginato……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Zero esperienza, zero risorse, zero stipendio——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Tutto ciò che hai è un gruppo di soci ancora meno affidabili di te\ne un "
            },
            {
              "t": "«Progetto Fidanzata IA»",
              "em": "span"
            },
            {
              "t": " che non ha nemmeno un vero nome."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Un’avventura dal successo incerto. In questo vuoto della tua vita,\nproverai a "
            },
            {
              "t": "«creare la tua risposta»",
              "em": "span"
            },
            {
              "t": "."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "Età",
      "birthday": "Compleanno",
      "zodiac": "Segno zodiacale",
      "bloodType": "Gruppo sanguigno",
      "heightWeight": "Altezza/Peso",
      "bwh": "Misure",
      "likes": "Interessi",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "Neolaureato (in cerca di lavoro)",
        "description": "Il protagonista. Laureato in Informatica all’Università di Ibaraki, durante gli studi otteneva risultati eccellenti ed era considerato da tutti uno «studente modello». Dopo la laurea, però, la recessione economica e la concorrenza sempre più feroce trasformano la sua ricerca di lavoro in una serie di fallimenti. Diventato un «aspirante schiavo aziendale», si chiude temporaneamente nel suo appartamento in affitto e invia curriculum online ogni giorno, cercando una via per il futuro. Serio e concreto, rimane calmo davanti ai problemi, è razionale e affidabile e sente una forte responsabilità verso le persone e le cose che lo circondano.",
        "likes": [
          "Programmazione",
          "Fotografia",
          "Montaggio di modellini"
        ],
        "quotes": [
          "Per ora non ho la minima idea, ma se scompongo il problema un passo alla volta, prima o poi troverò una soluzione.",
          "Se ho deciso di farlo, me ne assumerò la responsabilità fino alla fine. Mollare a metà non è da me.",
          "……Va bene. Riordinerò le idee e continuerò domani."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "Neolaureato (recluso in casa)",
        "description": "Coinquilino del protagonista e suo compagno di giochi da molti anni. È laureato in Economia Aziendale all’Università di Ibaraki, ma non possiede alcun buon senso negli affari. Ha capelli grigio-argento sempre spettinati e uno sguardo perennemente assonnato. Un tempo era il classico figlio di una famiglia ricca, finché la sua casa non è caduta in disgrazia. Svogliato per natura, agisce seguendo l’impulso del momento. Anche se sembra poco serio, conosce sorprendentemente molti trucchi e scorciatoie; ogni volta che apre bocca sforna una frase memorabile. È un maestro della parlantina e un genio nel vendere sogni irrealizzabili.",
        "likes": [
          "Texas Hold’em",
          "Biliardo",
          "Videogiochi"
        ],
        "quotes": [
          "Fratello, pensa in grande! Allarga gli orizzonti! Che cosa guarda oggi il mondo degli investimenti? Il prodotto? Sbagliato! Il valore emotivo!",
          "Io metto i soldi, tu metti la vita. Insieme raggiungeremo la vetta!",
          "Che ne sai tu? A una startup serve presenza!"
        ],
        "zodiac": "Sagittario",
        "bloodType": "AB",
        "birthday": "4 dicembre"
      },
      {
        "role": "Designer UI/UX (tirocinante)",
        "description": "Studentessa al secondo anno di Design Visivo all’Università di Ibaraki. Timida per natura, arrossisce facilmente senza un motivo apparente. Riservata e poco loquace, preferisce esprimere attraverso l’arte le proprie emozioni ricche e delicate. Possiede un’intuizione estetica e un talento nel disegno eccezionali, un acuto spirito d’osservazione e uno straordinario controllo del colore. Insegue la bellezza e presta attenzione a ogni dettaglio. Sa inserire nelle sue opere le piccole gioie della vita quotidiana, e il suo talento e potenziale nel design non smettono mai di sorprendere.",
        "likes": [
          "Visitare mostre",
          "Lavori manuali",
          "Disegno all’aperto"
        ],
        "quotes": [
          "I-io credo che…… qui ci sia qualcosa di un po’ strano…… Posso correggerlo?",
          "Lasciate fare a me! Creerò…… l’opera più perfetta possibile!",
          "Credetemi! Perché…… anch’io credo in voi, senpai!"
        ],
        "zodiac": "Pesci",
        "bloodType": "A",
        "birthday": "9 marzo"
      },
      {
        "role": "Ingegnera front-end junior",
        "description": "Una ragazza poco appariscente con una coda laterale leggermente ondulata e sottili occhiali. Tranquilla, introversa e poco loquace, sembra soffrire di una lieve ansia sociale. Il diploma ottenuto in un’università di secondo livello le provoca insicurezza e la fa sentire a disagio nella maggior parte delle situazioni sociali. È estremamente scrupolosa sul lavoro, non si lamenta mai e svolge i compiti con attenzione, anche se a volte è troppo rigida. Non è brava a comunicare e preferisce tenere la testa bassa e scrivere codice in silenzio; pensa che lavorare con le macchine sia molto più facile che trattare con le persone.",
        "likes": [
          "Tenere un’agenda",
          "Girare per librerie",
          "Guardare serie TV"
        ],
        "quotes": [
          "Ehm…… ho finito tutto quello che mi avevi chiesto…… C’è altro in cui posso aiutare?",
          "Come pensavo…… lavorare con i computer è molto più semplice……",
          "Mi dispiace…… farò del mio meglio per non rallentare tutti……"
        ],
        "zodiac": "Vergine",
        "bloodType": "O",
        "birthday": "17 settembre"
      },
      {
        "role": "Responsabile marketing",
        "description": "Una influencer e streamer vivace e un po’ tagliente. Ha iniziato a creare contenuti a sedici anni ed è stata poi scoperta da una famosa agenzia MCN. Possiede un fiuto eccezionale per le «regole della viralità» e ha creato personalmente numerosi video brevi diventati virali. Rapida di mente e affilata nelle parole, comprende a fondo la psicologia umana ed eccelle nel branding delle IP. Oggi gestisce l’account «Grande Regina Nana» su una popolarissima piattaforma social, dove costruisce un’immagine di donna indipendente e raccoglie decine di milioni di follower. Ha un desiderio fortissimo di guadagnare denaro e ripete continuamente: «Questo costa extra».",
        "likes": [
          "Shopping",
          "Programmi di varietà",
          "Scoprire ristoranti"
        ],
        "quotes": [
          "Ehi! Ascolta me! Queste sono le regole della viralità. Ti faranno decollare all’istante!",
          "Sentimenti? Su Internet, tutto ciò che non cattura l’attenzione è spazzatura!",
          "Te lo dico subito: sposarmi costa caro! Questo costa extra!"
        ],
        "zodiac": "Leone",
        "bloodType": "AB",
        "birthday": "7 agosto"
      },
      {
        "role": "Product manager",
        "description": "Una bellezza di sangue misto, per un quarto francese. Elegante nei modi e gentile nelle parole, parla sempre con una voce morbida che mette tutti a proprio agio. Possiede un’aura rara e una visione personale delle cose; nell’attuale ambiente aziendale può apparire un po’ idealista. Attribuisce la massima importanza all’esperienza utente e rifiuta di comprometterla soltanto per rendere migliori i numeri. È disposta a dedicare molto tempo alle ricerche di mercato e desidera creare prodotti di cui gli utenti abbiano davvero bisogno e che possano amare.",
        "likes": [
          "Composizioni floreali",
          "Balletto",
          "Concerti"
        ],
        "quotes": [
          "Voglio soltanto creare qualcosa di gentile e prezioso.",
          "Non importa quanto sia lunga la strada: finché la direzione è giusta, prima o poi arriveremo.",
          "Ti arrendi già? Chinare la testa davanti alla realtà non è da te."
        ],
        "zodiac": "Cancro",
        "bloodType": "O",
        "birthday": "8 luglio"
      },
      {
        "role": "Investitrice angel",
        "description": "Fondatrice del fondo d’investimento Woman Combination (WC). Nel settore del venture capital è venerata come «l’angelo divino degli investimenti»: quasi tutti i progetti che finanzia generano rendimenti straordinari, con una percentuale di successo che raggiunge il 90%. Indossa sempre un completo di velluto viola e una minigonna aderente; basta il rumore dei tacchi sul pavimento perché la sua presenza domini la stanza. Intelligente, efficiente e dallo sguardo tagliente, legge con precisione le tendenze del mercato e possiede una visione unica. Le sue decisioni d’investimento sono estremamente accurate ed è famosa per demolire gli imprenditori con domande incisive.",
        "likes": [
          "Sci",
          "Degustazione di vini",
          "Collezionare oggetti antichi"
        ],
        "quotes": [
          "Non investo nel vostro prodotto attuale. Investo in te e nel tuo futuro.",
          "Non cercare di commuovermi con i sogni. Parlami con dati e capacità di esecuzione.",
          "Solo chi diventa abbastanza forte può dominare il proprio destino!"
        ],
        "zodiac": "Capricorno",
        "bloodType": "B",
        "birthday": "9 gennaio"
      },
      {
        "role": "Fondatore e CEO di una startup unicorno",
        "description": "Fondatore e CEO della startup di IA «SYNTH♥». Inserito nella lista Forbes 30 Under 30, possiede una doppia laurea in Informatica e un MBA della Stanford University, oltre a un dottorato in Intelligenza Artificiale. Unisce una capacità di esecuzione sorprendente a una profonda visione imprenditoriale. Programma fin da bambino e già alle scuole medie partecipava come sviluppatore indipendente alle principali comunità geek open source, accumulando una grande influenza. Ha ottenuto buoni risultati in tre startup consecutive e ha lavorato presso la nota azienda tecnologica CloseAI, partecipando a grandi progetti di addestramento multimodale.",
        "likes": [
          "Lettura",
          "Analisi finanziaria",
          "Studio del mercato azionario"
        ],
        "quotes": [
          "Le emozioni umane sono, in sostanza, un caos di schemi. Ma gli schemi possono essere modellati.",
          "L’amore? È un gioco ormonale inefficiente, dispendioso, rischioso e pieno di ridondanze.",
          "Un gruppo improvvisato come il vostro dovrebbe già ringraziare di non essere fallito."
        ],
        "zodiac": "Ariete",
        "bloodType": "B",
        "birthday": "28 marzo"
      }
    ]
  },
  'de-de': {
    "nav": {
      "char": "Charaktere",
      "pv": "PV-Videos",
      "gallery": "Galerie",
      "progress": "Neueste Fortschritte",
      "product": "Produktinformationen"
    },
    "pv": {
      "themeMovie": "Themenvideo",
      "charMovie": "Charaktervorstellungen"
    },
    "galleryNote": "※Alle gezeigten Inhalte befinden sich in Entwicklung und können ohne vorherige Ankündigung geändert werden.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "Die offizielle Website ist jetzt online."
      },
      {
        "date": "2026/07/12",
        "text": "Das erste PV-Video wurde veröffentlicht."
      },
      {
        "date": "2026/07/13",
        "text": "Die Steam-Shopseite ist jetzt online."
      }
    ],
    "spec": {
      "title": "Systemanforderungen",
      "items": [
        {
          "label": "Titel",
          "value": "Liebe, Startup & Partner"
        },
        {
          "label": "Genre",
          "value": "Jugend- und Startup-ADV"
        },
        {
          "label": "Altersfreigabe",
          "value": "Für alle Altersgruppen"
        },
        {
          "label": "Veröffentlichung",
          "value": "(Noch offen)"
        },
        {
          "label": "Preis",
          "value": "(Noch offen)"
        },
        {
          "label": "Betriebssystem",
          "value": "Windows® 10／11"
        },
        {
          "label": "CPU",
          "value": "Intel® Core™ i3 der 2. Generation oder höher empfohlen"
        },
        {
          "label": "Anzeige",
          "value": "3840×2160 Pixel／Vollfarbe oder höher"
        },
        {
          "label": "Arbeitsspeicher",
          "value": "2 GB erforderlich／4 GB oder mehr empfohlen"
        },
        {
          "label": "Speicherplatz",
          "value": "6 GB oder mehr"
        }
      ]
    },
    "staff": {
      "title": "Team",
      "items": [
        {
          "label": "Konzept／Produktion",
          "value": "StarQ Soft"
        },
        {
          "label": "Publisher",
          "value": "Pairaki Games"
        },
        {
          "label": "Szenario／Charakterdesign",
          "value": "星可"
        },
        {
          "label": "CG-Art／SD／Hintergründe",
          "value": "眞海"
        },
        {
          "label": "Titelsong",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "Musik",
          "value": "Wedoso"
        },
        {
          "label": "Video",
          "value": "星可"
        },
        {
          "label": "Bewegungseffekte",
          "value": "幽浮小花"
        },
        {
          "label": "Mitwirkung",
          "value": "终焉 u. a."
        },
        {
          "label": "Besonderer Dank",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "Zur Wunschliste hinzufügen",
      "btnPreorder": "Vorbestellen",
      "note": "※Die Systemanforderungen sind vorläufig und können sich bis zur Veröffentlichung ändern."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "Liebe",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Startup",
            "small": " &",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Partner",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "Eine Wohngemeinschaft, Gefährten mit völlig unterschiedlichen Persönlichkeiten",
        "und eine gemeinsame Schaffensreise voller Leidenschaft, Zweifel und Herzklopfen."
      ],
      "gameDescription": "Die Steam-Shopseite ist jetzt online!",
      "wishlist": "Zur Wunschliste hinzufügen"
    },
    "story": {
      "title": "// STORY",
      "subtitle": "„Lass uns gemeinsam ein Unternehmen gründen!“",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "Ein Abenteuer, das wir gemeinsam beginnen!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Nach dem Studium findest du keinen Job. Dein Mitbewohner redet so lange auf dich ein,\nbis du plötzlich einen Weg einschlägst, den du dir nie vorgestellt hättest……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Null Erfahrung, null Ressourcen, null Gehalt——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Alles, was du hast, sind Partner, die noch unzuverlässiger sind als du,\nund ein "
            },
            {
              "t": "„KI-Freundin-Projekt“",
              "em": "span"
            },
            {
              "t": ", das nicht einmal einen richtigen Namen hat."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Ein Abenteuer ohne Erfolgsgarantie. In dieser Leerstelle deines Lebens\nversuchst du, "
            },
            {
              "t": "„deine eigene Antwort zu erschaffen“",
              "em": "span"
            },
            {
              "t": "."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "Alter",
      "birthday": "Geburtstag",
      "zodiac": "Sternzeichen",
      "bloodType": "Blutgruppe",
      "heightWeight": "Größe/Gewicht",
      "bwh": "Maße",
      "likes": "Interessen",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "Hochschulabsolvent (auf Jobsuche)",
        "description": "Der Protagonist. Er hat Informatik an der Universität Ibaraki studiert, erzielte hervorragende Leistungen und galt als „Musterschüler“. Nach dem Abschluss führen jedoch Wirtschaftsflaute und immer härterer Konkurrenzkampf zu einer Absage nach der anderen. Als „künftiger Konzernsklave“ zieht er sich vorübergehend in seine Mietwohnung zurück und verschickt täglich online Bewerbungen, auf der Suche nach einem Weg in die Zukunft. Er ist ernsthaft und bodenständig, bleibt in schwierigen Situationen ruhig, handelt rational und verlässlich und empfindet eine starke Verantwortung für die Menschen und Dinge in seinem Umfeld.",
        "likes": [
          "Programmieren",
          "Fotografie",
          "Modellbau"
        ],
        "quotes": [
          "Im Moment habe ich noch keinen Plan, aber wenn ich das Problem Schritt für Schritt zerlege, finde ich bestimmt eine Lösung.",
          "Wenn ich mich dafür entschieden habe, übernehme ich bis zum Ende die Verantwortung. Auf halbem Weg aufzugeben, passt nicht zu mir.",
          "……Schon gut. Ich ordne meine Gedanken neu und mache morgen weiter."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "Hochschulabsolvent (Stubenhocker)",
        "description": "Mitbewohner und langjähriger Freund des Protagonisten. Er hat Betriebswirtschaft an der Universität Ibaraki studiert, besitzt aber keinerlei geschäftlichen Menschenverstand. Sein silbergraues Haar ist stets zerzaust, und sein Blick wirkt immer unausgeschlafen. Früher war er ein Bilderbuch-Sohn aus reichem Hause, bis seine Familie alles verlor. Von Natur aus lässig, handelt er ganz nach seiner momentanen Laune. Obwohl er unseriös wirkt, kennt er erstaunlich viele Tricks und Abkürzungen. Sobald er den Mund aufmacht, folgt ein Spruch auf den nächsten. Er ist ein Meister der großen Worte und ein wahres Genie darin, Luftschlösser zu verkaufen.",
        "likes": [
          "Texas Hold’em",
          "Billard",
          "Videospiele"
        ],
        "quotes": [
          "Bruder, denk größer! Erweitere deinen Horizont! Worauf schaut die Investmentwelt heute? Auf das Produkt? Falsch! Auf emotionalen Wert!",
          "Ich bringe das Geld, du setzt dein Leben ein. Gemeinsam erreichen wir den Gipfel!",
          "Was weißt du schon? Ein Startup braucht Ausstrahlung!"
        ],
        "zodiac": "Schütze",
        "bloodType": "AB",
        "birthday": "4. Dezember"
      },
      {
        "role": "UI/UX-Designerin (Praktikantin)",
        "description": "Studentin im zweiten Jahr des Studiengangs Visuelles Design an der Universität Ibaraki. Sie ist von Natur aus schüchtern und errötet ohne erkennbaren Grund sehr leicht. Zurückhaltend und wortkarg drückt sie ihre reichen, feinen Gefühle lieber durch Kunst aus. Sie besitzt ein außergewöhnliches ästhetisches Gespür und großes Zeichentalent, beobachtet scharf und beherrscht Farben hervorragend. Schönheit ist ihr wichtig, und sie achtet auf jedes Detail. Sie versteht es, die kleinen Freuden des Alltags in ihre Werke einfließen zu lassen, und ihr Talent sowie ihr Potenzial im Design überraschen ihr Umfeld immer wieder.",
        "likes": [
          "Kunstausstellungen besuchen",
          "Handarbeiten",
          "Zeichnen im Freien"
        ],
        "quotes": [
          "I-ich glaube…… hier stimmt etwas nicht ganz…… Darf ich es ändern?",
          "Überlassen Sie es mir! Ich werde…… das vollkommenste Werk erschaffen!",
          "Bitte vertrauen Sie mir! Denn…… ich vertraue Ihnen auch, Senpai!"
        ],
        "zodiac": "Fische",
        "bloodType": "A",
        "birthday": "9. März"
      },
      {
        "role": "Junior-Frontend-Entwicklerin",
        "description": "Ein unauffälliges Mädchen mit einem leicht gewellten seitlichen Pferdeschwanz und einer feinen Brille. Sie ist ruhig, introvertiert und wortkarg und scheint unter leichter sozialer Angst zu leiden. Weil sie ihren Abschluss an einer zweitklassigen Universität gemacht hat, fehlt ihr Selbstvertrauen, und in den meisten gesellschaftlichen Situationen fühlt sie sich unwohl. Bei der Arbeit ist sie äußerst gewissenhaft, klagt nie und erledigt alles sorgfältig, hält sich jedoch manchmal zu starr an Regeln. Kommunikation liegt ihr nicht; lieber senkt sie den Kopf und schreibt schweigend Code. Mit Maschinen umzugehen erscheint ihr deutlich einfacher als mit Menschen.",
        "likes": [
          "Tagebuch führen",
          "Buchhandlungen besuchen",
          "Serien schauen"
        ],
        "quotes": [
          "Ähm…… ich habe alles erledigt, worum Sie mich vorhin gebeten haben…… Kann ich sonst noch etwas tun?",
          "Wie gedacht…… mit Computern umzugehen ist viel einfacher……",
          "Entschuldigung…… ich werde mich bemühen, niemanden aufzuhalten……"
        ],
        "zodiac": "Jungfrau",
        "bloodType": "O",
        "birthday": "17. September"
      },
      {
        "role": "Marketingplanerin",
        "description": "Eine lebhafte, etwas bissige Influencerin und Streamerin. Mit sechzehn begann sie, eigene Inhalte zu produzieren, und wurde später von einer bekannten MCN-Agentur entdeckt. Sie besitzt einen ausgezeichneten Instinkt für die „Formel des Traffics“ und hat selbst zahlreiche virale Kurzvideos geschaffen. Schlagfertig und geistreich durchschaut sie die menschliche Psychologie und beherrscht IP-Branding. Heute betreibt sie auf einer äußerst beliebten Social-Media-Plattform den Account „Großkönigin Nana“, inszeniert sich als unabhängige Frau und erreicht mehrere zehn Millionen Follower. Sie hat einen starken Drang, Geld zu verdienen, und sagt bei jeder Gelegenheit: „Das kostet extra.“",
        "likes": [
          "Shopping",
          "Varietéshows",
          "Restaurants entdecken"
        ],
        "quotes": [
          "Hehe! Hör auf mich! Das sind die Formeln des Traffics. Damit hebst du sofort ab!",
          "Gefühle hin oder her: Im Internet ist alles Müll, was keine Aufmerksamkeit erregt!",
          "Nur damit das klar ist: Mich zu heiraten ist teuer! Das kostet extra!"
        ],
        "zodiac": "Löwe",
        "bloodType": "AB",
        "birthday": "7. August"
      },
      {
        "role": "Produktmanagerin",
        "description": "Eine wunderschöne Frau mit einem Viertel französischer Abstammung. Sie bewegt sich elegant, spricht freundlich und beruhigt mit ihrer sanften Stimme jeden in ihrer Umgebung. Sie besitzt eine seltene Ausstrahlung und eine ganz eigene Sicht auf die Dinge; im heutigen Geschäftsumfeld wirkt sie dadurch manchmal idealistisch. Die Nutzererfahrung steht für sie an erster Stelle, und sie weigert sich, nur für schönere Zahlen Kompromisse einzugehen. Sie investiert bereitwillig viel Zeit in Marktforschung und möchte Produkte entwickeln, die Nutzer wirklich brauchen und lieben.",
        "likes": [
          "Ikebana",
          "Ballett",
          "Konzerte"
        ],
        "quotes": [
          "Ich möchte einfach nur etwas Sanftes und Wertvolles schaffen.",
          "Egal, wie lang der Weg ist: Solange die Richtung stimmt, werden wir irgendwann ankommen.",
          "Gibst du schon nach? Vor der Realität den Kopf zu senken, passt nicht zu dir."
        ],
        "zodiac": "Krebs",
        "bloodType": "O",
        "birthday": "8. Juli"
      },
      {
        "role": "Angel-Investorin",
        "description": "Gründerin des Investmentfonds Woman Combination (WC). In der Venture-Capital-Szene wird sie als „göttlicher Investmentengel“ verehrt: Nahezu jedes von ihr finanzierte Projekt erzielt außergewöhnliche Renditen, ihre Trefferquote liegt bei bis zu 90 %. Sie trägt stets einen violetten Samtanzug und einen engen Minirock; sobald ihre Absätze den Boden berühren, beherrscht ihre Präsenz den ganzen Raum. Sie ist klug, effizient und besitzt einen scharfen Blick. Markttrends erkennt sie präzise, vertritt eine eigenständige Sichtweise und fällt äußerst treffsichere Anlageentscheidungen. Berüchtigt ist sie dafür, Gründer mit messerscharfen Fragen zu zerlegen.",
        "likes": [
          "Skifahren",
          "Weinverkostung",
          "Antiquitäten sammeln"
        ],
        "quotes": [
          "Ich investiere nicht in euer heutiges Produkt. Ich investiere in dich und in deine Zukunft.",
          "Versuch nicht, mich mit Träumen zu bewegen. Sprich mit Daten und Umsetzungskraft.",
          "Nur wer stark genug ist, kann sein eigenes Schicksal beherrschen!"
        ],
        "zodiac": "Steinbock",
        "bloodType": "B",
        "birthday": "9. Januar"
      },
      {
        "role": "Gründer und CEO eines Unicorn-Startups",
        "description": "Gründer und CEO des KI-Startups „SYNTH♥“. Als Forbes-30-Under-30-Talent besitzt er einen Doppelabschluss in Informatik und einen MBA der Stanford University sowie einen Doktortitel in künstlicher Intelligenz. Er verbindet erstaunliche Umsetzungskraft mit tiefem geschäftlichem Weitblick. Schon als Kind begann er zu programmieren und war bereits in der Mittelschule als Indie-Entwickler in großen Open-Source- und Geek-Communities aktiv, wo er erheblichen Einfluss aufbaute. Drei Gründungen in Folge brachten beachtliche Erfolge. Außerdem arbeitete er beim bekannten Technologieunternehmen CloseAI an großen multimodalen Trainingsprojekten.",
        "likes": [
          "Lesen",
          "Finanzanalyse",
          "Aktienmarktstudien"
        ],
        "quotes": [
          "Menschliche Gefühle sind im Kern ein Chaos aus Mustern. Aber Muster lassen sich modellieren.",
          "Liebe? Ein ineffizientes, energieintensives, riskantes Hormonsystem voller Redundanzen.",
          "Eine zusammengewürfelte Amateurtruppe wie ihr kann froh sein, wenn sie nicht bankrottgeht."
        ],
        "zodiac": "Widder",
        "bloodType": "B",
        "birthday": "28. März"
      }
    ]
  },
  'th-th': {
    "nav": {
      "char": "ตัวละคร",
      "pv": "วิดีโอ PV",
      "gallery": "แกลเลอรี",
      "progress": "ความคืบหน้าล่าสุด",
      "product": "ข้อมูลผลิตภัณฑ์"
    },
    "pv": {
      "themeMovie": "วิดีโอธีม",
      "charMovie": "วิดีโอแนะนำตัวละคร"
    },
    "galleryNote": "※สื่อทั้งหมดอยู่ระหว่างการพัฒนาและอาจเปลี่ยนแปลงโดยไม่แจ้งให้ทราบล่วงหน้า",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "เว็บไซต์ทางการเปิดให้บริการแล้ว"
      },
      {
        "date": "2026/07/12",
        "text": "เผยแพร่วิดีโอ PV แรกแล้ว"
      },
      {
        "date": "2026/07/13",
        "text": "หน้าร้าน Steam เปิดให้เข้าชมแล้ว"
      }
    ],
    "spec": {
      "title": "สเปก",
      "items": [
        {
          "label": "ชื่อเรื่อง",
          "value": "ความรัก สตาร์ทอัพ และผู้ร่วมก่อตั้ง"
        },
        {
          "label": "ประเภท",
          "value": "ADV วัยรุ่นและการเริ่มต้นธุรกิจ"
        },
        {
          "label": "ระดับอายุ",
          "value": "เหมาะสำหรับทุกวัย"
        },
        {
          "label": "วันวางจำหน่าย",
          "value": "(ยังไม่กำหนด)"
        },
        {
          "label": "ราคา",
          "value": "(ยังไม่กำหนด)"
        },
        {
          "label": "ระบบปฏิบัติการที่รองรับ",
          "value": "Windows® 10／11"
        },
        {
          "label": "CPU",
          "value": "แนะนำ Intel® Core™ i3 รุ่นที่ 2 ขึ้นไป"
        },
        {
          "label": "จอแสดงผล",
          "value": "3840×2160 พิกเซล／สีเต็มรูปแบบขึ้นไป"
        },
        {
          "label": "หน่วยความจำ",
          "value": "จำเป็น 2 GB／แนะนำ 4 GB ขึ้นไป"
        },
        {
          "label": "พื้นที่จัดเก็บ",
          "value": "6 GB ขึ้นไป"
        }
      ]
    },
    "staff": {
      "title": "ทีมงาน",
      "items": [
        {
          "label": "วางแผน／ผลิต",
          "value": "StarQ Soft"
        },
        {
          "label": "ผู้จัดจำหน่าย",
          "value": "Pairaki Games"
        },
        {
          "label": "บท／ออกแบบตัวละคร",
          "value": "星可"
        },
        {
          "label": "ภาพ CG／SD／ฉากหลัง",
          "value": "眞海"
        },
        {
          "label": "เพลงธีม",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "ดนตรี",
          "value": "Wedoso"
        },
        {
          "label": "วิดีโอ",
          "value": "星可"
        },
        {
          "label": "เอฟเฟกต์การเคลื่อนไหว",
          "value": "幽浮小花"
        },
        {
          "label": "ความร่วมมือ",
          "value": "终焉 และคณะ"
        },
        {
          "label": "ขอขอบคุณเป็นพิเศษ",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "เพิ่มในรายการสิ่งที่อยากได้",
      "btnPreorder": "สั่งซื้อล่วงหน้า",
      "note": "※ข้อกำหนดระบบเป็นข้อมูลชั่วคราวและอาจเปลี่ยนแปลงก่อนวางจำหน่ายจริง"
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "ความรัก",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "สตาร์ทอัพ",
            "small": " &",
            "size": "2em"
          }
        ],
        [
          {
            "big": "ผู้ร่วมก่อตั้ง",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "อพาร์ตเมนต์ที่แชร์ร่วมกัน กลุ่มเพื่อนร่วมทางที่มีบุคลิกแตกต่างกัน",
        "และการเดินทางสร้างสรรค์ร่วมกันที่เต็มไปด้วยความเร่าร้อน ความสับสน และความหวั่นไหว"
      ],
      "gameDescription": "หน้าร้าน Steam เปิดให้เข้าชมแล้ว!",
      "wishlist": "เพิ่มในรายการสิ่งที่อยากได้"
    },
    "story": {
      "title": "// เนื้อเรื่อง",
      "subtitle": "「มาสร้างบริษัทด้วยกันเถอะ!」",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "การผจญภัยที่เริ่มต้นไปด้วยกัน!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "หลังเรียนจบแต่หางานไม่ได้ คุณถูกเพื่อนร่วมห้องเกลี้ยกล่อม\nจนก้าวเข้าสู่เส้นทางที่ไม่เคยจินตนาการไว้……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "ประสบการณ์ศูนย์ ทรัพยากรศูนย์ เงินเดือนศูนย์——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "สิ่งเดียวที่คุณมีคือเหล่าผู้ร่วมก่อตั้งที่ไว้ใจได้น้อยกว่าคุณเสียอีก\nและ "
            },
            {
              "t": "「โครงการแฟนสาว AI」",
              "em": "span"
            },
            {
              "t": " ที่ยังไม่มีแม้แต่ชื่ออย่างเป็นทางการ"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "นี่คือการผจญภัยที่ไม่มีใครรู้ว่าจะสำเร็จหรือไม่ ในช่วงว่างเปล่าของชีวิต\nคุณจะลอง "
            },
            {
              "t": "「สร้างคำตอบของตัวเอง」",
              "em": "span"
            },
            {
              "t": ""
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "อายุ",
      "birthday": "วันเกิด",
      "zodiac": "ราศี",
      "bloodType": "กรุ๊ปเลือด",
      "heightWeight": "ส่วนสูง/น้ำหนัก",
      "bwh": "สัดส่วน",
      "likes": "สิ่งที่ชอบ",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "บัณฑิตจบใหม่ (กำลังหางาน)",
        "description": "ตัวเอกของเรื่อง จบสาขาวิทยาการคอมพิวเตอร์จากมหาวิทยาลัยอิบารากิ สมัยเรียนมีผลการเรียนยอดเยี่ยมและเป็น “นักเรียนตัวอย่าง” ในสายตาทุกคน แต่หลังเรียนจบ ภาวะเศรษฐกิจตกต่ำและการแข่งขันที่รุนแรงขึ้นทำให้การหางานล้มเหลวครั้งแล้วครั้งเล่า จนกลายเป็น “ว่าที่ทาสบริษัท” ที่เก็บตัวอยู่ในห้องเช่าชั่วคราวและส่งเรซูเม่ออนไลน์ทุกวันเพื่อหาทางไปต่อในอนาคต เขาเป็นคนจริงจัง มั่นคง ใจเย็นเมื่อเจอปัญหา มีเหตุผล ไว้ใจได้ และมีความรับผิดชอบสูงต่อผู้คนและสิ่งต่าง ๆ รอบตัว",
        "likes": [
          "เขียนโปรแกรม",
          "ถ่ายภาพ",
          "ประกอบโมเดล"
        ],
        "quotes": [
          "ตอนนี้อาจยังมองไม่เห็นทาง แต่ถ้าแยกปัญหาออกทีละส่วน ยังไงก็ต้องหาวิธีแก้ได้",
          "ในเมื่อเลือกจะทำแล้ว ฉันจะรับผิดชอบให้ถึงที่สุด การเลิกกลางคันไม่ใช่สไตล์ของฉัน",
          "……ไม่เป็นไร จัดความคิดใหม่แล้วพรุ่งนี้ค่อยทำต่อ"
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "บัณฑิตจบใหม่ (เก็บตัวอยู่บ้าน)",
        "description": "เพื่อนร่วมห้องและเพื่อนเล่นมานานของตัวเอก จบสาขาบริหารธุรกิจจากมหาวิทยาลัยอิบารากิแต่แทบไม่มีสามัญสำนึกด้านธุรกิจเลย มีผมสีเทาเงินยุ่งเหยิงและดวงตาที่ดูเหมือนนอนไม่พออยู่ตลอด ครั้งหนึ่งเคยเป็นคุณชายบ้านรวยแบบตำรา ก่อนครอบครัวจะตกต่ำ เป็นคนสบาย ๆ โดยธรรมชาติและทำทุกอย่างตามอารมณ์ชั่ววูบ แม้จะดูไม่จริงจัง แต่กลับรู้กลเม็ดและทางลัดมากมาย พอเปิดปากก็มักพูดประโยคเด็ด เขาพูดเก่งและเป็นอัจฉริยะในการขายฝัน",
        "likes": [
          "เท็กซัสโฮลเด็ม",
          "บิลเลียด",
          "วิดีโอเกม"
        ],
        "quotes": [
          "พี่น้อง ต้องมองภาพใหญ่! เปิดโลกให้กว้าง! ตอนนี้วงการลงทุนมองอะไร? สินค้าเหรอ? ผิด! คุณค่าทางอารมณ์ต่างหาก!",
          "ฉันออกเงิน นายเอาชีวิตเข้าแลก แล้วไปถึงจุดสูงสุดด้วยกัน!",
          "นายจะไปรู้อะไร? สตาร์ทอัพต้องมีออร่า!"
        ],
        "zodiac": "ราศีธนู",
        "bloodType": "AB",
        "birthday": "4 ธันวาคม"
      },
      {
        "role": "นักออกแบบ UI/UX (ฝึกงาน)",
        "description": "นักศึกษาชั้นปีที่สองสาขาออกแบบนิเทศศิลป์ มหาวิทยาลัยอิบารากิ ขี้อายโดยธรรมชาติและหน้าแดงง่ายโดยไม่มีเหตุผล เป็นคนเงียบ ไม่ชอบพูดมาก และชอบถ่ายทอดอารมณ์อันละเอียดอ่อนผ่านงานศิลปะ เธอมีสัญชาตญาณด้านความงามและพรสวรรค์ในการวาดภาพที่โดดเด่น สังเกตเก่ง ควบคุมสีได้ยอดเยี่ยม ใฝ่หาความงามและใส่ใจทุกรายละเอียด เธอเก่งในการนำความสุขเล็ก ๆ ในชีวิตประจำวันมาใส่ในผลงาน และพรสวรรค์กับศักยภาพด้านการออกแบบของเธอก็ทำให้คนรอบข้างประทับใจเสมอ",
        "likes": [
          "ชมงานศิลปะ",
          "งานฝีมือ",
          "สเก็ตช์ภาพกลางแจ้ง"
        ],
        "quotes": [
          "ค-คือว่า……ฉันรู้สึกว่าตรงนี้แปลกนิดหน่อย……ขอแก้ได้ไหมคะ?",
          "ฝากไว้กับฉันได้เลย! ฉันจะ……สร้างผลงานที่สมบูรณ์แบบที่สุดให้ได้!",
          "โปรดเชื่อฉันนะคะ! เพราะว่า……ฉันก็เชื่อในตัวรุ่นพี่เหมือนกัน!"
        ],
        "zodiac": "ราศีมีน",
        "bloodType": "A",
        "birthday": "9 มีนาคม"
      },
      {
        "role": "วิศวกรฟรอนต์เอนด์ระดับต้น",
        "description": "เด็กสาวธรรมดาที่มัดผมหางม้าด้านข้างแบบลอนอ่อนและสวมแว่นกรอบบางเสมอ เธอเงียบ เก็บตัว ไม่ค่อยพูด และดูเหมือนจะวิตกกังวลทางสังคมเล็กน้อย การจบจากมหาวิทยาลัยระดับรองทำให้เธอไม่มั่นใจและอึดอัดในสถานการณ์ทางสังคมส่วนใหญ่ เธอจริงจังกับงานอย่างมาก ไม่บ่น และทำงานละเอียด แม้บางครั้งจะยึดกฎเกินไป เธอไม่ถนัดการสื่อสาร จึงชอบก้มหน้าก้มตาเขียนโค้ดเงียบ ๆ และรู้สึกว่าทำงานกับเครื่องจักรง่ายกว่าคนมาก",
        "likes": [
          "เขียนแพลนเนอร์",
          "เดินร้านหนังสือ",
          "ดูซีรีส์"
        ],
        "quotes": [
          "เอ่อ……งานที่สั่งไว้ก่อนหน้านี้เสร็จหมดแล้วค่ะ……มีอะไรให้ช่วยอีกไหมคะ?",
          "อย่างที่คิด……ทำงานกับคอมพิวเตอร์สบายใจกว่าจริง ๆ……",
          "ขอโทษค่ะ……ฉันจะพยายามไม่ให้เป็นภาระของทุกคน……"
        ],
        "zodiac": "ราศีกันย์",
        "bloodType": "O",
        "birthday": "17 กันยายน"
      },
      {
        "role": "นักวางแผนการตลาด",
        "description": "อินฟลูเอนเซอร์และสตรีมเมอร์สาวที่ร่าเริงแต่พูดจาแสบเล็กน้อย เธอเริ่มทำคอนเทนต์ตั้งแต่อายุสิบหก ก่อนถูกเอเจนซี MCN ชื่อดังค้นพบ มีสัญชาตญาณเฉียบคมต่อ “สูตรเรียกทราฟฟิก” และสร้างวิดีโอสั้นไวรัลมากมายด้วยตัวเอง พูดจาคมคาย คิดไว เข้าใจจิตใจคน และเก่งด้านการสร้างแบรนด์ IP ปัจจุบันดูแลบัญชี “ราชินีนานะผู้ยิ่งใหญ่” บนแพลตฟอร์มโซเชียลยอดนิยม สร้างภาพลักษณ์หญิงอิสระและมีผู้ติดตามหลายสิบล้านคน เธอหลงใหลการหาเงินอย่างมากและมักพูดว่า “ต้องจ่ายเพิ่มนะ”",
        "likes": [
          "ช้อปปิ้ง",
          "ดูรายการวาไรตี้",
          "ตระเวนร้านอาหาร"
        ],
        "quotes": [
          "ฮึ่ม! ฟังฉันสิ! นี่แหละสูตรเรียกทราฟฟิก รับรองพุ่งทันที!",
          "อารมณ์ความรู้สึกอะไรนั่นน่ะ บนอินเทอร์เน็ต ของที่ดึงสายตาไม่ได้ก็เป็นขยะทั้งนั้น!",
          "บอกไว้ก่อนนะ แต่งงานกับฉันแพงมาก! ต้องจ่ายเพิ่ม!"
        ],
        "zodiac": "ราศีสิงห์",
        "bloodType": "AB",
        "birthday": "7 สิงหาคม"
      },
      {
        "role": "ผู้จัดการผลิตภัณฑ์",
        "description": "สาวสวยลูกครึ่งที่มีเชื้อสายฝรั่งเศสหนึ่งในสี่ ท่าทางสง่างาม คำพูดอ่อนโยน และน้ำเสียงนุ่มนวลทำให้คนรอบข้างสบายใจ เธอมีบรรยากาศที่หาได้ยากและมีความเข้าใจกับอุดมคติของตนเอง ในสภาพธุรกิจปัจจุบันจึงดูเป็นคนอุดมคติอยู่บ้าง เธอให้ความสำคัญกับประสบการณ์ผู้ใช้มาก ไม่ยอมประนีประนอมเพียงเพื่อให้ตัวเลขดูดี ยินดีใช้เวลามากกับการวิจัยตลาด และหวังจะสร้างผลิตภัณฑ์ที่ผู้ใช้ต้องการและรักอย่างแท้จริง",
        "likes": [
          "จัดดอกไม้",
          "บัลเลต์",
          "ชมคอนเสิร์ต"
        ],
        "quotes": [
          "ฉันแค่อยากสร้างสิ่งที่อ่อนโยนและมีคุณค่าเท่านั้นค่ะ",
          "ไม่ว่าทางจะไกลแค่ไหน ตราบใดที่ทิศทางถูกต้อง สักวันเราจะไปถึงแน่นอน",
          "จะยอมแพ้แล้วเหรอ? ก้มหัวให้ความจริงไม่ใช่สไตล์ของคุณเลยนะ"
        ],
        "zodiac": "ราศีกรกฎ",
        "bloodType": "O",
        "birthday": "8 กรกฎาคม"
      },
      {
        "role": "นักลงทุนเทวดา",
        "description": "ผู้ก่อตั้งกองทุน Woman Combination (WC) ในวงการเงินร่วมลงทุน เธอได้รับการยกย่องว่าเป็น “เทพธิดาแห่งการลงทุน” เกือบทุกโครงการที่เธอลงทุนล้วนสร้างผลตอบแทนเกินคาด โดยมีอัตราความแม่นยำสูงถึง 90% เธอมักสวมสูทกำมะหยี่สีม่วงกับกระโปรงสั้นรัดรูป เพียงส้นสูงแตะพื้น บรรยากาศทั้งห้องก็ถูกครอบงำ เธอฉลาด คล่องแคล่ว สายตาคมกริบ ไวต่อทิศทางตลาด มีมุมมองเฉพาะตัว และตัดสินใจลงทุนได้แม่นยำอย่างยิ่ง เธอโด่งดังจากการใช้คำถามคมกริบทำลายความมั่นใจของผู้ประกอบการ",
        "likes": [
          "เล่นสกี",
          "ชิมไวน์",
          "สะสมของเก่า"
        ],
        "quotes": [
          "สิ่งที่ฉันลงทุนไม่ใช่สินค้าตอนนี้ของพวกคุณ แต่คือตัวคุณและอนาคตของคุณ",
          "อย่าพยายามทำให้ฉันหวั่นไหวด้วยความฝัน พูดด้วยข้อมูลและความสามารถในการลงมือทำ",
          "คนเราต้องแข็งแกร่งพอ จึงจะควบคุมชะตาของตัวเองได้!"
        ],
        "zodiac": "ราศีมังกร",
        "bloodType": "B",
        "birthday": "9 มกราคม"
      },
      {
        "role": "ผู้ก่อตั้งและ CEO สตาร์ทอัพยูนิคอร์น",
        "description": "ผู้ก่อตั้งและ CEO ของสตาร์ทอัพ AI “SYNTH♥” ได้รับเลือกเป็น Forbes 30 Under 30 มีปริญญาคู่ด้านวิทยาการคอมพิวเตอร์และ MBA จากมหาวิทยาลัยสแตนฟอร์ด รวมถึงปริญญาเอกด้านปัญญาประดิษฐ์ เขามีทั้งความสามารถในการลงมือทำที่น่าทึ่งและวิสัยทัศน์ทางธุรกิจ เริ่มเขียนโปรแกรมตั้งแต่เด็ก และตั้งแต่สมัยมัธยมต้นก็ทำงานในฐานะนักพัฒนาอิสระในชุมชนโอเพนซอร์สขนาดใหญ่จนสร้างอิทธิพลมากมาย การก่อตั้งบริษัทสามครั้งติดต่อกันล้วนประสบความสำเร็จ เขาเคยทำงานที่บริษัทเทคโนโลยีชื่อดัง CloseAI และเข้าร่วมโครงการฝึกโมเดลมัลติโหมดขนาดใหญ่",
        "likes": [
          "อ่านหนังสือ",
          "วิเคราะห์งบการเงิน",
          "ศึกษาตลาดหุ้น"
        ],
        "quotes": [
          "อารมณ์ของมนุษย์โดยพื้นฐานคือความโกลาหลของรูปแบบ แต่รูปแบบสามารถสร้างแบบจำลองได้",
          "ความรักเหรอ? มันคือเกมฮอร์โมนที่ไร้ประสิทธิภาพ ใช้พลังงานสูง เสี่ยงสูง และเต็มไปด้วยความซ้ำซ้อน",
          "ทีมสมัครเล่นปะติดปะต่อแบบพวกนาย แค่ไม่ล้มละลายก็ควรขอบคุณแล้ว"
        ],
        "zodiac": "ราศีเมษ",
        "bloodType": "B",
        "birthday": "28 มีนาคม"
      }
    ]
  },
  'ms-my': {
    "nav": {
      "char": "Watak",
      "pv": "Video PV",
      "gallery": "Galeri",
      "progress": "Perkembangan Terkini",
      "product": "Maklumat Produk"
    },
    "pv": {
      "themeMovie": "Video Tema",
      "charMovie": "Video Pengenalan Watak"
    },
    "galleryNote": "※Semua bahan masih dalam pembangunan dan mungkin berubah tanpa notis terlebih dahulu.",
    "progressNotes": [
      {
        "date": "2026/07/11",
        "text": "Laman web rasmi kini dilancarkan."
      },
      {
        "date": "2026/07/12",
        "text": "Video PV pertama telah diterbitkan."
      },
      {
        "date": "2026/07/13",
        "text": "Halaman kedai Steam kini dibuka."
      }
    ],
    "spec": {
      "title": "Spesifikasi",
      "items": [
        {
          "label": "Tajuk",
          "value": "Cinta, Startup & Pengasas Bersama"
        },
        {
          "label": "Genre",
          "value": "ADV belia dan keusahawanan"
        },
        {
          "label": "Penarafan",
          "value": "Untuk semua peringkat umur"
        },
        {
          "label": "Tarikh Pelancaran",
          "value": "(Belum ditentukan)"
        },
        {
          "label": "Harga",
          "value": "(Belum ditentukan)"
        },
        {
          "label": "Sistem disokong",
          "value": "Windows® 10／11"
        },
        {
          "label": "CPU",
          "value": "Intel® Core™ i3 generasi ke-2 atau lebih tinggi disyorkan"
        },
        {
          "label": "Paparan",
          "value": "3840×2160 piksel／warna penuh atau lebih tinggi"
        },
        {
          "label": "Memori",
          "value": "Wajib 2 GB／disyorkan 4 GB atau lebih"
        },
        {
          "label": "Storan",
          "value": "6 GB atau lebih"
        }
      ]
    },
    "staff": {
      "title": "Kakitangan",
      "items": [
        {
          "label": "Perancangan／Produksi",
          "value": "StarQ Soft"
        },
        {
          "label": "Penerbit",
          "value": "Pairaki Games"
        },
        {
          "label": "Skrip／Reka Bentuk Watak",
          "value": "星可"
        },
        {
          "label": "Seni CG／SD／Latar",
          "value": "眞海"
        },
        {
          "label": "Lagu Tema",
          "value": "「Startup!★Start!!」by Wedoso"
        },
        {
          "label": "Muzik",
          "value": "Wedoso"
        },
        {
          "label": "Video",
          "value": "星可"
        },
        {
          "label": "Kesan Gerakan",
          "value": "幽浮小花"
        },
        {
          "label": "Kerjasama",
          "value": "终焉 dan lain-lain"
        },
        {
          "label": "Penghargaan Khas",
          "value": "小笠原"
        }
      ]
    },
    "product": {
      "btnDemo": "Tambah ke Senarai Hajat",
      "btnPreorder": "Prapesan",
      "note": "※Keperluan sistem adalah sementara dan mungkin berubah sebelum pelancaran rasmi."
    },
    "footerInfo": "All rights reserved.",
    "hero": {
      "title": [
        [
          {
            "big": "Cinta",
            "small": ",",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Startup",
            "small": " &",
            "size": "2em"
          }
        ],
        [
          {
            "big": "Pengasas Bersama",
            "small": "",
            "size": "1.5em"
          }
        ]
      ],
      "description": [
        "Sebuah apartmen kongsi, sekumpulan rakan dengan personaliti yang berbeza,",
        "dan perjalanan mencipta bersama yang penuh semangat, kekeliruan dan debaran hati."
      ],
      "gameDescription": "Halaman kedai Steam kini dibuka!",
      "wishlist": "Tambah ke Senarai Hajat"
    },
    "story": {
      "title": "// CERITA",
      "subtitle": "“Mari kita tubuhkan syarikat bersama!”",
      "paragraphs": [
        {
          "segments": [
            {
              "t": "Pengembaraan yang bermula bersama!",
              "em": "span"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Selepas tamat universiti tetapi gagal mendapat pekerjaan, anda dipujuk oleh rakan serumah\ndan tanpa disangka melangkah ke jalan yang tidak pernah anda bayangkan……"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Sifar pengalaman, sifar sumber, sifar gaji——",
              "em": "strong"
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Apa yang anda miliki hanyalah sekumpulan pengasas bersama yang lebih tidak boleh diharap daripada anda,\nserta "
            },
            {
              "t": "“Projek Teman Wanita AI”",
              "em": "span"
            },
            {
              "t": " yang masih belum mempunyai nama rasmi."
            }
          ]
        },
        {
          "segments": [
            {
              "t": "Sebuah pengembaraan tanpa jaminan kejayaan. Dalam kekosongan hidup ini,\nanda cuba "
            },
            {
              "t": "“mencipta jawapan anda sendiri”",
              "em": "span"
            },
            {
              "t": "."
            }
          ]
        }
      ]
    },
    "charLabels": {
      "age": "Umur",
      "birthday": "Hari Lahir",
      "zodiac": "Zodiak",
      "bloodType": "Jenis Darah",
      "heightWeight": "Tinggi/Berat",
      "bwh": "Ukuran Badan",
      "likes": "Kegemaran",
      "cv": "CV"
    },
    "characters": [
      {
        "role": "Graduan universiti baharu (sedang mencari kerja)",
        "description": "Protagonis cerita ini. Graduan Sains Komputer Universiti Ibaraki yang cemerlang ketika belajar dan dikenali sebagai “pelajar contoh”. Namun selepas tamat pengajian, kelembapan ekonomi dan persaingan yang semakin sengit menyebabkan pencarian kerjanya dipenuhi kegagalan. Sebagai “calon hamba korporat”, dia buat sementara waktu mengurung diri di apartmen sewa dan menghantar resume dalam talian setiap hari untuk mencari jalan ke masa depan. Dia serius, tekun, tenang ketika menghadapi masalah, rasional dan boleh dipercayai, serta mempunyai rasa tanggungjawab yang kuat terhadap orang dan perkara di sekelilingnya.",
        "likes": [
          "Pengaturcaraan",
          "Fotografi",
          "Memasang model"
        ],
        "quotes": [
          "Walaupun saya belum nampak jalan keluarnya, jika masalah dipecahkan satu demi satu, pasti ada penyelesaian.",
          "Jika saya sudah memutuskan untuk melakukannya, saya akan bertanggungjawab hingga akhir. Berhenti di tengah jalan bukan gaya saya.",
          "……Tidak mengapa. Saya akan susun semula fikiran dan sambung esok."
        ],
        "zodiac": "",
        "bloodType": "",
        "birthday": ""
      },
      {
        "role": "Graduan universiti baharu (terperap di rumah)",
        "description": "Rakan serumah dan teman lama protagonis. Dia graduan Pengurusan Perniagaan Universiti Ibaraki tetapi langsung tiada akal perniagaan. Rambutnya kelabu perak yang sentiasa kusut dan matanya sentiasa kelihatan mengantuk. Dahulu dia anak orang kaya yang tipikal, sebelum keluarganya jatuh miskin. Bersikap santai sejak lahir dan bertindak mengikut dorongan semasa. Walaupun kelihatan tidak serius, dia tahu banyak helah dan jalan pintas; setiap kali membuka mulut, keluar sahaja kata-kata hebat. Dia pandai bercakap dan benar-benar genius dalam menjual impian kosong.",
        "likes": [
          "Texas Hold’em",
          "Biliard",
          "Permainan video"
        ],
        "quotes": [
          "Saudara, fikir besar! Luaskan pandangan! Apa yang dilihat dunia pelaburan sekarang? Produk? Salah! Nilai emosi!",
          "Aku keluarkan wang, kau pertaruhkan nyawa. Bersama-sama kita capai puncak kehidupan!",
          "Apa yang kau tahu? Startup perlukan aura!"
        ],
        "zodiac": "Sagittarius",
        "bloodType": "AB",
        "birthday": "4 Disember"
      },
      {
        "role": "Pereka UI/UX (pelatih)",
        "description": "Pelajar tahun kedua Reka Bentuk Visual di Universiti Ibaraki. Pemalu sejak lahir dan mudah tersipu tanpa sebab yang jelas. Pendiam dan tidak banyak bercakap, dia lebih suka meluahkan emosi halus dan kaya melalui seni. Dia memiliki intuisi estetik dan bakat melukis yang luar biasa, pemerhatian tajam serta kawalan warna yang hebat. Dia mengejar keindahan dan memberi perhatian pada setiap butiran. Dia mahir memasukkan kebahagiaan kecil dalam kehidupan seharian ke dalam karyanya, dan bakat serta potensinya dalam reka bentuk sentiasa mengagumkan orang lain.",
        "likes": [
          "Melawat pameran seni",
          "Kraftangan",
          "Melakar di luar"
        ],
        "quotes": [
          "S-saya rasa…… ada sesuatu yang agak pelik di sini…… Boleh saya betulkan?",
          "Serahkan kepada saya! Saya pasti akan…… menghasilkan karya yang paling sempurna!",
          "Tolong percayakan saya! Kerana…… saya juga percaya pada senior!"
        ],
        "zodiac": "Pisces",
        "bloodType": "A",
        "birthday": "9 Mac"
      },
      {
        "role": "Jurutera front-end junior",
        "description": "Seorang gadis sederhana dengan ekor kuda sisi sedikit beralun dan cermin mata berbingkai nipis. Dia pendiam, introvert dan tidak banyak bercakap, serta kelihatan mempunyai sedikit keresahan sosial. Lulusan universiti kelas kedua membuatkannya kurang yakin dan kekok dalam kebanyakan situasi sosial. Dia amat teliti dalam kerja, tidak merungut dan melaksanakan tugas dengan cermat, walaupun kadangkala terlalu terikat pada peraturan. Dia kurang mahir berkomunikasi dan lebih suka menundukkan kepala sambil menulis kod secara senyap; baginya berurusan dengan mesin jauh lebih mudah daripada manusia.",
        "likes": [
          "Menulis jurnal",
          "Mengunjungi kedai buku",
          "Menonton drama bersiri"
        ],
        "quotes": [
          "Er…… semua yang diminta tadi sudah saya siapkan…… Ada apa-apa lagi yang boleh saya bantu?",
          "Seperti yang saya sangka…… berurusan dengan komputer jauh lebih mudah……",
          "Maaf…… saya akan berusaha supaya tidak menyusahkan semua orang……"
        ],
        "zodiac": "Virgo",
        "bloodType": "O",
        "birthday": "17 September"
      },
      {
        "role": "Perancang pemasaran",
        "description": "Seorang pempengaruh dan penstrim yang ceria tetapi sedikit tajam lidah. Dia mula menghasilkan kandungan pada usia enam belas tahun sebelum ditemukan oleh sebuah agensi MCN terkenal. Dia mempunyai naluri luar biasa terhadap “formula trafik” dan telah menghasilkan sendiri banyak video pendek tular. Petah berkata-kata dan pantas berfikir, dia memahami psikologi manusia serta mahir dalam penjenamaan IP. Kini dia mengendalikan akaun “Ratu Agung Nana” di sebuah platform sosial yang sangat popular, membina persona wanita berdikari dan mengumpulkan puluhan juta pengikut. Dia sangat mendambakan wang dan sering mengulang, “Itu caj tambahan.”",
        "likes": [
          "Membeli-belah",
          "Menonton rancangan aneka ragam",
          "Mencuba restoran baharu"
        ],
        "quotes": [
          "Heh! Dengar cakap aku! Ini semua formula trafik. Pasti terus meletup!",
          "Sentimen apa semua itu? Di Internet, apa-apa yang tidak menarik perhatian hanyalah sampah!",
          "Aku beri amaran awal: mengahwini aku mahal! Itu caj tambahan!"
        ],
        "zodiac": "Leo",
        "bloodType": "AB",
        "birthday": "7 Ogos"
      },
      {
        "role": "Pengurus produk",
        "description": "Seorang wanita cantik berdarah campuran dengan satu perempat keturunan Perancis. Gerak-gerinya anggun, tutur katanya lembut dan suaranya sentiasa menenangkan orang di sekeliling. Dia mempunyai aura yang jarang ditemui dan pandangan tersendiri terhadap sesuatu; dalam suasana perniagaan hari ini, dia mungkin kelihatan agak idealistik. Dia sangat mengutamakan pengalaman pengguna dan enggan berkompromi hanya untuk mencantikkan angka. Dia sanggup meluangkan banyak masa untuk penyelidikan pasaran dan mahu membina produk yang benar-benar diperlukan dan disukai pengguna.",
        "likes": [
          "Gubahan bunga",
          "Balet",
          "Konsert"
        ],
        "quotes": [
          "Saya cuma mahu mencipta sesuatu yang lembut dan bernilai.",
          "Tidak kira sejauh mana jalan itu, selagi arah kita betul, akhirnya kita akan tiba.",
          "Sudah mahu berkompromi? Tunduk kepada realiti bukan gaya awak."
        ],
        "zodiac": "Cancer",
        "bloodType": "O",
        "birthday": "8 Julai"
      },
      {
        "role": "Pelabur malaikat",
        "description": "Pengasas dana pelaburan Woman Combination (WC). Dalam dunia modal teroka, dia dihormati sebagai “malaikat pelaburan ilahi”: hampir setiap projek yang dibiayainya menghasilkan pulangan luar biasa, dengan kadar ketepatan sehingga 90%. Dia sentiasa memakai sut baldu ungu dan skirt mini ketat; sebaik sahaja kasut tumit tingginya menyentuh lantai, kehadirannya terus menguasai seluruh bilik. Bijak, cekap dan bermata tajam, dia peka terhadap trend pasaran, mempunyai pandangan unik dan membuat keputusan pelaburan dengan amat tepat. Dia terkenal kerana mematahkan keyakinan usahawan dengan soalan yang tajam.",
        "likes": [
          "Bermain ski",
          "Merasa wain",
          "Mengumpul barangan antik"
        ],
        "quotes": [
          "Saya tidak melabur dalam produk semasa kamu. Saya melabur dalam diri kamu dan masa depan kamu.",
          "Jangan cuba menggerakkan saya dengan impian. Bercakaplah dengan data dan keupayaan pelaksanaan.",
          "Hanya apabila seseorang cukup kuat, barulah dia boleh menguasai nasibnya sendiri!"
        ],
        "zodiac": "Capricorn",
        "bloodType": "B",
        "birthday": "9 Januari"
      },
      {
        "role": "Pengasas dan CEO startup unikorn",
        "description": "Pengasas dan CEO startup AI “SYNTH♥”. Terpilih dalam Forbes 30 Under 30, dia memiliki dua ijazah dalam Sains Komputer dan MBA dari Universiti Stanford, serta PhD dalam Kecerdasan Buatan. Dia menggabungkan keupayaan pelaksanaan yang menakjubkan dengan wawasan perniagaan yang mendalam. Sejak kecil dia sudah mengenali pengaturcaraan, dan ketika sekolah menengah dia aktif sebagai pembangun indie dalam komuniti geek sumber terbuka utama, lalu membina pengaruh besar. Tiga startup berturut-turut yang diasaskannya mencapai hasil yang baik. Dia juga pernah bekerja di syarikat teknologi terkenal CloseAI dan terlibat dalam projek latihan multimodal berskala besar.",
        "likes": [
          "Membaca",
          "Analisis penyata kewangan",
          "Mengkaji pasaran saham"
        ],
        "quotes": [
          "Emosi manusia pada asasnya ialah kekacauan corak. Tetapi corak boleh dimodelkan.",
          "Cinta? Itu permainan hormon yang tidak cekap, menggunakan banyak tenaga, berisiko tinggi dan penuh lebihan.",
          "Kumpulan amatur seperti kamu patut bersyukur jika tidak muflis."
        ],
        "zodiac": "Aries",
        "bloodType": "B",
        "birthday": "28 Mac"
      }
    ]
  },
};

export default lscContent;
