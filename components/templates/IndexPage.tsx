import React from 'react'
import { css } from '@emotion/react'
import OpenAppButton from '../functional/OpenAppButton'
import Spacer from '../ui/Spacer'
import FeatureCard from '../functional/FeatureCard'

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <div css={heroStyle}>
        <Spacer y={60} />
        <h1 css={titleStyle}>
          <span css={noBrStyle}>様々な投票ルールを</span>
          <span css={noBrStyle}>体験しよう</span>
        </h1>
        <p css={textStyle}>
          <span css={noBrStyle}>ErabeRuleは、</span>
          <span css={noBrStyle}>様々な</span>
          <span css={noBrStyle}>投票ルールを</span>
          <span css={noBrStyle}>実験的に</span>
          <span css={noBrStyle}>使うことが</span>
          <span css={noBrStyle}>できる</span>
          <span css={noBrStyle}>投票アプリ</span>
          <span css={noBrStyle}>です。</span>
        </p>
        <Spacer y={50} />
        <OpenAppButton isOnHeader={false} />
        <Spacer y={70} />
      </div>

      <div>
        <FeatureCard
          title="多様な決め方を手軽に"
          imageSrc="/images/home_1.png"
        >
          多数決だけが決め方ではありません。ErabeRuleの目的は、様々な投票ルールを体験し、より身近なものにすることです。投票ルームを作成して参加を呼びかけましょう。
        </FeatureCard>
        <div css={spacerStyle} />

        <FeatureCard
          title="アカウント作成の必要なし"
          imageSrc="/images/home_2.png"
        >
          アカウント登録は必要ありません。投票に参加する際も、QRコードを読み取るだけ。参加者は一つの投票につき１回まで投票でき、票はすべて匿名で集計されます。
        </FeatureCard>
        <div css={spacerStyle} />

        <FeatureCard
          title="「もし〇〇だったら」を検証"
          imageSrc="/images/home_3.png"
        >
          いくつかの投票ルールでは、他の決め方を採用していたらどのような結果になっていたかシミュレーションできます。
        </FeatureCard>
        <div css={spacerStyle} />

        <FeatureCard
          title="リアルタイムで集計"
          imageSrc="/images/home_4.png"
        >
          投票の結果は自動で計算され、リアルタイムで画面に反映されます。
        </FeatureCard>
      </div>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  text-align: center;
`
const heroStyle = css`
  padding: 0 15px;
`
const titleStyle = css`
  margin: 50px 0;
  font-size: 29px;
  line-height: 1.6;
  color: #0D1433;

  @media(min-width: 500px) {
    font-size: 36px;
  }
`
const noBrStyle = css`
  display: inline-block;
`
const textStyle = css`
  font-size: 17px;
  color: #060A1A;
  line-height: 1.6;

  @media(min-width: 500px) {
    font-size: 18px;
  }
`
const spacerStyle = css`
  height: 40px;

  @media(min-width: 800px) {
    height: 10px;
  }
`

export default IndexPage