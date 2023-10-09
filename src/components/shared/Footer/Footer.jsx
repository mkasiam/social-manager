import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer footer-center p-8 bg-primary text-primary-content">
      <aside>
        <img src="/logo.png" alt="" />
        <p className="font-bold text-xl md:text-2xl lg:text-3xl">
          Social Manager
        </p>
        <p className="text-lg font-medium">
          Crafting Memorable Moments, One Social Event at a Time!
        </p>
      </aside>
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/services" className="link link-hover">
          Services
        </Link>
        <Link to="/about" className="link link-hover">
          About Us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact Us
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 cursor-pointer">
          <FaFacebookF></FaFacebookF>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          <FaTiktok></FaTiktok>
        </div>
      </nav>
      <p className="flex">
        Copyright © 2023 - All right reserved by{" "}
        <span className="font-medium underline">Mka Siam</span>
      </p>
    </footer>
  );
};

export default Footer;
