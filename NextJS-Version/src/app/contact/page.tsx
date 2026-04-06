'use client';

import { useState } from 'react';

const products = [
  'Cotton Yarn',
  'Polyester Yarn',
  'Satin Cord Yarn',
  'Bath Towels',
  'Bath Mats',
  'General / Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('contact-name'),
          company: formData.get('contact-company'),
          email: formData.get('contact-email'),
          phone: formData.get('contact-phone'),
          product: formData.get('contact-product'),
          message: formData.get('contact-message'),
        }),
      });
      
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to send');
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to send message. Please try again or use WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* ── Header ── */}
      <section className="gradient-hero text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Reach Out</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Get in touch for quotes, samples, bulk orders or any other inquiry. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Contact Info Sidebar */}
            <div className="md:col-span-1 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Get In Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Whether you are looking for bulk yarn supplies, custom home textile orders, or just want to know more about our products — our team is here to help.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: '📍',
                    title: 'Our Address',
                    lines: ['Aggarwal Market, Gali No. 2', 'Gohana Road, Panipat - 132103', 'Haryana, India'],
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    lines: ['+91-7419300657'],
                  },
                  {
                    icon: '✉️',
                    title: 'Email',
                    lines: ['aptextileindustries1@gmail.com'],
                  },
                  {
                    icon: '🕐',
                    title: 'Business Hours',
                    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 items-start shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{item.title}</p>
                      {item.lines.map((l, j) => (
                        <p key={j} className="text-navy text-sm font-medium">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <span className="text-6xl block mb-6">✅</span>
                    <h3 className="text-2xl font-bold text-navy mb-3">Message Sent!</h3>
                    <p className="text-gray-500 text-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-navy mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {errorMsg && (
                        <div className="md:col-span-2 bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium border border-red-100">
                          {errorMsg}
                        </div>
                      )}

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          name="contact-name"
                          type="text"
                          required
                          placeholder="Rahul Sharma"
                          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="company">Company Name</label>
                        <input
                          id="company"
                          name="contact-company"
                          type="text"
                          placeholder="Sharma Fabrics Pvt. Ltd."
                          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="contact-email"
                          type="email"
                          required
                          placeholder="rahul@sharmafabrics.com"
                          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          name="contact-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all"
                        />
                      </div>

                      <div className="md:col-span-2 flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="product">Product Interest</label>
                        <select
                          id="product"
                          name="contact-product"
                          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all text-gray-600 bg-white"
                        >
                          <option value="">Select a product...</option>
                          {products.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>

                      <div className="md:col-span-2 flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="message">Your Message *</label>
                        <textarea
                          id="message"
                          name="contact-message"
                          required
                          rows={5}
                          placeholder="Please describe your requirements — quantity, specifications, delivery location, etc."
                          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all resize-none"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {submitting ? 'Sending Request...' : 'Send Message →'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
