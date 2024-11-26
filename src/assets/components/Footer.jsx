import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-footer-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img src={Logo} alt="Affilion Logo" className="h-12 mb-2" />
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:underline">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="hover:underline">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/career" className="hover:underline">
                  Career
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/faq" className="hover:underline">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="/support" className="hover:underline">
                  Contact Support
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Contact Details</h4>
            <p className="text-sm mb-3">+977 9812300000</p>
            <p className="text-sm mb-3">affilioninstitute@gmail.com</p>
            <p className="text-sm mb-3">Somewhere, Someplace</p>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a target="_blank" href="https://facebook.com">
                <i className="fab fa-facebook text-white text-xl"></i>
              </a>
              <a target="_blank" href="https://instagram.com">
                <i className="fab fa-instagram text-white text-xl"></i>
              </a>
              <a target="_blank" href="https://youtube.com">
                <i className="fab fa-youtube text-white text-xl"></i>
              </a>
              <a target="_blank" href="https://tiktok.com">
                <i className="fab fa-tiktok text-white text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center  text-sm">
          © 2024 Affilion Institute |{" "}
          <NavLink to="/terms" className="hover:underline">
            Terms and Condition
          </NavLink>{" "}
          |{" "}
          <NavLink to="/privacy" className="hover:underline">
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
