import { motion } from 'framer-motion'
import { 
  FiTarget, FiHeart, FiActivity, FiUsers, 
  FiAward, FiTrendingUp, FiArrowRight 
} from 'react-icons/fi'
import './Services.css'

const services = [
  {
    icon: <FiTarget />,
    title: 'Weight Management',
    description: 'Personalized plans for healthy weight loss or gain with sustainable lifestyle changes.',
    features: ['Customized meal plans', 'Progress tracking', 'Behavioral coaching'],
    color: '#2D5A27'
  },
  {
    icon: <FiHeart />,
    title: 'Clinical Nutrition',
    description: 'Expert dietary management for diabetes, heart disease, PCOS, and other conditions.',
    features: ['Disease-specific diets', 'Lab report analysis', 'Medical nutrition therapy'],
    color: '#E74C3C'
  },
  {
    icon: <FiActivity />,
    title: 'Sports Nutrition',
    description: 'Fuel your performance with nutrition strategies tailored for athletes and fitness enthusiasts.',
    features: ['Performance optimization', 'Recovery nutrition', 'Supplement guidance'],
    color: '#3498DB'
  },
  {
    icon: <FiUsers />,
    title: 'Family Nutrition',
    description: 'Comprehensive nutrition planning for the whole family, from kids to grandparents.',
    features: ['Child nutrition', 'Pregnancy diet', 'Elderly care nutrition'],
    color: '#9B59B6'
  },
  {
    icon: <FiAward />,
    title: 'Corporate Wellness',
    description: 'Workplace nutrition programs to boost employee health and productivity.',
    features: ['Group workshops', 'Health assessments', 'Lunch & learn sessions'],
    color: '#F39C12'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Lifestyle Coaching',
    description: 'Holistic approach combining nutrition, stress management, and healthy habits.',
    features: ['Habit building', 'Stress eating solutions', 'Sleep optimization'],
    color: '#1ABC9C'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const Services = () => {
  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Our Services</span>
          <h2>Comprehensive Nutrition Solutions</h2>
          <p>
            From weight management to clinical nutrition, we offer a complete range 
            of dietitian services tailored to your unique health journey.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div 
                className="service-icon"
                style={{ background: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-dot" style={{ background: service.color }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="service-btn"
                onClick={scrollToAppointment}
                style={{ color: service.color }}
              >
                Learn More <FiArrowRight />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

