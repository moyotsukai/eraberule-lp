import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'

type Props = {
  title: string,
  imageSrc: string,
  children?: React.ReactNode
}

const FeatureCard: React.FC<Props> = (props) => {
  return (
    <div css={cardStyle}>
      <div css={imageStyle}>
        <Image src={props.imageSrc} width={600} height={400} />
      </div>
      <div css={textGroupStyle}>
        <h2 css={titleStyle}>
          {props.title}
        </h2>
        <p css={textStyle}>
          {props.children}
        </p>
      </div>
    </div>
  )
}

const cardStyle = css`
  padding: 0 15px;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(min-width: 800px) {
    flex-direction: row;
  }
`
const imageStyle = css`
  margin: 0 auto;

  @media(min-width: 800px) {
    margin-right: 0;
  }
`
const textGroupStyle = css`
  max-width: 400px;
  text-align: left;
  margin: 0 auto;

  @media(min-width: 800px) {
    margin-left: 0;
  }
`
const titleStyle = css`
  font-size: 21px;
  color: #060A1A;
  margin: 10px 0;
  line-height: 1.6;

  @media(min-width: 500px) {
    font-size: 23px;
  }
`
const textStyle = css`
  font-size: 17px;
  color: #060A1A;
  line-height: 1.6;

  @media(min-width: 500px) {
    font-size: 18px;
  }
`

export default FeatureCard