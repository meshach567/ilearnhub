// pages/partner-with-us.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  organizationName: string;
  contactName: string;
  email: string;
  phone: string;
  partnershipType: string;
  message: string;
};

const PartnerWithUs: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // This is a placeholder for the actual form submission
    // In a real implementation, you would send this data to your backend
    console.log("Form data:", data);

    // Simulate API call
    try {
      // Simulating an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Your partnership request has been submitted successfully!",
      );
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />

      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <Image
            src="/assets/images/smiles.png"
            alt="Educational partnership"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Partner With ILearnSchool
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Together, we can transform education and create a brighter future
              for students worldwide
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Partner With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Expanded Reach
              </h3>
              <p className="text-gray-600">
                Gain access to our network of schools, educators, and students
                across the globe, expanding your organization&apos;s impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Innovative Collaboration
              </h3>
              <p className="text-gray-600">
                Co-develop cutting-edge educational solutions, combining your
                expertise with our innovative platform and methodology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Measurable Impact
              </h3>
              <p className="text-gray-600">
                Access detailed analytics and insights on educational outcomes,
                helping you demonstrate the real impact of your contributions.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4 max-w-7xl mx-auto bg-blue-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Partnership Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Corporate Partnerships
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Co-branded educational content and courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Corporate social responsibility initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Employee volunteer and mentorship programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Technology and resource sharing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Educational Institutions
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Curriculum integration and development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Teacher training and professional development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Research collaborations and studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Student exchange and internship programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Non-Profit Organizations
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Joint grant applications and funding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Community outreach programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Educational resource sharing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advocacy and awareness campaigns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Technology Providers
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>EdTech integration and development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Digital learning resources and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Platform enhancements and features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Data analytics and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Partnership Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 relative mr-4">
                  <Image
                    src="/assets/images/smiles.png"
                    alt="TechEd Solutions logo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    TechEd Solutions
                  </h3>
                  <p className="text-blue-600">Technology Partner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Our partnership with ILearnSchool has allowed us to reach
                thousands of classrooms with our educational software. Together,
                we&apos;ve improved learning outcomes for STEM subjects by over
                30% in participating schools&quot;
              </p>
              <p className="text-gray-800 font-medium">
                — Sarah Johnson, Director of Educational Partnerships
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 relative mr-4">
                  <Image
                    src="/assets/images/smiles.png"
                    alt="Global Education Foundation logo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Global Education Foundation
                  </h3>
                  <p className="text-blue-600">Non-Profit Partner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Working with ILearnSchool has amplified our impact in
                underserved communities. We&apos;ve been able to bring quality
                educational content to over 50 new locations across three
                continents in just one year.&quot;
              </p>
              <p className="text-gray-800 font-medium">
                — Miguel Reyes, Executive Director
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Partnership Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Initial Contact
              </h3>
              <p className="text-gray-600">
                Complete the partnership inquiry form with your
                organization`&apos;`s information and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Consultation
              </h3>
              <p className="text-gray-600">
                Our partnership team will schedule a meeting to discuss
                potential collaboration opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Proposal
              </h3>
              <p className="text-gray-600">
                We`&apos;`ll develop a customized partnership plan based on our
                mutual goals and resources.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Implementation
              </h3>
              <p className="text-gray-600">
                Launch our partnership with clear milestones, regular check-ins,
                and success metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 max-w-3xl mx-auto" id="contact-form">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Become a Partner
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="organizationName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Organization Name*
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    {...register("organizationName", {
                      required: "Organization name is required",
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.organizationName ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.organizationName && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.organizationName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Contact Person*
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    {...register("contactName", {
                      required: "Contact name is required",
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.contactName ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.contactName && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.contactName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="partnershipType"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Partnership Type*
                </label>
                <select
                  id="partnershipType"
                  {...register("partnershipType", {
                    required: "Please select a partnership type",
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.partnershipType ? "border-red-500" : "border-gray-300"}`}
                >
                  <option value="">Select a partnership type</option>
                  <option value="corporate">Corporate Partnership</option>
                  <option value="educational">Educational Institution</option>
                  <option value="nonprofit">Non-Profit Organization</option>
                  <option value="technology">Technology Provider</option>
                  <option value="other">Other</option>
                </select>
                {errors.partnershipType && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.partnershipType.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Tell us about your organization and partnership goals*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Please provide partnership details",
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"}`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Partnership Inquiry"}
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  You can also email us directly at{" "}
                  <a
                    href="mailto:partnerships@ilearnschool.edu"
                    className="text-blue-600 hover:underline"
                  >
                    partnerships@ilearnschool.edu
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How long does the partnership process typically take?
              </h3>
              <p className="text-gray-600">
                From initial contact to implementation, the partnership process
                typically takes 4-6 weeks, depending on the complexity of the
                collaboration and the responsiveness of both parties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Are there any costs associated with partnering with
                ILearnSchool?
              </h3>
              <p className="text-gray-600">
                Partnership structures vary based on the type of collaboration.
                Some partnerships involve resource sharing rather than financial
                investment, while others may include licensing fees, revenue
                sharing, or joint investments in specific projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Can we customize our partnership agreement?
              </h3>
              <p className="text-gray-600">
                Absolutely! We believe in creating tailored partnerships that
                align with both organizations&apos; goals and capabilities. Our
                team will work with you to develop a customized agreement that
                addresses your specific needs and objectives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What is the typical duration of partnerships?
              </h3>
              <p className="text-gray-600">
                Initial partnership agreements typically range from 1-3 years,
                with options for renewal. We find this timeframe allows for
                meaningful collaboration while providing flexibility to evolve
                the partnership as needs change.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-700 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Education Together?
            </h2>
            <p className="text-xl mb-8">
              Join our growing network of partners making a meaningful impact in
              education worldwide.
            </p>
            <a
              href="#contact-form"
              className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
            >
              Start Your Partnership Journey Today
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default PartnerWithUs;
