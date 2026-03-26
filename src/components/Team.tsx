'use client'

import { Star, Quote, MapPin, Building } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Team() {
  const { t } = useTranslation()
  const testimonials = [
    {
      name: "Ahmad Al-Rashid",
      role: "CEO",
      company: "Muscat Tech Solutions",
      location: "Muscat, Oman",
      rating: 5,
      testimonial: "Royah transformed our digital infrastructure completely. Their team's expertise in AI solutions helped us automate 70% of our manual processes. Exceptional service and results.",
      color: "accent-emerald"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "Gulf Trading Company",
      location: "Dubai, UAE",
      rating: 5,
      testimonial: "The automation solutions they built for us saved countless hours of manual work. Their process is professional, timely, and the results exceeded our expectations.",
      color: "accent-blue"
    },
    {
      name: "Mohammed Al-Kindi",
      role: "Technical Director",
      company: "Oman Digital Bank",
      location: "Ruwi, Oman",
      rating: 5,
      testimonial: "Royah's digital strategy consulting helped us navigate our digital transformation journey. Their insights were invaluable and implementation was flawless.",
      color: "accent-purple"
    },
    {
      name: "Lisa Chen",
      role: "Startup Founder",
      company: "InnovateOman",
      location: "Muscat, Oman",
      rating: 5,
      testimonial: "As a startup, we needed reliable tech guidance. Royah provided clear roadmaps and built scalable solutions that grew with our business. Highly recommended.",
      color: "accent-emerald"
    },
    {
      name: "Khalid Al-Balushi",
      role: "IT Director",
      company: "Sohar Industries",
      location: "Sohar, Oman",
      rating: 5,
      testimonial: "Their AI integration transformed our data analysis capabilities. What used to take weeks now happens in minutes. Professional team with deep technical expertise.",
      color: "accent-blue"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Business Owner",
      company: "Al-Zahra Enterprises",
      location: "Nizwa, Oman",
      rating: 5,
      testimonial: "Royah built us a complete digital solution from scratch. Their attention to detail and commitment to quality is outstanding. True partners in our success.",
      color: "accent-purple"
    }
  ]

  return (
    <section id="team" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              {t('team.subtitle')}
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground section-title">
            {t('team.title')}
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed section-subtitle">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card clean-border rounded-3xl p-8 elevated-shadow hover:scale-105 gentle-animation group"
            >
              {/* Quote Icon */}
              <div className={`w-12 h-12 bg-${testimonial.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                <Quote className={`w-6 h-6 text-${testimonial.color}`} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 text-${testimonial.color} fill-current`} />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 testimonial-text">
                "{testimonial.testimonial}"
              </p>

              {/* Client Info */}
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="w-4 h-4" />
                  <span>{testimonial.role} at {testimonial.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{testimonial.location}</span>
                </div>
              </div>

              {/* Colored accent line */}
              <div className={`absolute top-0 left-8 right-8 h-1 bg-${testimonial.color} rounded-b-lg`} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven digital solutions.
          </p>
          <button
            className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4 rounded-lg text-lg gentle-animation"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}