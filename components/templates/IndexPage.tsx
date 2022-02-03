import React from 'react'
import { css } from '@emotion/react'
import OpenAppButton from '../functional/OpenAppButton'
import Spacer from '../ui/Spacer'

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
        <Spacer y={80} />
      </div>

      <div css={containerStyle}>
        <div css={groupStyle}>
          <h2 css={subTitleStyle}>
            多様なルールを手軽に
          </h2>
          <p css={textStyle}>
            多数決だけが決め方ではありません。ErabeRuleの目的は、様々な投票ルールを体験し、より身近なものにすることです。投票ルームを作成して参加を呼びかけましょう。
          </p>
        </div>

        <div css={groupStyle}>
          <h2 css={subTitleStyle}>
            アカウント作成の必要なし
          </h2>
          <p css={textStyle}>
            アカウント登録は必要ありません。投票に参加する際も、QRコードを読み取るだけ。参加者は一つの投票につき１回まで投票でき、票はすべて匿名で集計されます。
          </p>
        </div>

        <div css={groupStyle}>
          <h2 css={subTitleStyle}>
            「もし〇〇だったら」を検証
          </h2>
          <p css={textStyle}>
            いくつかの投票ルールでは、他の決め方を採用していたらどのような結果になっていたかシミュレーションできます。
          </p>
        </div>

        <div css={groupStyle}>
          <h2 css={subTitleStyle}>
            リアルタイムで集計
          </h2>
          <p css={textStyle}>
            投票の結果は自動で計算され、リアルタイムで画面に反映されます。
          </p>
        </div>
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
const containerStyle = css`
  padding: 0 15px;
`
const groupStyle = css`
  max-width: 500px;
  text-align: left;
`
const subTitleStyle = css`
  font-size: 20px;
  color: #060A1A;
  margin: 10px 0;
  line-height: 1.6;

  @media(min-width: 500px) {
    font-size: 23px;
  }
`

export default IndexPage