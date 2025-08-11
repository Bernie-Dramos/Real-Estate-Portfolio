"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 wave-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CN</span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-gray-900">Chélize Nell</h3>
                <p className="text-sm text-gray-600">{t("footer.pam")}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{t("home.tagline")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("nav.contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">chelize@pamgolding.co.mz</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+258 84 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Maputo, Mozambique</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                {t("nav.services")}
              </Link>
              <Link href="/listings" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                {t("nav.listings")}
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">© 2025 Chélize Nell. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
