import { Locale } from './../types/Locale.type'

const ja: Locale = {
  common: {
    getStarted: "はじめる",
    createVote: "投票を作成",
    aboutVotingMethods: "投票ルールの詳細",
    description: "様々な投票ルールを実験的に使うことができる投票アプリです。"
  },
  index: {
    hero: {
      title: "様々な投票ルールを/体験しよう",
      text: "ErabeRuleは、/様々な/投票ルールを/実験的に/使うことが/できる/投票アプリ/です。"
    },
    features: [
      {
        title: "多様な決め方を手軽に",
        imgSrc: "/images/ja_home_1.png",
        text: "多数決だけが決め方ではありません。ErabeRuleの目的は、様々な投票ルールを体験し、より身近なものにすることです。投票ルームを作成して参加を呼びかけましょう。"
      },
      {
        title: "アカウント作成の必要なし",
        imgSrc: "/images/ja_home_2.png",
        text: "アカウント登録は必要ありません。投票に参加する際も、QRコードを読み取るだけ。参加者は一つの投票につき１回まで投票でき、票はすべて匿名で集計されます。"
      },
      {
        title: "「もし〇〇だったら」を検証",
        imgSrc: "/images/ja_home_3.png",
        text: "いくつかの投票ルールでは、他の決め方を採用していたらどのような結果になっていたかシミュレーションできます。"
      },
      {
        title: "リアルタイムで集計",
        imgSrc: "/images/ja_home_4.png",
        text: "投票の結果は、各投票ルールに基づいて自動で計算され、リアルタイムで画面に反映されます。"
      }
    ],
    info: {
      text: "まずは自分の投票ルームを作ってみましょう。"
    }
  },
  details: {
    title: "投票ルールの詳細",
    rules: [
      {
        name: "Majority Judgement",
        descriptions: [
          "Majority Judgement(マジョリティ・ジャッジメント)は、各候補に対して絶対評価で投票し、中央値をその候補の評価とする決め方です。",
          "< 評価を表す語彙について >\n投票の際、評価を表す語彙も判断に影響します。本アプリの場合、デフォルトは以下の６つですが、カスタマイズすることもできます。",
          "/images/details_1.jpg",
          "\n数・言葉ともに編集できるので、投票内容に応じて全員ができるだけ共通の基準で判断できるように設定することが可能です。",
          "例えば、「良い」「普通」「悪い」の３つに設定して中立な立場を選択可能にしたり、「6」~「1」の６段階にして肯定的か否定的かどちらかの立場を取るよう促したりすることもできます。",
          "また、絵文字を活用して以下のように言葉を使わない方法で投票を作成することもできます。",
          "/images/details_2.jpg",
          "\n< タイブレーキングについて >\n投票の結果、中央値に該当する評価が複数の候補で同一となった場合、本アプリでは自動的に、最終的な評価と同じかそれより良い評価をつけた票の数を比較し、それらの票が多い方を高い順位とします。",
          "< 中央値が存在しない場合 >\n投票者数が偶数の場合、中央値が存在しない(あるいは中央値が２つ存在する)場合があります。その場合、本アプリではその２つのうち低い方を最終的な評価とします。"
        ]
      },
      {
        name: "ボルダルール",
        descriptions: [
          "例えば３択の時、１番良いと思う候補に３点、２番目に２点、３番目に１点、というように点をつけていきます。勝者は満場一致に最も近いものになります。"
        ]
      },
      {
        name: "コンドルセ・ヤングの最尤法",
        descriptions: [
          "総当たり戦を元に確率の計算を行います。勝者は他の候補との一騎打ちで必ず勝利します。"
        ]
      },
      {
        name: "多数決",
        descriptions: [
          "一番良いと思う候補を一つ選びます。"
        ]
      }
    ],
    referenceTitle: "参考文献",
    references: [
      {
        sourceF: "坂井豊貴.　「決め方」の経済学　「みんなの意見のまとめ方」を科学する.　３刷,　ダイヤモンド社,　2019,　222p.",
        link: "",
        sourceB: ""
      },
      {
        sourceF: "坂井豊貴.　多数決を疑う　社会的選択理論とは何か.　13刷,　岩波書店,　2020,　180p.",
        link: "",
        sourceB: ""
      },
      {
        sourceF: "Michel Balinski,　Rida Laraki.　\"A theory of measuring, electing, and ranking\".　PNAS.　",
        link: "https://www.pnas.org/content/104/21/8720",
        sourceB: "(参照2021-03-19)"
      },
      {
        sourceF: "山本芳嗣.　\"1人1票からMajority Judgmentへ\".　",
        link: "http://www.orsj.or.jp/archive2/or57-06/or57_6_295.pdf",
        sourceB: "(参照2021-03-19)"
      },
      {
        sourceF: "\"Understanding Majority Judgement\".　open agora.　",
        link: "https://blog.open-agora.com/en/understanding-majority-judgement-polling-in-slack",
        sourceB: "(参照2021-03-19)"
      },
      {
        sourceF: "Stephen Bosworth,　Anders Corr,　Stevan Leonard.　\"Legislatures Elected by Evaluative Proportional Representation(EPR): An Algorithm\".　JPR.",
        link: "https://www.jpolrisk.com/legislatures-elected-by-evaluative-proportional-representation-epr-an-algorithm-v2",
        sourceB: "(参照2021-03-19)"
      }
    ]
  },
  tech: {
    title: "技術情報",
    description: "本アプリは主に以下のような技術を使っています。",
    techs: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Next.js",
      "Recoil",
      "Emotion",
      "Framer Motion",
      "Vercel"
    ]
  },
  changelog: {
    title: "リリースノート"
  },
  terms: {
    title: "利用規約"
  },
  privacy: {
    title: "プライバシーポリシー"
  },
  footer: {
    sections: [
      {
        title: "サービス",
        pages: [
          {
            title: "ErabeRuleについて",
            url: "/"
          },
          {
            title: "投票ルールの詳細",
            url: "/details"
          },
          {
            title: "技術情報",
            url: "/tech"
          },
          {
            title: "リリースノート",
            url: "/changelog"
          }
        ]
      },
      {
        title: "サポート",
        pages: [
          {
            title: "利用規約",
            url: "/terms"
          },
          {
            title: "プライバシーポリシー",
            url: "/privacy"
          },
          {
            title: "フィードバック",
            url: "https://forms.gle/viQzz59d9HYoZgFF6"
          }
        ]
      },
      {
        title: "関連リンク",
        pages: [
          {
            title: "開発者のTwitter",
            url: "https://twitter.com/moyotsukai"
          }
        ]
      }
    ]
  }
}

export default ja