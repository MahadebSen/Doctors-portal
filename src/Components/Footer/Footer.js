import React from "react";
import bgImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      style={{
        background: `url(${bgImg})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `100%`,
      }}
    >
      <div className="md:flex md:justify-between px-8">
        <div className="pt-8">
          <h1 className="font-bold mb-2">SERVICES</h1>
          <p>Emergency Checkup</p>
          <p>Monthly Checkup</p>
          <p>Weekly Checkup</p>
          <p>Deep Checkup</p>
        </div>
        <div className="pt-8">
          <h1 className="font-bold mb-2">ORAL HEALTH</h1>
          <p>Fluoride Treatment</p>
          <p>Cavity Filling</p>
          <p>Teath Whitening</p>
        </div>
        <div className="pt-8">
          <h1 className="font-bold mb-2">OUR ADDRESS</h1>
          <p>New York - 101010 Hudson</p>
        </div>
      </div>
      <div className="pt-16 pb-5 text-center">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
