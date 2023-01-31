import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <NavLink to="/dashboard/add-division">Add Division</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-division">Manage Division</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-Moderator">All Moderator</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-spot">Add Spot</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-spot">Manage Spot</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-booking">My Booking</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-booking">Manage Booking</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/report">Report</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-review">My Review</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/all-review">All Review</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
