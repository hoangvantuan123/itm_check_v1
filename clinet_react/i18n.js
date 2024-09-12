import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationVI from './src/locales/vi.json'

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: translationVI,
    },
  },
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
