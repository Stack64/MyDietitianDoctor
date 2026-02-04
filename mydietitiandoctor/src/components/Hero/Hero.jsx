import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone, FiCalendar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT_INFO } from '../../config/emailjs'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        <div className="hero-dots"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✨ Transform Your Health Today
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your Journey to a
            <span className="hero-highlight"> Healthier Life</span>
            <br />Starts Here
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Expert dietitian consultations tailored to your unique needs. 
            Get personalized nutrition plans, weight management strategies, 
            and lifestyle guidance to achieve your health goals.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#appointment')}
            >
              <FiCalendar />
              Book Appointment
              <FiArrowRight />
            </button>
            
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi! I'm interested in booking a consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </motion.div>
          
          <motion.div 
            className="hero-contact-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="hero-phone"
            >
              <div className="phone-icon-wrapper">
                <FiPhone />
              </div>
              <div className="phone-text">
                <span>Call Now</span>
                <strong>{CONTACT_INFO.phone}</strong>
              </div>
            </a>
            
            <div className="hero-stats">
              <div className="stat">
                <strong>150+</strong>
                <span>Happy Clients</span>
              </div>
              <div className="stat">
                <strong>3+</strong>
                <span>Years Experience</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>Success Rate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <div className="hero-image-content">
              <div className="food-item food-1">🥑</div>
              <div className="food-item food-2">🥗</div>
              <div className="food-item food-3">🍎</div>
              <div className="food-item food-4">🥕</div>
              <div className="food-item food-5">🥦</div>
              <div className="hero-main-icon">👩‍⚕️</div>
            </div>
          </div>
          
          <motion.div 
            className="floating-card card-consultation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="card-emoji">📋</span>
            <div>
              <strong>Free Consultation</strong>
              <p>First session on us!</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="floating-card card-diet"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="card-emoji">🎯</span>
            <div>
              <strong>Custom Diet Plans</strong>
              <p>Made for you</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

