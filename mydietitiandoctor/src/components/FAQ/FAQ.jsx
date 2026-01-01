import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import './FAQ.css'

const faqs = [
  {
    question: 'What happens during the first consultation?',
    answer: 'During your first consultation, we conduct a comprehensive assessment including your medical history, current eating habits, lifestyle, and health goals. Based on this, we create a personalized nutrition plan tailored specifically for you.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results vary depending on your goals and consistency. Generally, clients start noticing changes within 2-4 weeks. For significant transformations like weight loss, we recommend a 3-month program for sustainable results.'
  },
  {
    question: 'Do you provide online consultations?',
    answer: 'Yes! We offer both online (video call) and in-person consultations. Our online consultations are just as comprehensive and include all the benefits of in-person visits, plus the convenience of consulting from home.'
  },
  {
    question: 'Will I have to give up my favorite foods?',
    answer: 'Not at all! We believe in balance, not deprivation. Our diet plans are designed to include foods you enjoy while ensuring you meet your nutritional needs. We focus on portion control and healthier alternatives.'
  },
  {
    question: 'How often will I need follow-up appointments?',
    answer: 'Follow-up frequency depends on your plan. Basic plans include monthly check-ins, while Premium and Transformation plans have weekly consultations. We also provide WhatsApp support for quick queries between appointments.'
  },
  {
    question: 'Do you provide diet plans for specific medical conditions?',
    answer: 'Yes, we specialize in clinical nutrition for conditions like diabetes, PCOS/PCOD, thyroid disorders, heart disease, kidney issues, and more. Our plans are designed in coordination with your medical treatment.'
  },
  {
    question: 'Can you help with weight gain?',
    answer: 'Absolutely! We have specialized programs for healthy weight gain, especially for those who are underweight, recovering from illness, or looking to build muscle mass. Our approach ensures you gain healthy weight, not just fat.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including UPI (GPay, PhonePe, Paytm), credit/debit cards, net banking, and cash for in-person visits. We also offer EMI options for our 3-month transformation programs.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Got questions? We've got answers. Here are the most common 
            questions our clients ask.
          </p>
        </motion.div>

        <div className="faq-wrapper">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="faq-contact"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="faq-contact-card">
              <div className="faq-contact-icon">🤔</div>
              <h3>Still have questions?</h3>
              <p>
                Can't find the answer you're looking for? 
                Feel free to reach out to our friendly team.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

