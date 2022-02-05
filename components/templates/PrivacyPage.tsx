import React from 'react'
import { css } from '@emotion/react'
import PageTitle from '../ui/PageTitle'
import Text from '../ui/Text'
import { primaryTextColor } from '../../styles/colors'
import Spacer from '../ui/Spacer'
import Seo from '../common/Seo'

const PrivacyPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Seo title="プライバシーポリシー - ErabeRule" />

      <PageTitle>
        プライバシーポリシー
      </PageTitle>
      <Text>
        運営者は、
        <a href="https://www.eraberule.com" css={linkStyle}>https://www.eraberule.com</a>
        および
        <a href="https://app.eraberule.com" css={linkStyle}>https://app.eraberule.com</a>
        で提供するサービス（以下、「本サービス」）のにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第１条（個人情報）
      </p>
      <Text>
        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第条（）
      </p>
      <Text>

      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第条（）
      </p>
      <Text>

      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第条（）
      </p>
      <Text>

      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第条（）
      </p>
      <Text>

      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第条（）
      </p>
      <Text>

      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第条（）
      </p>
      <Text>

      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第条（）
      </p>
      <Text>

      </Text>
      <Spacer y={10} />

    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`
const linkStyle = css`
  color: ${primaryTextColor};
  text-decoration: underline;
`
const subtitleStyle = css`
  font-size: 19px;
  color: ${primaryTextColor};
  line-height: 1.7;
  margin: 5px 0;

  @media(min-width: 500px) {
    font-size: 20px;
  }
`
const listStyle = css`
  list-style: decimal;
  margin-left: 25px;
`

export default PrivacyPage
