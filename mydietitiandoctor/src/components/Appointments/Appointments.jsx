import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FiCalendar, FiClock, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck } from 'react-icons/fi'
import { EMAILJS_CONFIG, CONTACT_INFO } from '../../config/emailjs'
import './Appointments.css'

const consultationTypes = [
  { id: 'weight-loss', label: 'Weight Loss' },
  { id: 'weight-gain', label: 'Weight Gain' },
  { id: 'diabetes', label: 'Diabetes Management' },
  { id: 'pcos', label: 'PCOS/PCOD Diet' },
  { id: 'heart', label: 'Heart Health' },
  { id: 'sports', label: 'Sports Nutrition' },
  { id: 'pregnancy', label: 'Pregnancy Diet' },
  { id: 'general', label: 'General Wellness' },
]

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
]

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    consultationType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const { name, email, phone, date, time, consultationType } = formData
    
    if (!name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    if (!phone.trim() || phone.length < 10) {
      toast.error('Please enter a valid phone number')
      return false
    }
    if (!date) {
      toast.error('Please select a date')
      return false
    }
    if (!time) {
      toast.error('Please select a time slot')
      return false
    }
    if (!consultationType) {
      toast.error('Please select consultation type')
      return false
    }
    
    return true
  }

  const sendEmails = async () => {
    const currentYear = new Date().getFullYear().toString()
    // Send email to user (confirmation)
    const userEmailParams = {
      to_name: formData.name,
      to_email: formData.email,
      appointment_date: formData.date,
      appointment_time: formData.time,
      consultation_type: consultationTypes.find(c => c.id === formData.consultationType)?.label,
      message: formData.message || 'No additional message',
      phone: formData.phone,
      reply_to: CONTACT_INFO.email,
      current_year: currentYear
    }

    // Send email to admin (notification)
    const adminEmailParams = {
      to_email: EMAILJS_CONFIG.ADMIN_EMAIL,
      client_name: formData.name,
      client_email: formData.email,
      client_phone: formData.phone,
      appointment_date: formData.date,
      appointment_time: formData.time,
      consultation_type: consultationTypes.find(c => c.id === formData.consultationType)?.label,
      message: formData.message || 'No additional message'
    }

    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

    // Send both emails
    await Promise.all([
      emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_USER,
        userEmailParams
      ),
      emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_ADMIN,
        adminEmailParams
      )
    ])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Demo mode - simulate success
        console.log('Demo mode - EmailJS not configured')
        console.log('Form Data:', formData)
        await new Promise(resolve => setTimeout(resolve, 1500))
        toast.success('Demo: Booking received! Configure EmailJS for real emails.')
      } else {
        await sendEmails()
        toast.success('Appointment booked successfully! Check your email for confirmation.')
      }

      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        consultationType: '',
        message: ''
      })

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)

    } catch (error) {
      console.error('Email error:', error)
      toast.error('Failed to book appointment. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <section id="appointment" className="appointment">
      <div className="appointment-bg">
        <div className="appointment-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Book Now</span>
          <h2>Schedule Your Consultation</h2>
          <p>
            Take the first step towards a healthier you. Book your personalized 
            consultation and get expert guidance tailored to your needs.
          </p>
        </motion.div>

        <div className="appointment-wrapper">
          <motion.div 
            className="appointment-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>What to Expect</h3>
            <ul className="expect-list">
              <li>
                <FiCheck />
                <div>
                  <strong>Initial Assessment</strong>
                  <p>Comprehensive evaluation of your health history and goals</p>
                </div>
              </li>
              <li>
                <FiCheck />
                <div>
                  <strong>Personalized Plan</strong>
                  <p>Custom diet plan tailored to your lifestyle and preferences</p>
                </div>
              </li>
              <li>
                <FiCheck />
                <div>
                  <strong>Ongoing Support</strong>
                  <p>Regular follow-ups and WhatsApp support for your journey</p>
                </div>
              </li>
              <li>
                <FiCheck />
                <div>
                  <strong>Recipe & Meal Ideas</strong>
                  <p>Practical meal suggestions that fit your daily routine</p>
                </div>
              </li>
            </ul>

            <div className="consultation-types">
              <h4>Popular Consultations</h4>
              <div className="type-tags">
                {consultationTypes.slice(0, 6).map(type => (
                  <span key={type.id} className="type-tag">{type.label}</span>
                ))}
              </div>
            </div>

            <div className="appointment-contact">
              <p>Need help? Call us directly:</p>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact-phone">
                <FiPhone /> {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="appointment-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSuccess ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Booking Confirmed!</h3>
                <p>
                  Thank you for booking with us. We've sent a confirmation email 
                  to <strong>{formData.email || 'your email'}</strong>.
                </p>
                <p>Our team will contact you shortly to confirm your appointment.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsSuccess(false)}
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser /> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FiPhone /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consultationType">
                      Consultation Type *
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select type...</option>
                      {consultationTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">
                      <FiCalendar /> Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getMinDate()}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">
                      <FiClock /> Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select time...</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare /> Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your health goals or any specific concerns..."
                    rows="4"
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Booking...
                    </>
                  ) : (
                    <>
                      <FiCalendar />
                      Book Appointment
                    </>
                  )}
                </button>

                <p className="form-note">
                  By booking, you agree to receive appointment-related communications via email and phone.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Appointment
 
