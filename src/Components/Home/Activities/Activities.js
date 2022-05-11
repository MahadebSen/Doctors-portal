import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import EachActivity from "./EachActivity";

const Activities = () => {
  const activities = [
    {
      _id: "a11",
      name: "Opening Hours",
      info: "Lorem Ipsum is simply dummy text of the pri",
      img: clock,
      color:
        "bg-gradient-to-r from-secondary to-primary font-semibold text-white",
    },
    {
      _id: "b22",
      name: "Visit our location",
      info: "Brooklyn, NY 10036, United States",
      img: marker,
      color: "bg-accent",
    },
    {
      _id: "c33",
      name: "Contact us now",
      info: "+000 123 456789",
      img: phone,
      color:
        "bg-gradient-to-r from-secondary to-primary font-semibold text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-8 mt-[-25px]">
      {activities.map((item) => (
        <EachActivity key={item._id} item={item}></EachActivity>
      ))}
    </div>
  );
};

export default Activities;
