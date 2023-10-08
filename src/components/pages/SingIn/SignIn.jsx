import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // Signing New User
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  const handleGithubLogIn = () => {
    signInWithGithub()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="border border-[#FFF] bg-[#FFF] rounded-md p-12 max-w-2xl mx-auto mt-7">
        <Helmet>
          <title>Social Manager | Sign In</title>
        </Helmet>
        <h1 className="text-3xl text-[#403F3F] font-semibold mb-4">
          Login your account
        </h1>
        <div className="w-full space-y-4 border-b-2 pb-4">
          <div>
            <form onSubmit={handleLogIn} className="space-y-4">
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
              <p className="underline cursor-pointer pl-2 mt-2">
                Forgot password
              </p>
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-[#3ABFF8] hover:bg-[#7cbfdc] text-white w-full rounded-md"
                >
                  Log In
                </button>
              </div>
              <div>
                <p className="text-[#706F6F] text-lg">
                  Do not Have An Account ?
                  <Link className="text-[#F75B5F]" to="/register">
                    {" "}
                    Register
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <h1 className="text-2xl font-bold">Also Continue with: </h1>
          <button onClick={handleGoogleLogIn} className="btn btn-outline ">
            <FaGoogle></FaGoogle>Google
          </button>
          <button onClick={handleGithubLogIn} className="btn btn-outline">
            <FaGithub></FaGithub>Github
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
