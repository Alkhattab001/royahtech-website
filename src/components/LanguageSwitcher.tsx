'use client'

import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { useEffect } from 'react'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  useEffect(() => {
    // Set initial direction and language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(newLanguage)

    // Update document direction for RTL support
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLanguage

    // Add a class to body for styling purposes
    document.body.classList.toggle('rtl-mode', newLanguage === 'ar')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:text-white/80 font-medium gentle-animation hover:scale-105"
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  )
}