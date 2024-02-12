import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <nav className=" md:relative  shadow-inner bg-gradient-to-l from-orange-200 via-orange-400 to-orange-600 ">
        <div className="items-center px-6 py-0 mx-auto md:grid grid-cols-12">
          <div className="col-span-7  items-center justify-between">
            <p className="font-bold text-sm">
              Welcome to our online store Budbloke!
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
            <div className=" px-2 -mx-4 md:flex-row md:mx-10 md:py-0 text-xs font-bold flex items-center ">
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

              <NavLink
                to="#"
                className="px-2.5 py-2 hover:text-orange-500  md:mx-2"
              >
                <div className="flex gap-1">
                  <LuHeart className="mt-1"></LuHeart>
                  <p className="text-xs"> My Wishlist</p>
                </div>
              </NavLink>
              <NavLink
                to="#"
                className="px-2.5 hover:text-orange-500 py-2 md:mx-2"
              >
                Sign in..
              </NavLink>
              <NavLink
                to="#"
                className="px-2.5 hover:text-orange-500 py-2 md:mx-2"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto items-center md:grid grid-cols-12 mt-6">
        <div className="col-span-4 mx-auto">
          <img
            className="ml-3 md:w-12"
            src="https://img.freepik.com/free-vector/cannabis-leaf-icon_98292-4592.jpg?size=626&ext=jpg&ga=GA1.1.96050015.1659979182&semt=ais"
            alt=""
          />
          <p className="text-2xl">GANJA</p>
        </div>
        <div className="col-span-4 md:block hidden">
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
            <button className="absolute inset-y-0 md:-right-[104px] w-24 rounded-e-full flex items-center border border-gray-2 font-medium p-2 ">
              <p className="mx-auto">
                {" "}
                <IoSearchOutline />
              </p>
            </button>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3"></div>
          </div>
        </div>
        <div className="col-span-3 ml-40 md:block hidden">
          <div className="flex">
            <div>
              <button className="btn btn-ghost bg-transparent outline-none hover:bg-transparent">
                Button
              </button>
            </div>
            <p>/</p>
            <div>
              <button className="btn btn-ghost bg-transparent outline-none hover:bg-transparent">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
