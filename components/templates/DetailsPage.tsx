import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import { contents } from '../../contents/data'
import { primaryShadowColor, primaryTextColor } from '../../styles/colors'
import { breakedText } from '../../utils/breakedText'
import Image from 'next/image'
import Divider from '../ui/Divider'

const DetailsPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <h1 css={titleStyle}>
        {contents.details.title}
      </h1>
      <ul css={tableStyle}>
        {contents.details.rules.map((rule, index) => (
          <li key={index} css={groupStyle}>
            <p css={ruleNameStyle}>
              {rule.name}
            </p>
            <Divider />
            {rule.descriptions.map((data, index) => (
              <React.Fragment>
                {
                  data.startsWith("/")
                    ? <div css={imageContainerStyle}><Image src={data} width={300} height={300} /></div>
                    : <p key={index} css={textStyle}>{breakedText(data)}</p>
                }
              </React.Fragment>
            ))}
            <Spacer y={20} />
          </li>
        ))}
      </ul>
      <Spacer y={10} />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`
const titleStyle = css`
  text-align: center;
  font-size: 21px;
  color: ${primaryTextColor};
  margin: 20px 0;
  line-height: 1.7;

  @media(min-width: 500px) {
    font-size: 23px;
  }
`
const tableStyle = css`
  text-align: left;
`
const groupStyle = css`
  margin: 10px 0;
`
const ruleNameStyle = css`
  font-size: 19px;
  color: ${primaryTextColor};
  line-height: 1.7;
  margin: 5px 0;

  @media(min-width: 500px) {
    font-size: 20px;
  }
`
const imageContainerStyle = css`
  max-width: 300px;
  max-height: 300px;
  margin: 0 auto;
  box-shadow: 0 2px 8px 0 ${primaryShadowColor};
`
const textStyle = css`
  font-size: 17px;
  color: ${primaryTextColor};
  line-height: 1.7;
  margin: 5px 0 20px 0;

  @media(min-width: 500px) {
    font-size: 18px;
  }
`

export default DetailsPage
