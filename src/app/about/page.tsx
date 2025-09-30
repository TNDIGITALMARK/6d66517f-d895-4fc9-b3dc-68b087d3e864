import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { restaurantInfo, testimonials } from '@/data/menu-data'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-restaurant-dark-brown text-white flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-restaurant-scene.jpg"
            alt="Restaurant interior"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair mb-4">
            About <span className="text-restaurant-golden">Bella Vista Bistro</span>
          </h1>
          <p className="text-xl opacity-90">{restaurantInfo.description}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair text-restaurant-dark-brown mb-6">
                Our <span className="text-restaurant-golden">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018 by Chef Isabella Martinez, Bella Vista Bistro has quickly become
                  the premier fine dining destination in the city. Our passion for culinary excellence
                  and commitment to using only the finest ingredients drives every dish we create.
                </p>
                <p>
                  Located in the heart of the Fine Dining District, our restaurant offers an intimate
                  setting where modern culinary techniques meet classic flavors. Each meal is a journey
                  through carefully curated tastes and textures, designed to create unforgettable memories.
                </p>
                <p>
                  Our team of award-winning chefs work tirelessly to source the freshest local ingredients,
                  creating seasonal menus that celebrate the bounty of our region while incorporating
                  international influences and innovative techniques.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/generated/hero-restaurant-scene.jpg"
                alt="Chef preparing food"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chef Team */}
      <section className="py-20 bg-restaurant-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair text-restaurant-dark-brown mb-4">
              Meet Our <span className="text-restaurant-golden">Team</span>
            </h2>
            <p className="text-lg text-gray-600">
              The talented individuals behind every exceptional dish
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-playfair text-restaurant-dark-brown mb-2">
                Chef Isabella Martinez
              </h3>
              <p className="text-restaurant-golden font-medium mb-3">Executive Chef & Owner</p>
              <p className="text-gray-600 text-sm">
                With 15 years of experience in Michelin-starred restaurants,
                Chef Martinez brings passion and innovation to every dish.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-playfair text-restaurant-dark-brown mb-2">
                Chef Marcus Thompson
              </h3>
              <p className="text-restaurant-golden font-medium mb-3">Sous Chef</p>
              <p className="text-gray-600 text-sm">
                Specializing in modern French cuisine, Chef Thompson creates
                artful presentations with bold, sophisticated flavors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-playfair text-restaurant-dark-brown mb-2">
                Sarah Kim
              </h3>
              <p className="text-restaurant-golden font-medium mb-3">Pastry Chef</p>
              <p className="text-gray-600 text-sm">
                Our award-winning pastry chef creates stunning desserts that
                perfectly complement our savory offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair text-restaurant-dark-brown mb-4">
              What Our <span className="text-restaurant-golden">Guests Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-restaurant-cream p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-restaurant-golden text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-restaurant-dark-brown">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20 bg-restaurant-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-playfair text-restaurant-golden mb-6">Hours</h3>
              <div className="space-y-3">
                {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-medium">{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-playfair text-restaurant-golden mb-6">Location</h3>
              <div className="space-y-3">
                <p>{restaurantInfo.contact.address}</p>
                <p>Phone: {restaurantInfo.contact.phone}</p>
                <p>Email: {restaurantInfo.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}