import React from "react";

const EachActivity = ({ item }) => {
  const { name, info, img, color } = item;
  console.log(img);
  return (
    <div
      className={`${color} text-white shadow-2xl rounded-xl flex items-center p-3`}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img src={img} className="max-w-sm" alt="" />
          <div>
            <h1 className="font-semibold text-xl">{name}</h1>
            <p className="py-3 text-sm">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachActivity;
