import { useEffect, useState } from "react";
import OurService from "../OurService/OurService";

const OurServices = () => {
    const [OurServices,setOurServices] = useState([]);
    useEffect(()=>{
        fetch("/services.json")
        .then(res=>res.json())
        .then(data=>setOurServices(data))
    },[])
  return (
    <div className="py-4">
      <div className="text-center space-y-3 py-2">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Discover Our Comprehensive Services</h1>
        <p className="text-lg text-[#333]">
          Tailored Solutions to Meet Your Unique Needs and Enhance Your Experience
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6">
        {
            OurServices.map((aService)=><OurService key={aService.id} aService={aService}></OurService>)
        }
      </div>
    </div>
  );
};

export default OurServices;
