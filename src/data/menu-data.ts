export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  featured?: boolean
}

export const menuCategories = [
  { id: 'appetizers', name: 'Appetizers', description: 'Start your culinary journey' },
  { id: 'mains', name: 'Main Courses', description: 'Our signature dishes' },
  { id: 'desserts', name: 'Desserts', description: 'Sweet endings' },
  { id: 'beverages', name: 'Beverages', description: 'Perfect pairings' },
]

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'app-1',
    name: 'Seared Scallops',
    description: 'Pan-seared day boat scallops with cauliflower purée and microgreens',
    price: 28,
    category: 'appetizers',
    image: '/generated/appetizer-scallops.jpg',
    featured: true,
  },
  {
    id: 'app-2',
    name: 'Duck Liver Mousse',
    description: 'Silky duck liver mousse with caramelized onions and toasted brioche',
    price: 22,
    category: 'appetizers',
    image: '/generated/appetizer-scallops.jpg',
  },
  {
    id: 'app-3',
    name: 'Oysters Rockefeller',
    description: 'Fresh Blue Point oysters with creamed spinach and Pernod',
    price: 24,
    category: 'appetizers',
    image: '/generated/appetizer-scallops.jpg',
  },

  // Main Courses
  {
    id: 'main-1',
    name: 'Herb-Crusted Rack of Lamb',
    description: 'New Zealand lamb with rosemary crust, roasted vegetables, and red wine jus',
    price: 48,
    category: 'mains',
    image: '/generated/main-lamb-chops.jpg',
    featured: true,
  },
  {
    id: 'main-2',
    name: 'Pan-Seared Halibut',
    description: 'Alaskan halibut with lemon risotto, asparagus, and brown butter sauce',
    price: 42,
    category: 'mains',
    image: '/generated/main-lamb-chops.jpg',
  },
  {
    id: 'main-3',
    name: 'Wagyu Beef Tenderloin',
    description: 'Premium wagyu beef with truffle mashed potatoes and seasonal vegetables',
    price: 65,
    category: 'mains',
    image: '/generated/main-lamb-chops.jpg',
    featured: true,
  },
  {
    id: 'main-4',
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with cherry gastrique and garlic confit',
    price: 38,
    category: 'mains',
    image: '/generated/main-lamb-chops.jpg',
  },

  // Desserts
  {
    id: 'dess-1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, vanilla ice cream, and berry coulis',
    price: 16,
    category: 'desserts',
    image: '/generated/dessert-lava-cake.jpg',
    featured: true,
  },
  {
    id: 'dess-2',
    name: 'Crème Brûlée',
    description: 'Classic vanilla custard with caramelized sugar and fresh berries',
    price: 14,
    category: 'desserts',
    image: '/generated/dessert-lava-cake.jpg',
  },
  {
    id: 'dess-3',
    name: 'Tiramisu',
    description: 'Traditional Italian dessert with espresso-soaked ladyfingers',
    price: 15,
    category: 'desserts',
    image: '/generated/dessert-lava-cake.jpg',
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'Wine Pairing Flight',
    description: 'Curated selection of wines paired with your meal',
    price: 35,
    category: 'beverages',
    image: '/generated/hero-restaurant-scene.jpg',
  },
  {
    id: 'bev-2',
    name: 'Craft Cocktail',
    description: 'House-made cocktails featuring premium spirits and fresh ingredients',
    price: 18,
    category: 'beverages',
    image: '/generated/hero-restaurant-scene.jpg',
  },
]

export const restaurantInfo = {
  name: 'Bella Vista Bistro',
  tagline: 'Experience Culinary Excellence',
  description: 'Fine dining restaurant offering exquisite cuisine, warm ambiance, and exceptional service.',
  hours: {
    'Monday - Thursday': '5:00 PM - 10:00 PM',
    'Friday - Saturday': '5:00 PM - 11:00 PM',
    'Sunday': '4:00 PM - 9:00 PM',
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'reservations@bellavistabistro.com',
    address: '123 Culinary Street, Fine Dining District, NY 10001',
  },
}

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'An absolutely incredible dining experience! Every dish was a work of art, and the service was impeccable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: 'The best restaurant in the city, hands down. The lamb was cooked to perfection and the atmosphere is unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    text: 'Perfect for special occasions. The chef truly understands flavor combinations and presentation.',
    rating: 5,
  },
]