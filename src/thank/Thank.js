import React from "react";
import { Link } from "react-router-dom";
import ani from "../ani.json";
import Lottie from "lottie-react";
const Thank = () => {
  return (
    <div>
      <div className="hero mt-2 ">
        <img
          className="object-cover w-full"
          src="https://i.ibb.co/wszrkB7/11.jpg"
          alt=""
        />
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-extrabold text-white">
              Checkout
            </h1>
            <div className="text-sm breadcrumbs text-white">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link>Checkout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-[#689311]"></div>

      <div className="mt-8">
        <Lottie className="w-[30%] mx-auto p-1 " animationData={ani}></Lottie>
        <p className="text-5xl text-[#1B351E] font-semibold">
          Your order has been received.
        </p>
      </div>
    </div>
  );
};

export default Thank;
