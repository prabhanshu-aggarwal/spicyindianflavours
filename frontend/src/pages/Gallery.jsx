import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaShare, FaMapMarkerAlt, FaClock, FaUsers, FaStar } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'interior', name: 'Restaurant', icon: '🏠' },
    { id: 'food', name: 'Our Dishes', icon: '🍽️' },
    { id: 'chef', name: 'Kitchen', icon: '👨‍🍳' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Main Dining Area",
      description: "Our warm and inviting dining space with traditional Indian decor elements and comfortable seating for families and groups.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "interior",
      likes: 89,
      location: "Main Floor"
    },
    {
      id: 2,
      title: "Butter Chicken",
      description: "Our signature butter chicken - tender chicken pieces in a rich, creamy tomato-based gravy with authentic Indian spices.",
      imageUrl: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "food",
      likes: 156,
      price: "$16.99",
      rating: 4.9
    },
    {
      id: 3,
      title: "Kitchen Preparation",
      description: "Our chefs carefully preparing fresh ingredients and authentic spices for your favorite Indian dishes.",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "chef",
      likes: 67,
      location: "Kitchen"
    },
    {
      id: 4,
      title: "Paneer Tikka Masala",
      description: "Fresh paneer cubes cooked in aromatic spices and rich tomato gravy - a vegetarian favorite.",
      imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "food",
      likes: 134,
      price: "$14.99",
      rating: 4.8
    },
    {
      id: 5,
      title: "Private Dining Room",
      description: "Perfect for special occasions, business meetings, or intimate gatherings with up to 20 guests.",
      imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "interior",
      likes: 78,
      capacity: "Up to 20 guests"
    },
    {
      id: 6,
      title: "Chef's Special Presentation",
      description: "Every dish is crafted with love and presented with artistic flair to enhance your dining experience.",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "chef",
      likes: 112,
      chef: "Chef Raj"
    },
    {
      id: 7,
      title: "Outdoor Seating Area",
      description: "Enjoy your meal in our charming outdoor patio during pleasant weather, surrounded by greenery.",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "interior",
      likes: 95,
      season: "Spring/Summer"
    },
    {
      id: 8,
      title: "Mango Lassi",
      description: "Refreshing yogurt-based drink with sweet mango pulp - perfect to complement spicy dishes.",
      imageUrl: "https://www.simplyrecipes.com/thmb/7oZrY9CXkHSqrV6diryN7Kwyups=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Mango-Lassi-LEAD-08-9b45bb7d7d6d45a79deee3013f2f3cf1.jpg",
      category: "food",
      likes: 73,
      price: "$4.99",
      rating: 4.7
    },

    {
      id: 9,
      title: "Bar & Beverages",
      description: "Our fully stocked bar offering traditional Indian beverages, cocktails, and imported beers.",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "interior",
      likes: 56,
      location: "Bar Area"
    },
    {
      id: 10,
      title: "Chef's Tasting Menu",
      description: "Experience our chef's curated tasting menu featuring the best of our authentic Indian cuisine.",
      imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "chef",
      likes: 145,
      chef: "Chef Priya"
    },
    {
      id: 11,
      title: "Fresh Ingredients",
      description: "We use only the finest and freshest ingredients, carefully selected for authentic taste.",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "chef",
      likes: 92,
      location: "Kitchen"
    },
    {
      id: 12,
      title: "Naan Bread",
      description: "Freshly baked naan bread from our tandoor oven - soft, fluffy, and perfect with any curry.",
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "food",
      likes: 118,
      price: "$2.99",
      rating: 4.9
    },
    {
      id: 13,
      title: "Reception Area",
      description: "Welcome to Spicy Indian Flavours - our friendly staff is ready to serve you with a smile.",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "interior",
      likes: 64,
      location: "Entrance"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAEAD1] to-[#F5E6D3]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#6E1E00] to-[#8B2E00] text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              <span className="text-[#FEB64C]">Restaurant</span> Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
              Take a visual journey through our restaurant and discover the authentic 
              Indian dining experience that awaits you at Spicy Indian Flavours
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>📸</span>
                <span>{galleryItems.length} Photos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar className="text-[#FEB64C]" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/90 backdrop-blur-sm sticky top-0 z-10 border-b border-[#6E1E00]/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#6E1E00] text-[#FEB64C] shadow-lg'
                    : 'bg-white/80 text-[#6E1E00] hover:bg-[#6E1E00]/10 border border-[#6E1E00]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-[#FEB64C] text-[#6E1E00] px-3 py-1 rounded-full text-sm font-semibold">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </div>

                      {/* Price Badge */}
                      {item.price && (
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#6E1E00]">
                          {item.price}
                        </div>
                      )}

                      {/* Rating Badge */}
                      {item.rating && (
                        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          <div className="flex items-center gap-1">
                            <FaStar className="text-[#FEB64C]" />
                            <span className="font-semibold">{item.rating}</span>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm mb-3">{item.description}</p>
                        
                        {/* Additional Info */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-4">
                            {item.location && (
                              <div className="flex items-center gap-1">
                                <FaMapMarkerAlt className="text-[#FEB64C]" />
                                <span>{item.location}</span>
                              </div>
                            )}
                            {item.capacity && (
                              <div className="flex items-center gap-1">
                                <FaUsers className="text-[#FEB64C]" />
                                <span>{item.capacity}</span>
                              </div>
                            )}
                            {item.chef && (
                              <div className="flex items-center gap-1">
                                <span>👨‍🍳</span>
                                <span>{item.chef}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaHeart className="text-[#FEB64C]" />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-[#6E1E00] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          {item.rating && (
                            <>
                              <FaStar className="text-[#FEB64C] text-sm" />
                              <span className="text-sm font-semibold text-[#6E1E00]">{item.rating}</span>
                            </>
                          )}
                        </div>
                        {item.price && (
                          <span className="text-sm font-bold text-[#6E1E00]">{item.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Restaurant Info Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-[#6E1E00] mb-6 font-display">
                Experience Authentic Indian Dining
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Spicy Indian Flavours, we take pride in offering an authentic Indian dining experience. 
                From our warm and inviting atmosphere to our carefully crafted dishes, every detail is 
                designed to transport you to the heart of India.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6E1E00] rounded-full flex items-center justify-center">
                    <FaStar className="text-[#FEB64C] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6E1E00]">Authentic Recipes</h3>
                    <p className="text-gray-600 text-sm">Traditional family recipes passed down through generations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6E1E00] rounded-full flex items-center justify-center">
                    <FaClock className="text-[#FEB64C] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6E1E00]">Fresh Ingredients</h3>
                    <p className="text-gray-600 text-sm">Premium spices and ingredients imported from India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6E1E00] rounded-full flex items-center justify-center">
                    <FaUsers className="text-[#FEB64C] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6E1E00]">Expert Chefs</h3>
                    <p className="text-gray-600 text-sm">Experienced chefs trained in traditional Indian cooking</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant Interior"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FEB64C] text-[#6E1E00] p-6 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm font-semibold">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#6E1E00] mb-3">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {selectedImage.price && <span>💰 {selectedImage.price}</span>}
                    {selectedImage.location && <span>📍 {selectedImage.location}</span>}
                    {selectedImage.capacity && <span>👥 {selectedImage.capacity}</span>}
                    {selectedImage.rating && <span>⭐ {selectedImage.rating}/5</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 bg-[#6E1E00] text-[#FEB64C] px-4 py-2 rounded-full hover:bg-[#5a1a00] transition-colors">
                      <FaHeart />
                      <span>{selectedImage.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 border border-[#6E1E00] text-[#6E1E00] px-4 py-2 rounded-full hover:bg-[#6E1E00] hover:text-[#FEB64C] transition-colors">
                      <FaShare />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;