import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import FeatureCard from '../functional/FeatureCard'
import { contents } from '../../contents/data'
import { slashToArray } from '../../utils/slashToArray'
import { largeTextColor, primaryColor, primarySelectedColor, primaryTextColor } from '../../styles/colors'
import Button from '../ui/Button'
import Link from 'next/link'
import Seo from '../common/Seo'

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Seo title="ErabeRule" />

      <div>
        <h1 css={titleStyle}>
          {slashToArray(contents.index.hero.title).map((data, index) => (
            <span css={noBrStyle} key={index}>
              {data}
            </span>
          ))}
        </h1>
        <p css={textStyle}>
          {slashToArray(contents.index.hero.text).map((data, index) => (
            <span css={noBrStyle} key={index}>
              {data}
            </span>
          ))}
        </p>
        <Spacer y={50} />
        <Button
          text="はじめる"
          url="https://app.eraberule.com"
          size="standard"
        />
        <Spacer y={80} />
      </div>

      <div>
        {contents.index.features.map((data, index) => (
          <React.Fragment key={index}>
            <FeatureCard
              title={data.title}
              imageSrc={data.imgSrc}
            >
              {data.text}
            </FeatureCard>
            < div css={spacerStyle} />
          </React.Fragment>
        ))}
      </div>

      <div>
        <div css={infoCardStyle}>
          <p css={textStyle}>
            {contents.index.info.text}
          </p>
          <div css={buttonContainerStyle}>
            <Button
              text="投票を作成"
              url="https://app.eraberule.com/create"
              size="standard"
            />
          </div>
          <Link href="/details" passHref>
            <a css={detailLinkStyle}>投票ルールの詳細を読む</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  text-align: center;
  padding: 0 15px;
`
const titleStyle = css`
  margin: 50px 0;
  font-size: 29px;
  line-height: 1.6;
  color: ${primaryTextColor};

  @media(min-width: 500px) {
    font-size: 36px;
  }
`
const noBrStyle = css`
  display: inline-block;
`
const textStyle = css`
  font-size: 17px;
  color: ${largeTextColor};
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
const infoCardStyle = css`
  max-width: 1000px;
  margin: 15px auto;
  padding: 25px 15px;
  text-align: left;
  background-color: ${primarySelectedColor};
  border-radius: 12px;

  @media(min-width: 800px) {
    padding: 25px;
  }
`
const buttonContainerStyle = css`
  display: inline-block;
  padding: 20px 0 10px 0;
  margin-right: 10px;
`
const detailLinkStyle = css`
  display: inline-block;
  color: ${primaryColor};

  &:hover {
    text-decoration: underline;
  }
`

export default IndexPage
