import React from "react";
import Activities from "./Activities/Activities";
import HomeAppoinment from "./HomeAppoinment/HomeAppoinment";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner2/Banner2";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Activities></Activities>
      <Services></Services>
      <Banner2></Banner2>
      <HomeAppoinment></HomeAppoinment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
