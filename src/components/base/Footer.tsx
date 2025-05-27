import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "All Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Instructors", href: "/instructors" },
    { name: "Career Center", href: "/careers" },
    { name: "Student Success", href: "/success-stories" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Live Chat", href: "/chat" },
    { name: "Technical Support", href: "/tech-support" },
    { name: "Community Forum", href: "/forum" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Data Protection", href: "/data-protection" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Tagline Section */}
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">LearnHub</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Empowering learners worldwide with cutting-edge courses and expert
              instruction. Transform your career with skills that matter in
              today&apos;s digital economy.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>hello@learnhub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div>
              <h5 className="text-sm font-semibold mb-4 text-gray-200">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">
                Get the latest courses and learning tips delivered to your
                inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-blue-500 flex-1 min-w-0 sm:w-64"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition-colors duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-4">
            <div>
              <p>&copy; {currentYear} LearnHub. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <span>🏆 Trusted by 50,000+ students</span>
              <span>⭐ 4.8/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
