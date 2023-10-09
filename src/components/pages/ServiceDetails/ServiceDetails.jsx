import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const services = useLoaderData();

  const desiredDetails = services.find((details) => details.id === idInt);
  const { image, title, description, name, price } =
    desiredDetails;

  return (
    <div>
      <div>
        <div className="relative">
          <div>
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="absolute bottom-0 bg-[#7D6F81] py-2  w-full">
            <p className="text-white  text-lg md:text-2xl lg:text-4xl text-center font-bold">
              {title}
            </p>
          </div>
        </div>
        <div className="text-center bg-base-300 py-5 mt-4 rounded-md shadow-md space-y-3">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-lg text-[#333]">{description}</p>
          <p className="text-2xl font-bold text-[#201f1f]">Price:{price}</p>
          <button className="btn btn-outline w-full btn-info rounded-md text-white font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
