import React from 'react'
import { css } from '@emotion/react'
import { primaryColor, primarySelectedColor } from '../../styles/colors'

type Props = {
  text: string,
  url: string,
  size: "standard" | "small"
}

const OutlineButton: React.FC<Props> = (props) => {
  if (props.url.startsWith("/")) {
    return (
      <a
        href={props.url}
        css={() => buttonStyle(props.size)}
      >
        {props.text}
      </a>
    )
  } else {
    return (
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        css={() => buttonStyle(props.size)}
      >
        {props.text}
      </a>
    )
  }
}

const buttonStyle = (size: string) => css`
  height: ${size === "standard" ? "50px" : "40px"};
  padding: ${size === "standard" ? "9px 19px" : "5px 11px"};
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

  &:hover {
    background-color: ${primarySelectedColor};
  }

  &:focus {
    outline: none;
  }
`

export default OutlineButton