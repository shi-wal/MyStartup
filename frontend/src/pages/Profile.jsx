import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8EDEB]">

      {/* Main Container */}
      <div className="flex-grow container mx-auto p-4 md:p-6">

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

          {/* LEFT SECTION */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-xl p-6 self-start">
            <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#D8A7B1] flex items-center justify-center text-white text-2xl font-bold">
                    {/* {user.name.charAt(0)} */} S
                    </div>
            </div>
                <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-black">
                Shivangi Agrawal
                </h1>

            <p className="text-gray-600 mb-4">
                <HiOutlineMail className="mr-2 hover:text-[#B76E79] transition transform hover:scale-110" />
              john@example.com
            </p>
            <p className="text-gray-600 mb-4">
                <FiPhoneCall className="mr-2 hover:text-[#B76E79] transition transform hover:scale-110" />
              +91 8826460462
            </p>

            <button className="w-full bg-[#D8A7B1] text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-[#cb9087] font-bold">
              Logout
            </button>

          </div>

          {/* RIGHT SECTION */}
          <div className="w-full md:w-2/3 lg:w-3/4">

            <MyOrdersPage />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;