import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiX, FiMessageCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT_INFO } from '../../config/emailjs'
import './FloatingButtons.css'

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div 
          className="floating-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isExpanded && (
              <>
                <motion.a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="float-btn phone-btn"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  title="Call Us"
                >
                  <FiPhone />
                  <span>Call Now</span>
                </motion.a>

                <motion.a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi! I'm interested in booking a consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-btn whatsapp-btn"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 20 }}
                  transition={{ duration: 0.2 }}
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </motion.a>
              </>
            )}
          </AnimatePresence>

          <motion.button
            type='button'
            className={`float-btn main-btn ${isExpanded ? 'expanded' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsExpanded(!isExpanded)
             }}
            whileTap={{ scale: 0.9 }}
            aria-label={isExpanded ? 'Close menu' : 'Contact options'}
          >
            {isExpanded ? <FiX /> : <FiMessageCircle />}
          </motion.button>

          {/* Always visible WhatsApp quick button */}
          <motion.a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi! I'd like to book a consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="float-btn whatsapp-quick"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingButtons

