import PropTypes from "prop-types";
const Service = ({ service }) => {
  const { id, name, image, price, title, description, category_name } = service;
  return (
    <div className="bg-[#FFF] rounded-md p-4">
      <div className="relative">
        <img
          className="rounded-md"
          src={image}
          alt={`Image not found of ${name}`}
        />
        <div className="absolute top-2 right-1">
          <p className="font-bold bg-white p-2 rounded-full text-[#333]">
            {category_name}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#403F3F] text-2xl font-bold">{name}</p>
        <p className="text-[#706F6F] text-lg flex-grow">{description}</p>
        <div className="flex justify-between items-center">
          <button>Know More</button>
          <p className="text-[#403F3F] text-2xl">{price}</p>
        </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Service;
