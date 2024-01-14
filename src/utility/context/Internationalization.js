// ** React Imports
import { useState, createContext } from 'react'

// ** Intl Provider Import
import { IntlProvider } from 'react-intl'
import { DEFAULT_LANG } from '../constant'

// ** Core Language Data
import messagesEn from '../../assets/locales/en.json';
import messagesAe from '../../assets/locales/ae.json';
import messagesDe from '../../assets/locales/de.json';
import messagesFr from '../../assets/locales/fr.json';

// ** Menu msg obj
const menuMessages = {
  en: { ...messagesEn },
  ae: { ...messagesAe },
  de: { ...messagesDe },
  fr: { ...messagesFr }
}

// ** Create Context
const Context = createContext();

const IntlProviderWrapper = ({ children }) => {
  // ** States
  const [locale, setLocale] = useState(DEFAULT_LANG)
  const [messages, setMessages] = useState(menuMessages[DEFAULT_LANG])

  // ** Switches Language
  const switchLanguage = lang => {
    setLocale(lang);
    setMessages(menuMessages[lang]);
  }

  return (
    <Context.Provider value={{ locale, switchLanguage }}>
      <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale={DEFAULT_LANG} >
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export { IntlProviderWrapper, Context as IntlContext }
