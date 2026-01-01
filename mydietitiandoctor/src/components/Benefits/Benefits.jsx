import { motion } from 'framer-motion'
import { 
  FiCheck, FiClock, FiShield, FiSmartphone, 
  FiDollarSign, FiRefreshCw, FiMessageCircle, FiStar 
} from 'react-icons/fi'
import './Benefits.css'

const benefits = [
  {
    icon: <FiCheck />,
    title: 'Personalized Plans',
    description: 'Every diet plan is customized to your body type, lifestyle, and health goals.'
  },
  {
    icon: <FiClock />,
    title: 'Flexible Scheduling',
    description: 'Book consultations at your convenience - morning, evening, or weekends.'
  },
  {
    icon: <FiSmartphone />,
    title: 'Online & Offline',
    description: 'Choose between video consultations or in-person visits as per your preference.'
  },
  {
    icon: <FiShield />,
    title: 'Evidence-Based',
    description: 'All recommendations are backed by scientific research and clinical expertise.'
  },
  {
    icon: <FiRefreshCw />,
    title: 'Continuous Support',
    description: 'Regular follow-ups and WhatsApp support to keep you on track.'
  },
  {
    icon: <FiDollarSign />,
    title: 'Affordable Packages',
    description: 'Budget-friendly consultation packages with no hidden charges.'
  },
  {
    icon: <FiMessageCircle />,
    title: '24/7 Chat Support',
    description: 'Get your diet queries answered anytime via our WhatsApp support.'
  },
  {
    icon: <FiStar />,
    title: 'Guaranteed Results',
    description: 'Our proven methods have helped 500+ clients achieve their health goals.'
  }
]

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits-bg">
        <div className="benefits-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Why Choose Us</span>
          <h2>Benefits of Consulting With Us</h2>
          <p>
            Experience the difference of working with a dedicated nutrition expert 
            who truly cares about your health journey.
          </p>
        </motion.div>

        <div className="benefits-wrapper">
          <motion.div 
            className="benefits-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <div className="benefit-content">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="benefits-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="cta-content">
              <h3>Ready to Transform Your Health?</h3>
              <p>Book your free consultation today and take the first step towards a healthier you.</p>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits

