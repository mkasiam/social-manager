import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const name = form.get("name");
    // const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((result) => console.log("User created successfully", result.user))
      .catch((error) => console.error(error));

    e.target.reset();
  };
  return (
    <>
      <div className="border border-[#FFF] bg-[#FFF] rounded-md p-12 max-w-2xl mx-auto mt-7">
        <Helmet>
          <title>Social Manager | Registration</title>
        </Helmet>
        <h1 className="text-3xl text-[#403F3F] font-semibold mb-4">
          Register your account
        </h1>

        <div className="w-full  space-y-4">
          <div>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="text-md font-semibold text-[#403F3F]">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-md font-semibold text-[#403F3F]">
                  Photo Url
                </label>
                <input
                  type="text"
                  placeholder="Your Photo Url"
                  name="photoUrl"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block text-gray-700">
                  Choose a file:
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div>
                <label className="text-md font-semibold text-[#403F3F]">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-md font-semibold text-[#403F3F]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered w-full rounded-md"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-[#3ABFF8] hover:bg-[#7cbfdc] text-white w-full rounded-md"
                >
                  Register
                </button>
              </div>
              <div>
                <p className="text-[#706F6F] text-lg">
                  Have An Account ?
                  <Link className="text-[#F75B5F]" to="/signIn">
                    {" "}
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
