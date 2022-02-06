import React from 'react'
import { css } from '@emotion/react'

type Props = {
  children?: React.ReactNode
}

const Message: React.FC<Props> = (props) => {
  return (
    <div css={messageStyle}>
      <span css={textStyle}>{props.children}</span>
    </div>
  )
}

const textStyle = css`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  margin: 0 10px;
`
const messageStyle = css`
  padding: 30px 0;
  text-align: center;
`

export default Message