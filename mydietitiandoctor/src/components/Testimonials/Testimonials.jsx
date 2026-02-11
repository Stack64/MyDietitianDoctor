import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Zaqiya',
    role: 'Lost 15kg in 4 months',
    image: '👩',
    rating: 5,
    text: 'MyDietation completely transformed my life! The personalized diet plan was easy to follow, and the continuous WhatsApp support kept me motivated. I never thought losing weight could be this sustainable and enjoyable.',
    highlight: 'Lost 15kg'
  },
  {
    id: 2,
    name: 'Raziya',
    role: 'Diabetes Management',
    image: '👨',
    rating: 5,
    text: 'As a diabetic, I was struggling with my diet. The clinical nutrition guidance I received was exceptional. My blood sugar levels are now under control, and I feel more energetic than ever. Highly recommended!',
    highlight: 'HbA1c reduced by 2%'
  },
  {
    id: 3,
    name: 'Jyoti Sharma',
    role: 'PCOS Diet Success',
    image: '👩‍🦱',
    rating: 5,
    text: 'Dealing with PCOS was overwhelming until I found this practice. The specialized diet plan addressed all my concerns - weight, hormonal balance, and energy levels. The results speak for themselves!',
    highlight: 'Hormones balanced'
  },
  {
    id: 4,
    name: 'Dinesh',
    role: 'Sports Performance',
    image: '🧔',
    rating: 5,
    text: 'As an athlete, I needed nutrition guidance that could enhance my performance. The sports nutrition plan was scientifically designed and helped me achieve my best timings. A game-changer for any fitness enthusiast!',
    highlight: 'Performance improved 40%'
  },
  {
    id: 5,
    name: 'Pooja',
    role: 'Post-Pregnancy Weight Loss',
    image: '👩‍🍼',
    rating: 5,
    text: 'Post-pregnancy weight was my biggest concern. The diet plan was designed keeping my breastfeeding needs in mind. I lost all the baby weight while ensuring proper nutrition for my little one.',
    highlight: 'Lost 12kg safely'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-bg">
        <div className="testimonials-shape"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Testimonials</span>
          <h2>Success Stories from Our Clients</h2>
          <p>
            Real results from real people. See how our personalized nutrition 
            guidance has helped transform lives.
          </p>
        </motion.div>

        <div className="testimonials-wrapper">
          <div className="testimonials-carousel">
            <button 
              type='button'
              className="carousel-btn prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>

            <div className="carousel-content">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  className="testimonial-card"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      {testimonials[currentIndex].image}
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonials[currentIndex].name}</h4>
                      <p>{testimonials[currentIndex].role}</p>
                      <div className="testimonial-rating">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <FiStar key={i} />
                        ))}
                      </div>
                    </div>
                    <div className="testimonial-highlight">
                      {testimonials[currentIndex].highlight}
                    </div>
                  </div>
                  <blockquote className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              type='button'
              className="carousel-btn next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                type='button'
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Success Rate</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

