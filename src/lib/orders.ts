export interface OrderItem {
  id: string
  name: string
  quantity: number
  price: string
  size?: string
  color?: string
}

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  orderDate: string
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  items: OrderItem[]
  totalAmount: string
  shippingAddress: string
  paymentMethod: 'cod' | 'online'
}

export const dummyOrders: Order[] = [
  {
    id: "ORD001",
    customerName: "Priya Sharma",
    customerEmail: "priya.sharma@email.com",
    customerPhone: "+91 98765 43210",
    orderDate: "2024-01-15",
    status: "delivered",
    items: [
      {
        id: "1",
        name: "Floral Cotton Kurti",
        quantity: 1,
        price: "1299",
        size: "M",
        color: "Pink"
      }
    ],
    totalAmount: "1299",
    shippingAddress: "123 Main Street, Mumbai, Maharashtra 400001",
    paymentMethod: "cod"
  },
  {
    id: "ORD002",
    customerName: "Anjali Patel",
    customerEmail: "anjali.patel@email.com",
    customerPhone: "+91 87654 32109",
    orderDate: "2024-01-18",
    status: "shipped",
    items: [
      {
        id: "2",
        name: "Elegant Ethnic Dress",
        quantity: 1,
        price: "2199",
        size: "L",
        color: "Red"
      },
      {
        id: "7",
        name: "Cotton Printed Kurti",
        quantity: 2,
        price: "999",
        size: "M",
        color: "Pink"
      }
    ],
    totalAmount: "4197",
    shippingAddress: "456 Garden Road, Delhi, Delhi 110001",
    paymentMethod: "online"
  },
  {
    id: "ORD003",
    customerName: "Meera Singh",
    customerEmail: "meera.singh@email.com",
    customerPhone: "+91 76543 21098",
    orderDate: "2024-01-20",
    status: "confirmed",
    items: [
      {
        id: "3",
        name: "Designer Anarkali Suit",
        quantity: 1,
        price: "3499",
        size: "S",
        color: "Royal Blue"
      }
    ],
    totalAmount: "3499",
    shippingAddress: "789 Park Avenue, Bangalore, Karnataka 560001",
    paymentMethod: "cod"
  },
  {
    id: "ORD004",
    customerName: "Kavya Reddy",
    customerEmail: "kavya.reddy@email.com",
    customerPhone: "+91 65432 10987",
    orderDate: "2024-01-22",
    status: "pending",
    items: [
      {
        id: "5",
        name: "Traditional Silk Saree",
        quantity: 1,
        price: "4999",
        size: "Free Size",
        color: "Red"
      }
    ],
    totalAmount: "4999",
    shippingAddress: "321 Temple Street, Chennai, Tamil Nadu 600001",
    paymentMethod: "online"
  },
  {
    id: "ORD005",
    customerName: "Riya Gupta",
    customerEmail: "riya.gupta@email.com",
    customerPhone: "+91 54321 09876",
    orderDate: "2024-01-25",
    status: "delivered",
    items: [
      {
        id: "4",
        name: "Casual Denim Kurti",
        quantity: 1,
        price: "1599",
        size: "XL",
        color: "Blue"
      },
      {
        id: "8",
        name: "Palazzo Set",
        quantity: 1,
        price: "1899",
        size: "L",
        color: "White"
      }
    ],
    totalAmount: "3498",
    shippingAddress: "654 Market Square, Pune, Maharashtra 411001",
    paymentMethod: "cod"
  }
]

// Helper functions
export const getCustomerOrders = (customerEmail?: string): Order[] => {
  if (customerEmail) {
    return dummyOrders.filter(order => order.customerEmail === customerEmail)
  }
  // For demo purposes, return first 3 orders for customer view
  return dummyOrders.slice(0, 3)
}

export const getOwnerOrders = (): Order[] => {
  return dummyOrders
}

export const getOrderById = (id: string): Order | undefined => {
  return dummyOrders.find(order => order.id === id)
}

export const updateOrderStatus = (id: string, status: Order['status']): boolean => {
  const orderIndex = dummyOrders.findIndex(order => order.id === id)
  if (orderIndex !== -1) {
    dummyOrders[orderIndex].status = status
    return true
  }
  return false
}

export const getOrderStats = () => {
  const totalOrders = dummyOrders.length
  const totalRevenue = dummyOrders.reduce((sum, order) => sum + parseInt(order.totalAmount), 0)
  const pendingOrders = dummyOrders.filter(order => order.status === 'pending').length
  const deliveredOrders = dummyOrders.filter(order => order.status === 'delivered').length
  
  return {
    totalOrders,
    totalRevenue,
    pendingOrders,
    deliveredOrders,
    averageOrderValue: totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0
  }
}
