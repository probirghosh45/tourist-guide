import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import Home from "../Components/Home/Home";
import About from "../Components/AboutUs/About";
import Booking from "../Components/Booking/Booking";
import NotFound from "../Components/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import DreamDestination from "../Components/DreamDestination/DreamDestination";
import TourPackage from "../Components/TourPackage/TourPackage";
import OurServices from "../Components/OurServices/OurServices";
import DhakaService from "../Components/All District Details/DhakaService";
import BarisalService from "../Components/All District Details/BarisalService";
import SylhetService from "../Components/All District Details/SylhetService";
import ChittagongService from "../Components/All District Details/ChittagongService";
import MymensinghService from "../Components/All District Details/MymensinghService";
import KhulnaService from "../Components/All District Details/KhulnaService";
import RangpurService from "../Components/All District Details/RangpurService";
import RajshahiService from "../Components/All District Details/RajshahiService";
import Contact from "../Components/ContactUs/Contact";
import OurBlogs from "../Components/OurBlogs/OurBlogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Registration";
import DashboardLayout from "../layout/DashboardLayout";
import MyBooking from "../Pages/dashboard/Users/MyBooking";
import ManageBooking from "../Pages/dashboard/Moderator/ManageBooking";
import ManageUsers from "../Pages/dashboard/Moderator/ManageUsers";
import AllModerator from "../Pages/dashboard/Admin/AllModerator";
import AddSpot from "../Pages/dashboard/Moderator/AddSpot";
import ManageSpot from "../Pages/dashboard/Moderator/ManageSpot";
import Report from "../Pages/dashboard/Admin/Report";
import Wishlist from "../Pages/dashboard/Users/Wishlist";
import AddDivision from "../Pages/dashboard/Admin/AddDivision";
import ManageDivision from "../Pages/dashboard/Admin/ManageDivision";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dreamDestination",
        element: <DreamDestination/>,
      },
      {
        path: "/services",
        element: <OurServices/>,
      },
      {
        path: "/dhaka-division",
        element: <DhakaService/>,
      },
      {
        path: "/barisal-division",
        element: <BarisalService/>,
      },
      {
        path: "/sylhet-division",
        element: <SylhetService/>,
      },
      {
        path: "/chittagong-division",
        element: <ChittagongService/>,
      },
      {
        path: "//mymensingh-division",
        element: <MymensinghService/>,
      },
      {
        path: "/khulna-division",
        element: <KhulnaService/>,
      },
      {
        path: "/rangpur-division",
        element: <RangpurService/>,
      },
      {
        path: "/rajshahi-division",
        element: <RajshahiService/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/blogs",
        element: <OurBlogs/>,
      },
      {
        path: "/tour-package",
        element: <TourPackage/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking/>
          </PrivateRoute>
        ),
        },
    ],
  },

  {
    path: "/dashboard",
    errorElement: <NotFound />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/add-division",
        element: <AddDivision/>,
      },
      {
        path: "/dashboard/manage-division",
        element: <ManageDivision/>,
      },
      {
        path: "/dashboard/add-spot",
        element: <AddSpot/>,
      },
      {
        path: "/dashboard/manage-spot",
        element: <ManageSpot/>,
      },
      {
        path: "/dashboard/my-booking",
        element: <MyBooking/>,
      },
      {
        path: "/dashboard/manage-booking",
        element: <ManageBooking/>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist/>,
      },
      {
        path: "/dashboard/report",
        element: <Report/>,
      },
      {
        path: "/dashboard/manage-users",
        element: (
            <ManageUsers/>
        ),
      },
      {
        path: "/dashboard/manage-moderator",
        element: (
            <AllModerator />
        ),
      },
    ],
  },
]);

export default router;
