import React from 'react'
import Head from 'next/head'
import { useLocale } from '../../hooks/useLocale'

type Props = {
  title: string
}

const Seo: React.FC<Props> = (props) => {
  const { t } = useLocale()

  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={t.common.description} />
      <meta property="og:url" content="https://www.eraberule.com" />
      <meta property="og:title" content="ErabeRule" />
      <meta property="og:description" content={t.common.description} />
      <meta property="og:image" content="https://www.eraberule.com/ogimage_small.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:image" content="https://www.eraberule.com/ogimage_large.png" />
      <meta name="theme-color" content="#fff" />
    </Head>
  )
}

export default Seo