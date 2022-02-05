import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

const Seo: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="ErabeRuleは、様々な投票ルールを実験的に使うことができる投票アプリです。" />
      <meta property="og:url" content="https://www.eraberule.com" />
      <meta property="og:title" content="ErabeRule" />
      <meta property="og:description" content="ErabeRuleは、様々な投票ルールを実験的に使うことができる投票アプリです。" />
      <meta property="og:image" content="https://www.eraberule.com/ogimage_small" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:image" content="https://www.eraberule.com/ogimage_large" />
      <meta name="theme-color" content="#fff" />
    </Head>
  )
}

export default Seo