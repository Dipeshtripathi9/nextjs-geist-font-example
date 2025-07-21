'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CustomerSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const CustomerSidebar: React.FC<CustomerSidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'orders', label: 'Order History', icon: '📦' },
    { id: 'profile', label: 'Edit Profile', icon: '👤' },
    { id: 'support', label: 'Chat with Support', icon: '💬' },
    { id: 'shop', label: 'Place New Order', icon: '🛍️' }
  ]

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold">
            C
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Customer Dashboard</h2>
            <p className="text-sm text-gray-500">Welcome back!</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.id === 'shop' ? (
                <Link 
                  href="/shop"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ) : (
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-pink-100 text-pink-600 border-l-4 border-pink-500'
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <Link 
          href="/"
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <span>←</span>
          <span>Back to Store</span>
        </Link>
      </div>
    </div>
  )
}

export default CustomerSidebar
