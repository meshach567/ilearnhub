// components/TrackSection.tsx
"use client"; // Mark this component as a Client Component

import { useState } from "react";
import TrackCard from "../../ui/TrackCard";
import Master from "@/assets/images/master.png";

const TrackSection = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Initial number of visible cards

  const tracks = [
    // Add 12 track objects here
    {
      id: 1,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    {
      id: 2,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    {
      id: 3,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    {
      id: 4,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    {
      id: 5,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    {
      id: 6,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    {
      id: 7,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    {
      id: 8,
      image: Master,
      name: "Web Development",
      profName: "John Doe",
      profDescription:
        "Passionate about building scalable and efficient systems.",
      trackTitle: "Frontend Track",
      linkedinUrl: "https://linkedin.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
    },
    // Add more tracks...
  ];

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, tracks.length)); // Show 3 more cards
  };

  const handleShowLess = () => {
    const cardsToShow = {
      mobile: 1,
      tablet: 2,
      laptop: 3,
      desktop: 4,
    };
    setVisibleCards(cardsToShow.desktop); // Reset to default based on screen size
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tracks.slice(0, visibleCards).map((track) => (
            <TrackCard key={track.id} {...track} />
          ))}
        </div>
        <div className="flex justify-end  mt-8 space-x-4">
          {visibleCards < tracks.length && (
            <button
              type="button"
              onClick={handleShowMore}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Show More
            </button>
          )}
          {visibleCards > 4 && (
            <button
              type="button"
              onClick={handleShowLess}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
