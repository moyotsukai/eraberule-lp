import React from 'react'
import { css } from '@emotion/react'
import OpenAppButton from '../functional/OpenAppButton'
import Spacer from '../ui/Spacer'
import FeatureCard from '../functional/FeatureCard'
import { contents } from '../../contents/data'
import { slashToArray } from '../../utils/slashToArray'
import { largeTextColor, primaryTextColor } from '../../styles/colors'

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <div css={heroStyle}>
        <Spacer y={60} />
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
        <OpenAppButton isOnHeader={false} />
        <Spacer y={70} />
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
            {index !== contents.index.features.length - 1 &&
              < div css={spacerStyle} />
            }
          </React.Fragment>
        ))}
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

export default IndexPage