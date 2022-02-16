import React from 'react'
import { css } from '@emotion/react'
import PageTitle from '../ui/PageTitle'
import Text from '../ui/Text'
import Seo from '../common/Seo'
import { useLocale } from '../../hooks/useLocale'

const TechPage: React.FC = () => {
  const { t } = useLocale()

  return (
    <div css={layoutStyle}>
      <Seo title={`${t.tech.title} - ErabeRule`} />

      <PageTitle>
        {t.tech.title}
      </PageTitle>
      <Text>
        {t.tech.description}
      </Text>
      <ul>
        {t.tech.techs.map((text, index) => (
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
