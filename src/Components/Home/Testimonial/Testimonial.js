import React, { useEffect, useState } from "react";
import quote from "../../../assets/icons/quote.svg";
import EachTestimony from "../EachTestimony";

const Testimonial = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("FakeComments.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="mx-10">
      <section className="flex justify-between items-center my-24">
        <div>
          <p className="text-primary font-bold pb-1">Testimonial</p>
          <p className="text-3xl text-secondery">What Our Patientsw Says</p>
        </div>
        <div>
          <img className="w-[195px] h-[160px]" src={quote} alt="" />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {comments.map((comment) => (
          <EachTestimony key={comment._id} comment={comment}></EachTestimony>
        ))}
      </section>
    </div>
  );
};

export default Testimonial;
