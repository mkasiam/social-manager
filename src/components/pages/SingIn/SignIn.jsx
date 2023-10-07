import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {signInUser} = useContext(AuthContext);
  const handleLogIn = (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // Signing New User
    signInUser(email,password)
    .then((result)=>{
      console.log(result.user);
      //Navigate after user login
      navigate(location?.state ? location.state : "/")
    })
    .catch(error=>console.error(error))
    e.target.reset();
  }
  return (
    <>
    <div className="border border-[#FFF] bg-[#FFF] rounded-md p-12 max-w-2xl mx-auto mt-7">
      <Helmet>
        <title>Social Manager | Sign In</title>
      </Helmet>
      <h1 className="text-3xl text-[#403F3F] font-semibold mb-4">
        Login your account
      </h1>

      <div className="w-full  space-y-4">
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
              <button type="submit" className="btn bg-[#403F3F] hover:bg-[#5f5e5e] text-white w-full rounded-md">
                Log In
              </button>
            </div>
            <div>
              <p className="text-[#706F6F] text-lg">Do not Have An Account ?<Link className="text-[#F75B5F]" to="/register"> Register</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
