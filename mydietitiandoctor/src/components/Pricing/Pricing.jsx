import { motion } from 'framer-motion'
import { FiCheck, FiStar } from 'react-icons/fi'
import './Pricing.css'

const pricingPlans = [
  {
    name: 'Basic',
    subtitle: 'Single Consultation',
    price: '499',
    period: 'per session',
    features: [
      '30-minute consultation',
      'Basic diet assessment',
      'General diet guidelines',
      'Email support (48 hrs)',
      '1 Follow-up call'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Premium',
    subtitle: 'Most Popular',
    price: '1,499',
    period: 'per month',
    features: [
      'Weekly consultations',
      'Detailed body analysis',
      'Customized meal plans',
      'WhatsApp support 24/7',
      'Recipe suggestions',
      'Weekly progress tracking',
      'Grocery shopping list'
    ],
    popular: true,
    cta: 'Book Now'
  },
  {
    name: 'Transformation',
    subtitle: '3-Month Program',
    price: '3,999',
    period: '3 months',
    features: [
      'Everything in Premium',
      'Complete body transformation',
      'Bi-weekly video calls',
      'Exercise recommendations',
      'Supplement guidance',
      'Monthly body analysis',
      'Priority support',
      'Lifetime diet chart access'
    ],
    popular: false,
    cta: 'Transform Now'
  }
]

const Pricing = () => {
  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Pricing</span>
          <h2>Choose Your Plan</h2>
          <p>
            Affordable consultation packages designed to fit your needs and budget. 
            Invest in your health today!
          </p>
        </motion.div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <FiStar /> Most Popular
                </div>
              )}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p className="pricing-subtitle">{plan.subtitle}</p>
                <div className="pricing-amount">
                  <span className="currency">₹</span>
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FiCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={scrollToAppointment}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pricing-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            💡 <strong>Not sure which plan is right for you?</strong> 
            Book a free 15-minute discovery call to discuss your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

