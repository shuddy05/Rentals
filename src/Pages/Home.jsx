import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturesProperties from "../Components/FeaturesProperties";
import HomeComponents from "../Components/HomeComponents";
import DetailedProperties from "../Components/DetailedProperties";
const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesProperties />
      <HomeComponents />
      {/* <DetailedProperties/> */}
    </main>
  );
};

export default Home;
