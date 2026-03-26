'use client'

import { Brain, Workflow, Target, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'

export function Portfolio() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Target,
      titleKey: "services.items.digitalStrategy.title",
      descriptionKey: "services.items.digitalStrategy.description",
      featuresKey: "services.items.digitalStrategy.features",
      color: "accent-blue"
    },
    {
      icon: Workflow,
      titleKey: "services.items.automation.title",
      descriptionKey: "services.items.automation.description",
      featuresKey: "services.items.automation.features",
      color: "accent-emerald"
    },
    {
      icon: Brain,
      titleKey: "services.items.ai.title",
      descriptionKey: "services.items.ai.description",
      featuresKey: "services.items.ai.features",
      color: "accent-purple"
    }
  ]

  return (
    <section id="services" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              {t('services.subtitle')}
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 section-title">
            {t('services.title')}
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow group hover:scale-105 gentle-animation cursor-pointer"
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {/* Service Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 bg-${service.color}/10 rounded-xl flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 text-${service.color}`} />
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 card-title">
                      {t(service.titleKey)}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 card-description">
                      {t(service.descriptionKey)}
                    </p>

                    <div className="space-y-2">
                      {t(service.featuresKey, { returnObjects: true }).map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 bg-${service.color} rounded-full`} />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Button
            size="lg"
            className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 text-lg"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t('hero.cta.primary')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

      </div>
    </section>
  )
}