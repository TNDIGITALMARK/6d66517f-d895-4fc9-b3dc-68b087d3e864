"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { restaurantInfo } from '@/data/menu-data'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitStatus('success')
    setIsSubmitting(false)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-restaurant-dark-brown text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-playfair mb-4">
            Contact <span className="text-restaurant-golden">Us</span>
          </h1>
          <p className="text-xl opacity-90">
            We would love to hear from you. Get in touch with any questions or feedback.
          </p>
        </div>
      </section>

      <section className="py-20 bg-restaurant-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair text-restaurant-dark-brown mb-8">
                Get in <span className="text-restaurant-golden">Touch</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-restaurant-dark-brown mb-3">Location</h3>
                  <p className="text-gray-600">{restaurantInfo.contact.address}</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-restaurant-dark-brown mb-3">Phone</h3>
                  <p className="text-gray-600">{restaurantInfo.contact.phone}</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-restaurant-dark-brown mb-3">Email</h3>
                  <p className="text-gray-600">{restaurantInfo.contact.email}</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-restaurant-dark-brown mb-3">Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-gray-600">
                        <span className="font-medium">{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-playfair text-restaurant-dark-brown mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-restaurant-golden text-restaurant-dark-brown px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-playfair text-restaurant-dark-brown mb-6">
                    Send us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-restaurant-golden focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-restaurant-golden focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-restaurant-golden focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="private-event">Private Event</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering Services</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Please share your message, questions, or feedback..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-restaurant-golden focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-restaurant-dark-brown text-white py-4 text-lg font-medium rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-playfair text-restaurant-dark-brown mb-6">
            Visit <span className="text-restaurant-golden">Us</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of the Fine Dining District, Bella Vista Bistro is easily accessible
            by public transportation and offers valet parking for your convenience.
          </p>
        </div>
      </section>
    </div>
  )
}