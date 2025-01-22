import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">FT Real Estate</h2>
          <p className="mt-4 text-gray-300">
            Your trusted partner in finding dream homes and investment
            properties. We make real estate simple and accessible.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">123 Real Estate Avenue, Cityville</p>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:info@ftrealestate.com"
              className="hover:text-blue-400"
            >
              info@ftrealestate.com
            </a>
          </p>
          <p className="text-gray-300">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-blue-400">
              +1 234 567 890
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-300">
            Subscribe to our newsletter for the latest updates on properties.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md focus:outline-none text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} FT Real Estate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
