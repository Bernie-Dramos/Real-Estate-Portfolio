"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.listings": "Listings",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Home Page
    "home.tagline": "Elevating Real Estate in Mozambique with Unmatched Service",
    "home.cta": "Explore Listings",
    "home.intro":
      "With over 5 years of experience in Mozambique's luxury real estate market, I specialize in connecting clients with their dream properties while delivering exceptional, personalized service.",
    "home.featured": "Featured Properties",
    "home.testimonials": "What Clients Say",
    "home.contact": "Contact Me",

    // About Page
    "about.title": "About Chélize Nell",
    "about.subtitle": "Your Trusted Real Estate Partner in Mozambique",
    "about.bio":
      "As a dedicated real estate professional at Pam Golding Properties, I bring passion, expertise, and unwavering commitment to every client interaction. Specializing in Mozambique's premium property market, I understand the unique opportunities and challenges of this beautiful coastal nation.",
    "about.experience": "Experience & Expertise",
    "about.stats.properties": "Properties Sold",
    "about.stats.experience": "Years Experience",
    "about.stats.clients": "Happy Clients",

    // Services
    "services.title": "Premium Real Estate Services",
    "services.subtitle": "Comprehensive solutions for all your property needs",
    "services.buying": "Property Buying",
    "services.selling": "Property Selling",
    "services.analysis": "Market Analysis",
    "services.tours": "Virtual Tours",
    "services.consultation": "Personal Consultation",
    "services.investment": "Investment Advisory",

    // Listings
    "listings.title": "Premium Properties",
    "listings.filter.all": "All Properties",
    "listings.filter.house": "Houses",
    "listings.filter.apartment": "Apartments",
    "listings.filter.villa": "Villas",
    "listings.inquire": "Inquire Now",
    "listings.bedrooms": "Bedrooms",
    "listings.bathrooms": "Bathrooms",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to find your dream property? Let's start the conversation.",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully! I'll get back to you soon.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.pam": "Pam Golding Properties",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.listings": "Propriedades",
    "nav.testimonials": "Testemunhos",
    "nav.contact": "Contacto",

    // Home Page
    "home.tagline": "Elevando o Mercado Imobiliário em Moçambique com Serviço Incomparável",
    "home.cta": "Explorar Propriedades",
    "home.intro":
      "Com mais de 5 anos de experiência no mercado imobiliário de luxo de Moçambique, especializo-me em conectar clientes com as suas propriedades de sonho, oferecendo um serviço excecional e personalizado.",
    "home.featured": "Propriedades em Destaque",
    "home.testimonials": "O Que Dizem os Clientes",
    "home.contact": "Contacte-me",

    // About Page
    "about.title": "Sobre Chélize Nell",
    "about.subtitle": "Sua Parceira de Confiança em Imóveis em Moçambique",
    "about.bio":
      "Como profissional dedicada do setor imobiliário na Pam Golding Properties, trago paixão, experiência e compromisso inabalável a cada interação com clientes. Especializada no mercado de propriedades premium de Moçambique, compreendo as oportunidades e desafios únicos desta bela nação costeira.",
    "about.experience": "Experiência e Especialização",
    "about.stats.properties": "Propriedades Vendidas",
    "about.stats.experience": "Anos de Experiência",
    "about.stats.clients": "Clientes Satisfeitos",

    // Services
    "services.title": "Serviços Imobiliários Premium",
    "services.subtitle": "Soluções abrangentes para todas as suas necessidades imobiliárias",
    "services.buying": "Compra de Propriedades",
    "services.selling": "Venda de Propriedades",
    "services.analysis": "Análise de Mercado",
    "services.tours": "Tours Virtuais",
    "services.consultation": "Consultoria Pessoal",
    "services.investment": "Consultoria de Investimento",

    // Listings
    "listings.title": "Propriedades Premium",
    "listings.filter.all": "Todas as Propriedades",
    "listings.filter.house": "Casas",
    "listings.filter.apartment": "Apartamentos",
    "listings.filter.villa": "Vilas",
    "listings.inquire": "Inquirir Agora",
    "listings.bedrooms": "Quartos",
    "listings.bathrooms": "Casas de Banho",

    // Contact
    "contact.title": "Entre em Contacto",
    "contact.subtitle": "Pronto para encontrar a sua propriedade de sonho? Vamos começar a conversa.",
    "contact.name": "Nome Completo",
    "contact.email": "Endereço de Email",
    "contact.phone": "Número de Telefone",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.success": "Mensagem enviada com sucesso! Entrarei em contacto em breve.",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.pam": "Pam Golding Properties",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
