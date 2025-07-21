import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import WhatsAppButton from './WhatsAppButton'

interface ProductCardProps {
  id: string
  name: string
  price: string
  image?: string
  category?: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const placeholderImage = "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400"

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100">
      <CardContent className="p-0">
        <Link href={`/shop/${id}`}>
          <div className="relative overflow-hidden rounded-t-lg h-64">
            <Image
              src={image || placeholderImage}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            {category && (
              <span className="absolute top-2 left-2 bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full z-10">
                {category}
              </span>
            )}
          </div>
        </Link>
        
        <div className="p-4 space-y-3">
          <Link href={`/shop/${id}`}>
            <h3 className="font-medium text-gray-900 hover:text-pink-600 transition-colors line-clamp-2">
              {name}
            </h3>
          </Link>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">₹{price}</span>
            <span className="text-sm text-gray-500">In Stock</span>
          </div>
          
          <WhatsAppButton
            message=""
            productName={name}
            productPrice={`₹${price}`}
            className="w-full bg-pink-500 hover:bg-pink-600"
          />
        </div>
      </CardContent>
    </Card>
  )
}
