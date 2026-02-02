import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";

import Home from "../pages/Home";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import Playlists from "../pages/Playlists";

import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOTP from "../pages/auth/VerifyOTP";
import ResetPassword from "../pages/auth/ResetPassword";
import Success from "../pages/auth/Success";

const router = createBrowserRouter([
  // 🔐 AUTH ROUTES
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/success",
    element: <Success />,
  },

  // 🧑‍💻 DASHBOARD ROUTES
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "playlists",
        element: <Playlists />,
      },
      {
        path: "profile",
        element: <Profile />, // ✅ Header dropdown → works
      },
    ],
  },
]);

export default router;
