"use client"

import Link from "next/link"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Maputo",
    rating: 5,
    text: "Chélize found my dream home in record time! Her knowledge of the Maputo market is exceptional, and she guided me through every step of the process with professionalism and care.",
    image: "/professional-woman-headshot.png",
    property: "Luxury Apartment in Maputo Central",
    date: "March 2024",
  },
  {
    id: 2,
    name: "João Silva",
    location: "Beira",
    rating: 5,
    text: "Outstanding service from start to finish. Chélize made the buying process smooth and stress-free. Her attention to detail and market expertise are unmatched.",
    image: "/professional-man-headshot.png",
    property: "Waterfront Villa in Beira",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Ana Rodrigues",
    location: "Pemba",
    rating: 5,
    text: "Professional, knowledgeable, and truly cares about her clients. Chélize went above and beyond to help us find the perfect investment property. Highly recommended!",
    image: "/professional-woman-headshot.png",
    property: "Beach Resort Investment",
    date: "January 2024",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    location: "Maputo",
    rating: 5,
    text: "Chélize sold our property in just two weeks! Her marketing strategy and negotiation skills are impressive. We couldn't be happier with the results.",
    image: "/professional-man-headshot.png",
    property: "Family Home Sale",
    date: "December 2023",
  },
  {
    id: 5,
    name: "Isabella Costa",
    location: "Inhambane",
    rating: 5,
    text: "Working with Chélize was a pleasure. She understood exactly what we were looking for and found us the perfect coastal retreat. Her service is truly exceptional.",
    image: "/professional-woman-headshot.png",
    property: "Coastal Retreat in Inhambane",
    date: "November 2023",
  },
  {
    id: 6,
    name: "Miguel Fernandes",
    location: "Nampula",
    rating: 5,
    text: "Chélize's expertise in the Mozambican real estate market is outstanding. She provided valuable insights that helped us make the right investment decision.",
    image: "/professional-man-headshot.png",
    property: "Commercial Property Investment",
    date: "October 2023",
  },
]

export default function TestimonialsPage() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white wave-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-600 mb-8">
            Hear from satisfied clients across Mozambique who trusted me with their real estate journey
          </p>
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-lg font-semibold text-gray-700">5.0 Average Rating</span>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-xl">
              <CardContent className="p-12 text-center">
                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                    <p className="text-sm text-blue-600">{testimonials[currentIndex].property}</p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">What All Clients Say</h2>
            <p className="text-lg text-gray-600">Every client experience matters to me</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">"{testimonial.text}"</blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-gray-600 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-blue-600 font-medium">{testimonial.property}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">200+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">5.0</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">150+</p>
              <p className="text-gray-600">Properties Sold</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Join My Satisfied Clients?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the same exceptional service that has earned these glowing reviews
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link href="/contact">Start Your Real Estate Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
