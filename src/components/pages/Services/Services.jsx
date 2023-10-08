import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <div>
        <div className="space-y-10 mt-6 mb-4">
          {services.map((singleService) => (
            <Service
              key={singleService.id}
              singleService={singleService}
            ></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
