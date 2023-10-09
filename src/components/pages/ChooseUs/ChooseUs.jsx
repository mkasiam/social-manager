import { FaBrain, FaClock, FaLightbulb, FaUserCircle } from "react-icons/fa";
const ChooseUs = () => {
    
  return (
    <div>
      <div>
        <p className="text-[#3ABFF8] font-bold text-lg">WHY CHOOSE US</p>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          For stress-free, personalized events
        </h1>
      </div>
      {/* Why Choose Us Container  */}
      <div className="flex flex-col md:flex-row lg:flex-low gap-7 my-6">
        {/* Left Side of Why choose Us  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-[#323334]">
          <div className="flex items-center p-2 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
            <FaBrain />
            Expertise
          </div>
          <div className="flex items-center p-2 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
            <FaUserCircle />
            Personalization
          </div>
          <div className="flex items-center p-2 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
            <FaClock/>
            Time Savings
          </div>
          <div className="flex items-center p-2 justify-center text-md md:text-xl lg:text-2xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
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
