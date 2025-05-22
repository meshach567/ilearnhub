import React from "react";
import Hero from "./base/Hero/Hero";
import ContentSection from "./base/content/Content";
import Carousel from "./base/carousel/Carousel";
import Premium from "./base/premium/Premium";
import ProfileCarousel from "./base/profile/ProfileCarousel";
import TrackCardSection from "./base/trackcard/TrackSection";
import SubscribeForm from "./base/subscribe/Subscribe";

const HomeBody = () => {
  return (
    <React.Fragment>
      <Hero />
      <ContentSection />
      <Carousel />
      <Premium />
      <ProfileCarousel />
      <TrackCardSection />
      <SubscribeForm />
    </React.Fragment>
  );
};

export default HomeBody;
