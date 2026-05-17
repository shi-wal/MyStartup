import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "../Common/SearchBar";
import CartDrawer from "./CartDrawer";
import { IoMdClose } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto  flex  items-center justify-between py-4 px-6">
        {/* logo */}
        <div>
          <Link to="/" className="inline-flex flex-col leading-tight">
            <span className="text-2xl font-bold tracking-wide text-[#B76E79] hover:text-[#C49A8A]">
              WISHLOOM
            </span>
            <span className="text-xs text-gray-400 text-center uppercase tracking-widest">
              By Shiwal
            </span>
          </Link>
        </div>

        {/* center-> navigation links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-[#B76E79] text-sm font-medium uppercase"
          >
            Home
          </Link>
          <Link
            to="/collection/all"
            className="text-gray-600 hover:text-[#B76E79] text-sm font-medium uppercase"
          >
            Collection
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-[#B76E79] text-sm font-medium uppercase"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-[#B76E79] text-sm font-medium uppercase"
          >
            Contact
          </Link>
        </div>

        {/* Right -> icons */}
        <div className="flex items-center space-x-4">
          {/* search icon */}
          <SearchBar />

          <Link to="/profile">
            <HiOutlineUser className="h-6 w-6 text-gray-600 hover:text-black" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-600 hover:text-black" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 bg-[#B76E79] text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>

          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="flex items-center gap-0 text-gray-600 hover:text-[#B76E79]"
            >
              <MdAdminPanelSettings className="text-3xl h-6 w-6" />
              <span className="hidden md:inline">Admin</span>
            </Link>
          )}

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-600 hover:text-black" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* menu content */}
        <div className="p-4">
          <nav className="space-y-4">
            <Link
              to="/"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-base font-medium uppercase"
            >
              Home
            </Link>

            <Link
              to="/collection/all"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-base font-medium uppercase"
            >
              Collection
            </Link>

            <Link
              to="/about"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-base font-medium uppercase"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-base font-medium uppercase"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
