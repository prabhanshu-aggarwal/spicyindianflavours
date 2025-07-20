# 🌶️ Spicy Indian Flavours - Authentic Indian Restaurant Website

A modern, responsive website for Spicy Indian Flavours restaurant in York, Ontario. Built with React, featuring authentic Indian cuisine, beautiful UI/UX, and mobile-first design.

![Spicy Indian Flavours](https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🚀 Live Demo

**Website**: [https://spicyindianflavours.vercel.app/](https://spicyindianflavours.vercel.app/)

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Smooth Animations**: Framer Motion powered transitions
- **Beautiful Typography**: Custom fonts for elegant presentation

### 🍽️ **Restaurant Features**
- **Interactive Menu**: Browse dishes with categories and filters
- **Hero Carousel**: Dynamic image slideshow with typewriter effects
- **Customer Testimonials**: Social proof with carousel
- **Gallery**: Beautiful restaurant photos
- **Contact Form**: Easy table booking and inquiries
- **FAQ Section**: Common questions answered

### 📱 **Mobile Optimized**
- **Mobile-First Design**: Optimized for all screen sizes
- **Touch-Friendly**: Perfect for mobile interactions
- **Fast Loading**: Optimized images and performance
- **Accessibility**: WCAG compliant with proper ARIA labels

### 🔍 **SEO Optimized**
- **Meta Tags**: Comprehensive SEO meta tags
- **Structured Data**: Schema.org markup for restaurants
- **Open Graph**: Social media sharing optimization
- **Performance**: Core Web Vitals optimized

## 🛠️ Tech Stack

### **Frontend**
- **React 18+** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router DOM** - Client-side routing

### **UI/UX**
- **Responsive Design** - Mobile-first approach
- **Glass Morphism** - Modern visual effects
- **Custom Animations** - Smooth page transitions
- **Accessibility** - WCAG 2.1 compliant

### **Performance**
- **Image Optimization** - Responsive images with proper sizing
- **Lazy Loading** - Optimized loading performance
- **Code Splitting** - Efficient bundle management
- **SEO Optimization** - Search engine friendly

## 📁 Project Structure

```
SpicyIndian-Flavours/
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── FadeInWrapper.jsx
│   │   │   ├── FoodCard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GalleryItem.jsx
│   │   │   ├── HeroCarousel.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ScrollFadeIn.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── TestimonialCarousel.jsx
│   │   ├── pages/
│   │   │   ├── Contact.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Home.jsx
│   │   │   └── MenuPage.jsx
│   │   ├── data/
│   │   │   └── menuData.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prabhanshu-aggarwal/spicyindianflavours.git
   cd spicyindianflavours
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎯 Key Pages

### **Home Page** (`/`)
- Hero carousel with dynamic content
- Restaurant statistics
- About section with features
- Featured dishes showcase
- Customer testimonials
- Call-to-action sections

### **Menu Page** (`/menu`)
- Interactive menu with categories
- Search functionality
- Filter options
- Detailed dish information
- Pricing and ratings

### **Gallery Page** (`/gallery`)
- Restaurant photo gallery
- Beautiful image grid
- Lightbox functionality
- Responsive image display

### **Contact Page** (`/contact`)
- Contact form with validation
- Restaurant information
- FAQ section
- Business hours
- Location details

## 🎨 Design System

### **Color Palette**
- **Primary**: `#6E1E00` (Deep Brown)
- **Accent**: `#FEB64C` (Golden Yellow)
- **Background**: `#FAEAD1` (Cream)
- **Text**: `#1F2937` (Dark Gray)

### **Typography**
- **Display Font**: Playfair Display (Headings)
- **Body Font**: Inter (Body text)
- **Accent Font**: Cormorant Garamond (Special elements)

### **Components**
- **Buttons**: Rounded with hover effects
- **Cards**: Glass morphism with shadows
- **Navigation**: Sticky with blur effects
- **Forms**: Clean and accessible design

## 📱 Mobile Responsiveness

The website is fully responsive with:
- **Mobile-first design** approach
- **Flexible grid systems** using Tailwind CSS
- **Touch-friendly interactions**
- **Optimized images** for different screen sizes
- **Proper spacing** and typography scaling

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema.org restaurant markup
- **Canonical URLs**: Proper URL structure
- **Image Alt Tags**: Accessibility and SEO
- **Semantic HTML**: Proper heading structure

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### **Netlify**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### **GitHub Pages**
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Spicy Indian Flavours**
- **Phone**: (+1) 289-308-6626
- **Hours**: Daily 8:30 AM - 9:00 PM
- **Location**: York, Ontario, Canada
- **Website**: [https://spicyindianflavours.vercel.app/](https://spicyindianflavours.vercel.app/)

## 🙏 Acknowledgments

- **Unsplash** for beautiful restaurant images
- **React Icons** for icon library
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Vite** for fast development experience

---

**Built with ❤️ for authentic Indian cuisine lovers** 