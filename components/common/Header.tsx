import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.png'
import OutlineButton from '../ui/OutlineButton'
import { useLocale } from '../../hooks/useLocale'
import Spacer from '../ui/Spacer'
import LanguageMenu from '../functional/LanguageMenu'

const Header: React.FC = () => {
  const { t } = useLocale()

  return (
    <div css={headerStyle}>
      <Link href="/" passHref>
        <a css={linkStyle}>
          <Image
            src={Logo}
            width={144}
            height={36}
            alt="logo" />
        </a>
      </Link>
      <div css={spacerStyle} />
      <OutlineButton
        text={t.common.getStarted}
        url="https://app.eraberule.com"
        size="small"
      />
      {/* <Spacer x={5} />
      <LanguageMenu /> */}
    </div>
  )
}

const headerStyle = css`
  padding: 8px 10px 6px 10px;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid rgb(220, 220, 220);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  transform: translate3d(0, 0, 0);
  z-index: 100;
  position: fixed;
  display: flex;
  align-items: center;

  @media(min-width: 500px) {
    padding: 8px 20px 6px 20px;
  }
`
const spacerStyle = css`
  flex-grow: 1;
`
const linkStyle = css`
  cursor: pointer;
`

export default Header