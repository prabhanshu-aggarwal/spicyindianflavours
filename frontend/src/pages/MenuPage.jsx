import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import menuData from "../data/menuData";
import AnimatedSection from "../components/AnimatedSection";
import { FaStar, FaClock, FaFire, FaLeaf, FaDrumstickBite, FaBreadSlice, FaGlassWhiskey, FaIceCream, FaUtensils } from "react-icons/fa";

const categories = [
  { id: "paranthas", name: "Paranthas", icon: FaBreadSlice, color: "bg-orange-500" },
  { id: "appetizers", name: "Appetizers", icon: FaFire, color: "bg-red-500" },
  { id: "raita", name: "Raita", icon: FaLeaf, color: "bg-green-500" },
  { id: "salads", name: "Salads", icon: FaLeaf, color: "bg-emerald-500" },
  { id: "wraps", name: "Wraps", icon: FaBreadSlice, color: "bg-yellow-500" },
  { id: "biryanis", name: "Biryanis", icon: FaUtensils, color: "bg-purple-500" },
  { id: "vegetarian", name: "Vegetarian", icon: FaLeaf, color: "bg-green-600" },
  { id: "rice", name: "Rice", icon: FaUtensils, color: "bg-amber-500" },
  { id: "non-vegetarian", name: "Non-Vegetarian", icon: FaDrumstickBite, color: "bg-red-600" },
  { id: "non-veg combo", name: "Non-Veg Combo", icon: FaUtensils, color: "bg-indigo-500" },
  { id: "veg combo", name: "Veg Combo", icon: FaLeaf, color: "bg-teal-500" },
  { id: "breads", name: "Breads", icon: FaBreadSlice, color: "bg-yellow-600" },
  { id: "desserts", name: "Desserts", icon: FaIceCream, color: "bg-pink-500" },
  { id: "drinks", name: "Drinks", icon: FaGlassWhiskey, color: "bg-blue-500" },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("paranthas");
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = menuData.filter((i) => i.category === activeCategory);

  const filteredBySearch = searchTerm 
    ? filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filtered;

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-[#FAEAD1] to-white">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#6E1E00] mb-4 font-display">
              Our Menu
            </h1>
            <p className="text-xl text-[#6E1E00] max-w-3xl mx-auto leading-relaxed">
              Discover authentic Indian flavors crafted with passion and tradition. 
              Every dish tells a story of heritage and taste.
            </p>
          </motion.header>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white rounded-full shadow-lg border-2 border-[#FEB64C]/20 focus:border-[#FEB64C] focus:outline-none transition-all duration-300 text-[#6E1E00] placeholder-[#6E1E00]/60"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6E1E00]/40">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
              {categories.map((cat, index) => {
                const IconComponent = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      activeCategory === cat.id
                        ? "bg-[#6E1E00] text-[#FEB64C] shadow-xl"
                        : "bg-white text-[#6E1E00] hover:bg-white/90"
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${activeCategory === cat.id ? 'text-[#FEB64C]' : cat.color.replace('bg-', 'text-')}`} />
                    {cat.name}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-8">
            {filteredBySearch.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-[#6E1E00] mb-2">No dishes found</h3>
                <p className="text-[#6E1E00]/70">Try adjusting your search or browse a different category</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredBySearch.map((item, idx) => (
                  <motion.div
                    key={item.id || idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2">
                      <div className="flex">
                        {/* Image */}
                        <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-2xl font-bold text-[#6E1E00] font-display">
                                {item.name}
                              </h3>
                              <div className="text-3xl font-black text-[#6E1E00]">
                                ${item.price}
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Category Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#6E1E00] mb-4 font-display">
                About {categories.find(cat => cat.id === activeCategory)?.name}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our {categories.find(cat => cat.id === activeCategory)?.name.toLowerCase()} are prepared with the finest ingredients 
                and authentic spices, ensuring every bite delivers the true taste of India. 
                Each dish is crafted with care by our experienced chefs.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MenuPage;