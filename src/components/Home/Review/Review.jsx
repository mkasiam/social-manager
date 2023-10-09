const Review = () => {
  return (
    <div className=" my-6">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Customer Review
        </h1>
        <p className="text-[#333] font-bold text-md md:text-lg lg:text-lg">
          Discover Why Our Customers Are Smiling!
        </p>
      </div>
      <div className="hero">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <img
              src="https://i.ibb.co/dfKkDH3/customer.jpg"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Real Happy Customers, Real Stories
            </h1>
            <p className="py-6 text-lg text-[#333]">
            Social Manager exceeded our expectations. Their expertise and personalization made our event stress-free. Their creativity added a unique flair that our guests loved. We saved time, and the result was unforgettable. We can not wait for our next event with Social Manager!
            </p>
            <p className="font-bold text-xl text-[#333]">Alamgir Hossain</p>
            <p className="text-lg font-medium"> - Ibn Sina Company Private Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
