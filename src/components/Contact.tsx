'use client'

import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const whatsappNumber = "+96890663136" // Royah's WhatsApp number
  const whatsappMessage = "Hello! I'm interested in learning more about Royah's digital solutions for my business."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  const handleBookCall = () => {
    window.open('https://cal.com/alkhattabsaif/30min', '_blank')
  }

  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              {t('contact.tagline')}
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 section-title">
            {t('contact.title')}
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">

          {/* WhatsApp Contact */}
          <div
            onClick={handleWhatsAppClick}
            className="bg-background clean-border rounded-3xl p-8 elevated-shadow hover:scale-105 gentle-animation cursor-pointer group"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 gentle-animation">
              <MessageCircle className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{t('contact.whatsapp')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('contact.whatsappDesc')}
            </p>
            <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>{t('contact.whatsappResponse')}</span>
            </div>
          </div>

          {/* Email Contact */}
          <div className="bg-background clean-border rounded-3xl p-8 elevated-shadow hover:scale-105 gentle-animation group">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 gentle-animation">
              <Mail className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{t('contact.email')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('contact.emailDesc')}
            </p>
            <a href="mailto:info@royah.om" className="flex items-center gap-2 text-sm text-accent-blue font-medium hover:underline">
              <span>info@royah.om</span>
            </a>
          </div>

          {/* Phone Contact */}
          <div className="bg-background clean-border rounded-3xl p-8 elevated-shadow hover:scale-105 gentle-animation group">
            <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 gentle-animation">
              <Phone className="w-6 h-6 text-accent-purple" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{t('contact.phone')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('contact.phoneDesc')}
            </p>
            <a href="tel:+96890663136" className="flex items-center gap-2 text-sm text-accent-purple font-medium hover:underline">
              <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
                +968 90663136
              </span>
            </a>
          </div>

          {/* Book a Call */}
          <div
            onClick={handleBookCall}
            className="bg-background clean-border rounded-3xl p-8 elevated-shadow hover:scale-105 gentle-animation cursor-pointer group"
          >
            <div className="w-12 h-12 bg-accent-emerald/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-emerald/20 gentle-animation">
              <Calendar className="w-6 h-6 text-accent-emerald" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{t('contact.bookCall')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('contact.bookCallDesc')}
            </p>
            <div className="flex items-center gap-2 text-sm text-accent-emerald font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>{t('contact.bookCallResponse')}</span>
            </div>
          </div>

        </div>

        {/* Business Hours & Location */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Business Hours */}
          <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
            <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-accent-emerald" />
            </div>
            <h4 className="font-black text-foreground mb-4 text-center">{t('contact.hours')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <span>{t('contact.businessHours.weekdays')}</span>
                <span className="font-medium">{t('contact.businessHours.weekdaysTime')}</span>
              </div>
              <div className="flex gap-2">
                <span>{t('contact.businessHours.weekend')}</span>
                <span className="font-medium">{t('contact.businessHours.weekendTime')}</span>
              </div>
              <div className="text-center mt-4 text-accent-emerald font-medium">
                {t('contact.businessHours.timezone')}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent-blue" />
            </div>
            <h4 className="font-black text-foreground mb-4 text-center">{t('contact.location')}</h4>
            <div className="text-center space-y-2 text-sm text-muted-foreground">
              <p>{t('contact.locationDetails.city')}</p>
              <p>{t('contact.locationDetails.region')}</p>
              <p className="text-accent-blue font-medium">{t('contact.locationDetails.remote')}</p>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className={`bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-3xl p-8 max-w-4xl mx-auto ${isRTL ? 'text-center' : ''}`}>
            <h3 className={`text-2xl font-bold text-foreground mb-4 section-title ${isRTL ? 'text-center' : ''}`}>
              {t('contact.cta.title')}
            </h3>
            <p className={`text-lg text-muted-foreground mb-6 max-w-2xl mx-auto section-subtitle ${isRTL ? 'text-center' : ''}`}>
              {t('contact.cta.description')}
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleWhatsAppClick}
                className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg gentle-animation inline-flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <MessageCircle className="w-5 h-5" />
                {t('contact.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}