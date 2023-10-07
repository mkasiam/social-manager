import PropTypes from "prop-types";
const Service = ({ service }) => {
  const { id, name, image, price, title, description, category_name } = service;
  return (
    <div>
      <div className="relative">
        <img src="image" alt={`Image not found of ${name}`} />
        <div className="absolute top-2 right-1">
          <p>{category_name}</p>
        </div>
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button>Know More</button>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Service;
