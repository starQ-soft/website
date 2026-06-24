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
    btnWishlist: string;
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

export const lscContent: Record<LanguageCode, LscContent> = {
  'ja-jp': {
    nav: {
      char: `登場キャラクター`,
      pv: `ムービー`,
      gallery: `ギャラリー`,
      progress: `最新の開発進捗`,
      product: `製品情報`,
    },
    pv: {
      themeMovie: `主題ムービー`,
      charMovie: `キャラ紹介ムービー`,
    },
    galleryNote: `※素材は全て開発中のものであり、予告なく変更される場合があります。`,
    progressNotes: [
      { date: '2026/01/20', text: `公式サイトを公開しました。` },
      { date: '2026/02/28', text: `OPムービーを公開しました。` },
      { date: '2026/03/27', text: `Steamストアページを公開しました。` },
      { date: '2026/03/27', text: `Steamストアページを公開しました。` },
      { date: '2026/03/29', text: `AI 連携システム 調整中！` },
      { date: '2026/03/29', text: `AI エフェクト テスト中！` },
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
        { label: `企画／プロデューサー`, value: `星可` },
        { label: `パブリッシャー`, value: `Pairaki Games` },
        { label: `キャラクターデザイン`, value: `星可` },
        { label: `原画ＣＧ／SD／背景`, value: `眞海` },
        { label: `主題歌`, value: `「Startup!★Start!!」by Wedoso` },
        { label: `音楽`, value: `Wedoso` },
        { label: `ＣＧ`, value: `中乃・トミフミ 他` },
        { label: `ムービー`, value: `眞海` },
        { label: `動効`, value: `幽浮小花` },
        { label: `特別協力`, value: `アキナ・ランドール` },
      ],
    },
    product: {
      btnWishlist: `ウィッシュリストに追加`,
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
      title: `// STORY`,
      subtitle: `共に始まる冒険！`,
      paragraphs: [
        { segments: [{ t: `「一緒に起業しよう！」`, em: 'span' }] },
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
        role: `大学新卒（求職中）`,
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
        role: `フロントエンドエンジニア`,
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
        role: `マーケティング企画`,
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
        role: `花形スタートアップCEO`,
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
      progress: `Latest Updates`,
      product: `Product Info`,
    },
    pv: {
      themeMovie: `Theme Movie`,
      charMovie: `Character Movies`,
    },
    galleryNote: `* All assets shown are in development and subject to change without notice.`,
    progressNotes: [
      { date: '2026/01/20', text: `Launched the official website.` },
      { date: '2026/02/28', text: `Released the OP movie.` },
      { date: '2026/03/27', text: `Opened the Steam store page.` },
      { date: '2026/03/27', text: `Opened the Steam store page.` },
      { date: '2026/03/29', text: `Tuning the AI integration system!` },
      { date: '2026/03/29', text: `Testing AI effects!` },
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
        { label: `Planning / Producer`, value: `星可` },
        { label: `Publisher`, value: `Pairaki Games` },
        { label: `Character Design`, value: `星可` },
        { label: `Key Art CG / SD / Backgrounds`, value: `眞海` },
        { label: `Theme Song`, value: `"Startup!★Start!!" by Wedoso` },
        { label: `Music`, value: `Wedoso` },
        { label: `CG`, value: `中乃・トミフミ et al.` },
        { label: `Movie`, value: `眞海` },
        { label: `Motion Effects`, value: `幽浮小花` },
        { label: `Special Thanks`, value: `アキナ・ランドール` },
      ],
    },
    product: {
      btnWishlist: `Add to Wishlist`,
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
      subtitle: `An Adventure Begin Together!`,
      paragraphs: [
        { segments: [{ t: `"Let's start a company!"`, em: 'span' }] },
        {
          segments: [
            {
              t: `Fresh out of college with your job hunt going nowhere, your roommate talks you into it,\nand you stumble onto a path you'd never imagined...`,
            },
          ],
        },
        { segments: [{ t: `No experience, no resources, no salary——`, em: 'strong' }] },
        {
          segments: [
            { t: `All you have is a co-founder even less reliable than you,\nand an ` },
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
        description: `The protagonist of this story. A computer science graduate of Ibaraki University, he was an excellent student known to everyone as the "Cum Laude". After graduation, however, as a result of the downturn economy, the brutal competition left him stucked in his rented room, sending out résumés online every day in search of a way forward. Earnest and steady, he stays calm under pressure—rational, dependable, and carrying a strong sense of responsibility toward everyone and everything around him.`,
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
        role: `Fresh university graduate (job hunting now)`,
        description: `The protagonist's roommate and longtime buddy. A business management graduate of Ibaraki University who somehow has no business sense at all. He has a messy mop of silver-gray hair and perpetually half-asleep eyes. Once a textbook-perfect rich kid, his family later fell on hard times. Laid-back by nature, he acts purely on whim. Slacker though he seems, he's surprisingly well-versed in all sorts of shortcuts and schemes—open his mouth and the slick one-liners pour out. A silver-tongued talker, and a downright genius at selling pipe dreams.`,
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
        role: `UI/UX Designer (intern)`,
        description: `A second-year visual design student at Ibaraki University—shy by nature and prone to blushing for no reason. Far from flashy, she rarely says much, preferring to express her rich, delicate inner feelings through images. Gifted with an exceptional eye for aesthetics and a talent for drawing, she is sharply observant, masterful with color, devoted to beauty, and attentive to every detail. She has a knack for weaving the little joys of everyday life into her work, and her talent and potential in design never fail to impress.`,
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
        role: `Front-end Engineer`,
        description: `An unassuming girl with a slightly wavy side ponytail, always wearing thin-rimmed glasses. Quiet and introverted, she doesn't talk much and seems to have mild social anxiety. Having graduated from a second-tier university, she lacks confidence and feels awkward in most social settings. She is extremely conscientious about her work—uncomplaining and meticulous, though somewhat by-the-book. Not great at communication, she's used to quietly burying herself in code, finding it far more comfortable to deal with machines than people.`,
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
        description: `A lively, sharp-tongued influencer and livestreamer. She started creating content at 16 and was later scouted by a famous MCN agency. With a keen nose for what goes viral, she's personally churned out plenty of smash-hit short videos. Quick-witted and razor-sharp with words, she understands human nature inside out and excels at personal branding. She currently runs the "Queen Nana" account on a wildly popular social platform, cultivating an independent-woman persona and amassing tens of millions of followers. She has a fierce hunger for money, forever dropping the line "that's an extra cost."`,
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
        description: `A mixed-heritage beauty who is one-quarter French—graceful in manner and gentle in speech, her soft voice puts everyone at ease. Unlike typical product managers, Natsumi carries a rare air, with her own distinctive understanding and ideals that come across as a touch idealistic in today's business climate. Deeply committed to user experience, she refuses to compromise just to make the numbers look good, and willingly spends ample time on market research, hoping to build products that users genuinely need and love.`,
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
        description: `Founder of the Woman Combination (WC) investment fund. Revered in venture-capital circles as the "Angel of Investment," nearly every project she backs delivers outsized returns, with a hit rate as high as 90%. Always clad in a purple velvet suit and a figure-hugging pencil skirt, the moment her heels touch the floor her presence fills the room. Shrewd and capable with a piercing gaze, she has a keen, original read on market trends and an uncannily precise eye for investment—famous for demolishing founders with razor-sharp questions.`,
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
        role: `Star Startup CEO`,
        description: `Founder and CEO of the AI startup "SYNTH♥," a Forbes 30 Under 30 honoree with dual degrees in Computer Science and an MBA from Spamfold, plus a PhD in artificial intelligence. He boasts astonishing execution and business insight. Coding since childhood, he was active as an indie developer across major open-source geek communities back in his school days, building considerable influence. He has launched three successful startups in a row and once worked at the renowned tech company CloseAI, taking part in large-scale multimodal training projects.`,
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
      pv: `影片`,
      gallery: `画廊`,
      progress: `最新开发进度`,
      product: `产品信息`,
    },
    pv: {
      themeMovie: `主题影片`,
      charMovie: `角色介绍影片`,
    },
    galleryNote: `※所有素材均为开发中内容，可能在不另行通知的情况下发生变更。`,
    progressNotes: [
      { date: '2026/01/20', text: `官方网站正式上线。` },
      { date: '2026/02/28', text: `OP影片公开。` },
      { date: '2026/03/27', text: `Steam商店页面已上线。` },
      { date: '2026/03/27', text: `Steam商店页面已上线。` },
      { date: '2026/03/29', text: `AI联动系统调试中！` },
      { date: '2026/03/29', text: `AI特效测试中！` },
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
        { label: `企划／制作人`, value: `星可` },
        { label: `发行`, value: `Pairaki Games` },
        { label: `角色设计`, value: `星可` },
        { label: `原画CG／SD／背景`, value: `眞海` },
        { label: `主题曲`, value: `「Startup!★Start!!」by Wedoso` },
        { label: `音乐`, value: `Wedoso` },
        { label: `CG`, value: `中乃・トミフミ 等` },
        { label: `影片`, value: `眞海` },
        { label: `动效`, value: `幽浮小花` },
        { label: `特别鸣谢`, value: `アキナ・ランドール` },
      ],
    },
    product: {
      btnWishlist: `加入愿望单`,
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
      title: `// STORY`,
      subtitle: `共同开启的冒险！`,
      paragraphs: [
        { segments: [{ t: `「我们一起创业吧！」`, em: 'span' }] },
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
            { t: `唯一拥有的，是一个比你还不靠谱的合伙人，\n以及一款连名字都没取好的` },
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
        role: `大学应届毕业生（待业中）`,
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
        role: `大学应届毕业生（待业中）`,
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
        description: `茨木大学视觉设计系大二在校生，生性害羞，莫名地容易脸红。性格并不张扬，平时话不多，更喜欢用图像表达内心丰富细腻的情感。拥有过人的审美直觉和绘画天赋，观察力敏锐，对色彩把控力极强，执着于美感，注重每一个细节。擅长把生活中的点滴美好都融入到创作中，在设计方面的天赋和潜力总是令人刮目相看。`,
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
        role: `前端工程师`,
        description: `侧面扎着微卷单马尾的不起眼女生，总是戴着一副细框眼镜。安静内向，不爱说话，似乎有点轻微社恐，因毕业于二流大学而不太自信，对大多数社交场合感到局促。对待工作极其认真，任劳任怨，做事细心但有些墨守成规。不太擅长沟通，习惯埋头默默写代码，认为还是跟机器打交道更轻松自在。`,
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
        description: `拥有四分之一法国血统的混血美人，举止优雅，言辞温和，说话总是轻声细语让人如沐春风。有着与一般产品经理不同的罕见气质，有自己独特的理解和追求，在当今这种商业背景下显得有点理想主义。非常注重用户体验，不想为了数据美观而妥协，愿意花大量时间进行市场调研，希望打造用户真正需要且喜爱的产品。`,
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
        role: `明星创业公司CEO`,
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
      progress: `最新開發進度`,
      product: `產品資訊`,
    },
    pv: {
      themeMovie: `主題影片`,
      charMovie: `角色介紹影片`,
    },
    galleryNote: `※所有素材均為開發中內容，可能在不另行通知的情況下發生變更。`,
    progressNotes: [
      { date: '2026/01/20', text: `官方網站正式上線。` },
      { date: '2026/02/28', text: `OP影片公開。` },
      { date: '2026/03/27', text: `Steam商店頁面已上線。` },
      { date: '2026/03/27', text: `Steam商店頁面已上線。` },
      { date: '2026/03/29', text: `AI聯動系統調試中！` },
      { date: '2026/03/29', text: `AI特效測試中！` },
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
        { label: `企劃／製作人`, value: `星可` },
        { label: `發行`, value: `Pairaki Games` },
        { label: `角色設計`, value: `星可` },
        { label: `原畫CG／SD／背景`, value: `眞海` },
        { label: `主題曲`, value: `「Startup!★Start!!」by Wedoso` },
        { label: `音樂`, value: `Wedoso` },
        { label: `CG`, value: `中乃・トミフミ 等` },
        { label: `影片`, value: `眞海` },
        { label: `動效`, value: `幽浮小花` },
        { label: `特別鳴謝`, value: `アキナ・ランドール` },
      ],
    },
    product: {
      btnWishlist: `加入願望清單`,
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
      subtitle: `共同開啟的冒險！`,
      paragraphs: [
        { segments: [{ t: `「我們一起創業吧！」`, em: 'span' }] },
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
            { t: `唯一擁有的，是一個比你還不靠譜的合夥人，\n以及一款連名字都沒取好的` },
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
        role: `大學應屆畢業生（待業中）`,
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
        role: `前端工程師`,
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
        role: `明星創業公司CEO`,
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
};

export default lscContent;
