// @flow
import daLocale from 'react-intl/locale-data/da'
import enLocale from 'react-intl/locale-data/en'
import { addLocaleData } from 'react-intl'
import enData from './en.json'
import daData from './da.json'

addLocaleData(daLocale.concat(enLocale))

export const en = enData
export const da = Object.assign({}, en, daData)

export type LocaleType = 'en' | 'da'

export const supported: LocaleType[] = ['en', 'da']

export const locales: { [LocaleType]: Object } = {en, da}

export const names: { [LocaleType]: string } = {
  en: 'English',
  da: 'Dansk'
}

export function toLocale<A> (locale: A, def: LocaleType): LocaleType {
  switch (locale) {
    case 'en':
    case 'da':
      return locale
    default:
      return def
  }
}

export function toTerritory (l: LocaleType): string {
  switch (l) {
    case 'en':
      return 'en_US'
    case 'da':
      return 'da_DK'
    default:
      throw new Error('Invalid locale')
  }
}
