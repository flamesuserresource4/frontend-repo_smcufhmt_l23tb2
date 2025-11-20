import React from 'react'
import { Outlet } from 'react-router-dom'
import PageTransition from './Page'
import { Navbar, Footer } from './UI'

export default function Layout(){
  return (
    <div className="min-h-screen bg-sand-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  )
}
