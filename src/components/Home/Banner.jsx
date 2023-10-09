import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-h-max flex items-center justify-center">
      <div className="flex flex-col items-center py-10 md:py-14 lg:py-16 ">
      <div className="mb-4">
        <img src="bannerImg.png" alt="" />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#2F55D4]">
          One-Stop Social Event Management Hub
        </h1>
        <p className="text-lg text-[#333] ">
          Your go-to for flawless event planning, specializing in weddings,
          birthdays, anniversaries, engagements,
          <br /> retirements, baby showers, and more. Let us make your
          celebrations unforgettable!
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        <button className="btn btn-active btn-info rounded-md text-white font-bold"><Link to="/booking">Book Now</Link></button>
        <button className="btn btn-outline btn-info rounded-md"><Link to="/services">Our Services</Link></button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
