import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Social Manager | Services</title>
      </Helmet>
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
