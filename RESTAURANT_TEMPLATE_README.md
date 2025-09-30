# Bella Vista Bistro - Restaurant Website Template

A fully responsive restaurant website template built with Next.js 15, featuring a sophisticated design with warm earth tones and professional food photography.

## 🌟 Features

### 📄 Pages
- **Homepage**: Hero section with call-to-action, featured sections, and testimonials
- **Menu & Ordering**: Interactive menu with category filtering and shopping cart functionality
- **About**: Restaurant story, team profiles, and customer testimonials
- **Contact**: Contact form with subject selection and restaurant information
- **Reservations**: Booking system with date/time selection and special requests

### 🎨 Design Features
- **Color Palette**: Warm browns (25 45% 20%), golden yellows (45 95% 55%), and cream tones
- **Typography**: Playfair Display for headings, Open Sans for body text
- **Visual Elements**: Professional food photography, hover effects, and smooth transitions
- **Responsive Design**: Mobile-optimized with adaptive layouts

### ⚙️ Functionality
- **Shopping Cart**: Add items, adjust quantities, view totals
- **Order Management**: Complete cart functionality with order placement
- **Form Handling**: Contact forms and reservation booking
- **Navigation**: Responsive navigation with active state indicators
- **Image Optimization**: AI-generated restaurant imagery

### 🔧 Technical Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS with custom restaurant theme
- **Fonts**: Google Fonts (Playfair Display, Open Sans)
- **Components**: React functional components with TypeScript
- **State Management**: React Context for cart functionality

## 🎯 Mock Data Included

### Restaurant Information
- **Name**: Bella Vista Bistro
- **Tagline**: Experience Culinary Excellence
- **Hours**: Monday-Sunday service schedule
- **Contact**: Phone, email, and address details

### Menu Items
- **Appetizers**: Seared Scallops, Duck Liver Mousse, Oysters Rockefeller
- **Main Courses**: Herb-Crusted Lamb, Pan-Seared Halibut, Wagyu Beef Tenderloin
- **Desserts**: Chocolate Lava Cake, Crème Brûlée, Tiramisu
- **Beverages**: Wine pairings and craft cocktails

### Customer Reviews
- Three authentic-sounding testimonials with 5-star ratings
- Diverse customer names and detailed feedback

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **View the Website**:
   Open [http://localhost:3006](http://localhost:3006) in your browser

## 📱 Responsive Design

The template is fully responsive and optimized for:
- **Desktop**: Full-width layouts with hover effects
- **Tablet**: Adapted grid systems and navigation
- **Mobile**: Touch-friendly interfaces and optimized images

## 🖼️ Custom Imagery

The template includes AI-generated restaurant imagery:
- Professional food photography
- Restaurant ambiance scenes
- Plated dish presentations
- All images optimized for web performance

## 📂 Project Structure

```
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── menu/              # Menu & ordering page
│   │   ├── reservations/      # Reservation booking page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles & theme
│   ├── components/            # Reusable components
│   │   ├── cart-context.tsx   # Shopping cart state management
│   │   ├── cart-sidebar.tsx   # Shopping cart UI
│   │   ├── hero-section.tsx   # Homepage hero
│   │   ├── menu-item-card.tsx # Menu item display
│   │   └── navigation.tsx     # Site navigation
│   └── data/                  # Mock data
│       └── menu-data.ts       # Restaurant & menu information
├── public/
│   └── generated/             # AI-generated images
└── package.json               # Dependencies & scripts
```

## 🎨 Customization

### Colors
The restaurant theme is defined in `src/app/globals.css`:
```css
--restaurant-brown: 25 45% 20%;
--restaurant-golden: 45 95% 55%;
--restaurant-cream: 30 20% 95%;
```

### Content
Update restaurant information in `src/data/menu-data.ts`:
- Restaurant name and description
- Menu items and prices
- Contact information
- Operating hours

### Images
Replace generated images in `public/generated/` with your own professional photography.

## 📋 Production Checklist

- [ ] Replace mock data with real restaurant information
- [ ] Add real professional food photography
- [ ] Configure contact forms with email service
- [ ] Set up reservation system backend
- [ ] Add payment processing for orders
- [ ] Implement actual inventory management
- [ ] Add SEO meta tags and structured data
- [ ] Configure analytics tracking

## 🔧 Built With

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library

---

**Note**: This is a template designed to showcase restaurant website functionality. Forms simulate submissions and the shopping cart is for demonstration purposes only. For production use, integrate with real backend services for orders, reservations, and contact forms.