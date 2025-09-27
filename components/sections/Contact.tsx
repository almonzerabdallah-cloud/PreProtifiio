import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <AnimatedSection id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display">Get In <span className="text-accent">Touch</span></h2>
          <p className="mt-4 text-lg text-text-secondary">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-primary border-2 border-gray-700 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-primary border-2 border-gray-700 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-primary border-2 border-gray-700 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-accent text-background font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-accent/20"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
