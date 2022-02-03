import React from 'react'
import { css } from '@emotion/react'
import { primaryColor, primaryHoverColor, primarySelectedColor, primaryShadowColor } from '../../styles/colors'

type Props = {
  isOnHeader: boolean
}

const OpenAppButton: React.FC<Props> = (props) => {
  if (props.isOnHeader) {
    return (
      <a href="https://app.eraberule.com" css={buttonOnHeaderStyle}>
        はじめる
      </a>
    )
  } else {
    return (
      <a
        href="https://app.eraberule.com"
        css={buttonOnPageStyle}
      >
        はじめる
      </a>
    )
  }
}

const buttonOnHeaderStyle = css`
  width: 90px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  color: ${primaryColor};
  border: solid 1px ${primaryColor};
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-align: center;
  margin: 0 auto;
  padding: 6px;

  &:hover {
    background-color: ${primarySelectedColor};
  }

  &:focus {
    outline: none;
  }
`
const buttonOnPageStyle = css`
  width: 120px;
  height: 50px;
  background-color: ${primaryColor};
  cursor: pointer;
  border-radius: 6px;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-align: center;
  margin: 0 auto;
  padding: 10px 20px;
  box-shadow: 0 2px 3px 0 ${primaryShadowColor};

  &:hover {
    background-color: ${primaryHoverColor};
    box-shadow:  0 6px 9px 0 ${primaryShadowColor}
  }

  &:focus {
    outline: none;
  }
`

export default OpenAppButton