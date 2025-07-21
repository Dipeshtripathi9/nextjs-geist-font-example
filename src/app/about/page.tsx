import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Elegant Boutique
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for premium fashion and ethnic wear since 2015
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Owner Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-gray-900">
              Meet Our Founder
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Hello! I'm Priya Sharma, the founder and creative director of Elegant Boutique. 
              What started as a small dream in 2015 has grown into a beloved fashion destination 
              for women who appreciate quality, style, and authenticity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With over 8 years of experience in the fashion industry, I personally curate 
              each piece in our collection. My passion lies in bringing you timeless designs 
              that celebrate both traditional craftsmanship and contemporary style.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every kurti, every ethnic dress, and every designer piece is chosen with love 
              and attention to detail. I believe that fashion should make you feel confident, 
              comfortable, and beautiful.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl p-1">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Priya Sharma - Founder"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elegant Boutique began in a small corner of Fashion Street with just 20 pieces 
                  and a big dream. I wanted to create a space where women could find beautiful, 
                  high-quality ethnic wear that didn't compromise on comfort or style.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">Today</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to serve over 500 happy customers with a collection of 
                  100+ carefully curated pieces. From daily wear kurtis to designer ethnic 
                  outfits, we've become a trusted name in premium fashion.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every piece is carefully inspected 
                  to ensure it meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Customer Love</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're here to help you find 
                  the perfect outfit for every occasion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We blend traditional craftsmanship with modern designs to create 
                  unique pieces that stand out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Store Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Visit Our Store
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Fashion Street, Style City, State 400001</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Store Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600">Handpicked premium quality fabrics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600">Affordable luxury for everyone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600">Easy WhatsApp ordering system</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600">Personal styling consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600">Hassle-free exchange policy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600">Fast delivery across the city</span>
                </div>
              </div>

              <div className="mt-8">
                <WhatsAppButton
                  message="Hi! I'd like to know more about your store and collection. Can you help me?"
                  className="w-full bg-green-500 hover:bg-green-600"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
