import React from 'react'
import { css } from '@emotion/react'
import PageTitle from '../ui/PageTitle'
import Text from '../ui/Text'
import { primaryTextColor } from '../../styles/colors'
import Spacer from '../ui/Spacer'
import Seo from '../common/Seo'
import { useLocale } from '../../hooks/useLocale'

const PrivacyPage: React.FC = () => {
  const { t } = useLocale()

  return (
    <div css={layoutStyle}>
      <Seo title={`${t.privacy.title} - ErabeRule`} />

      <PageTitle>
        {t.privacy.title}
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
        第１条（個人情報の収集）
      </p>
      <ul>
        <li css={listStyle}>
          本サービスのユーザーは、
          <a href="https://firebase.google.com/docs/auth" css={linkStyle}>Firebase Authentication</a>
          の匿名認証によって識別され、現時点では利用登録なしで利用できます。
        </li>
        <li css={listStyle}>
          本サービスに送信された情報は、
          <a href="https://firebase.google.com/docs/firestore" css={linkStyle}>Cloud Firestore</a>
          に保存されます。
        </li>
      </ul>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第２条（プライバシーポリシーの変更）
      </p>
      <ul>
        <li css={listStyle}>
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
        </li>
        <li css={listStyle}>
          本サービスの運営者が別途定める場合を除いて、変更後のプライバシーポリシーは、本サイトに掲載したときから効力を生じるものとします。
        </li>
      </ul>
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
