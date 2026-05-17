import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mergeCart } from "../redux/slices/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // Get redirect parameter and check if it's checkout or something
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";

  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#F8EDEB] to-[#E8CFCB]">
      {/* Left Image */}
      <div className="hidden md:block w-1/2 bg-white pt-10 pb-10">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={loginImg}
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-[#E8CFCB]"
        >
          {/* Brand */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-[#B76E79] tracking-wide">
              HANDMADE HAVEN
            </h2>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Welcome back!
          </h2>

          {/* Subtext */}
          <p className="text-center mb-6 text-gray-500 text-sm">
            Login to continue your cozy shopping journey.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#E8CFCB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-[#E8CFCB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D8A7B1] to-[#B76E79] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            {loading ? "logging in..." : "Sign In"}
          </button>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-[#B76E79] font-medium hover:underline"
            >
              Create one ✨
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
