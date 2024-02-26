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
  const getAllCategory = async () => {
    try {
      const response = await HttpClient.get("/api/category/");
      const categoriesForSet = response?.data?.categories.slice(0, 6);
    } catch (error) {
      console.log("allCategory-=-=-=-=error", error);
    }
  };
  return (
    <div className="">
      <HeroSection />
      <AboutMission />
      <PopularCategories />
      {/* <CustomCarousel /> */}
      <RentalSlider />
      {/* <FeaturedEqp /> */}
      <PopularParts />
      <FeaturedPartners />
    </div>
  );
};
export default Home;
