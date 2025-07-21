"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import WhatsAppButton from '@/components/WhatsAppButton'

// Sample reviews data
const customerReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "2024-01-15",
    review: "Amazing quality and beautiful designs! The kurti I ordered fits perfectly and the fabric is so comfortable. The WhatsApp ordering process was super convenient. Highly recommended!",
    product: "Floral Cotton Kurti",
    verified: true
  },
  {
    id: 2,
    name: "Anjali Patel",
    rating: 5,
    date: "2024-01-12",
    review: "Great collection and excellent customer service. The owner personally helped me choose the right size and color. The ethnic dress I bought received so many compliments!",
    product: "Elegant Ethnic Dress",
    verified: true
  },
  {
    id: 3,
    name: "Meera Singh",
    rating: 4,
    date: "2024-01-10",
    review: "Love the ethnic wear collection. The designs are unique and prices are very reasonable. Only suggestion would be to add more color options. Overall very satisfied!",
    product: "Designer Anarkali Suit",
    verified: true
  },
  {
    id: 4,
    name: "Kavya Reddy",
    rating: 5,
    date: "2024-01-08",
    review: "Excellent quality fabrics and beautiful stitching. I've ordered multiple times and each piece has been perfect. The delivery is also very fast within the city.",
    product: "Cotton Printed Kurti",
    verified: true
  },
  {
    id: 5,
    name: "Sneha Gupta",
    rating: 5,
    date: "2024-01-05",
    review: "Best boutique in the area! The owner has great taste in selecting designs. I bought a complete outfit for my sister's wedding and everyone loved it. Will definitely shop again!",
    product: "Traditional Silk Saree",
    verified: true
  },
  {
    id: 6,
    name: "Ritu Agarwal",
    rating: 4,
    date: "2024-01-03",
    review: "Good quality products and reasonable prices. The store has a nice collection of daily wear kurtis. Customer service is also very helpful and responsive.",
    product: "Casual Denim Kurti",
    verified: true
  }
]

export default function ReviewsPage() {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    product: '',
    review: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }))
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log('New review submitted:', newReview)
    alert('Thank you for your review! It will be published after verification.')
    setNewReview({ name: '', email: '', rating: 5, product: '', review: '' })
    setShowReviewForm(false)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  const averageRating = customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See what our happy customers have to say about their shopping experience
          </p>
          
          {/* Rating Summary */}
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-sm">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating))}
            </div>
            <p className="text-gray-600">
              Based on {customerReviews.length} verified reviews
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
          >
            {showReviewForm ? 'Cancel Review' : 'Write a Review'}
          </Button>
          <WhatsAppButton
            message="Hi! I'd like to share my feedback about my recent purchase. Can you help me?"
            className="bg-green-500 hover:bg-green-600 px-8 py-3"
          />
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Share Your Experience
              </h2>
              
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={newReview.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={newReview.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product">Product Purchased</Label>
                    <Input
                      id="product"
                      name="product"
                      type="text"
                      value={newReview.product}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="e.g., Floral Cotton Kurti"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="rating">Rating *</Label>
                    <select
                      id="rating"
                      name="rating"
                      value={newReview.rating}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value={5}>5 Stars - Excellent</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Good</option>
                      <option value={2}>2 Stars - Fair</option>
                      <option value={1}>1 Star - Poor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="review">Your Review *</Label>
                  <Textarea
                    id="review"
                    name="review"
                    value={newReview.review}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="Share your experience with our products and service..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3"
                >
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  {renderStars(review.rating)}
                </div>

                {review.product && (
                  <p className="text-sm text-pink-600 font-medium mb-3">
                    Product: {review.product}
                  </p>
                )}

                <p className="text-gray-600 leading-relaxed">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience Our Quality?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us for their fashion needs. 
                Browse our collection and place your order today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3">
                  <a href="/shop">Shop Now</a>
                </Button>
                <WhatsAppButton
                  message="Hi! I saw the great reviews and I'm interested in your collection. Can you help me choose something?"
                  className="bg-green-500 hover:bg-green-600 px-8 py-3"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Review Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-500 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-500 mb-2">95%</div>
            <div className="text-gray-600">Positive Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-500 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
