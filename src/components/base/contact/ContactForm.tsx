"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  CheckCircle,
  X,
  Book,
  CreditCard,
  Star,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

const ContactForm = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const watchedMessage = watch("message", "");

  const topicOptions = [
    { value: "course-issue", label: "Course Issue", icon: Book },
    { value: "payment", label: "Payment Support", icon: CreditCard },
    { value: "feedback", label: "Feedback", icon: Star },
    { value: "technical", label: "Technical Support", icon: HelpCircle },
    { value: "other", label: "Other", icon: MessageSquare },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Success
      reset();
      setShowSuccessModal(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to send message",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          aria-label="icon-close"
          onClick={() => setShowSuccessModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Message Sent Successfully!
          </h3>

          <p className="text-gray-600 mb-6">
            Thank you for reaching out. Our team will get back to you within 24
            hours.
          </p>

          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );

  const InputError = ({ error }: { error?: string }) => {
    if (!error) return null;
    return (
      <div className="flex items-center mt-1 text-sm text-red-600">
        <AlertCircle size={16} className="mr-1" />
        {error}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions about your courses or need support? We&apos;re here
              to help you succeed in your learning journey.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you&apos;re facing technical difficulties, have
                questions about our courses, or want to share feedback, our
                dedicated support team is ready to assist you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">Get help via email</p>
                <p className="text-blue-600 font-medium">
                  support@elearning.com
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Phone Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Mon-Fri, 9AM-6PM EST
                </p>
                <p className="text-green-600 font-medium">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Help
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>
                    Check our{" "}
                    <span className="text-purple-600 font-medium">
                      Knowledge Base
                    </span>{" "}
                    for instant answers
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>
                    Browse{" "}
                    <span className="text-blue-600 font-medium">
                      Video Tutorials
                    </span>{" "}
                    for step-by-step guides
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>
                    Join our{" "}
                    <span className="text-green-600 font-medium">
                      Community Forum
                    </span>{" "}
                    to connect with peers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-0 ${
                    errors.name
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  }`}
                  placeholder="Enter your full name"
                />
                <InputError error={errors.name?.message} />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-0 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  }`}
                  placeholder="Enter your email address"
                />
                <InputError error={errors.email?.message} />
              </div>

              {/* Topic Dropdown */}
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Topic *
                </label>
                <select
                  id="topic"
                  {...register("topic")}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-0 appearance-none bg-white ${
                    errors.topic
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  }`}
                >
                  <option value="">Select a topic</option>
                  {topicOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <InputError error={errors.topic?.message} />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-0 resize-none ${
                    errors.message
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  }`}
                  placeholder="Tell us how we can help you..."
                />
                <InputError error={errors.message?.message} />
                <p className="mt-1 text-sm text-gray-500">
                  {watchedMessage?.length || 0}/1000 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Contact Info Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                Typical response time:{" "}
                <span className="font-medium text-gray-700">
                  Within 24 hours
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal />}
    </div>
  );
};

export default ContactForm;
