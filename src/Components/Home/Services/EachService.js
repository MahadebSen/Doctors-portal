import React from "react";

const EachService = ({ item }) => {
  const { img, name, info } = item;
  return (
    <div className="text-center shadow-2xl rounded-2xl px-10 py-12">
      <img className="mx-auto mb-[34px]" src={img} alt="" />
      <p className="font-semibold">{name}</p>
      <p className="text-sm">{info}</p>
    </div>
  );
};

export default EachService;
