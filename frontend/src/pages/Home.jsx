import { motion } from "framer-motion";
import FoodCard from "../components/FoodCard";
import GalleryItem from "../components/GalleryItem";
import TestimonialCarousel from "../components/TestimonialCarousel";
import HeroCarousel from "../components/HeroCarousel";
import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";
import { FaStar, FaClock, FaMapMarkerAlt, FaPhone, FaUtensils, FaUsers, FaAward } from "react-icons/fa";

const Home = () => {
  const foodItems = [
    {
      id: 1,
      title: "Butter Chicken",
      description: "Creamy, rich tomato-based curry with tender chicken pieces, a signature dish that defines Indian cuisine.",
      imageUrl: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Signature Dish",
      rating: 4.9,
      price: "$16.99"
    },
    {
      id: 2,
      title: "Mango Lassi",
      description: "A sweet and creamy yogurt-based drink blended with ripe mango pulp, perfect to cool down spicy dishes.",
      imageUrl: "https://www.simplyrecipes.com/thmb/7oZrY9CXkHSqrV6diryN7Kwyups=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Mango-Lassi-LEAD-08-9b45bb7d7d6d45a79deee3013f2f3cf1.jpg",
      category: "Drinks",
      rating: 4.8,
      price: "$4.99"
    },
    {
      id: 3,
      title: "Paneer Tikka Masala",
      description: "Cubes of paneer cooked in a rich, creamy tomato-based gravy with aromatic spices.",
      imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Vegetarian",
      rating: 4.7,
      price: "$14.99"
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: FaUsers },
    { number: "50+", label: "Signature Dishes", icon: FaUtensils },
    { number: "15+", label: "Years Experience", icon: FaAward },
    { number: "4.9", label: "Average Rating", icon: FaStar },
  ];

  const features = [
    {
      icon: "🍽️",
      title: "Authentic Recipes",
      description: "Traditional family recipes passed down through generations, ensuring authentic flavors."
    },
    {
      icon: "🌶️",
      title: "Fresh Spices",
      description: "Premium spices imported directly from India for the most authentic taste experience."
    },
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description: "Experienced chefs trained in traditional Indian cooking techniques."
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Recognized for excellence in Indian cuisine and outstanding service."
    }
  ];

  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#6E1E00] to-[#8B2E00] text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FEB64C] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#6E1E00] mb-6 font-display">
                Experience the True Taste of India
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Spicy Indian Flavours, we bring you the authentic flavors of India with a modern twist. 
                Our chefs craft each dish with love, using traditional recipes and the finest ingredients 
                to create an unforgettable dining experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaStar className="text-[#FEB64C] text-xl" />
                  <span className="text-gray-700">Award-winning authentic Indian cuisine</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-[#FEB64C] text-xl" />
                  <span className="text-gray-700">Fresh ingredients prepared daily</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#FEB64C] text-xl" />
                  <span className="text-gray-700">Convenient location in York, ON</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#6E1E00] hover:bg-[#5a1a00] text-[#FEB64C] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Our Menu
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[#6E1E00] text-[#6E1E00] hover:bg-[#6E1E00] hover:text-[#FEB64C] font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant Interior"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Warm & Inviting</h3>
                  <p className="text-white/90">Experience our cozy dining atmosphere</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#FEB64C] text-[#6E1E00] p-4 rounded-full shadow-lg">
                <FaUtensils className="text-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FAEAD1]">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6E1E00] mb-6 font-display">
              Why Choose Us?
            </h2>
            <p className="text-xl text-[#6E1E00] max-w-3xl mx-auto">
              We combine tradition with innovation to deliver the best Indian dining experience
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#6E1E00] mb-4 font-display">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6E1E00] mb-6 font-display">
              Our Signature Dishes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular dishes, crafted with passion and authentic Indian spices
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foodItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#FEB64C] text-[#6E1E00] px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#6E1E00]">
                      {item.price}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-[#FEB64C]" />
                        <span className="font-semibold">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#6E1E00] mb-3 font-display">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FEB64C] hover:bg-[#FEB64C]/90 text-[#6E1E00] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Full Menu
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Gallery */}
      <section className="py-20 bg-[#FAEAD1]">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6E1E00] mb-6 font-display">
              Our Beautiful Space
            </h2>
            <p className="text-xl text-[#6E1E00] max-w-3xl mx-auto">
              Take a virtual tour of our restaurant and see where tradition meets modern comfort
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Main Dining Area",
                description: "Spacious and elegant dining space"
              },
              {
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Open Kitchen",
                description: "Watch our chefs in action"
              },
              {
                image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Private Dining",
                description: "Perfect for special occasions"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6E1E00] to-[#8B2E00] text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-[#FEB64C]">
              Ready to Experience Authentic Indian Cuisine?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Join us for an unforgettable dining experience. Book your table today and discover 
              the true flavors of India in the heart of York, Ontario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FEB64C] hover:bg-[#FEB64C]/90 text-[#6E1E00] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Table
                </motion.button>
              </Link>
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#FEB64C] text-[#FEB64C] hover:bg-[#FEB64C] hover:text-[#6E1E00] font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  View Menu
                </motion.button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <FaClock className="text-[#FEB64C]" />
                <span>Open Daily 8:30 AM - 8:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#FEB64C]" />
                <span>(+1) 289-308-6626</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;