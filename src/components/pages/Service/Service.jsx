import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ singleService }) => {
  const { image, title, description, id, price } = singleService;

  const flexDirectionClass =
    id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <div className={`flex flex-col md:flex-col ${flexDirectionClass}`}>
      <div className="flex-1" data-aos="flip-left" data-aos-duration="1500">
        <img className="w-full rounded-md shadow-md" src={image} alt="" />
      </div>
      <div className="flex-1 p-4" data-aos="flip-right" data-aos-duration="1500">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold my-4">
          {title}
        </p>
        <p className="text-lg text-[#333]">{description}</p>
        <p className="text-[#403F3F] text-2xl my-2">Price: {price}</p>
        <div className="flex gap-4 mt-4">
          <button className="btn btn-active btn-info rounded-md text-white font-bold">
            <Link to="/booking">Book Now</Link>
          </button>
          <button className="btn btn-outline btn-info rounded-md">
            <Link to={`/serviceDetails/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  singleService: PropTypes.object.isRequired,
};

export default Service;
