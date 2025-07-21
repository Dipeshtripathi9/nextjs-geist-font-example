export interface Product {
  id: string
  name: string
  price: string
  originalPrice?: string
  image?: string
  images?: string[]
  category: string
  description?: string
  features?: string[]
  sizes?: string[]
  colors?: string[]
  inStock?: boolean
  stockCount?: number
}

export const products: Product[] = [
  {
    id: "1",
    name: "Floral Cotton Kurti",
    price: "1299",
    originalPrice: "1599",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Kurtis",
    description: "Beautiful floral cotton kurti perfect for daily wear and casual occasions. Made from premium quality cotton fabric with intricate floral prints. Comfortable fit with elegant design.",
    features: [
      "100% Pure Cotton",
      "Machine Washable", 
      "Comfortable Fit",
      "Breathable Fabric",
      "Fade Resistant Colors"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Blue", "Green"],
    inStock: true,
    stockCount: 15
  },
  {
    id: "2", 
    name: "Elegant Ethnic Dress",
    price: "2199",
    originalPrice: "2799",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Ethnic",
    description: "Stunning ethnic dress with traditional embroidery and modern silhouette. Perfect for festivals, weddings, and special occasions.",
    features: [
      "Hand Embroidered",
      "Premium Fabric",
      "Traditional Design",
      "Comfortable Fit",
      "Dry Clean Only"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Maroon", "Golden"],
    inStock: true,
    stockCount: 8
  },
  {
    id: "3",
    name: "Designer Anarkali Suit",
    price: "3499",
    originalPrice: "4299",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Designer",
    description: "Exquisite designer Anarkali suit with intricate embroidery and premium fabric. Perfect for weddings and special occasions.",
    features: [
      "Designer Embroidery",
      "Premium Silk Fabric",
      "Traditional Cut",
      "Comfortable Fit",
      "Dry Clean Recommended"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Royal Blue", "Maroon", "Golden"],
    inStock: true,
    stockCount: 5
  },
  {
    id: "4",
    name: "Casual Denim Kurti",
    price: "1599",
    originalPrice: "1999",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Casual",
    description: "Trendy denim kurti perfect for casual outings and daily wear. Comfortable fit with modern styling.",
    features: [
      "Premium Denim",
      "Machine Washable",
      "Modern Cut",
      "Comfortable Fit",
      "Fade Resistant"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Black", "Light Blue"],
    inStock: true,
    stockCount: 12
  },
  {
    id: "5",
    name: "Traditional Silk Saree",
    price: "4999",
    originalPrice: "6499",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Ethnic",
    description: "Elegant silk saree with traditional patterns. Perfect for festivals and special occasions.",
    features: [
      "Pure Silk",
      "Traditional Weave",
      "Rich Colors",
      "Includes Blouse",
      "Dry Clean Only"
    ],
    sizes: ["Free Size"],
    colors: ["Red", "Green", "Blue"],
    inStock: true,
    stockCount: 6
  },
  {
    id: "6",
    name: "Embroidered Party Wear",
    price: "2799",
    originalPrice: "3499",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Designer",
    description: "Stunning embroidered party wear dress with modern silhouette and traditional embroidery.",
    features: [
      "Hand Embroidered",
      "Premium Fabric",
      "Party Wear",
      "Comfortable Fit",
      "Dry Clean Only"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Maroon"],
    inStock: true,
    stockCount: 7
  },
  {
    id: "7",
    name: "Cotton Printed Kurti",
    price: "999",
    originalPrice: "1299",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Kurtis",
    description: "Comfortable cotton printed kurti for daily wear. Soft fabric with beautiful prints.",
    features: [
      "100% Cotton",
      "Machine Washable",
      "Printed Design",
      "Comfortable Fit",
      "Breathable"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Yellow", "Green"],
    inStock: true,
    stockCount: 20
  },
  {
    id: "8",
    name: "Palazzo Set",
    price: "1899",
    originalPrice: "2399",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Casual",
    description: "Comfortable palazzo set with kurti. Perfect for casual wear and daily use.",
    features: [
      "Cotton Blend",
      "Machine Washable",
      "Palazzo Set",
      "Comfortable Fit",
      "Easy Care"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Cream", "Light Pink"],
    inStock: true,
    stockCount: 10
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4)
}
