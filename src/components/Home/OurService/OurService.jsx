import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const OurService = ({ aService }) => {
  const { name, image, price, description, category_name ,id} = aService;
  return (
    <div className="bg-[#FFF] shadow-lg rounded-md">
      <div className="relative">
        <img
          className="rounded-sm"
          src={image}
          alt={`Image not found of ${name}`}
        />
        <div className="absolute top-2 right-1">
          <p className="font-bold bg-white p-2 rounded-full text-[#333]">
            {category_name}
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#403F3F] text-2xl font-bold">{name}</p>
        <p className="text-[#706F6F] text-lg flex-grow">
          {description.length < 100 ? (
            <p>{description}</p>
          ) : (
            <p>{description.slice(0, 100)}...</p>
          )}
        </p>
        <div className="flex justify-between items-center">
          <button className="text-[#3ABFF8] underline font-bold text-lg"><Link to={`/serviceDetails/${id}`}>Know More</Link></button>
          <p className="text-[#403F3F] text-2xl">{price}</p>
        </div>
      </div>
    </div>
  );
};
OurService.propTypes = {
  aService: PropTypes.object.isRequired,
};
export default OurService;
