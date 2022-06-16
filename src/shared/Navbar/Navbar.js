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
                <li tabindex="0">
                  <Link to="/services" class="justify-between">
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
                  </Link>
                  <ul class="p-1 bg-base-100">
                    <li>
                      <Link to="/businessmanage">
                        Business Management <br /> Software
                      </Link>
                    </li>
                    <li>
                      <Link to="/digitalmarketing">
                        Digital Marketing <br /> Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/mobileapp">
                        Mobile App & <br /> Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/ecommerce">E-Commerce Solution</Link>
                    </li>
                    <li>
                      <Link to="/affiliate">
                        Affiliate Marketing <br /> Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/adnetwork">Ad Network Solutions</Link>
                    </li>
                    <li>
                      <Link to="/personalbranding">Personal Branding</Link>
                    </li>
                    <li>
                      <Link to="/bulksms">Bulk SMS Services</Link>
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
                  <CustomLink to="/contact">Contact Us</CustomLink>
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
                <CustomLink to="/services">What We Do</CustomLink>
              </li>
              <li>
                <CustomLink to="/partners">Our Partners</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About Us</CustomLink>
              </li>
              <li>
                <CustomLink to="/contact">Contact Us</CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
