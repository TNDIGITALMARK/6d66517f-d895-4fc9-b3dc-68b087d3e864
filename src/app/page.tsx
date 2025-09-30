import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* What Makes Us Unique Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair text-restaurant-dark-brown mb-4">
              What Makes Us <span className="text-restaurant-golden">Unique</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence shines through every aspect of your dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-restaurant-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-playfair text-restaurant-dark-brown mb-2">OUR CHEFS</h3>
              <p className="text-gray-600">
                Award-winning chefs creating culinary masterpieces with the finest ingredients
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-restaurant-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥘</span>
              </div>
              <h3 className="text-xl font-playfair text-restaurant-dark-brown mb-2">OUR FOOD</h3>
              <p className="text-gray-600">
                Fresh, locally sourced ingredients transformed into extraordinary dishes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-restaurant-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍷</span>
              </div>
              <h3 className="text-xl font-playfair text-restaurant-dark-brown mb-2">PRIVATE EVENTS</h3>
              <p className="text-gray-600">
                Elegant private dining spaces perfect for special occasions and celebrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-restaurant-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair text-restaurant-dark-brown mb-4">
              Featured <span className="text-restaurant-golden">Dishes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured dishes - will be replaced with actual menu items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair text-restaurant-dark-brown mb-2">Signature Dish {item}</h3>
                  <p className="text-gray-600 mb-4">Delicious description of this amazing dish</p>
                  <p className="text-restaurant-golden font-medium">$32</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-restaurant-dark-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-playfair mb-6">
            Ready for an <span className="text-restaurant-golden">Unforgettable</span> Evening?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your table today and embark on a culinary journey like no other
          </p>
          <a
            href="/reservations"
            className="bg-restaurant-golden text-restaurant-dark-brown px-8 py-4 text-lg font-medium rounded hover:bg-opacity-90 transition-colors inline-block"
          >
            MAKE A RESERVATION
          </a>
        </div>
      </section>
    </div>
  );
}