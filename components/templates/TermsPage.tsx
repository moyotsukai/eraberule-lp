import React from 'react'
import { css } from '@emotion/react'
import PageTitle from '../ui/PageTitle'
import Text from '../ui/Text'
import { primaryTextColor } from '../../styles/colors'
import Spacer from '../ui/Spacer'

const TermsPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <PageTitle>
        利用規約
      </PageTitle>
      <Text>
        この利用規約は、運営者が
        <a href="https://www.eraberule.com" css={linkStyle}>https://www.eraberule.com</a>
        および
        <a href="https://app.eraberule.com" css={linkStyle}>https://app.eraberule.com</a>
        で提供するサービス（以下、「本サービス」）の利用条件を定めるものです。本サービスのユーザーの皆さま（以下、「ユーザー」）には、本規約に従って、本サービスをご利用いただきます。
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第１条（適用）
      </p>
      <Text>
        本規約は、ユーザーと本サービスの運営者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第２条（禁止事項）
      </p>
      <Text>
        ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
        <Spacer y={5} />
        <ul>
          <li css={listStyle}>
            法令または公序良俗に違反する行為
          </li>
          <li css={listStyle}>
            犯罪行為に関連する行為
          </li>
          <li css={listStyle}>
            本サービスに含まれる著作権、商標権などの知的財産権を侵害する行為
          </li>
          <li css={listStyle}>
            本サービスの運営を妨害するおそれのある行為
          </li>
          <li css={listStyle}>
            不正アクセスをし、またはこれを試みる行為
          </li>
          <li css={listStyle}>
            他のユーザーに関する個人情報等を収集または蓄積する行為
          </li>
          <li css={listStyle}>
            不正な目的を持って本サービスを利用する行為
          </li>
          <li css={listStyle}>
            本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
          </li>
          <li css={listStyle}>
            他のユーザーに成りすます行為
          </li>
          <li css={listStyle}>
            運営者が承諾しない本サービス上での宣伝、広告、勧誘、または営業行為
          </li>
          <li css={listStyle}>
            面識のない異性との出会いを目的とした行為
          </li>
          <li css={listStyle}>
            本サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
          </li>
          <li css={listStyle}>
            その他、本サービスの運営者が不適切と判断する行為
          </li>
        </ul>
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第３条（本サービスの提供の変更・停止）
      </p>
      <Text>
        <ul>
          <li css={listStyle}>
            本サービスは、ユーザーに事前に通知することなく本サービスの全部または一部の提供を変更または停止することができるものとします。
          </li>
          <li css={listStyle}>
            本サービスの運営者は、本サービスの提供の変更または停止により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
          </li>
        </ul>
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第４条（保証の否認および免責事項）
      </p>
      <Text>
        <ul>
          <li css={listStyle}>
            本サービスの運営者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          </li>
          <li css={listStyle}>
            本サービスの運営者は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
          </li>
          <li css={listStyle}>
            本サービスの運営者は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </li>
        </ul>
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第５条（利用規約の変更）
      </p>
      <Text>
        <ul>
          <li css={listStyle}>
            本サービスの運営者は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
            <ul>
              <li css={listStyle}>
                本規約の変更がユーザーの一般の利益に適合するとき
              </li>
              <li css={listStyle}>
                本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
              </li>
            </ul>
          </li>
          <li css={listStyle}>
            本サービスの運営者はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
          </li>
        </ul>
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第６条（個人情報の取り扱い）
      </p>
      <Text>
        本サービスの運営者は、本サービスの利用によって取得する個人情報については、「プライバシーポリシー」に従い適切に取り扱うものとします。
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第７条（権利義務の譲渡の禁止）
      </p>
      <Text>
        ユーザーは、本サービスの運営者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
      </Text>
      <Spacer y={10} />

      <p css={subtitleStyle}>
        第８条（準拠法・裁判管轄）
      </p>
      <Text>
        <ul>
          <li css={listStyle}>
            本規約の解釈にあたっては、日本法を準拠法とします。
          </li>
          <li css={listStyle}>
            本サービスに関して紛争が生じた場合には、本サービスの運営者の所在地を管轄する裁判所を専属的合意管轄とします。
          </li>
        </ul>
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

export default TermsPage
