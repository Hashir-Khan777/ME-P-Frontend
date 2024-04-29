import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Hero section";
import PopularCategories from "../../components/Popular Categories";
import CustomCarousel from "../../components/Carousel";
import FeaturedEqp from "../../components/Featured Equipments";
import PopularParts from "../../components/Popular Parts";
import FeaturedPartners from "../../components/Featured Partners";
import AboutMission from "../../components/About Mission section copy";
import HttpClient from "../../services/http-client";
import RentalSlider from "../../components/RentalSlider";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMission />
      <PopularCategories />
      {/* <CustomCarousel /> */}
      <RentalSlider />
      <FeaturedEqp />
      <PopularParts />
      <FeaturedPartners />
    </div>
  );
};
export default Home;
