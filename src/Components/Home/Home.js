import React from "react";
import Activities from "./Activities/Activities";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="mb-5">
      <Banner></Banner>
      <Activities></Activities>
    </div>
  );
};

export default Home;
