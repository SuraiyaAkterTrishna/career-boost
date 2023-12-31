/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/statistics">Statistics</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li>
    </>
  );
  return (
      <div className="container mx-auto">
        <div className="navbar bg-base-100 my-8">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a className="font-bold text-3xl">CareerBoost</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn-common">Start Applying</a>
          </div>
        </div>
      </div>
  );
};

export default Header;
