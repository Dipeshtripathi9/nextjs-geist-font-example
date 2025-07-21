'use client'

import React, { useState } from 'react'
import CustomerSidebar from '@/components/dashboard/CustomerSidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { getCustomerOrders } from '@/lib/orders'
import Link from 'next/link'

const CustomerDashboard = () => {
  const [activeSection, setActiveSection] = useState('orders')
  const [profile, setProfile] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    address: '123 Main Street, Mumbai, Maharashtra 400001'
  })
  const [chatMessage, setChatMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([
    { sender: 'support', message: 'Hello! How can I help you today?', time: '10:30 AM' },
    { sender: 'customer', message: 'I want to know about my recent order status', time: '10:32 AM' },
    { sender: 'support', message: 'Sure! Let me check that for you. Your order ORD001 has been delivered successfully.', time: '10:35 AM' }
  ])

  const orders = getCustomerOrders('priya.sharma@email.com')

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Profile updated successfully!')
  }

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([...chatHistory, { 
        sender: 'customer', 
        message: chatMessage, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setChatMessage('')
      
      // Simulate support response
      setTimeout(() => {
        setChatHistory(prev => [...prev, {
          sender: 'support',
          message: 'Thank you for your message. Our team will get back to you shortly!',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
      }, 2000)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'shipped': return 'bg-blue-100 text-blue-800'
      case 'confirmed': return 'bg-yellow-100 text-yellow-800'
      case 'pending': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderOrderHistory = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order History</h2>
        <p className="text-gray-600">Track and view all your past orders</p>
      </div>
      
      {orders.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-500 mb-4">Start shopping to see your orders here</p>
            <Link href="/shop">
              <Button className="bg-pink-500 hover:bg-pink-600">
                Start Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                    <p className="text-sm text-gray-500">Placed on {new Date(order.orderDate).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-900">₹{item.price}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-lg font-bold text-gray-900">₹{order.totalAmount}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )

  const renderEditProfile = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Edit Profile</h2>
        <p className="text-gray-600">Update your personal information</p>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                className="mt-1"
                rows={3}
              />
            </div>
            
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600">
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )

  const renderChatSupport = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Chat with Support</h2>
        <p className="text-gray-600">Get help from our customer support team</p>
      </div>
      
      <Card className="h-96">
        <CardHeader className="bg-pink-50 border-b">
          <CardTitle className="text-lg">Support Chat</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex flex-col h-full">
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  chat.sender === 'customer' 
                    ? 'bg-pink-500 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{chat.message}</p>
                  <p className={`text-xs mt-1 ${
                    chat.sender === 'customer' ? 'text-pink-100' : 'text-gray-500'
                  }`}>
                    {chat.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t bg-gray-50">
            <div className="flex space-x-2">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-pink-500 hover:bg-pink-600">
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'orders':
        return renderOrderHistory()
      case 'profile':
        return renderEditProfile()
      case 'support':
        return renderChatSupport()
      default:
        return renderOrderHistory()
    }
  }

  return (
    <>
      <CustomerSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </>
  )
}

export default CustomerDashboard
