import React from "react";
import bgImage from "../../../assets/images/appointment.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <div
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: ``,
        backgroundPosition: `center`,
      }}
      className="mt-32 mb-16 xl:rounded-2xl"
    >
      <div className="py-[]">
        <div className="text-center py-8">
          <p className="text-secondary font-bold text-lg">Contact Us</p>
          <p className="text-white text-3xl">Stay connected with us</p>
        </div>
        <div className="pb-8">
          <div class="form-control flex items-center ">
            <div className="flex flex-col gap-4 mb-7">
              <input
                type="text"
                placeholder="Email Address"
                class="input input-bordered w-[359px] md:w-[450px]"
              />
              <input
                type="text"
                placeholder="Subject"
                class="input input-bordered w-[359px] md:w-[450px]"
              />
              <textarea
                type="text"
                placeholder="Your massage"
                class="input input-bordered w-[359px] md:w-[450px] h-[136px] py-3"
              />
            </div>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
