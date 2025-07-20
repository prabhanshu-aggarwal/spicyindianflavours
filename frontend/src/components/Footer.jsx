import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTwitter, FaYelp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
      className="bg-[#6E1E00] text-[#FEB64C] py-16"
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <motion.div variants={fadeIn} className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 font-display text-[#FEB64C]">Spicy Indian Flavours</h3>
            <p className="text-[#FEB64C]/80 mb-6 font-body leading-relaxed">
              Authentic Indian cuisine with modern flair in the heart of the city. 
              Experience the rich flavors and warm hospitality that make every visit memorable.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-[#FEB64C]/20 hover:bg-[#FEB64C] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={20} className="text-[#FEB64C]" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-[#FEB64C]/20 hover:bg-[#FEB64C] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook size={20} className="text-[#FEB64C]" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-[#FEB64C]/20 hover:bg-[#FEB64C] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={20} className="text-[#FEB64C]" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-[#FEB64C]/20 hover:bg-[#FEB64C] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYelp size={20} className="text-[#FEB64C]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-6 font-display text-[#FEB64C]">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[#FEB64C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#FEB64C]/80 font-body">605 Rogers Rd a2</p>
                  <p className="text-[#FEB64C]/80 font-body">York, ON M6M 1B9, Canada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-[#FEB64C] flex-shrink-0" />
                <p className="text-[#FEB64C]/80 font-body">(+1) 289-308-6626</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-[#FEB64C] flex-shrink-0" />
                <p className="text-[#FEB64C]/80 font-body">info@spicyindianflavours.com</p>
              </div>
            </div>
          </motion.div>

          {/* Hours Column */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-6 font-display text-[#FEB64C]">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaClock className="w-5 h-5 text-[#FEB64C] flex-shrink-0" />
                <div>
                  <p className="text-[#FEB64C] font-body font-medium">Mon - Sun</p>
                  <p className="text-[#FEB64C]/70 font-body text-sm">08:30 AM - 08:30 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FEB64C] hover:bg-[#FEB64C]/90 text-[#6E1E00] font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-medium"
              >
                Book a Table
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          variants={fadeIn} 
          className="pt-8 border-t border-[#FEB64C]/30 text-center"
        >
          <p className="text-[#FEB64C]/70 font-body">
            &copy; {new Date().getFullYear()} Spicy Indian Flavours. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer