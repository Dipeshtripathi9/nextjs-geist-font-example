'use client'

import React from 'react'
import Link from 'next/link'

interface OwnerSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const OwnerSidebar: React.FC<OwnerSidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'orders', label: 'Manage Customer Orders', icon: '📋' },
    { id: 'products', label: 'Manage Products', icon: '👗' },
    { id: 'analytics', label: 'View Analytics', icon: '📊' },
    { id: 'offers', label: 'Add Offers & Messages', icon: '🎯' }
  ]

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
            O
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Owner Dashboard</h2>
            <p className="text-sm text-gray-500">Manage your store</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-rose-100 text-rose-600 border-l-4 border-rose-500'
                    : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
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

export default OwnerSidebar
