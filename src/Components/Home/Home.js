import React from "react";
import Activities from "./Activities/Activities";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mb-5">
      <Banner></Banner>
      <Activities></Activities>
      <Services></Services>
    </div>
  );
};

export default Home;
