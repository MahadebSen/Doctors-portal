import React from "react";

const EachTestimony = ({ comment }) => {
  const { name, address, img, testimony } = comment;
  return (
    <div className="px-6 py-8 rounded-xl shadow-2xl">
      <p className="mb-6">{testimony}</p>
      <div className="flex items-center ml-3">
        <div class="avatar w-[60px] h-[60px]">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="ml-5">
          <p className="font-semibold text-lg">{name}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default EachTestimony;
