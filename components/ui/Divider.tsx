import React from 'react'
import { css } from '@emotion/react'

const Divider: React.FC = () => {
  return (
    <div css={dividerStyle} />
  )
}
const dividerStyle = css`
  border-bottom: solid 1px #ccc;
`

export default Divider