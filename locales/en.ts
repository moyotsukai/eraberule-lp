import { Locale } from './../types/Locale.type'

const en: Locale = {
  common: {
    getStarted: "Get Started",
    createVote: "Create Vote",
    aboutVotingMethods: "About Voting Methods",
    description: "ErabeRule lets you create polls with various voting methods."
  },
  index: {
    hero: {
      title: "Experience Various Voting Methods",
      text: "ErabeRule lets you create polls with various voting methods."
    },
    features: [
      {
        title: "Custom Voting Rules",
        imgSrc: "/images/home_1.png",
        text: "Majority rule is not the only way to make a group decision. By offering various voting methods, ErabeRule aims at letting you be familiar with them."
      },
      {
        title: "No Need to Create Account",
        imgSrc: "/images/home_2.png",
        text: "You do not need to sign up. By using QR codes, you can share your voting rooms smoothly with the participants. Each participant can vote only once per poll. Polls are always anonymous."
      },
      {
        title: "What-If Analysis",
        imgSrc: "/images/home_3.png",
        text: "In some voting methods, you can simulate the results based on the methods you did not choose."
      },
      {
        title: "Live Polls",
        imgSrc: "/images/home_4.png",
        text: "The result is calculated automatically under each voting method, and participants can see them in real time."
      }
    ],
    info: {
      text: "Create your own voting room"
    }
  },
  details: {
    title: "About Voting Methods",
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
    ]
  },
  tech: {
    title: "Used Technologies",
    description: "This app uses the following technologies.",
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
    title: "Release Notes"
  },
  terms: {
    title: "Terms"
  },
  privacy: {
    title: "Privacy Policy"
  },
  footer: {
    sections: [
      {
        title: "Service",
        pages: [
          {
            title: "About ErabeRule",
            url: "/"
          },
          {
            title: "About Voting Methods",
            url: "/details"
          },
          {
            title: "Used Technologies",
            url: "/tech"
          },
          {
            title: "Release Notes",
            url: "/changelog"
          }
        ]
      },
      {
        title: "Support",
        pages: [
          {
            title: "Terms",
            url: "/terms"
          },
          {
            title: "Privacy Policy",
            url: "/privacy"
          },
          {
            title: "Feedback",
            url: "https://forms.gle/viQzz59d9HYoZgFF6"
          }
        ]
      },
      {
        title: "Related Links",
        pages: [
          {
            title: "Developer's Twitter",
            url: "https://twitter.com/moyotsukai"
          }
        ]
      }
    ]
  }
}

export default en