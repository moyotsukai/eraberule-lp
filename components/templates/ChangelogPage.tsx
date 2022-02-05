import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import { contents } from '../../contents/data'
import { supportingTextColor } from '../../styles/colors'
import { breakedText } from '../../utils/breakedText'
import PageTitle from '../ui/PageTitle'
import Text from '../ui/Text'
import Seo from '../common/Seo'

const ChangelogPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Seo title="リリースノート - ErabeRule" />

      <PageTitle>
        {contents.changelog.title}
      </PageTitle>
      <ul>
        {contents.changelog.changes.map((item, index) => (
          <li key={index}>
            <p css={dateStyle}>{item.date}</p>
            <Text>{breakedText(item.text)}</Text>
            <Spacer y={10} />
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
const dateStyle = css`
  font-size: 15px;
  color: ${supportingTextColor};
  margin: 2px 0;

  @media(min-width: 500px) {
    font-size: 16px;
  }
`

export default ChangelogPage
