import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Booking = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Request has been sent successfully,Our Team will contact with you soon",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <Helmet>
        <title>Social Manager | Booking</title>
      </Helmet>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-3">
        Experience Extraordinary Events - Book Yours Today!
      </h1>
      <div>
        <div className="border bg-[#F2F3F5] rounded-md p-12 max-w-2xl mx-auto mt-7">
          <div className="w-full  space-y-4">
            <div>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="mb-2 text-md font-semibold text-[#4b4f58]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full bg-white rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 text-md font-semibold text-[#403F3F]">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input bg-white input-bordered w-full rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 text-md font-semibold text-[#403F3F]">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    className="input bg-white input-bordered w-full rounded-md"
                    required
                  />
                </div>

                <div className="w-full mt-4">
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Select a Service:
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    >
                      <option value="" disabled>
                        Choose a Service
                      </option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="engagement">Engagement</option>
                      <option value="retirement">Retirement</option>
                      <option value="baby-shower">Baby Shower</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 text-md font-semibold text-[#403F3F]">
                    Special Requirements
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#3ABFF8] hover:bg-[#7cbfdc] text-white w-full rounded-md"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
