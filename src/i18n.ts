import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        services: "Services",
        process: "Process",
        whyUs: "Why Us",
        about: "About",
        contact: "Contact"
      },
      // Hero Section
      hero: {
        tagline: "Digital Strategy & Technology Consulting",
        headline: "Your Partner in Digital Growth",
        subheadline: "We help you plan your digital journey, automate your processes, and build AI solutions that grow with your business.",
        cta: {
          primary: "Start a Project",
          secondary: "See Our Services"
        },
        stats: {
          projects: "Projects",
          satisfaction: "Satisfaction",
          support: "Support"
        },
        controls: {
          soundOn: "Sound On",
          soundOff: "Sound Off"
        }
      },
      // Services Section
      services: {
        title: "Technology that Solves Real Problems",
        subtitle: "We help businesses plan their digital journey, automate processes, and build smart AI solutions that grow with your business.",
        coreService: "Core Service",
        learnMore: "Learn More",
        items: {
          digitalStrategy: {
            title: "Digital Strategy",
            description: "Not sure where to start? We help you create a clear digital roadmap. What to build, when to build it, and how.",
            features: ["Digital Roadmap", "Tech Assessment", "System Planning", "Growth Strategy"]
          },
          automation: {
            title: "Process Automation",
            description: "Stop wasting time on repetitive tasks. We automate your workflows so your team can focus on real work.",
            features: ["Workflow Automation", "App Integration", "Auto Reports", "Custom Tools"]
          },
          ai: {
            title: "AI Solutions",
            description: "AI that actually works for your business. Chatbots, smart search, data insights, and more.",
            features: ["AI Chatbots", "Data Analysis", "Smart Search", "Predictions"]
          }
        }
      },
      // Process Section
      process: {
        title: "How We Build Solutions",
        subtitle: "Watch our proven process unfold step by step",
        steps: {
          discovery: {
            title: "Discovery & Analysis",
            description: "Deep dive into your business goals and technical needs"
          },
          strategy: {
            title: "Strategy & Planning",
            description: "Create detailed roadmap and project specifications"
          },
          development: {
            title: "Development & Build",
            description: "Build solutions using proven technologies and frameworks"
          },
          testing: {
            title: "Testing & Integration",
            description: "Quality assurance and seamless system integration"
          },
          launch: {
            title: "Launch & Support",
            description: "Go-live with ongoing maintenance and optimization"
          }
        },
        controls: {
          methodology: "Proven Methodology",
          timeline: "1-2 Weeks",
          quality: "Enterprise Grade"
        }
      },
      // Team/Testimonials Section
      team: {
        title: "What Our Clients Say About Us",
        subtitle: "Real results from real businesses across the region"
      },
      // Contact Section
      contact: {
        tagline: "Start Your Digital Journey",
        title: "Ready to Transform Your Business?",
        subtitle: "Connect with us to discuss your digital strategy and discover how we can help you achieve your business goals",
        whatsapp: "Chat on WhatsApp",
        whatsappDesc: "Get instant responses to your questions. We're available during business hours.",
        whatsappResponse: "Usually responds instantly",
        email: "Send us an Email",
        emailDesc: "Detailed project inquiries and formal communication.",
        phone: "Call Us",
        phoneDesc: "Speak directly with our team for urgent matters.",
        bookCall: "Book a Call",
        bookCallDesc: "Schedule a free consultation to discuss your project in detail.",
        bookCallResponse: "30-minute free consultation",
        hours: "Business Hours",
        location: "Our Location",
        businessHours: {
          weekdays: "Sunday - Thursday:",
          weekdaysTime: "9:00 AM - 6:00 PM",
          weekend: "Friday - Saturday:",
          weekendTime: "Closed",
          timezone: "GMT+4 (Oman Time)"
        },
        locationDetails: {
          city: "Muscat, Sultanate of Oman",
          region: "Serving clients across the GCC",
          remote: "Remote consultations available"
        },
        cta: {
          title: "Ready to Start Your Digital Transformation?",
          description: "Join hundreds of businesses who have trusted Royah to deliver exceptional digital solutions. Let's discuss your project today.",
          button: "Start WhatsApp Conversation"
        }
      },
      // Extended Services
      extendedServices: {
        title: "Technology Solutions",
        subtitle: "Built with expertise, delivered with excellence",
        description: "Every solution is carefully crafted in our development lab, ensuring each detail delivers the performance and reliability your business demands.",
        items: {
          webDevelopment: {
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies for maximum performance."
          },
          aiIntegration: {
            title: "AI Integration",
            description: "Smart AI solutions including chatbots, data analysis, and predictive systems for your business."
          },
          automation: {
            title: "Process Automation",
            description: "Streamline your workflows with custom automation tools that save time and reduce errors."
          },
          consulting: {
            title: "Technology Consulting",
            description: "Strategic guidance on digital transformation, technology stack selection, and system architecture."
          },
          mobileApps: {
            title: "Mobile Applications",
            description: "Native and cross-platform mobile apps that deliver exceptional user experiences."
          },
          cloudSolutions: {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services for modern, efficient operations."
          }
        }
      },
      // Footer Section
      footer: {
        company: "Royah",
        description: "Empowering businesses across the GCC with innovative digital solutions, strategic consulting, and cutting-edge AI technology.",
        sections: {
          services: {
            title: "Services",
            items: {
              webDevelopment: "Web Development",
              aiIntegration: "AI Solutions",
              automation: "Process Automation",
              consulting: "Digital Strategy",
              mobileApps: "Mobile Apps",
              cloudSolutions: "Cloud Solutions"
            }
          },
          company: {
            title: "Company",
            items: {
              about: "About Us",
              process: "Our Process",
              contact: "Contact",
              careers: "Careers"
            }
          },
          technologies: {
            title: "Technologies We Use",
            description: "We leverage cutting-edge technologies and frameworks to deliver robust, scalable solutions for modern businesses."
          }
        },
        contact: {
          email: "hello@royah.om",
          phone: "+968 99 123 456",
          address: "Muscat, Sultanate of Oman"
        },
        copyright: "© 2025 Royah. All rights reserved.",
        tagline: "Building the future of business technology in the GCC"
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        services: "الخدمات",
        process: "العملية",
        whyUs: "لماذا نحن",
        about: "من نحن",
        contact: "اتصل بنا"
      },
      // Hero Section
      hero: {
        tagline: "استراتيجية رقمية واستشارات تقنية",
        headline: "شريكك في النمو الرقمي",
        subheadline: "نساعدك في تخطيط رحلتك الرقمية، وأتمتة عملياتك، وبناء حلول الذكاء الاصطناعي التي تنمو مع عملك.",
        cta: {
          primary: "ابدأ مشروعاً",
          secondary: "اطلع على خدماتنا"
        },
        stats: {
          projects: "المشاريع",
          satisfaction: "الرضا",
          support: "الدعم"
        },
        controls: {
          soundOn: "تشغيل الصوت",
          soundOff: "إيقاف الصوت"
        }
      },
      // Services Section
      services: {
        title: "تقنية تحل المشاكل الحقيقية",
        subtitle: "نساعد الشركات في تخطيط رحلتها الرقمية، وأتمتة العمليات، وبناء حلول ذكية تنمو مع أعمالها.",
        coreService: "خدمة أساسية",
        learnMore: "اعرف المزيد",
        items: {
          digitalStrategy: {
            title: "الاستراتيجية الرقمية",
            description: "لست متأكداً من أين تبدأ؟ نساعدك في إنشاء خارطة طريق رقمية واضحة. ما تبنيه، ومتى تبنيه، وكيف.",
            features: ["خارطة طريق رقمية", "تقييم تقني", "تخطيط الأنظمة", "استراتيجية النمو"]
          },
          automation: {
            title: "أتمتة العمليات",
            description: "توقف عن إضاعة الوقت في المهام المتكررة. نقوم بأتمتة سير عملك حتى يتمكن فريقك من التركيز على العمل الحقيقي.",
            features: ["أتمتة سير العمل", "تكامل التطبيقات", "تقارير تلقائية", "أدوات مخصصة"]
          },
          ai: {
            title: "حلول الذكاء الاصطناعي",
            description: "ذكاء اصطناعي يعمل حقاً لعملك. روبوتات المحادثة، البحث الذكي، رؤى البيانات، والمزيد.",
            features: ["روبوتات المحادثة", "تحليل البيانات", "البحث الذكي", "التنبؤات"]
          }
        }
      },
      // Process Section
      process: {
        title: "كيف نبني الحلول",
        subtitle: "شاهد عمليتنا المجربة تتكشف خطوة بخطوة",
        steps: {
          discovery: {
            title: "الاكتشاف والتحليل",
            description: "غوص عميق في أهداف عملك واحتياجاتك التقنية"
          },
          strategy: {
            title: "الاستراتيجية والتخطيط",
            description: "إنشاء خارطة طريق مفصلة ومواصفات المشروع"
          },
          development: {
            title: "التطوير والبناء",
            description: "بناء الحلول باستخدام تقنيات وأطر عمل مجربة"
          },
          testing: {
            title: "الاختبار والتكامل",
            description: "ضمان الجودة والتكامل السلس للأنظمة"
          },
          launch: {
            title: "الإطلاق والدعم",
            description: "البدء مع الصيانة المستمرة والتحسين"
          }
        },
        controls: {
          methodology: "منهجية مجربة",
          timeline: "1-2 أسبوع",
          quality: "جودة عالمية"
        }
      },
      // Team/Testimonials Section
      team: {
        title: "ماذا يقول عملاؤنا عنا",
        subtitle: "نتائج حقيقية من شركات حقيقية في المنطقة"
      },
      // Contact Section
      contact: {
        tagline: "ابدأ رحلتك الرقمية",
        title: "هل أنت مستعد لتحويل عملك؟",
        subtitle: "تواصل معنا لمناقشة استراتيجيتك الرقمية واكتشاف كيف يمكننا مساعدتك في تحقيق أهداف عملك",
        whatsapp: "تحدث عبر واتساب",
        whatsappDesc: "احصل على ردود فورية لأسئلتك. نحن متاحون خلال ساعات العمل.",
        whatsappResponse: "يرد عادة فوراً",
        email: "أرسل إيميل",
        emailDesc: "استفسارات مفصلة عن المشاريع والتواصل الرسمي.",
        phone: "اتصل بنا",
        phoneDesc: "تحدث مباشرة مع فريقنا للأمور العاجلة.",
        bookCall: "احجز مكالمة",
        bookCallDesc: "احجز استشارة مجانية لمناقشة مشروعك بالتفصيل.",
        bookCallResponse: "استشارة مجانية لمدة 30 دقيقة",
        hours: "ساعات العمل",
        location: "موقعنا",
        businessHours: {
          weekdays: "الأحد - الخميس:",
          weekdaysTime: "9:00 ص - 6:00 م",
          weekend: "الجمعة - السبت:",
          weekendTime: "مغلق",
          timezone: "GMT+4 (توقيت عُمان)"
        },
        locationDetails: {
          city: "مسقط، سلطنة عُمان",
          region: "نخدم العملاء في جميع أنحاء دول الخليج",
          remote: "الاستشارات عن بُعد متاحة"
        },
        cta: {
          title: "مستعد لبدء تحولك الرقمي؟",
          description: "انضم إلى مئات الشركات التي وثقت بـرؤية لتقديم حلول رقمية استثنائية. دعنا نناقش مشروعك اليوم.",
          button: "ابدأ محادثة واتساب"
        }
      },
      // Extended Services
      extendedServices: {
        title: "الحلول التقنية",
        subtitle: "مبنية بخبرة، مُسلمة بتميز",
        description: "كل حل يُصمم بعناية في مختبر التطوير لدينا، مما يضمن أن كل تفصيلة تقدم الأداء والموثوقية التي يتطلبها عملك.",
        items: {
          webDevelopment: {
            title: "تطوير الويب",
            description: "مواقع ويب وتطبيقات مخصصة مبنية بتقنيات حديثة للحصول على أقصى أداء."
          },
          aiIntegration: {
            title: "تكامل الذكاء الاصطناعي",
            description: "حلول ذكية تشمل روبوتات المحادثة وتحليل البيانات والأنظمة التنبؤية لعملك."
          },
          automation: {
            title: "أتمتة العمليات",
            description: "تبسيط سير العمل بأدوات أتمتة مخصصة توفر الوقت وتقلل الأخطاء."
          },
          consulting: {
            title: "استشارات تقنية",
            description: "إرشاد استراتيجي حول التحول الرقمي واختيار المجموعة التقنية وهيكلة الأنظمة."
          },
          mobileApps: {
            title: "تطبيقات الجوال",
            description: "تطبيقات جوال أصلية ومتعددة المنصات تقدم تجارب استثنائية للمستخدمين."
          },
          cloudSolutions: {
            title: "حلول سحابية",
            description: "بنية تحتية سحابية قابلة للتوسع وخدمات هجرة للعمليات الحديثة والفعالة."
          }
        }
      },
      // Footer Section
      footer: {
        company: "رؤية",
        description: "تمكين الأعمال في دول مجلس التعاون الخليجي بحلول رقمية مبتكرة واستشارات استراتيجية وتقنيات الذكاء الاصطناعي المتطورة.",
        sections: {
          services: {
            title: "الخدمات",
            items: {
              webDevelopment: "تطوير الويب",
              aiIntegration: "حلول الذكاء الاصطناعي",
              automation: "أتمتة العمليات",
              consulting: "الاستراتيجية الرقمية",
              mobileApps: "تطبيقات الجوال",
              cloudSolutions: "الحلول السحابية"
            }
          },
          company: {
            title: "الشركة",
            items: {
              about: "من نحن",
              process: "عمليتنا",
              contact: "اتصل بنا",
              careers: "الوظائف"
            }
          },
          technologies: {
            title: "التقنيات التي نستخدمها",
            description: "نستخدم أحدث التقنيات والأطر لتقديم حلول قوية وقابلة للتوسع للأعمال الحديثة."
          }
        },
        contact: {
          email: "hello@royah.om",
          phone: "+968 99 123 456",
          address: "مسقط، سلطنة عُمان"
        },
        copyright: "© 2025 رؤية. جميع الحقوق محفوظة.",
        tagline: "بناء مستقبل تكنولوجيا الأعمال في دول الخليج"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;