import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useSidebar } from '../contexts/SidebarContext';
import { useEffect } from 'react';
import { useNavbarContext } from '../contexts/NavbarContext';

const LoginPage = () => {
  const { setCurrentPage } = useNavbarContext();

  useEffect(() => {
    setCurrentPage('dashboard');
  }, [setCurrentPage]);
  const { setIsLoginPage } = useSidebar();
  const navigate = useNavigate(); //Create Navigation function

  useEffect(() => {
    setIsLoginPage(true);
    return () => setIsLoginPage(false);
  }, [setIsLoginPage]);

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic from the backend here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="text-blue-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Home
        </Link>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
            J
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Sign Up
          </button>
        </div>
      </div>

      <div className="max-w-md w-full mx-auto space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FcGoogle className="mr-2 h-5 w-5" />
            Login with Google
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin} method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                  defaultValue="wabdotmail@gmail.com"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  defaultValue="Gabon4351"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <FaEye className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Recover Password
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
