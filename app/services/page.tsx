"use client"

import { Home, TrendingUp, Camera, Users, DollarSign, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description: "Expert guidance through every step of the property acquisition process, from search to closing.",
    features: ["Property Search", "Market Analysis", "Negotiation Support", "Legal Assistance"],
  },
  {
    icon: DollarSign,
    title: "Property Selling",
    description: "Maximize your property value with strategic marketing and professional presentation.",
    features: ["Property Valuation", "Marketing Strategy", "Professional Photography", "Buyer Screening"],
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Comprehensive market insights to make informed real estate investment decisions.",
    features: ["Price Trends", "Investment Opportunities", "ROI Analysis", "Market Forecasting"],
  },
  {
    icon: Camera,
    title: "Virtual Tours",
    description: "Immersive 3D virtual tours and professional photography for enhanced property viewing.",
    features: ["3D Virtual Tours", "Drone Photography", "Professional Staging", "Interactive Floor Plans"],
  },
  {
    icon: Users,
    title: "Personal Consultation",
    description: "One-on-one consultations tailored to your specific real estate needs and goals.",
    features: ["Needs Assessment", "Goal Setting", "Strategy Development", "Ongoing Support"],
  },
  {
    icon: MapPin,
    title: "Investment Advisory",
    description: "Strategic advice for real estate investment opportunities across Mozambique.",
    features: ["Portfolio Analysis", "Risk Assessment", "Growth Strategies", "Market Timing"],
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white wave-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{t("services.title")}</h1>
          <p className="text-xl text-gray-600 mb-8">{t("services.subtitle")}</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-lg text-gray-600">A proven approach to achieving your real estate goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Developing a customized action plan" },
              { step: "03", title: "Execution", description: "Implementing the plan with precision" },
              { step: "04", title: "Success", description: "Achieving your real estate objectives" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help you achieve your real estate goals in Mozambique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              View Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
