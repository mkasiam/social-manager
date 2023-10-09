import { FaBrain, FaClock, FaLightbulb, FaUserCircle } from "react-icons/fa";
const ChooseUs = () => {
    
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
           WHY CHOOSE US
        </h1>
        <p className="text-[#333] font-bold text-md md:text-lg lg:text-lg">Choose us for stress-free, personalized events that turn your vision into unforgettable memories</p>
      </div>
      {/* Why Choose Us Container  */}
      <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-7 my-6">
        {/* Left Side of Why choose Us  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-[#323334]">
          <div className="flex items-center p-4 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
            <FaBrain />
            Expertise
          </div>
          <div className="flex items-center p-4 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
            <FaUserCircle />
            Personalization
          </div>
          <div className="flex items-center p-4 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
            <FaClock/>
            Time Savings
          </div>
          <div className="flex items-center p-4 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
            <FaLightbulb />
            Creativity
          </div>
        </div>
        <div className="flex-1">
          <img
            className="w-full rounded-md"
            src="https://i.ibb.co/VQv62xr/team.jpg"
            alt="NO image found"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
