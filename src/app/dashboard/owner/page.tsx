'use client'

import React, { useState } from 'react'
import OwnerSidebar from '@/components/dashboard/OwnerSidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getOwnerOrders, getOrderStats, updateOrderStatus } from '@/lib/orders'
import { products } from '@/lib/products'

const OwnerDashboard = () => {
  const [activeSection, setActiveSection] = useState('orders')
  const [orders, setOrders] = useState(getOwnerOrders())
  const [newOffer, setNewOffer] = useState({
    title: '',
    description: '',
    discount: '',
    validUntil: ''
  })

  const stats = getOrderStats()

  const handleStatusUpdate = (orderId: string, newStatus: any) => {
    updateOrderStatus(orderId, newStatus)
    setOrders(getOwnerOrders())
    alert(`Order ${orderId} status updated to ${newStatus}`)
  }

  const handleOfferSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Offer created successfully!')
    setNewOffer({ title: '', description: '', discount: '', validUntil: '' })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'shipped': return 'bg-blue-100 text-blue-800'
      case 'confirmed': return 'bg-yellow-100 text-yellow-800'
      case 'pending': return 'bg-orange-100 text-orange-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderOrders = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Customer Orders</h2>
        <p className="text-gray-600">View and update order statuses</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{stats.totalOrders}</div>
            <div className="text-sm text-gray-600">Total Orders</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">₹{stats.totalRevenue.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">{stats.pendingOrders}</div>
            <div className="text-sm text-gray-600">Pending Orders</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">₹{stats.averageOrderValue}</div>
            <div className="text-sm text-gray-600">Avg Order Value</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                  <p className="text-sm text-gray-500">
                    {order.customerName} • {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">{order.customerPhone}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                  <Select onValueChange={(value) => handleStatusUpdate(order.id, value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Update" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
                <div>
                  <p className="text-sm text-gray-600">Payment: {order.paymentMethod.toUpperCase()}</p>
                  <p className="text-sm text-gray-500 truncate max-w-xs">{order.shippingAddress}</p>
                </div>
                <p className="text-lg font-bold text-gray-900">₹{order.totalAmount}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Products</h2>
          <p className="text-gray-600">Add, edit, or remove products from your store</p>
        </div>
        <Button className="bg-rose-500 hover:bg-rose-600">
          Add New Product
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? `${product.stockCount} in stock` : 'Out of stock'}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-red-600 hover:text-red-700">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h2>
        <p className="text-gray-600">Track your business performance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{stats.totalOrders}</div>
            <p className="text-sm text-green-600 mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">₹{stats.totalRevenue.toLocaleString()}</div>
            <p className="text-sm text-green-600 mt-1">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</div>
            <p className="text-sm text-orange-600 mt-1">Needs attention</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">₹{stats.averageOrderValue}</div>
            <p className="text-sm text-green-600 mt-1">+5% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Delivered</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-sm font-medium">{stats.deliveredOrders}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pending</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <span className="text-sm font-medium">{stats.pendingOrders}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Kurtis</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Ethnic</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Designer</span>
                <span className="text-sm font-medium">25%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderOffers = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Offers & Messages</h2>
        <p className="text-gray-600">Create special offers and promotional messages</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Create New Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOfferSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Offer Title</Label>
              <Input
                id="title"
                value={newOffer.title}
                onChange={(e) => setNewOffer({...newOffer, title: e.target.value})}
                placeholder="e.g., Summer Sale - 50% Off"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newOffer.description}
                onChange={(e) => setNewOffer({...newOffer, description: e.target.value})}
                placeholder="Describe your offer in detail..."
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="discount">Discount Percentage</Label>
                <Input
                  id="discount"
                  value={newOffer.discount}
                  onChange={(e) => setNewOffer({...newOffer, discount: e.target.value})}
                  placeholder="e.g., 20"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="validUntil">Valid Until</Label>
                <Input
                  id="validUntil"
                  type="date"
                  value={newOffer.validUntil}
                  onChange={(e) => setNewOffer({...newOffer, validUntil: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>
            
            <Button type="submit" className="bg-rose-500 hover:bg-rose-600">
              Create Offer
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Current Active Offers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">🎉 Special Offer Alert!</h3>
              <p className="text-green-700 mt-1">Get ₹100 OFF on your first order above ₹999</p>
              <p className="text-sm text-green-600 mt-2">Valid until: Dec 31, 2024</p>
            </div>
            
            <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">New Arrivals</h3>
              <p className="text-blue-700 mt-1">Check out our latest collection of designer kurtis and ethnic wear</p>
              <p className="text-sm text-blue-600 mt-2">Active</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'orders':
        return renderOrders()
      case 'products':
        return renderProducts()
      case 'analytics':
        return renderAnalytics()
      case 'offers':
        return renderOffers()
      default:
        return renderOrders()
    }
  }

  return (
    <>
      <OwnerSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </>
  )
}

export default OwnerDashboard
