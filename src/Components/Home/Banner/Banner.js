import React from "react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import chair from "../../../assets/images/chair.png";
import bgChair from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bgChair})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: ``,
          backgroundPosition: `center`,
        }}
        className="hero h-[802px]"
      >
        <div className="hero-content flex-col lg:flex-row-reverse md:px-16">
          <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton className="uppercase">Get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
