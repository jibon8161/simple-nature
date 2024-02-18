import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import Lottie from "lottie-react";
// import { IoSearchOutline } from "react-icons/io5";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

import abc from "../abc.json";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <nav className=" md:relative  shadow-inner bg-green-50 ">
        <div className="items-center px-6 py-0 mx-auto md:grid grid-cols-12">
          <div className="col-span-7  items-center justify-between">
            <p className="font-bold text-sm">
              Welcome to our online store Ausplug!
            </p>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } col-span-5    z-20 w-full   md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}
          >
            <div className=" px-2 -mx-4 md:flex-row md:mx-10 md:py-0 text-xs font-bold flex items-center justify-between ">
              <NavLink
                to="#"
                className="px-2.5 py-2 text-center  hover:bg-transparentmd:mx-2"
              >
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className=" m-1 hover:text-orange-500"
                  >
                    <div className="flex gap-2">
                      <img
                        className="w-5"
                        src="https://static.vecteezy.com/system/resources/previews/016/328/983/non_2x/united-kingdom-flat-rounded-flag-icon-with-transparent-background-free-png.png"
                        alt="img"
                      />
                      <p> English</p>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-100 bg-white  border text-center border-white shadow-2xl  ml-1 pl-1 w-40 "
                  >
                    <li className="hover:text-orange-500">
                      <NavLink>
                        {" "}
                        <div className="flex mt-6 text-xs gap-2 ">
                          <img
                            className="w-5"
                            src="https://cdn-icons-png.flaticon.com/512/197/197560.png"
                            alt="img"
                          />{" "}
                          <p>France</p>
                        </div>
                      </NavLink>
                    </li>
                    <li className="hover:text-orange-500">
                      <NavLink>
                        {" "}
                        <div className="flex mt-3 text-xs gap-2">
                          <img
                            className="w-5"
                            src="https://cdn-icons-png.flaticon.com/512/323/323300.png"
                            alt="img"
                          />{" "}
                          <p>Russia</p>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </NavLink>
              <div>|</div>

              {/* <NavLink
                to="#"
                className="px-2.5 py-2 hover:text-orange-500  md:mx-2"
              >
                <div className="flex gap-1">
                  <LuHeart className="mt-1"></LuHeart>
                  <p className="text-xs"> My Wishlist</p>
                </div>
              </NavLink> */}
              <Link
                to="/login"
                className="px-2.5 hover:text-orange-500 py-2 md:mx-2"
              >
                Sign in
              </Link>
              <div>|</div>
              <Link
                to="/reg"
                className="px-2.5 hover:text-orange-500 py-2 md:mx-2"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto items-center">
        <div className="col-span-4 mx-auto  mt-8">
          <p className="text-7xl text-[#1B351E] font-sembold font-serif">
            AUSPLUG
          </p>
          <Lottie
            className="w-72 mx-auto p-1 lg:absolute -top-2 left-96 right-72 "
            animationData={abc}
          ></Lottie>
          <div className="flex items-center justify-center ">
            {/* <div>
              <button className="btn btn-ghost bg-transparent outline-none hover:bg-transparent text-xs">
                LOGIN
              </button>
            </div> */}
            {/* <p className="text-xs">|</p>
            <div>
              <button className="btn btn-ghost bg-transparent outline-none hover:bg-transparent text-xs">
                REGISTER
              </button>
            </div>
            <div>
              <button></button>
            </div> */}
            <div className="navbar bg-base-100">
              <div className="flex-none">
                {/* <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-span-4 lg:block hidden mr-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered md:w-[120%] rounded-3xl  "
            />

            <select className="absolute  inset-y-0 -right-2 flex border border-gray-2 font-medium p-2 text-xs ">
              <option hidden disabled selected>
                CATEGORY
              </option>

              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <button className="absolute inset-y-0 md:-right-[103px] w-24 rounded-e-full flex items-center border border-gray-2 font-medium p-2 ">
              <p className="mx-auto">
                {" "}
                <IoSearchOutline />
              </p>
            </button>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3"></div>
          </div>
        </div> */}
      </div>
      {/* <div className="divider divider-warning"></div> */}
      <div className=" border border-gray-300 bg-[#76A713]  p-2  ">
        <div className=" container mx-auto md:grid grid-cols-12">
          <div className="col-span-1"></div>
          <div className="col-span-10 ">
            <div className="md:flex items-center lg:gap-4 md:font-bold text-white ">
              <div className="flex btn rounded-none bg-[#689311] font-extrabold text-white">
                <div className="lg:text-2xl">
                  <TbLayoutSidebarRightCollapseFilled />
                </div>
                <div className="">BROWSE CATEGORIES</div>
              </div>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/cnt"} className="ml-2 md:ml-0">
                Contact us
              </NavLink>
              <NavLink to={"/login"} className="ml-2 md:ml-0">
                My account
              </NavLink>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
