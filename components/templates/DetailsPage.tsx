import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import { primaryColor, primaryShadowColor, primaryTextColor } from '../../styles/colors'
import { breakedText } from '../../utils/breakedText'
import Image from 'next/image'
import Divider from '../ui/Divider'
import PageTitle from '../ui/PageTitle'
import Text from '../ui/Text'
import Seo from '../common/Seo'
import { useLocale } from '../../hooks/useLocale'

const DetailsPage: React.FC = () => {
  const { t } = useLocale()

  return (
    <div css={layoutStyle}>
      <Seo title={`${t.details.title} - ErabeRule`} />

      <PageTitle>
        {t.details.title}

      </PageTitle>
      <ul css={tableStyle}>
        {t.details.rules.map((rule, index) => (
          <li key={index} css={groupStyle}>
            <p css={ruleNameStyle}>
              {rule.name}
            </p>
            <Divider />
            {rule.descriptions.map((data, index) => (
              <React.Fragment key={index}>
                {data.startsWith("/")
                  ?
                  <div css={imageContainerStyle}>
                    <Image src={data} width={300} height={300} alt="" />
                  </div>
                  :
                  <Text>
                    {breakedText(data)}
                  </Text>
                }
              </React.Fragment>
            ))}
          </li>
        ))}
      </ul>
      <Spacer y={80} />

      <p css={ruleNameStyle}>
        {t.details.referenceTitle}
      </p>
      <Divider />
      <ul css={tableStyle}>
        {t.details.references.map((reference, index) => (
          <li key={index} css={groupStyle}>
            {reference.link === ""
              ?
              <Text>
                {reference.sourceF}
              </Text>
              :
              <Text>
                {reference.sourceF}
                <div css={inlineBlock}>
                  <a href={reference.link} target="_blank" rel="noopener noreferrer" css={linkStyle}>
                    {reference.link}
                  </a>
                  {",　"}
                </div>
                {reference.sourceB}
              </Text>
            }
          </li>
        ))}
      </ul>
      <Spacer y={20} />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
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
const inlineBlock = css`
  display: inline-block;
`
const linkStyle = css`
  color: ${primaryColor};

  &:hover {
    text-decoration: underline;
  }
`
export default DetailsPage
