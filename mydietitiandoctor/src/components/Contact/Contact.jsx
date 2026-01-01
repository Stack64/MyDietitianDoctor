import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { CONTACT_INFO } from '../../config/emailjs'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Get in Touch</span>
          <h2>Contact Us</h2>
          <p>
            Have questions? We're here to help. Reach out to us through 
            any of the channels below.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="contact-icon phone-icon">
              <FiPhone />
            </div>
            <h3>Call Us</h3>
            <p>Speak directly with our team</p>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact-link">
              {CONTACT_INFO.phone}
            </a>
          </motion.div>

          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="contact-icon whatsapp-icon">
              <FaWhatsapp />
            </div>
            <h3>WhatsApp</h3>
            <p>Chat with us instantly</p>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi! I have a query about your services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Send Message
            </a>
          </motion.div>

          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="contact-icon email-icon">
              <FiMail />
            </div>
            <h3>Email Us</h3>
            <p>Get a response within 24 hours</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="contact-link">
              {CONTACT_INFO.email}
            </a>
          </motion.div>

          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="contact-icon location-icon">
              <FiMapPin />
            </div>
            <h3>Visit Us</h3>
            <p>In-person consultations</p>
            <span className="contact-address">{CONTACT_INFO.address}</span>
          </motion.div>
        </div>

        <motion.div 
          className="contact-extra"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="working-hours">
            <div className="hours-icon">
              <FiClock />
            </div>
            <div className="hours-content">
              <h4>Working Hours</h4>
              <ul>
                <li>
                  <span>Monday - Friday</span>
                  <strong>{CONTACT_INFO.workingHours.weekdays}</strong>
                </li>
                <li>
                  <span>Saturday</span>
                  <strong>{CONTACT_INFO.workingHours.saturday}</strong>
                </li>
                <li>
                  <span>Sunday</span>
                  <strong>{CONTACT_INFO.workingHours.sunday}</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="social-links">
            <h4>Follow Us</h4>
            <p>Stay connected for health tips & updates</p>
            <div className="social-icons">
              <a 
                href={CONTACT_INFO.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href={CONTACT_INFO.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href={CONTACT_INFO.socialMedia.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href={CONTACT_INFO.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

