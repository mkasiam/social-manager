import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Our services</h1>
        <p className="text-lg text-[#333]">
          Close your eyes and picture the experience of your dreams. Relaxation,
          adventure, culture or romance, you can bring it to life.
        </p>
      </div>
      <div>
        {
            services.map((service)=><Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
