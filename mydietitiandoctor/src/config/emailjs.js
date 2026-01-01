// EmailJS Configuration
// You need to sign up at https://www.emailjs.com/ and get your credentials

export const EMAILJS_CONFIG = {
    // Replace these with your actual EmailJS credentials
    SERVICE_ID: 'YOUR_SERVICE_ID', // e.g., 'service_abc123'
    TEMPLATE_ID_USER: 'YOUR_USER_TEMPLATE_ID', // Template for user confirmation
    TEMPLATE_ID_ADMIN: 'YOUR_ADMIN_TEMPLATE_ID', // Template for admin notification
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Your EmailJS public key
    
    // Admin email to receive booking notifications
    ADMIN_EMAIL: 'admin@mydietationdoctor.com',
  }
  
  // Contact Information - Update these with real values
  export const CONTACT_INFO = {
    phone: '+91 98765 43210',
    whatsapp: '+919876543210', // Without spaces or dashes for WhatsApp link
    email: 'contact@mydietationdoctor.com',
    address: '123 Health Street, Wellness City, State 123456',
    workingHours: {
      weekdays: '9:00 AM - 7:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed'
    },
    socialMedia: {
      facebook: 'https://facebook.com/mydietationdoctor',
      instagram: 'https://instagram.com/mydietationdoctor',
      twitter: 'https://twitter.com/mydietdoctor',
      linkedin: 'https://linkedin.com/company/mydietationdoctor'
    }
  }
  
  