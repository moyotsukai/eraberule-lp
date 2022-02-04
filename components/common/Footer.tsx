import React from 'react'
import { css } from '@emotion/react'
import { contents } from '../../contents/data'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import { primaryColor, primaryTextColor } from '../../styles/colors'
import Spacer from '../ui/Spacer'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  const copyYear = year === 2021 ? "2021" : "2021-" + year
  const sections = contents.footer.sections

  return (
    <footer css={footerStyle}>
      <Spacer y={10} />
      <div css={layoutStyle}>
        <Spacer y={10} />
        <Link href="/" passHref>
          <a css={logoStyle}>
            <Image
              src={Logo}
              width={144}
              height={36}
              alt="logo" />
          </a>
        </Link>

        <div css={containerStyle}>
          {sections.map((section, index) => (
            <div key={index} css={sectionStyle}>
              <p css={titleStyle}>{section.title}</p>
              {section.pages.map((data, index) => (
                <Link href={data.url} passHref key={index}>
                  {data.title.startsWith("/")
                    ? <a css={linkStyle}>{data.title}</a>
                    : <a target="_blank" rel="noopener noreferrer" css={linkStyle}>{data.title}</a>
                  }
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p css={copyrightStyle}>&copy; {copyYear} Shintaro Aoi</p>
    </footer>
  )
}

const footerStyle = css`
  background-color: #fff;
  padding: 0 15px;
  border-top: 1px solid rgb(220, 220, 220);
`
const layoutStyle = css`
  max-width: 1000px;
  margin: 0 auto;
`
const logoStyle = css`
  display: inline;
`
const containerStyle = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media(min-width: 500px) {
    flex-direction: row;
  }
`
const sectionStyle = css`
  margin: 10px 0;
`
const titleStyle = css`
  font-size: 17px;
  color: ${primaryTextColor};
  margin: 5px 0;
`
const linkStyle = css`
  display: block;
  font-size: 14px;
  color: #595959;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
    color: ${primaryColor};
  }
`
const copyrightStyle = css`
  padding: 8px 0;
  text-align: center;
  font-size: 14px;
  color: #999;
`

export default Footer