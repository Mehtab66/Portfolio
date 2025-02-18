import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email, // Sender's email
      message: formData.message,
      reply_to: formData.email, // This ensures you can reply to the sender
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        templateParams,
        import.meta.env.VITE_PUBLIC
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-lg mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Feel free to reach out for collaborations or just a friendly hello!
        </motion.p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg"
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button
          type="submit"
          className="w-full bg-[#FF5733] text-white px-4 py-2 rounded  transition"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
