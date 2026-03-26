'use client'

import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const handleWhatsAppClick = () => {
    const whatsappNumber = "96890663136"
    const whatsappMessage = isRTL
      ? "مرحباً! زرت موقعكم للتو وأنا مهتم بخدماتكم. هل يمكنكم مساعدتي؟"
      : "Hi! I just visited your website and I'm interested in your services. Can you help me?"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <footer className="relative bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Main Footer Content */}
        <div className="py-12">
          <div className={`grid grid-cols-1 lg:grid-cols-4 gap-12 ${isRTL ? 'text-right' : ''}`}>

            {/* Company Section */}
            <div className="lg:col-span-2">
              <img
                src="/royah-logo-real.png"
                alt="Royah Logo"
                className="w-24 h-24 object-contain mb-6"
              />
              <p className="text-background/80 text-lg leading-relaxed mb-8 max-w-md">
                {t('footer.description')}
              </p>
              <button
                onClick={handleWhatsAppClick}
                className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg gentle-animation inline-flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isRTL ? 'تواصل معنا' : 'Get in Touch'}</span>
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t('footer.sections.services.title')}</h3>
              <div className="space-y-3">
                <a href="#services" className="block text-background/70 hover:text-white gentle-animation">
                  {t('footer.sections.services.items.webDevelopment')}
                </a>
                <a href="#services" className="block text-background/70 hover:text-white gentle-animation">
                  {t('footer.sections.services.items.aiIntegration')}
                </a>
                <a href="#services" className="block text-background/70 hover:text-white gentle-animation">
                  {t('footer.sections.services.items.automation')}
                </a>
                <a href="#services" className="block text-background/70 hover:text-white gentle-animation">
                  {t('footer.sections.services.items.consulting')}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t('contact.tagline')}</h3>
              <div className="space-y-4">
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {!isRTL && (
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                  <div className={`flex flex-col ${isRTL ? 'items-end mr-4' : 'items-start'} flex-1`}>
                    <p className="text-background/60 text-sm">{isRTL ? 'البريد الإلكتروني' : 'Email'}</p>
                    <a href="mailto:info@royah.om" className="text-white hover:text-green-400 gentle-animation">
                      info@royah.om
                    </a>
                  </div>
                  {isRTL && (
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>

                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {!isRTL && (
                    <div className="w-10 h-10 bg-accent-blue/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-blue" />
                    </div>
                  )}
                  <div className={`flex flex-col ${isRTL ? 'items-end mr-4' : 'items-start'} flex-1`}>
                    <p className="text-background/60 text-sm">{isRTL ? 'الهاتف' : 'Phone'}</p>
                    <a href="tel:+96890663136" className="text-white hover:text-accent-blue gentle-animation">
                      <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
                        +968 90663136
                      </span>
                    </a>
                  </div>
                  {isRTL && (
                    <div className="w-10 h-10 bg-accent-blue/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-blue" />
                    </div>
                  )}
                </div>

                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {!isRTL && (
                    <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent-purple" />
                    </div>
                  )}
                  <div className={`flex flex-col ${isRTL ? 'items-end mr-4' : 'items-start'} flex-1`}>
                    <p className="text-background/60 text-sm">{isRTL ? 'الموقع' : 'Location'}</p>
                    <span className="text-white">
                      {t('footer.contact.address')}
                    </span>
                  </div>
                  {isRTL && (
                    <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent-purple" />
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-background/60 text-sm">
              {t('footer.copyright')}
            </div>
            <div className="text-background/60 text-sm text-center">
              {t('footer.tagline')}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}