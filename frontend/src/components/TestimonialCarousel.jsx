import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Randolph Ouimet",
    role: "Local Guide",
    content: "Excellent food! Reasonable prices for the quality and quantity they give you. The Naan is one of the best and the people who run the place are friendly and polite. I will return and try some different dishes.",
    rating: 5
  },
  {
    id: 2,
    name: "Harman Preet",
    role: "Regular Customer",
    content: "Food is so delicious and yummy and the presentation was so good I recommend you all to visit this place",
    rating: 5
  },
  {
    id: 3,
    name: "Catia C",
    role: "First-time Visitor",
    content: "Great food I have had their chicken tikka masala and also their curry goat and their damn naan oh my goodness .. great food not a fan of goat but theirs is amazing ..",
    rating: 4
  },
  {
    id: 4,
    name: "Rajpal Gujjar",
    role: "Regular Customer",
    content: "Such a nice place the food was very good give them a chance and you will like it",
    rating: 5
  }
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    initial: (direction) => ({ opacity: 0, x: direction > 0 ? 40 : -40, position: 'absolute' }),
    animate: { opacity: 1, x: 0, position: 'relative' },
    exit: (direction) => ({ opacity: 0, x: direction > 0 ? -40 : 40, position: 'absolute' })
  }

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center text-[#6E1E00] mb-12 pageHeading">
        What Our Customers Say
      </h2>

      <div className="relative max-w-3xl mx-auto min-h-[280px] h-auto overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#D7A93F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 line-clamp-2 italic mb-6">"{testimonials[currentIndex].content}"</p>
            <div>
              <p className="font-bold text-[#6E1E00]">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#6E1E00]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel
