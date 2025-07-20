import { motion } from 'framer-motion'

const galleryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const GalleryItem = ({ imageUrl, title, description, reverse = false }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={galleryVariants}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}
    >
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-[#6E1E00] mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

export default GalleryItem