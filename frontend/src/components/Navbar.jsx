import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    `relative pb-2 transition-all duration-300 border-b-2 font-medium ${
      isActive(path)
        ? 'border-[#FEB64C] text-[#FEB64C]' // active link border
        : 'border-transparent hover:border-[#FEB64C] text-[#FEB64C] hover:text-[#FEB64C]'
    }`

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 md:py-3 bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-200' 
          : 'py-3 md:py-4 bg-[#6E1E00]'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3 text-[#FEB64C] hover:text-[#FEB64C]/80 transition-colors" aria-label="Go to homepage">
          <motion.img 
            src={logo} 
            className="h-8 w-auto md:h-12" 
            alt="Spicy Indian Flavours Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <h4 className='nav font-display text-lg md:text-xl text-[#FEB64C]'>Spicy Indian Flavours</h4>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg">
          {[
            { to: '/', label: 'Home' },
            { to: '/menu', label: 'Menu' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass(item.to)}
              aria-label={`Navigate to ${item.label} page`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" aria-label="Book a table">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FEB64C] hover:bg-[#FEB64C]/90 text-[#6E1E00] font-semibold px-4 md:px-6 py-2 rounded-full transition-all duration-300 shadow-medium hover:shadow-strong text-sm md:text-base"
            >
              Book a Table
            </motion.button>
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <motion.button
          className="md:hidden text-[#FEB64C] p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[#6E1E00]/95 backdrop-blur-md border-t border-[#FEB64C]/20"
        role="menu"
      >
        <div className="px-4 md:px-6 py-4 space-y-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/menu', label: 'Menu' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium text-base ${
                isActive(item.to)
                  ? 'bg-[#FEB64C] text-[#6E1E00] shadow-medium'
                  : 'text-[#FEB64C] hover:bg-[#FEB64C]/10 hover:text-[#FEB64C]'
              }`}
              role="menuitem"
              aria-label={`Navigate to ${item.label} page`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} aria-label="Book a table">
              <button className="w-full bg-[#FEB64C] hover:bg-[#FEB64C]/90 text-[#6E1E00] font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-medium text-base">
                Book a Table
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
