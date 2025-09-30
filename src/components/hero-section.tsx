"use client"

import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/generated/hero-restaurant-scene.jpg"
          alt="Elegant restaurant dining scene"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-playfair mb-6 leading-tight">
          Experience Culinary
          <br />
          <span className="text-restaurant-golden">Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl font-open-sans mb-8 opacity-90 max-w-2xl mx-auto">
          Indulge in an unforgettable dining experience where every dish tells a story of passion, tradition, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/reservations"
            className="bg-restaurant-golden text-restaurant-dark-brown px-8 py-4 text-lg font-medium rounded hover:bg-opacity-90 transition-colors"
          >
            MAKE RESERVATION
          </Link>
          <Link
            href="/menu"
            className="border-2 border-white text-white px-8 py-4 text-lg font-medium rounded hover:bg-white hover:text-restaurant-dark-brown transition-colors"
          >
            VIEW MENU
          </Link>
        </div>
      </div>
    </section>
  )
}