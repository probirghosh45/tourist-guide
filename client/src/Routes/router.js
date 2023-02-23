import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import Home from "../Components/Home/Home";
import About from "../Components/AboutUs/About";
import Booking from "../Components/Booking/Booking";
import NotFound from "../Components/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import DreamDestination from "../Components/DreamDestination/DreamDestination";
import OurServices from "../Components/OurServices/OurServices";
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
import TourPackages from "../Components/TourPackages/TourPackages";
import SingleService from "../Components/SingleService/SingleService";
import MyReview from "../Pages/dashboard/Users/MyReview";
import AllReview from "../Pages/dashboard/Moderator/AllReview";
import Welcome from "../Components/Dashboard/Welcome";
import BecomeAModerator from "../Pages/dashboard/Users/BecomeAModerator";
// import MyReviewEdit from "../Components/Review/MyReviewEdit";
import Checkout from "../Pages/dashboard/Users/Checkout";
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
        element: <DreamDestination />,
      },
      {
        path: "/services",
        element: <OurServices />,
      },
      {
        path: "/division/:id",
        element: <SingleService />,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/division/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <OurBlogs />,
      },
      {
        path: "/tour-package",
        element: <TourPackages />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/booking/${params.id}`),
      },

      {
        path: "/tour-package-booking/:id",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/tour-packages/${params.id}`),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "become-a-moderator",
        element: (
          <PrivateRoute>
            <BecomeAModerator />
          </PrivateRoute>
        ),
      },
      {
        path: "add-division",
        element: <AddDivision />,
      },
      {
        path: "manage-division",
        element: <ManageDivision />,
      },
      {
        path: "add-spot",
        element: (
          <PrivateRoute>
            <AddSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-spot",
        element: (
          <PrivateRoute>
            <ManageSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-bookings",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-booking",
        element: (
          <PrivateRoute>
            <ManageBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) => 
        fetch(`${process.env.REACT_APP_API_URL}/booking-payment/${params.id}`),
        },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/report",
        element: (
          <PrivateRoute>
            <Report />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-moderator",
        element: (
          <PrivateRoute>
            <AllModerator />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-review",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/dashboard/reviews/edit/:id",
      //   element: (
      //     <PrivateRoute>
      //       <MyReviewEdit />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/dashboard/all-review",
        element: <AllReview />,
      },
    ],
  },
]);

export default router;
