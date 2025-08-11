"use client"

import { Award, Users, Home, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

const stats = [
  { icon: Home, value: "150+", key: "about.stats.properties" },
  { icon: TrendingUp, value: "5+", key: "about.stats.experience" },
  { icon: Users, value: "200+", key: "about.stats.clients" },
  { icon: Award, value: "15+", key: "Awards Won" },
]

const timeline = [
  {
    year: "2020",
    title: "Joined Pam Golding Properties",
    description: "Started my journey in luxury real estate in Mozambique",
  },
  {
    year: "2021",
    title: "Top Performer Award",
    description: "Recognized for exceptional client service and sales performance",
  },
  {
    year: "2022",
    title: "Luxury Property Specialist",
    description: "Specialized in high-end coastal and urban properties",
  },
  {
    year: "2023",
    title: "Market Expansion",
    description: "Extended services to cover all major Mozambican cities",
  },
  {
    year: "2024",
    title: "Digital Innovation",
    description: "Pioneered virtual tours and digital marketing strategies",
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white wave-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{t("about.title")}</h1>
              <h2 className="text-xl text-blue-600 mb-6">{t("about.subtitle")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{t("about.bio")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Luxury Properties</div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Market Analysis</div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Client Relations</div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder-k09g0.png"
                alt="Chélize Nell"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{t("about.experience")}</h2>
            <p className="text-lg text-gray-600">
              Proven track record of excellence in Mozambique's real estate market
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600">{t(stat.key)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Career Journey</h2>
            <p className="text-lg text-gray-600">Milestones in my real estate career</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-lg text-gray-600">The principles that guide every client interaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Centric</h3>
                <p className="text-gray-600">
                  Every decision is made with my clients' best interests at heart, ensuring personalized service and
                  exceptional outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Committed to delivering the highest standards of service, from initial consultation to final
                  transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Embracing new technologies and marketing strategies to provide cutting-edge real estate solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
