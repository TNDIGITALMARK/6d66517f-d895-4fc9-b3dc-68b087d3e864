"use client"

import { useState } from 'react'
import { useCart } from './cart-context'

export function CartSidebar() {
  const { items, total, itemCount, updateQuantity, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  if (itemCount === 0) return null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-restaurant-golden text-restaurant-dark-brown w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-lg font-bold z-50 hover:bg-opacity-90 transition-colors"
      >
        {itemCount}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end">
          <div className="bg-white h-full w-full max-w-md shadow-xl">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-playfair text-restaurant-dark-brown">Your Order</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-restaurant-dark-brown">{item.name}</h4>
                        <p className="text-sm text-gray-600">${item.price} each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-restaurant-golden">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-2xl font-playfair text-restaurant-golden">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-3">
                  <button className="w-full bg-restaurant-dark-brown text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Place Order
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}