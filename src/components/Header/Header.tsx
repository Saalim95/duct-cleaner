import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../contexts/AuthContext";
import { logout as logoutApi } from "../../api/auth";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleScheduleClick = () => {
    navigate("/schedule");
  };

  const handleLogout = async () => {
    if (!token || isLoggingOut) return;

    setIsLoggingOut(true);
    try {
      // Call logout API which returns a new token
      const response = await logoutApi(token);

      // Save the new token received from logout response
      setToken(response.token);

      // Navigate to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Even if API call fails, clear local token and redirect
      setToken(null);
      navigate("/login");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="flex flex-row items-center justify-between w-full shadow-md bg-white py-4 px-8 sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center">
        <h1
          onClick={handleHomeClick}
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight cursor-pointer transition-transform hover:scale-105"
        >
          Clean Air Solutions
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleHomeClick}
          className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium cursor-pointer bg-transparent border-none px-4 py-2 rounded-lg hover:bg-blue-50"
        >
          Home
        </button>
        <button
          onClick={handleScheduleClick}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Schedule Service
        </button>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 p-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center border border-gray-200 hover:border-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Logout"
        >
          <LogoutIcon fontSize="small" />
        </button>
      </div>
    </nav>
  );
};
