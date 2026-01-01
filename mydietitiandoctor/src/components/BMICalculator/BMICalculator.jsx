import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiActivity, FiInfo } from 'react-icons/fi'
import './BMICalculator.css'

const BMICalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBMI = (e) => {
    e.preventDefault()
    
    if (!height || !weight) return
    
    const heightInMeters = parseFloat(height) / 100
    const weightInKg = parseFloat(weight)
    const bmiValue = weightInKg / (heightInMeters * heightInMeters)
    const roundedBMI = Math.round(bmiValue * 10) / 10
    
    setBmi(roundedBMI)
    
    if (bmiValue < 18.5) {
      setCategory('underweight')
    } else if (bmiValue < 25) {
      setCategory('normal')
    } else if (bmiValue < 30) {
      setCategory('overweight')
    } else {
      setCategory('obese')
    }
  }

  const resetCalculator = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setCategory('')
  }

  const getCategoryInfo = () => {
    switch (category) {
      case 'underweight':
        return {
          label: 'Underweight',
          color: '#3498DB',
          message: 'You may need to gain some weight. Our weight gain program can help you achieve a healthy weight.',
          icon: '💪'
        }
      case 'normal':
        return {
          label: 'Healthy Weight',
          color: '#27AE60',
          message: 'Great job! You\'re at a healthy weight. Let us help you maintain it with a balanced diet plan.',
          icon: '✅'
        }
      case 'overweight':
        return {
          label: 'Overweight',
          color: '#F39C12',
          message: 'You\'re slightly above healthy weight. Our personalized diet plan can help you get back on track.',
          icon: '⚠️'
        }
      case 'obese':
        return {
          label: 'Obese',
          color: '#E74C3C',
          message: 'It\'s important to take action. Book a consultation for a comprehensive weight management plan.',
          icon: '🔴'
        }
      default:
        return null
    }
  }

  const categoryInfo = getCategoryInfo()

  return (
    <section className="bmi-calculator" id="bmi">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Health Tool</span>
          <h2>BMI Calculator</h2>
          <p>
            Calculate your Body Mass Index to understand your current health status 
            and get personalized recommendations.
          </p>
        </motion.div>

        <div className="bmi-wrapper">
          <motion.div 
            className="bmi-form-section"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={calculateBMI} className="bmi-form">
              <div className="bmi-input-group">
                <label htmlFor="height">Height (cm)</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g., 170"
                    min="100"
                    max="250"
                    required
                  />
                  <span className="input-unit">cm</span>
                </div>
              </div>

              <div className="bmi-input-group">
                <label htmlFor="weight">Weight (kg)</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g., 70"
                    min="30"
                    max="300"
                    required
                  />
                  <span className="input-unit">kg</span>
                </div>
              </div>

              <div className="bmi-buttons">
                <button type="submit" className="btn btn-primary">
                  <FiActivity /> Calculate BMI
                </button>
                {bmi && (
                  <button type="button" className="btn btn-secondary" onClick={resetCalculator}>
                    Reset
                  </button>
                )}
              </div>
            </form>

            <div className="bmi-scale">
              <h4><FiInfo /> BMI Categories</h4>
              <div className="scale-items">
                <div className="scale-item">
                  <span className="scale-color" style={{ background: '#3498DB' }}></span>
                  <span>Under 18.5 - Underweight</span>
                </div>
                <div className="scale-item">
                  <span className="scale-color" style={{ background: '#27AE60' }}></span>
                  <span>18.5 - 24.9 - Healthy</span>
                </div>
                <div className="scale-item">
                  <span className="scale-color" style={{ background: '#F39C12' }}></span>
                  <span>25 - 29.9 - Overweight</span>
                </div>
                <div className="scale-item">
                  <span className="scale-color" style={{ background: '#E74C3C' }}></span>
                  <span>30+ - Obese</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bmi-result-section"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {bmi ? (
              <motion.div 
                className="bmi-result"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="bmi-circle"
                  style={{ borderColor: categoryInfo?.color }}
                >
                  <span className="bmi-value">{bmi}</span>
                  <span className="bmi-label">BMI</span>
                </div>
                
                <div 
                  className="bmi-category"
                  style={{ background: `${categoryInfo?.color}15`, borderColor: categoryInfo?.color }}
                >
                  <span className="category-icon">{categoryInfo?.icon}</span>
                  <span className="category-label" style={{ color: categoryInfo?.color }}>
                    {categoryInfo?.label}
                  </span>
                </div>

                <p className="bmi-message">{categoryInfo?.message}</p>

                <button 
                  className="btn btn-primary"
                  onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Personalized Diet Plan
                </button>
              </motion.div>
            ) : (
              <div className="bmi-placeholder">
                <div className="placeholder-icon">🧮</div>
                <h3>Calculate Your BMI</h3>
                <p>
                  Enter your height and weight to calculate your Body Mass Index 
                  and receive personalized health recommendations.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
 