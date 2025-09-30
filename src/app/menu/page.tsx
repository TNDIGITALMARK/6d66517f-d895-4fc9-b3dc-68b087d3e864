"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { MenuItemCard } from '@/components/menu-item-card'
import { CartSidebar } from '@/components/cart-sidebar'
import { useCart } from '@/components/cart-context'
import { menuCategories, menuItems, MenuItem } from '@/data/menu-data'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { addItem } = useCart()

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const handleAddToCart = (item: MenuItem) => {
    addItem(item)
  }

  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navigation />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair text-restaurant-dark-brown mb-4">
              Our <span className="text-restaurant-golden">Menu</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with the finest ingredients and innovative techniques
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-restaurant-golden text-restaurant-dark-brown'
                  : 'bg-white text-restaurant-dark-brown hover:bg-restaurant-golden hover:text-restaurant-dark-brown'
              }`}
            >
              All Items
            </button>
            {menuCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-restaurant-golden text-restaurant-dark-brown'
                    : 'bg-white text-restaurant-dark-brown hover:bg-restaurant-golden hover:text-restaurant-dark-brown'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <CartSidebar />
    </div>
  )
}