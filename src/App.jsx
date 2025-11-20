import React from 'react'
import AppRoutes from './pages/Routes'
import { I18nProvider } from './i18n'
import { ThemeProvider } from './components/ThemeProvider'

export default function App(){
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppRoutes />
      </I18nProvider>
    </ThemeProvider>
  )
}
