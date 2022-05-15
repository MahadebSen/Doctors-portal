import React from "react";
import Activities from "./Activities/Activities";
import HomeAppoinment from "./HomeAppoinment/HomeAppoinment";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner2/Banner2";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mb-5">
      <Banner></Banner>
      <Activities></Activities>
      <Services></Services>
      <Banner2></Banner2>
      <HomeAppoinment></HomeAppoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
