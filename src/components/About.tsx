'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const processSteps = [
    {
      number: "01",
      titleKey: "process.steps.discovery.title",
      descriptionKey: "process.steps.discovery.description",
      color: "accent-blue"
    },
    {
      number: "02",
      titleKey: "process.steps.strategy.title",
      descriptionKey: "process.steps.strategy.description",
      color: "accent-emerald"
    },
    {
      number: "03",
      titleKey: "process.steps.development.title",
      descriptionKey: "process.steps.development.description",
      color: "accent-purple"
    },
    {
      number: "04",
      titleKey: "process.steps.testing.title",
      descriptionKey: "process.steps.testing.description",
      color: "accent-blue"
    },
    {
      number: "05",
      titleKey: "process.steps.launch.title",
      descriptionKey: "process.steps.launch.description",
      color: "accent-purple"
    }
  ]

  useEffect(() => {
    // Start film animation after a 3 second pause
    setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveFrame(index)
         
        }, index * 2000 + 1000) // Ultra slow: Start after 24s, then every 72s
      })
    }, 3000) // 3 second pause after section loads
  }, [])

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Film Grain Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`,
          backgroundSize: '3px 3px',
          animation: 'filmGrain 8s infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              {t('process.subtitle')}
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground section-title">
            {t('process.title')}
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto section-subtitle">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Film Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Film Strip Background */}
          <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-xl overflow-hidden"
               style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.05)' }}>
            
            {/* Film Perforations - Top - Now animated */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? (isRTL ? 'perforations-scroll-animation-rtl' : 'perforations-scroll-animation') : ''
              }`} style={{ width: '200%' }}>
                {/* First set of perforations */}
                {[...Array(20)].map((_, i) => (
                  <div key={`top-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0" 
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(20)].map((_, i) => (
                  <div key={`top-dup-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0" 
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>
            
            {/* Film Perforations - Bottom - Now animated */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? (isRTL ? 'perforations-scroll-animation-rtl' : 'perforations-scroll-animation') : ''
              }`} style={{ width: '200%' }}>
                {/* First set of perforations */}
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0"
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-dup-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0"
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>

            {/* Film Frames Container - Scrolling Animation */}
            <div className="relative py-6 px-8 overflow-hidden h-64 max-w-full">
              <div className={`flex transition-transform duration-1000 ease-in-out ${
                animationStarted ? (isRTL ? 'film-scroll-animation-rtl' : 'film-scroll-animation') : ''
              }`} style={{ width: 'max-content', gap: '32px' }}>
                
                {/* Original sequence for seamless loop */}
                {/* Start frame */}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center" 
                     style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
                  <div className="text-gray-400 font-mono tracking-wider">● START</div>
                </div>
                
                {/* Process Step Frames */}
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex-shrink-0 w-80 h-52 bg-background rounded-lg border-4 ${
                      activeFrame >= index 
                        ? `border-${step.color}` 
                        : 'border-gray-600'
                    }`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    
                    {/* Frame Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      
                      {/* Frame Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-black z-10 border-3 border-white text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="opacity-100">
                        
                        {/* Step Title */}
                        <h3 className="font-black text-xl leading-tight mb-4 text-foreground">
                          {t(step.titleKey)}
                        </h3>

                        {/* Step Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(step.descriptionKey)}
                        </p>
                      </div>
                      
                      {/* Film frame edge lines */}
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-gray-300/20" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-gray-300/20" />
                    </div>
                  </div>
                ))}
                
                {/* End frame */}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center"
                     style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
                  <div className="text-gray-400 font-mono tracking-wider">● END</div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                {/* Start frame duplicate */}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center" 
                     style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
                  <div className="text-gray-400 font-mono tracking-wider">● START</div>
                </div>
                
                {/* Process Step Frames duplicate */}
                {processSteps.map((step, index) => (
                  <div
                    key={`duplicate-${step.number}`}
                    className={`flex-shrink-0 w-80 h-52 bg-background rounded-lg border-4 ${
                      activeFrame >= index 
                        ? `border-${step.color}` 
                        : 'border-gray-600'
                    }`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    
                    {/* Frame Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      
                      {/* Frame Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-black z-10 border-3 border-white text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="opacity-100">
                        
                        {/* Step Title */}
                        <h3 className="font-black text-xl leading-tight mb-4 text-foreground">
                          {t(step.titleKey)}
                        </h3>

                        {/* Step Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(step.descriptionKey)}
                        </p>
                      </div>
                      
                      {/* Film frame edge lines */}
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-gray-300/20" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-gray-300/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Projector Light Effect */}
          {activeFrame >= 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,0,0.2) 40%, transparent 60%)',
                  animation: 'projectorLight 12s ease-in-out infinite'
                }}
              />
            </div>
          )}
        </div>

        {/* Process Controls */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-card/80 backdrop-blur-sm clean-border rounded-2xl px-6 sm:px-8 py-4 subtle-shadow max-w-full">

            {/* Methodology Indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{t('process.controls.methodology')}</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="sm:hidden w-6 h-px bg-border" />

            {/* Timeline */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{t('process.controls.timeline')}</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="sm:hidden w-6 h-px bg-border" />

            {/* Quality */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{t('process.controls.quality')}</span>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  )
}