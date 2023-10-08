import PropTypes from "prop-types";
const Event = ({ aEvent }) => {
  const { image, title } = aEvent;
  return (
    <div className="carousel-item w-full h-full">
      {/* <img className="w-full" src={image} alt={`Image not found of id ${id}`} /> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1
              className="text-2xl md:text-3xl lg:text-5xl mb-5 text-[#ffffff] font-bold"
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
Event.propTypes = {
  aEvent: PropTypes.object.isRequired,
};
export default Event;
