import { createI18n } from 'vue-i18n'
import zhCn from './zh-cn'
import en from './en'

let lang = localStorage.getItem('lang') || 'en';
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang,
  messages: {
    zhCn,
    en
  }
})

export default i18n