"use client"

import React from 'react'
import { Button } from '@/components/ui/button'

interface WhatsAppButtonProps {
  message: string
  phone?: string
  className?: string
  productName?: string
  productPrice?: string
}

export default function WhatsAppButton({ 
  message, 
  phone = "919876543210", // Default phone number - replace with actual
  className = "",
  productName,
  productPrice 
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    let finalMessage = message
    
    if (productName) {
      finalMessage = `Hi, I want to order this:
Product: ${productName}
${productPrice ? `Price: ${productPrice}` : ''}
Size: _____
My Name: _____
My Address: _____`
    }
    
    const encodedMessage = encodeURIComponent(finalMessage)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank')
    }
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 ${className}`}
    >
      Order Now on WhatsApp
    </Button>
  )
}
