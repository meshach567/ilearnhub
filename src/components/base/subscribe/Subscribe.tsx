// components/SubscribeForm.tsx
"use client";
import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setMessage(`Thank you for subscribing with ${email}!`);
      setEmail(""); // Clear the input field
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <section className="bg-[#4B0082] rounded-lg mb-9 w-4/5 mx-auto py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>

        {/* Paragraph */}
        <p className="text-white mb-8">
          Stay updated with the latest news, updates, and exclusive offers.
        </p>

        {/* Email Input and Button */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-4 pr-32 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF7F50] text-white px-6 py-2 rounded-3xl cursor-pointer transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Message */}
        {message && <p className="mt-4 text-sm text-white">{message}</p>}
      </div>
    </section>
  );
};

export default SubscribeForm;
