import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT_INFO } from '../../config/emailjs'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#bmi', label: 'BMI Calculator' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#appointment', label: 'Book Now' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="logo-icon">🥗</span>
          <span className="logo-text">
            MyDietation<span className="logo-highlight">Doctor</span>
          </span>
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={link.label === 'Book Now' ? 'nav-cta' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
            className="nav-phone"
            aria-label="Call us"
          >
            <FiPhone />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

