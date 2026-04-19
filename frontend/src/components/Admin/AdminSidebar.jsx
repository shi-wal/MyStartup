import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStop, FaStore, FaUser } from "react-icons/fa";

const AdminSidebar = () => {
    const navigate=useNavigate();
    const handleLogout=()=>{
        navigate("/");
    }
  return (
    <div className="p-6">
      
      {/* Logo / Title */}
      <div className="mb-6">
        <Link to="/admin" className="text-xl font-medium uppercase tracking-wide">
          Handmade Haven
        </Link>
      </div>

      {/* Heading */}
      <h2 className="text-lg font-medium mb-5 text-left ">
        Admin Dashboard
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>

         <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

         <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore />
          <span>Gift Store</span>
        </NavLink>
      </nav>

      <div className="mt-6">
        <button onClick={handleLogout} className="w-full hover:bg-red-600 text-white bg-red-500 py-2 px-4 rounded flex 
        items-center justify-center space-x-2">
            <FaSignOutAlt />
            <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;