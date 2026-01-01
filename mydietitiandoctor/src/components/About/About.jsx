import { motion } from 'framer-motion'
import { FiAward, FiBook, FiUsers, FiHeart } from 'react-icons/fi'
import './About.css'

const credentials = [
  { icon: <FiAward />, text: 'Certified Clinical Dietitian' },
  { icon: <FiBook />, text: 'M.Sc in Nutrition & Dietetics' },
  { icon: <FiUsers />, text: '10+ Years Experience' },
  { icon: <FiHeart />, text: '500+ Success Stories' }
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="image-wrapper">
              <div className="image-bg"></div>
              <div className="image-content">
                <span className="doctor-emoji">👩‍⚕️</span>
              </div>
              <div className="experience-badge">
                <strong>10+</strong>
                <span>Years of<br/>Experience</span>
              </div>
            </div>
            
            <motion.div 
              className="floating-stat stat-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="stat-icon">🏆</span>
              <div>
                <strong>Award Winning</strong>
                <span>Best Dietitian 2023</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="floating-stat stat-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="stat-icon">⭐</span>
              <div>
                <strong>4.9/5 Rating</strong>
                <span>From 300+ Reviews</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Us</span>
            <h2>Your Trusted Partner in Health & Nutrition</h2>
            
            <p className="about-intro">
              At <strong>MyDietationDoctor</strong>, we believe that good nutrition is the 
              foundation of a healthy life. Our expert team of certified dietitians is 
              dedicated to helping you achieve your health goals through personalized 
              nutrition counseling and evidence-based approaches.
            </p>
            
            <p>
              Whether you're looking to manage weight, control a chronic condition, 
              improve athletic performance, or simply adopt a healthier lifestyle, 
              we're here to guide you every step of the way with compassion, 
              expertise, and unwavering support.
            </p>

            <div className="credentials-grid">
              {credentials.map((item, index) => (
                <motion.div 
                  key={index}
                  className="credential-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="credential-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="about-mission">
              <h4>Our Mission</h4>
              <p>
                To empower individuals and families with the knowledge and tools 
                they need to make lasting, positive changes in their eating habits 
                and overall health.
              </p>
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

