import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="services/">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src="logo.png" alt="" />
          <h1 className="text-lg font-bold">Social Manager</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {links}
        </ul>
      </div>
      {/* Right side: User picture and login button */}
      <div className="navbar-end flex items-center">
        <img
          src="user-picture-url.jpg" // Replace with the actual user picture URL
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <NavLink to="/login" className="ml-2 hover:text-blue-500">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
