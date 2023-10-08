import PropTypes from "prop-types";
const Event = ({ aEvent }) => {
  const { id, image } = aEvent;
  return (
    <div className="carousel-item w-full h-full">
      <img className="w-full" src={image} alt={`Image not found of id ${id}`} />
    </div>
  );
};
Event.propTypes = {
  aEvent: PropTypes.object.isRequired,
};
export default Event;
