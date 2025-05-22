"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  title: string;
  href?: string;
  subItems?: MenuItem[];
}

const menuData: MenuItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Who We Are",
    subItems: [
      { title: "About Us", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Join Us", href: "/joinus" },
      { title: "Career", href: "/career" },
    ],
  },
  {
    title: "What We Do",
    subItems: [
      { title: "Our Services", href: "/services" },
      { title: "Program", href: "/program" },
      { title: "Courses", href: "/courses" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="bg-[#FFF8DC] fixed top-0 w-full z-50 shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/walton.png" // Replace with your logo path
              alt="iLearnHub"
              width={120}
              height={40}
              className="h-10 w-auto object-center object-cover"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuData.map((item) => (
              <div key={item.title} className="relative group">
                {item.subItems ? (
                  <div
                    onMouseEnter={() => setOpenSubmenu(item.title)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                    className="cursor-pointer"
                  >
                    <span className="text-[#4B0082] hover:text-blue-600 px-3 py-2">
                      {item.title}
                    </span>
                    {openSubmenu === item.title && (
                      <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href || "#"}
                            className="block px-4 py-2 text-[#4B0082] hover:text-blue-600"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="text-[#4B0082] hover:text-blue-600 px-3 py-2"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Sign Up Button (Desktop) */}
          <button
            type="button"
            className="hidden lg:inline-block bg-[#4B0082] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Mobile Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 bg-[#4B0082] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {menuData.map((item) => (
              <div key={item.title} className="border-b last:border-0">
                {item.subItems ? (
                  <div className="py-2">
                    <button
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.title ? null : item.title,
                        )
                      }
                      className="flex justify-between items-center w-full px-4 py-2 text-gray-600 hover:text-blue-600"
                    >
                      <span>{item.title}</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openSubmenu === item.title && (
                      <div className="pl-6">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href || "#"}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block px-4 py-2 text-[#4B0082] hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <button
              type="button"
              className="bg-[#4B0082] mt-4 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
