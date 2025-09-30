"use client"

import Image from 'next/image'
import { useState } from 'react'
import { MenuItem } from '@/data/menu-data'

interface MenuItemCardProps {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {item.featured && (
          <div className="absolute top-4 left-4 bg-restaurant-golden text-restaurant-dark-brown px-3 py-1 text-sm font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-playfair text-restaurant-dark-brown">{item.name}</h3>
          <span className="text-xl font-medium text-restaurant-golden">${item.price}</span>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

        <button
          onClick={() => onAddToCart(item)}
          className="w-full bg-restaurant-dark-brown text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
        >
          Add to Order
        </button>
      </div>
    </div>
  )
}