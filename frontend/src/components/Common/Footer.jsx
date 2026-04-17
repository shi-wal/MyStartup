import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg text-gray-700 mb-4 font-semibold uppercase tracking-wide">
            Newsletter
          </h3>

          <p className="text-gray-500 mb-4 text-sm">
            Be the first to hear about new products, and
            online offers.
          </p>

          <p className="text-gray-500 mb-4 text-sm">
            Sign up and get 10% off on your first order.
          </p>

          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md text-sm hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
        <h3 className="text-lg text-gray-700 mb-4 font-semibold uppercase tracking-wide">
            Shop
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm">
            <li>
            <Link
                to="#"
                className="hover:text-[#B76E79] transition-colors"
            >
                Embroided Hankies
            </Link>
            </li>

            <li>
            <Link
                to="#"
                className="hover:text-[#B76E79] transition-colors "
            >
                Gift Hampers
            </Link>
            </li>

            <li>
            <Link
                to="#"
                className="hover:text-[#B76E79] transition-colors"
            >
                Embroided Keychains
            </Link>
            </li>

            <li>
            <Link
                to="#"
                className="hover:text-[#B76E79] transition-colors"
            >
                Aesthetic Collages
            </Link>
            </li>
        </ul>
        </div>

        {/* Support Links */}
        <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-wide">
            Support
        </h3>

        <ul className="space-y-2 text-sm">
            <li>
            <Link
                to="/contact"
                className="text-gray-600 hover:text-[#B76E79] transition-colors"
            >
                Contact Us
            </Link>
            </li>

            <li>
            <Link
                to="/about"
                className="text-gray-600 hover:text-[#B76E79] transition-colors"
            >
                About Us
            </Link>
            </li>

            <li>
            <Link
                to="/faq"
                className="text-gray-600 hover:text-[#B76E79] transition-colors"
            >
                FAQs
            </Link>
            </li>

            <li>
            <Link
                to="/shipping"
                className="text-gray-600 hover:text-[#B76E79] transition-colors"
            >
                Shipping & Return Policy
            </Link>
            </li>
        </ul>
        </div>

        {/* Follow Us */}
        <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-wide">
            Follow Us
        </h3>

        <div className="flex items-center space-x-4">
            
            {/* Instagram */}
            <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#B76E79] transition transform hover:scale-110"
            >
            <FaInstagram className="h-5 w-5" />
            </a>

            {/* YouTube */}
            <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#B76E79] transition transform hover:scale-110"
            >
            <FaYoutube className="h-5 w-5" />
            </a>

        </div>

        {/* Contact */}
        <div className='mt-5'>

        {/* Call Us */}
        <p className="text-gray-500 text-sm mb-2">Call Us</p>
        <p className="text-gray-600 text-sm flex items-center mb-4">
            <FiPhoneCall className="mr-2 hover:text-[#B76E79] transition transform hover:scale-110" />
            <a href="tel:+918193903317" className="hover:text-[#B76E79]">
            +91 81939 03317 </a>
        </p>

        {/* Email */}
        <p className="text-gray-500 text-sm mb-2">Email</p>
        <p className="text-gray-600 text-sm flex items-center">
            <HiOutlineMail className="mr-2 hover:text-[#B76E79] transition transform hover:scale-110" />
            <a
            href="mailto:shiwal264@gmail.com"
            className="text-gray-600 hover:text-[#B76E79]"
            > shiwal264@gmail.com </a>
        </p>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
        <div className="container mx-auto border-t mt-12 px-4 lg:px-0 pt-6 border-gray-200 text-center text-sm text-gray-500">
        <p >
            © {new Date().getFullYear()} Handmade Haven. All rights reserved.
        </p>

        <p className="mt-2">
            Made with 🤍 by  <span className="text-[#B76E79] font-medium"> Shivangi</span>
        </p>
        </div>
    </footer>
  );
};

export default Footer;