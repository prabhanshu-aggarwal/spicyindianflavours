import { motion } from 'framer-motion'
import AnimatedSection from "../components/AnimatedSection";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const FoodCard = ({ title, description, imageUrl, category }) => {
  return (
    <AnimatedSection>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2"
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <motion.img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1.5 font-semibold bg-[#FAEAD1] text-[#6E1E00] text-xs rounded-full shadow-medium">
              {category}
            </span>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#6E1E00] mb-3 font-display group-hover:text-[#6E1E00] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-4 font-body">
            {description}
          </p>
          
          {/* Action Button */}
          <motion.button
            className="w-full bg-[#6E1E00] hover:bg-[#5a1a00] text-[#FEB64C] font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export default FoodCard