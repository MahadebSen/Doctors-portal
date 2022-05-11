import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import EachService from "./EachService";

const Services = () => {
  const services = [
    {
      _id: "h45",
      img: fluoride,
      name: "Fluoride Treatment",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: "f78",
      img: cavity,
      name: "Cavity Filling",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: "q63",
      img: whitening,
      name: "Teeth Whitening",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className=" mx-8 my-28">
      <div className="text-center mb-[67px]">
        <p className="uppercase text-primary font-bold">Our services</p>
        <p className="text-3xl text-secondery">Services We Provide</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item) => (
          <EachService key={item._id} item={item}></EachService>
        ))}
      </div>
    </div>
  );
};

export default Services;
