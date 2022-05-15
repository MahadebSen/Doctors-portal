import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import bgImage from "../../../assets/images/appointment.png";

const Appoinment = () => {
  return (
    <div
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: ``,
        backgroundPosition: `center`,
      }}
      className="flex justify-center items-center xl:rounded-2xl"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-6 pl-12 pr-20">
        <p className="font-bold text-secondary text-xl">Appointment</p>
        <p className="text-3xl my-5 text-white">Make an appointment Today</p>
        <p className="mb-5 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton className="uppercase">Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default Appoinment;
