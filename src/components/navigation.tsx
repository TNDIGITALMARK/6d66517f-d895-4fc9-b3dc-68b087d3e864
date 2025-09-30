"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'MENU', href: '/menu' },
  { name: 'ABOUT', href: '/about' },
  { name: 'RESERVATIONS', href: '/reservations' },
  { name: 'CONTACT', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-restaurant-dark-brown text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-playfair text-restaurant-golden">
              Bella Vista Bistro
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:text-restaurant-golden ${
                    pathname === item.href
                      ? 'text-restaurant-golden border-b-2 border-restaurant-golden'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/reservations"
              className="bg-restaurant-golden text-restaurant-dark-brown px-6 py-2 text-sm font-medium rounded hover:bg-opacity-90 transition-colors"
            >
              VIEW MENU
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}