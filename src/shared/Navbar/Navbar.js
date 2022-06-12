import React from "react";
import logo from "../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="px-2 md:px-10">
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
                <li tabindex="0">
                  <a class="justify-between">
                    What we do
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2 bg-base-100">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
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
            <div className="flex items-center justify-around">
              <CustomLink to="/">
                <img className="w-20" src={logo} alt="" />
              </CustomLink>
              <div className="mt-2">
                <h4 className="font-semibold text-secondary uppercase">
                  Masterkey
                </h4>
                <p className="text-xs uppercase">Technology</p>
              </div>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li tabindex="0">
                <a>
                  What we do
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
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
