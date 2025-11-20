import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const translations = {
  en: {
    brand: 'Nile Trails',
    home: 'Home',
    destinations: 'Destinations',
    packages: 'Tour Packages',
    guides: 'Tour Guides',
    about: 'About',
    contact: 'Contact',
    admin: 'Admin',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    cart: 'Cart',
    checkout: 'Checkout',
    search: 'Search Egypt…',
    heroTitle: 'Explore Egypt with ease',
    heroSubtitle: 'Modern journeys through timeless wonders — pyramids, Nile cruises, desert oases, and vibrant souqs.',
    ctaExplore: 'Explore trips',
    ctaBuild: 'Build your own',
    popular: 'Popular Destinations',
    seeAll: 'See all',
    featuredPackages: 'Featured Packages',
    trustedBy: 'Trusted by travelers worldwide',
    dark: 'Dark',
    light: 'Light',
    arabic: 'Arabic',
    english: 'English',
    language: 'Language',
    theme: 'Theme',
    filters: 'Filters',
    price: 'Price',
    duration: 'Duration',
    rating: 'Rating',
    apply: 'Apply',
    reset: 'Reset',
    addToCart: 'Add to cart',
    bookNow: 'Book now',
    readMore: 'Read more',
    loading: 'Loading…',
    favorites: 'Favorites',
    bookings: 'Bookings',
    profile: 'Profile',
    logout: 'Logout',
    manage: 'Manage',
    users: 'Users',
    tours: 'Tours',
    guidesAdmin: 'Guides',
    destinationsAdmin: 'Destinations',
    heroKicker: 'Egypt • Timeless • Modern',
    newsletterTitle: 'Stay in the loop',
    newsletterDesc: 'Get curated deals and travel inspiration for Egypt, monthly.',
    email: 'Email',
    subscribe: 'Subscribe',
    notFound: 'Page not found',
    goHome: 'Go home',
  },
  ar: {
    brand: 'مسارات النيل',
    home: 'الرئيسية',
    destinations: 'الوجهات',
    packages: 'الباقات',
    guides: 'المرشدون',
    about: 'من نحن',
    contact: 'اتصل بنا',
    admin: 'الإدارة',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    dashboard: 'لوحة المستخدم',
    cart: 'السلة',
    checkout: 'الدفع',
    search: 'ابحث في مصر…',
    heroTitle: 'استكشف مصر بسهولة',
    heroSubtitle: 'رحلات عصرية عبر روائع خالدة — الأهرامات، رحلات النيل، واحات الصحراء، والأسواق.',
    ctaExplore: 'اكتشف الرحلات',
    ctaBuild: 'أنشئ رحلتك',
    popular: 'وجهات شائعة',
    seeAll: 'عرض الكل',
    featuredPackages: 'باقات مميزة',
    trustedBy: 'موثوق من المسافرين حول العالم',
    dark: 'داكن',
    light: 'فاتح',
    arabic: 'العربية',
    english: 'الإنجليزية',
    language: 'اللغة',
    theme: 'السمة',
    filters: 'مرشحات',
    price: 'السعر',
    duration: 'المدة',
    rating: 'التقييم',
    apply: 'تطبيق',
    reset: 'إعادة تعيين',
    addToCart: 'أضف إلى السلة',
    bookNow: 'احجز الآن',
    readMore: 'اقرأ المزيد',
    loading: 'جارٍ التحميل…',
    favorites: 'المفضلة',
    bookings: 'الحجوزات',
    profile: 'الملف الشخصي',
    logout: 'تسجيل الخروج',
    manage: 'إدارة',
    users: 'المستخدمون',
    tours: 'الجولات',
    guidesAdmin: 'المرشدون',
    destinationsAdmin: 'الوجهات',
    heroKicker: 'مصر • خالدة • عصرية',
    newsletterTitle: 'ابق على اطلاع',
    newsletterDesc: 'أفضل العروض وإلهام السفر إلى مصر شهريًا.',
    email: 'البريد الإلكتروني',
    subscribe: 'اشترك',
    notFound: 'الصفحة غير موجودة',
    goHome: 'العودة للرئيسية',
  }
}

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const t = useMemo(() => (key) => translations[locale][key] || key, [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
