import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendar, FaUsers, FaUtensils, FaStar, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "", subject: "general" });
    setIsSubmitting(false);
  };

  const faqs = [
    {
      question: "Do you accept reservations?",
      answer: "Yes, we accept reservations for both lunch and dinner. You can book online through our website or call us directly."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open daily from 8:30 AM to 8:30 PM, serving breakfast, lunch, and dinner."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes, we provide catering services for events, corporate functions, and special occasions. Contact us for custom menus."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have free parking available for our customers in the adjacent parking lot."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Absolutely! We have a wide variety of vegetarian and vegan dishes on our menu."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Yes, we can accommodate various dietary restrictions including gluten-free, dairy-free, and nut-free options."
    }
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "605 Rogers Rd a2, York, ON M6M 1B9, Canada",
      action: "Get Directions",
      actionLink: "https://maps.google.com"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: "(+1) 289-308-6626",
      action: "Call Now",
      actionLink: "tel:+12893086626"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "info@spicyindianflavours.com",
      action: "Send Email",
      actionLink: "mailto:info@spicyindianflavours.com"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: "Quick responses for orders & reservations",
      action: "Chat Now",
      actionLink: "https://wa.me/12893086626"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAEAD1] to-[#F5E6D3]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#6E1E00] to-[#8B2E00] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              <span className="text-[#FEB64C]">Get in</span> Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
              We'd love to hear from you! Whether you have questions, want to make a reservation, 
              or just want to say hello, we're here to help.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaClock className="text-[#FEB64C]" />
                <span>Open Daily 8:30 AM - 8:30 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar className="text-[#FEB64C]" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-[#6E1E00]/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'contact', name: 'Contact Us', icon: FaEnvelope },
              { id: 'faq', name: 'FAQ', icon: FaUtensils }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#6E1E00] text-[#FEB64C] shadow-lg'
                    : 'bg-white/80 text-[#6E1E00] hover:bg-[#6E1E00]/10 border border-[#6E1E00]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="text-lg" />
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-[#6E1E00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="text-2xl text-[#FEB64C]" />
                </div>
                <h3 className="text-xl font-bold text-[#6E1E00] mb-2">{info.title}</h3>
                <p className="text-gray-600 mb-4">{info.details}</p>
                <a
                  href={info.actionLink}
                  className="inline-block bg-[#FEB64C] text-[#6E1E00] px-4 py-2 rounded-full font-semibold hover:bg-[#FEB64C]/90 transition-colors"
                >
                  {info.action}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Contact Form */}
                <AnimatedSection>
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-[#6E1E00] mb-6 font-display">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#6E1E00] mb-2">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-[#6E1E00]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FEB64C] focus:border-transparent outline-none transition-all"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#6E1E00] mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-[#6E1E00]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FEB64C] focus:border-transparent outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#6E1E00] mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full border border-[#6E1E00]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FEB64C] focus:border-transparent outline-none transition-all"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#6E1E00] mb-2">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-[#6E1E00]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FEB64C] focus:border-transparent outline-none transition-all"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="catering">Catering Services</option>
                          <option value="feedback">Feedback</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#6E1E00] mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                          className="w-full border border-[#6E1E00]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FEB64C] focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#6E1E00] hover:bg-[#5a1a00] text-[#FEB64C] font-bold rounded-lg py-4 px-6 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                      </button>
                    </form>
                  </div>
                </AnimatedSection>

                {/* Map and Info */}
                <div className="space-y-6">
                  <AnimatedSection>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="relative h-80">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.3917790036703!2d-79.47606832413865!3d43.68161785059284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b370714475f51%3A0x783f1ec48e49bb60!2sSpicy%20Indian%20Flavours%20(Inside%20Ample%20Food%20Market)!5e0!3m2!1sen!2sin!4v1752900172704!5m2!1sen!2sin"
                          className="w-full h-full border-0"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Spicy Indian Flavours Location"
                        />
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <FaClock className="w-6 h-6 text-[#6E1E00]" />
                        <h2 className="text-2xl font-bold text-[#6E1E00] font-display">
                          Opening Hours
                        </h2>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="font-semibold text-[#6E1E00]">Monday - Sunday</span>
                          <span className="text-gray-700">8:30 AM - 8:30 PM</span>
                        </div>
                        <div className="bg-[#FAEAD1] p-4 rounded-lg">
                          <p className="text-sm text-[#6E1E00] font-semibold mb-1">Special Hours</p>
                          <p className="text-sm text-gray-600">We're open 7 days a week for your convenience!</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </motion.div>
            )}



            {activeTab === 'faq' && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <AnimatedSection>
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-[#6E1E00] mb-8 font-display text-center">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border border-[#6E1E00]/20 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                        >
                          <h3 className="text-lg font-bold text-[#6E1E00] mb-3">{faq.question}</h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-[#6E1E00] mb-6 font-display">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Follow us on social media for daily updates, behind-the-scenes content, 
              special offers, and mouth-watering food photos!
            </p>
            <div className="flex justify-center gap-6">
              {[
                { icon: FaInstagram, name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500', followers: '2.5K' },
                { icon: FaFacebook, name: 'Facebook', color: 'bg-blue-600', followers: '1.8K' },
                { icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500', followers: 'Quick Chat' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className={`${social.color} text-white p-6 rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-3xl mb-2" />
                  <div className="text-sm font-semibold">{social.name}</div>
                  <div className="text-xs opacity-90">{social.followers}</div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;