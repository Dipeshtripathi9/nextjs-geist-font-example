import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Elegant Boutique - Premium Fashion & Apparel',
  description: 'Discover our exclusive collection of kurtis, ethnic wear, and designer outfits. Quality fashion for the modern woman.',
}

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
            <span className="font-playfair text-xl font-bold text-gray-900">Elegant Boutique</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-pink-600 transition-colors">Shop</Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</Link>
            <Link href="/reviews" className="text-gray-700 hover:text-pink-600 transition-colors">Reviews</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-pink-600 transition-colors flex items-center space-x-1">
                <span>Dashboard</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/dashboard/customer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Customer Dashboard
                  </Link>
                  <Link href="/dashboard/owner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                    Owner Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
              <span className="font-playfair text-xl font-bold text-gray-900">Elegant Boutique</span>
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted destination for premium fashion and ethnic wear. 
              Quality craftsmanship meets modern style.
            </p>
            <div className="text-sm text-gray-500">
              <p>📍 123 Fashion Street, Style City</p>
              <p>📞 +91 98765 43210</p>
              <p>🕒 Mon-Sat: 10AM-8PM, Sun: 11AM-6PM</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/shop" className="block text-gray-600 hover:text-pink-600">Shop Collection</Link>
              <Link href="/about" className="block text-gray-600 hover:text-pink-600">About Us</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-pink-600">Contact</Link>
              <Link href="/reviews" className="block text-gray-600 hover:text-pink-600">Reviews</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">Kurtis & Tunics</p>
              <p className="text-gray-600">Ethnic Wear</p>
              <p className="text-gray-600">Designer Outfits</p>
              <p className="text-gray-600">Accessories</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Elegant Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
