import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import { contents } from '../../contents/data'
import { primaryShadowColor, primaryTextColor } from '../../styles/colors'
import { breakedText } from '../../utils/breakedText'
import Image from 'next/image'
import Divider from '../ui/Divider'
import PageTitle from '../ui/PageTitle'
import Text from '../ui/Text'

const TechPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <PageTitle>
        {contents.tech.title}
      </PageTitle>
      <Text>
        {contents.tech.description}
      </Text>
      <ul>
        {contents.tech.techs.map((text, index) => (
          <li key={index} css={listStyle}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`
const listStyle = css`
  list-style: disc;
  margin-left: 25px;
`

export default TechPage
