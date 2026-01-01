import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import BMICalculator from './components/BMICalculator/BMICalculator'
import Benefits from './components/Benefits/Benefits'
import Pricing from './components/Pricing/Pricing'
import Appointment from './components/Appointments/Appointments'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#2D5A27',
            color: '#fff',
            padding: '16px 24px',
            borderRadius: '12px',
            fontSize: '1rem',
          },
          success: {
            iconTheme: {
              primary: '#7CB342',
              secondary: '#fff',
            },
          },
          error: {
            style: {
              background: '#E74C3C',
            },
          },
        }}
      />
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <About />
            <BMICalculator />
            <Benefits />
            <Pricing />
            <Appointment />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <FloatingButtons />
        </>
      )}
    </>
  )
}

export default App

