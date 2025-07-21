import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ProductCard from '@/components/ProductCard'
import WhatsAppButton from '@/components/WhatsAppButton'

import { getFeaturedProducts } from '@/lib/products'

// Get featured products
const featuredProducts = getFeaturedProducts()

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Amazing quality and beautiful designs! The kurti I ordered fits perfectly and the fabric is so comfortable.",
    rating: 5
  },
  {
    name: "Anjali Patel",
    text: "Great collection and excellent customer service. WhatsApp ordering makes it so convenient!",
    rating: 5
  },
  {
    name: "Meera Singh",
    text: "Love the ethnic wear collection. The designs are unique and prices are very reasonable.",
    rating: 4
  }
]

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500"> Perfect Style</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our exclusive collection of premium kurtis, ethnic wear, and designer outfits. 
              Quality craftsmanship meets modern elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg">
                  View Collection
                </Button>
              </Link>
              <WhatsAppButton 
                message="Hi! I'm interested in your latest collection. Please share more details."
                className="bg-green-500 hover:bg-green-600 px-8 py-3 text-lg"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Fashion Collection"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="relative h-64 w-full mt-8">
                <Image
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ethnic Wear"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OffersSection() {
  return (
    <section className="bg-gradient-to-r from-rose-500 to-pink-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">
            🎉 Special Offer Alert!
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Get ₹100 OFF on your first order above ₹999
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              message="Hi! I want to avail the ₹100 OFF offer on my first order. Please help me with the details."
              className="bg-white text-pink-600 hover:bg-gray-100"
            />
            <Link href="/shop">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Arrivals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our latest collection of handpicked designs that blend traditional elegance with contemporary style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/shop">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real reviews from our happy customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <OffersSection />
      <FeaturedProducts />
      <TestimonialsSection />
    </div>
  )
}
