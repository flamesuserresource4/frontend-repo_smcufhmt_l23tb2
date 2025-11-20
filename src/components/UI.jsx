import React from 'react'
import { ChevronDown, Menu, SunMedium, MoonStar, Globe, Search, Star, MapPin, Calendar, Clock, CreditCard, User, ShoppingCart, Heart, Loader2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../i18n'
import { useTheme } from './ThemeProvider'
import clsx from 'clsx'

export const Container = ({ children, className }) => (
  <div className={clsx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
)

export const Button = ({ children, variant = 'primary', icon: Icon, className, ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-nile-600 hover:bg-nile-700 text-white focus:ring-nile-400 dark:focus:ring-nile-400 focus:ring-offset-sand-50 dark:focus:ring-offset-slate-900',
    secondary: 'bg-sand-200 hover:bg-sand-300 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100',
    ghost: 'bg-transparent hover:bg-sand-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200',
  }
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  )
}

export const IconButton = ({ icon: Icon, className, ...props }) => (
  <button className={clsx('rounded-xl p-2 hover:bg-sand-100 dark:hover:bg-slate-800 transition-colors', className)} {...props}>
    <Icon className="h-5 w-5" />
  </button>
)

export const Badge = ({ children, className }) => (
  <span className={clsx('inline-flex items-center rounded-full bg-gold-400/20 text-gold-600 dark:text-gold-400 px-3 py-1 text-xs font-semibold', className)}>{children}</span>
)

export const Card = ({ children, className, onClick }) => (
  <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    onClick={onClick}
    className={clsx('group rounded-2xl border border-sand-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow', className)}>
    {children}
  </motion.div>
)

export const Input = ({ className, ...props }) => (
  <input className={clsx('w-full rounded-xl border border-sand-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-nile-400', className)} {...props} />
)

export const Select = ({ className, children, ...props }) => (
  <select className={clsx('w-full rounded-xl border border-sand-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nile-400', className)} {...props}>{children}</select>
)

export const TextArea = ({ className, ...props }) => (
  <textarea className={clsx('w-full rounded-xl border border-sand-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nile-400', className)} {...props} />
)

export const Skeleton = ({ className }) => (
  <div className={clsx('animate-pulse rounded-xl bg-sand-200/60 dark:bg-slate-800', className)} />
)

export function Navbar() {
  const { t, locale, setLocale } = useI18n()
  const { theme, setTheme } = useTheme()
  const isRTL = locale === 'ar'
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 bg-white/90 dark:bg-slate-900/90 border-b border-sand-200/60 dark:border-slate-800">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gold-400 to-papyrus-400 flex items-center justify-center shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-sand-900 dark:text-slate-900"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z"/></svg>
          </div>
          <span className="font-bold text-slate-900 dark:text-white">{t('brand')}</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
          <a href="/" className="hover:text-nile-600">{t('home')}</a>
          <a href="/destinations" className="hover:text-nile-600">{t('destinations')}</a>
          <a href="/packages" className="hover:text-nile-600">{t('packages')}</a>
          <a href="/guides" className="hover:text-nile-600">{t('guides')}</a>
          <a href="/about" className="hover:text-nile-600">{t('about')}</a>
          <a href="/contact" className="hover:text-nile-600">{t('contact')}</a>
        </div>
        <div className="flex items-center gap-2">
          <IconButton aria-label={t('theme')} icon={theme==='dark'?SunMedium:MoonStar} onClick={() => setTheme(theme==='dark'?'light':'dark')} />
          <div className="relative">
            <IconButton aria-label={t('language')} icon={Globe} />
            <div className="absolute right-0 mt-2 hidden group-hover:block"></div>
          </div>
          <Select value={locale} onChange={(e)=>setLocale(e.target.value)} className="hidden sm:block w-auto px-2 py-2 text-sm">
            <option value="en">{t('english')}</option>
            <option value="ar">{t('arabic')}</option>
          </Select>
          <Button variant="secondary" className="hidden sm:inline-flex" icon={User}>{t('login')}</Button>
          <IconButton icon={ShoppingCart} />
        </div>
      </Container>
    </div>
  )
}

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="mt-16 border-t border-sand-200/60 dark:border-slate-800">
      <Container className="py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gold-400 to-papyrus-400"/>
            <span className="font-bold">{t('brand')}</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400">{t('trustedBy')}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t('destinations')}</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>Cairo</li><li>Giza</li><li>Luxor</li><li>Aswan</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t('packages')}</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>Nile Cruise</li><li>Desert Safari</li><li>Red Sea</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <div className="flex gap-2">
            <Input placeholder={t('email')} />
            <Button>{t('subscribe')}</Button>
          </div>
        </div>
      </Container>
      <Container className="py-6 border-t border-sand-200/60 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {t('brand')}</span>
        <div className="flex gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </Container>
    </footer>
  )
}

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-gold-400/20 to-nile-400/20 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-sand-300/30 to-papyrus-300/20 blur-3xl"/>
      </div>
      <Container className="py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-gold-600 dark:text-gold-400 font-semibold mb-2">{t('heroKicker')}</div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t('heroTitle')}</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">{t('heroSubtitle')}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button>{t('ctaExplore')}</Button>
            <Button variant="secondary">{t('ctaBuild')}</Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {['Cairo','Luxor','Aswan'].map((city)=> (
              <Card key={city} className="p-4"><div className="text-sm font-semibold">{city}</div><div className="text-xs text-slate-500">4.8 <Star className="inline h-3 w-3 text-gold-500"/></div></Card>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-sand-200 dark:border-slate-800 shadow-lg">
            <img src="https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1974&auto=format&fit=crop" alt="Egypt pyramids" className="h-full w-full object-cover"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 border border-sand-200 dark:border-slate-800 rounded-2xl p-4 shadow-md flex items-center gap-3">
            <MapPin className="h-5 w-5 text-nile-600" />
            <span className="font-semibold">Giza Plateau</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export function SearchBar() {
  const { t } = useI18n()
  return (
    <Container className="-mt-8 relative z-10">
      <Card className="p-4 md:p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-slate-400" />
            <Input placeholder={t('search')} />
          </div>
          <Select><option>{t('duration')}</option></Select>
          <Select><option>{t('price')}</option></Select>
          <Button className="w-full">{t('apply')}</Button>
        </div>
      </Card>
    </Container>
  )
}

export function DestinationCard({ img, title, rating }){
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-slate-500 flex items-center gap-1"><Star className="h-3 w-3 text-gold-500"/> {rating}</div>
        </div>
        <Button variant="ghost">Details</Button>
      </div>
    </Card>
  )
}

export function GridSection({ title, action, children }){
  const { t } = useI18n()
  return (
    <section className="py-12">
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          {action || <a href="#" className="text-nile-600 text-sm">{t('seeAll')}</a>}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {children}
        </div>
      </Container>
    </section>
  )
}

export function PackageCard(){
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video">
        <img src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1470&auto=format&fit=crop" alt="Nile cruise" className="h-full w-full object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between"><div className="font-semibold">Nile Cruise 5D/4N</div><Badge>$699</Badge></div>
        <div className="text-sm text-slate-600 dark:text-slate-400">Cairo • Luxor • Aswan</div>
        <div className="flex items-center gap-4 text-xs text-slate-500"><Clock className="h-4 w-4"/> 5 days <Star className="h-4 w-4 text-gold-500"/> 4.8</div>
        <div className="flex gap-2 pt-2"><Button className="flex-1" variant="secondary">{`Details`}</Button><Button className="flex-1">Book</Button></div>
      </div>
    </Card>
  )
}

export function Table({ columns = [], rows = [] }){
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-slate-500">
          <tr>
            {columns.map((c)=> <th key={c.key} className="px-4 py-3 font-medium">{c.label}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-sand-200/60 dark:divide-slate-800">
          {rows.map((r, idx)=> (
            <tr key={idx} className="hover:bg-sand-50 dark:hover:bg-slate-800/50">
              {columns.map((c)=> <td key={c.key} className="px-4 py-3">{r[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Modal({ open, onClose, title, children }){
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-sand-200 dark:border-slate-800 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{title}</h3>
              <button onClick={onClose} className="p-1 rounded hover:bg-sand-100 dark:hover:bg-slate-800"><X className="h-4 w-4"/></button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
