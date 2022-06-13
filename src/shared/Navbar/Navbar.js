import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logopng.png";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="shadow-lg sticky top-0 z-50">
      <div className="">
        <div class="navbar bg-base-100 ">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <CustomLink to="/">Home</CustomLink>
                </li>
                <li>
                  <CustomLink to="/services">What we do</CustomLink>
                </li>
                <li>
                  <CustomLink to="/partners">Our Partners</CustomLink>
                </li>
                <li>
                  <CustomLink to="/about">About Us</CustomLink>
                </li>
                <li>
                  <CustomLink to="/contact">Contact us</CustomLink>
                </li>
              </ul>
            </div>
            <div>
              <CustomLink to="/">
                <img className="w-48 pl-10" src={logo} alt="" />
              </CustomLink>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/services">What we do</CustomLink>
              </li>
              <li>
                <CustomLink to="/partners">Our Partners</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About Us</CustomLink>
              </li>
              <li>
                <CustomLink to="/contact">Contact us</CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
