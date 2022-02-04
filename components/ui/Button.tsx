import React from 'react'
import { css } from '@emotion/react'
import { primaryColor, primaryHoverColor, primaryShadowColor } from '../../styles/colors'

type Props = {
  text: string,
  url: string,
  size: "standard" | "small"
}

const Button: React.FC<Props> = (props) => {
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
  width: ${size === "standard" ? "120px" : "90px"};
  height: ${size === "standard" ? "50px" : "40px"};
  padding: ${size === "standard" ? "10px 20px" : "6px"};
  background-color: ${primaryColor};
  cursor: pointer;
  border-radius: 6px;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 2px 3px 0 ${primaryShadowColor};

  &:hover {
    background-color: ${primaryHoverColor};
    box-shadow:  0 6px 9px 0 ${primaryShadowColor}
  }

  &:focus {
    outline: none;
  }
`

export default Button