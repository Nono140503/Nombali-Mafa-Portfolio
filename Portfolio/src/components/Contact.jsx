import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_7y2k6z2'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9jxhoc1'
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '7ja7xa4'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VPVizav-E4T0KIBh2'

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [publicKey])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    setErrorMessage('')

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject || 'Portfolio Contact Form Submission',
      message: formData.message,
      to_name: 'Nombali Mafa',
      to_email: 'nombalimafa@gmail.com'
    }

    try {
      // 1. Primary email notification to Nombali
      const res1 = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log('Primary email sent successfully:', res1)

      // Primary email delivered -> Set success state
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // 2. Secondary auto-reply email to visitor
      if (autoReplyTemplateId && autoReplyTemplateId !== templateId) {
        emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey)
          .then(res2 => console.log('Auto-reply sent successfully:', res2))
          .catch(err2 => console.warn('Auto-reply notice:', err2?.text || err2))
      }
    } catch (error) {
      console.error('EmailJS Primary Error:', error)
      const rawMsg = error?.text || error?.message || ''
      setErrorMessage(rawMsg || 'Unable to send message')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus('')
      }, 7000)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header text-center animate-fadeInUp">
          <div className="section-label">
            <span>03 // GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Meaningful Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a product idea, collaboration opportunity, or high-impact project, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-info-card glass-card animate-fadeInUp">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">
              I'm open for software engineering roles, hackathon collaborations, and custom client projects.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="item-label">Location</h4>
                  <p className="item-value">Johannesburg, South Africa</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 className="item-label">Direct Email</h4>
                  <p className="item-value">nombalimafa@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="item-label">Availability</h4>
                  <p className="item-value">Available for New Projects</p>
                </div>
              </div>
            </div>

            <div className="social-links-box">
              <span className="social-label">Connect Online:</span>
              <div className="social-pills">
                <a 
                  href="https://github.com/Nono140503" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/nombali-mafa-931086280" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card glass-card animate-fadeInUp">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Thabo Molefe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. thabo@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Collaboration on AI Solution"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project, timeline, or opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-banner">
                  ✓ Message sent successfully! I will reply shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-banner">
                  ✕ {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact