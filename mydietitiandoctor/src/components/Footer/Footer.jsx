import { FiPhone, FiMail, FiMapPin, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { CONTACT_INFO } from '../../config/emailjs'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Book Appointment', href: '#appointment' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    'Weight Management',
    'Clinical Nutrition',
    'Sports Nutrition',
    'PCOS/PCOD Diet',
    'Diabetes Management',
    'Pregnancy Nutrition',
    'Corporate Wellness',
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                <span className="logo-icon">🥗</span>
                <span className="logo-text">
                  MyDietation<span className="logo-highlight">Doctor</span>
                </span>
              </a>
              <p>
                Your trusted partner in health and nutrition. We provide personalized 
                dietitian consultations to help you achieve your health goals through 
                evidence-based nutrition guidance.
              </p>
              <div className="footer-social">
                <a href={CONTACT_INFO.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href={CONTACT_INFO.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href={CONTACT_INFO.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href={CONTACT_INFO.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <FiPhone />
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li>
                  <FaWhatsapp />
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </li>
                <li>
                  <FiMail />
                  <a href={`mailto:${CONTACT_INFO.email}`}>
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li>
                  <FiMapPin />
                  <span>{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MyDietationDoctor. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#refund">Refund Policy</a>
          </div>
        </div>
      </div>

      <button type='button' className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <FiArrowUp />
      </button>
    </footer>
  )
}

export default Footer

