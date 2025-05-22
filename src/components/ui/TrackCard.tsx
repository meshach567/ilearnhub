// components/TrackCard.tsx
"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Linkedin from "@/assets/images/linkedin.png";
import Instagram from "@/assets/images/instagram.png";

interface TrackCardProps {
  id: number;
  image: string | StaticImageData;
  name: string;
  profName: string;
  profDescription: string;
  trackTitle: string;
  linkedinUrl: string;
  instagramUrl: string;
}

const TrackCard = ({
  image,
  name,
  profName,
  profDescription,
  trackTitle,
  linkedinUrl,
  instagramUrl,
}: TrackCardProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleSocialMediaClick = (url: string, platform: string) => {
    setPopupContent(`Navigate to ${platform}: ${url}`);
    setShowPopup(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image src={image} alt={name} loading="lazy" className="rounded-lg" />
      </div>

      {/* Name and Professor Details */}
      <div className="mt-4">
        <span className="block text-lg font-semibold text-gray-900">
          {name}
        </span>
        <span className="block text-sm text-gray-600">{profName}</span>
        <p className="text-sm text-gray-700 mt-2">{profDescription}</p>
      </div>

      <div className="flex flex-row justify-between">
        {/* Track Title */}
        <div className="mt-4">
          <span className="text-sm font-medium text-gray-900">
            {trackTitle}
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-4">
          <button
            aria-label="image"
            type="button"
            onClick={() => handleSocialMediaClick(linkedinUrl, "LinkedIn")}
            className="text-blue-600 hover:text-blue-800"
          >
            <Image
              src={Linkedin} // Replace with your LinkedIn icon path
              alt="LinkedIn"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
          <button
            aria-label="image"
            type="button"
            onClick={() => handleSocialMediaClick(instagramUrl, "Instagram")}
            className="text-pink-600 hover:text-pink-800"
          >
            <Image
              src={Instagram} // Replace with your Instagram icon path
              alt="Instagram"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>{popupContent}</p>
            <button
              aria-label="image"
              type="button"
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackCard;
