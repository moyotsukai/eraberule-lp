import { useRouter } from 'next/router'
import en from '../locales/en'
import ja from '../locales/ja'

const locales = {
  ja: ja,
  en: en
}

export const useLocale = () => {
  const { locale } = useRouter()
  const t = locales[locale]

  return { locale, t }
}