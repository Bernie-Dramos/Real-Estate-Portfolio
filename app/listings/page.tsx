"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MapPin, Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"

const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Maputo Bay",
    price: "$850,000",
    image: "/luxury-mozambique-villa.png",
    bedrooms: 4,
    bathrooms: 3,
    area: "350m²",
    type: "villa",
    features: ["Ocean View", "Private Beach", "Swimming Pool", "Garden"],
  },
  {
    id: 2,
    title: "Modern City Apartment",
    location: "Maputo Central",
    price: "$320,000",
    image: "/modern-apartment-maputo.png",
    bedrooms: 2,
    bathrooms: 2,
    area: "120m²",
    type: "apartment",
    features: ["City View", "Balcony", "Parking", "Security"],
  },
  {
    id: 3,
    title: "Coastal Family Home",
    location: "Inhaca Island",
    price: "$650,000",
    image: "/inhaca-island-home.png",
    bedrooms: 5,
    bathrooms: 4,
    area: "280m²",
    type: "house",
    features: ["Garden", "Sea Access", "Traditional Design", "Terrace"],
  },
  {
    id: 4,
    title: "Executive Penthouse",
    location: "Maputo",
    price: "$1,200,000",
    image: "/executive-penthouse-maputo.png",
    bedrooms: 3,
    bathrooms: 3,
    area: "200m²",
    type: "apartment",
    features: ["Panoramic Views", "Rooftop Terrace", "Premium Finishes", "Concierge"],
  },
  {
    id: 5,
    title: "Tropical Beach House",
    location: "Tofo Beach",
    price: "$480,000",
    image: "/tofo-beach-house.png",
    bedrooms: 3,
    bathrooms: 2,
    area: "180m²",
    type: "house",
    features: ["Beach Access", "Outdoor Kitchen", "Tropical Garden", "Surfing Spot"],
  },
  {
    id: 6,
    title: "Urban Loft",
    location: "Maputo Downtown",
    price: "$280,000",
    image: "/urban-loft-maputo.png",
    bedrooms: 1,
    bathrooms: 1,
    area: "85m²",
    type: "apartment",
    features: ["High Ceilings", "Industrial Design", "City Center", "Modern Amenities"],
  },
  {
    id: 7,
    title: "Luxury Safari Lodge",
    location: "Gorongosa",
    price: "$950,000",
    image: "/luxury-gorongosa-lodge.png",
    bedrooms: 6,
    bathrooms: 5,
    area: "450m²",
    type: "villa",
    features: ["Safari Views", "Private Pool", "Game Viewing", "Eco-Friendly"],
  },
  {
    id: 8,
    title: "Waterfront Condo",
    location: "Beira Marina",
    price: "$380,000",
    image: "/placeholder.svg?height=300&width=400",
    bedrooms: 2,
    bathrooms: 2,
    area: "110m²",
    type: "apartment",
    features: ["Marina Views", "Balcony", "Swimming Pool", "Gym Access"],
  },
]

export default function ListingsPage() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProperties = properties.filter((property) => {
    const matchesFilter = filter === "all" || property.type === filter
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white wave-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{t("listings.title")}</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover exceptional properties across Mozambique's most desirable locations
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {t("listings.filter.all")}
              </Button>
              <Button
                variant={filter === "house" ? "default" : "outline"}
                onClick={() => setFilter("house")}
                className={filter === "house" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {t("listings.filter.house")}
              </Button>
              <Button
                variant={filter === "apartment" ? "default" : "outline"}
                onClick={() => setFilter("apartment")}
                className={filter === "apartment" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {t("listings.filter.apartment")}
              </Button>
              <Button
                variant={filter === "villa" ? "default" : "outline"}
                onClick={() => setFilter("villa")}
                className={filter === "villa" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {t("listings.filter.villa")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {property.type}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{property.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={`/listings/${property.id}`}>{t("listings.inquire")}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-lg mb-6 opacity-90">
            I have access to exclusive off-market properties. Let's discuss your specific requirements.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link href="/contact">Contact Me for Exclusive Listings</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
