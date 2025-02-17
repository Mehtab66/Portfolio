import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-6">
      <h2 className="text-3xl font-semibold text-center">Get in Touch</h2>
      <form className="mt-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
