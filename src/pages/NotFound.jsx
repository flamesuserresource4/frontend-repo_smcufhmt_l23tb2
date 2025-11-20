import React from 'react'
import { Button, Container, Navbar } from '../components/UI'
import { useI18n } from '../i18n'

export default function NotFound(){
  const { t } = useI18n()
  return (
    <div className="min-h-screen bg-sand-50 dark:bg-slate-950">
      <Navbar />
      <Container className="py-24 text-center">
        <div className="text-8xl font-black text-sand-300 dark:text-slate-800">404</div>
        <h1 className="mt-4 text-2xl font-bold">{t('notFound')}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">The page you are looking for does not exist.</p>
        <div className="mt-6"><a href="/"><Button>{t('goHome')}</Button></a></div>
      </Container>
    </div>
  )
}
