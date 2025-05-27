import React from "react";
import Image from "next/image";
import {
  BookOpen,
  Video,
  FileText,
  Award,
  Users,
  TrendingUp,
  Smartphone,
  CheckCircle,
  Star,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import Elean from "@/assets/images/elearn.png";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Course Catalog",
      description:
        "Access thousands of expertly crafted courses across multiple disciplines",
      features: [
        "10,000+ courses",
        "Expert instructors",
        "Self-paced learning",
        "Lifetime access",
      ],
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Video,
      title: "Live Classes",
      description:
        "Join real-time interactive sessions with industry professionals",
      features: [
        "Interactive sessions",
        "Q&A with experts",
        "Small class sizes",
        "Recording available",
      ],
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: FileText,
      title: "Quizzes & Assessments",
      description:
        "Test your knowledge with comprehensive assessments and instant feedback",
      features: [
        "Instant feedback",
        "Detailed analytics",
        "Practice tests",
        "Skill validation",
      ],
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Certifications",
      description:
        "Earn industry-recognized certificates to boost your career prospects",
      features: [
        "Industry recognized",
        "Digital badges",
        "LinkedIn integration",
        "Career advancement",
      ],
      color: "bg-yellow-500",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Mentorship & Community",
      description:
        "Connect with mentors and peers in our vibrant learning community",
      features: [
        "1-on-1 mentoring",
        "Study groups",
        "Discussion forums",
        "Networking events",
      ],
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed analytics and insights",
      features: [
        "Learning analytics",
        "Goal setting",
        "Achievement tracking",
        "Performance insights",
      ],
      color: "bg-indigo-500",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Learn anywhere, anytime with our mobile-optimized platform",
      features: [
        "Cross-device sync",
        "Offline download",
        "Mobile app",
        "Responsive design",
      ],
      color: "bg-teal-500",
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Students", icon: Users },
    { number: "10K+", label: "Courses Available", icon: BookOpen },
    { number: "95%", label: "Completion Rate", icon: CheckCircle },
    { number: "4.8", label: "Average Rating", icon: Star },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      content:
        "The mentorship program helped me transition into tech. The personalized guidance was invaluable.",
      avatar: Elean,
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      content:
        "Live classes with industry experts gave me practical skills I use daily in my job.",
      avatar: Elean,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      content:
        "The certification program opened doors to new career opportunities. Highly recommended!",
      avatar: Elean,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive learning solutions designed to accelerate your
              career growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <PlayCircle size={20} />
                Watch Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon size={32} className="text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From beginner-friendly courses to advanced certifications, we
              provide comprehensive learning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-6`}>
                  <service.icon size={48} className="text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group-hover:bg-blue-50 group-hover:text-blue-600">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Choose Your Path
              </h3>
              <p className="text-gray-600">
                Select from our wide range of courses and learning paths
                tailored to your goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Learn & Practice
              </h3>
              <p className="text-gray-600">
                Engage with interactive content, attend live sessions, and apply
                your knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Earn & Advance
              </h3>
              <p className="text-gray-600">
                Complete assessments, earn certifications, and advance your
                career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real success stories from our learning community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who are already advancing their careers
            with our comprehensive learning platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              View Pricing
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduPlatform</h3>
              <p className="text-gray-400">
                Empowering learners worldwide with quality education and career advancement opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Online Courses</li>
                <li>Live Classes</li>
                <li>Certifications</li>
                <li>Mentorship</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Community</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduPlatform. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Services;
