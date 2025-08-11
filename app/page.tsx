"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Maputo Bay",
    price: "$850,000",
    image: "/luxury-mozambique-villa.png",
    bedrooms: 4,
    bathrooms: 3,
    features: ["Ocean View", "Private Beach", "Swimming Pool"],
  },
  {
    id: 2,
    title: "Modern City Apartment",
    location: "Maputo Central",
    price: "$320,000",
    image: "/modern-apartment-maputo.png",
    bedrooms: 2,
    bathrooms: 2,
    features: ["City View", "Balcony", "Parking"],
  },
  {
    id: 3,
    title: "Coastal Family Home",
    location: "Inhaca Island",
    price: "$650,000",
    image: "/inhaca-island-home.png",
    bedrooms: 5,
    bathrooms: 4,
    features: ["Garden", "Sea Access", "Traditional Design"],
  },
]

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Maputo",
    rating: 5,
    text: "Chélize found my dream home in record time! Her knowledge of the Maputo market is exceptional.",
    image: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    name: "João Silva",
    location: "Beira",
    rating: 5,
    text: "Outstanding service from start to finish. Chélize made the buying process smooth and stress-free.",
    image: "/professional-man-headshot.png",
  },
  {
    id: 3,
    name: "Ana Rodrigues",
    location: "Pemba",
    rating: 5,
    text: "Professional, knowledgeable, and truly cares about her clients. Highly recommended!",
    image: "/professional-woman-headshot.png",
  },
]

export default function HomePage() {
  const { t } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center parallax-bg"
        style={{ backgroundImage: "url('/mozambique-sunset-coast.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fade-in-up">
            <img
              src="/professional-woman-real-estate-agent.png"
              alt="Chélize Nell"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Chélize Nell</h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">Pam Golding Properties</p>
          </div>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("home.tagline")}
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
            asChild
          >
            <Link href="/listings">
              {t("home.cta")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            Welcome to Premium Real Estate
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("home.intro")}</p>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{t("home.featured")}</h2>
            <p className="text-lg text-gray-600">
              Discover exceptional properties in Mozambique's most desirable locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card
                key={property.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span>{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={`/listings/${property.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/listings">
                View All Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{t("home.testimonials")}</h2>
            <p className="text-lg text-gray-600">Hear from satisfied clients across Mozambique</p>
          </div>

          <div className="relative">
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your real estate goals and find the perfect match in Mozambique
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link href="/contact">
              {t("home.contact")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
