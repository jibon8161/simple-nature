import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiLindenLeaf } from "react-icons/gi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { AiFillSafetyCertificate } from "react-icons/ai";
import video from "../video (1080p).mp4";

const Slide = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <div className="carousel w-[70%] mx-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <video
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
              playsInline
              src={video}
            ></video>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center mb-20">
        <div className="md:flex border shadow-md p-4">
          <div className="flex gap-2 hover:text-green-600 items-center">
            <p className="text-6xl font-thin rounded-full shadow-inner">
              <CiDeliveryTruck />
            </p>
            <div className="text-left">
              <p className="font-bold">Free Shipping</p>
              <p className="text-xs">
                Free shipping when you spend <br /> $1000.
              </p>
            </div>
          </div>
          <div className="text-6xl text-gray-400 hidden md:block">
            {/* <RxDividerVertical /> */}
            <PiDotsThreeVerticalBold />
          </div>
          <div className="flex gap-2 hover:text-green-600 items-center">
            <p className="text-6xl font-thin rounded-full shadow-inner">
              <GiLindenLeaf />
            </p>
            <div className="text-left">
              <p className="font-bold">Get Fresh Products</p>
              <p className="text-xs">
                Find a range of best online <br /> premium products.
              </p>
            </div>
          </div>
          <div className="text-6xl text-gray-400 hidden md:block">
            {/* <RxDividerVertical /> */}
            <PiDotsThreeVerticalBold />
          </div>
          <div className="flex gap-2 hover:text-green-600 items-center">
            <p className="text-6xl font-thin rounded-full shadow-inner">
              <CiDollar />
            </p>
            <div className="text-left">
              <p className="font-bold">Moneyback Offer</p>
              <p className="text-xs">
                Free 30 days money back <br /> guarantee.
              </p>
            </div>
          </div>
          <div className="text-6xl text-gray-400 hidden md:block">
            {/* <RxDividerVertical /> */}
            <PiDotsThreeVerticalBold />
          </div>
          <div className="flex gap-2 hover:text-green-600 items-center">
            <p className="text-6xl font-thin rounded-full shadow-inner">
              <AiFillSafetyCertificate />
            </p>
            <div className="text-left">
              <p className="font-bold">Safe Payment</p>
              <p className="text-xs">
                We are using secure payment <br /> methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
