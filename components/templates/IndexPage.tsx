import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import FeatureCard from '../functional/FeatureCard'
import { slashToArray } from '../../utils/slashToArray'
import { largeTextColor, primaryColor, primarySelectedColor, primaryTextColor } from '../../styles/colors'
import Button from '../ui/Button'
import Link from 'next/link'
import Seo from '../common/Seo'
import { useLocale } from '../../hooks/useLocale'

const IndexPage: React.FC = () => {
  const { t } = useLocale()

  return (
    <div css={layoutStyle}>
      <Seo title="ErabeRule" />

      <div>
        <h1 css={titleStyle}>
          {slashToArray(t.index.hero.title).map((data, index) => (
            <span css={noBrStyle} key={index}>
              {data}
            </span>
          ))}
        </h1>
        <p css={textStyle}>
          {slashToArray(t.index.hero.text).map((data, index) => (
            <span css={noBrStyle} key={index}>
              {data}
            </span>
          ))}
        </p>
        <Spacer y={50} />
        <Button
          text={t.common.getStarted}
          url="https://app.eraberule.com"
          size="standard"
        />
        <Spacer y={80} />
      </div>

      <div>
        {t.index.features.map((data, index) => (
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
            {t.index.info.text}
          </p>
          <div css={buttonContainerStyle}>
            <Button
              text={t.common.createVote}
              url="https://app.eraberule.com/create"
              size="standard"
            />
          </div>
          <Link href="/details" passHref>
            <a css={detailLinkStyle}>
              {t.common.aboutVotingMethods}
            </a>
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
