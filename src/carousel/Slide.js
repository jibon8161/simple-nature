import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiLindenLeaf } from "react-icons/gi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { AiFillSafetyCertificate } from "react-icons/ai";
import video from "../video (1080p).mp4";
const Slide = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-12 mt-5">
        <div className="col-span-2"></div>
        <div className=" col-span-8">
          <div className="carousel md:relative w-full">
            <div id="item1" className="carousel-item w-full">
              <video
                className="w-full md:h-[70%] object-cover"
                loop
                autoPlay
                muted
                playsInline
                src={video}
              ></video>
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/8139194/pexels-photo-8139194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full md:h-[50%] object-cover"
                alt=""
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/8140283/pexels-photo-8140283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full md:h-[50%] object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center md:absolute w-full top-[800px] right-1.5  gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "#item1";
              }}
              className="btn btn-xs hover:bg-orange-500"
            >
              1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "#item2";
              }}
              className="btn btn-xs hover:bg-orange-500"
            >
              2
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "#item3";
              }}
              className="btn btn-xs hover:bg-orange-500"
            >
              3
            </button>
          </div>

          <div className="lg:absolute bottom-3 md:ml-12 ">
            <div className="md:flex border  shadow-md p-4  ">
              <div className="flex gap-2 hover:text-green-600 ">
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
              <div className="flex gap-2 hover:text-green-600 ">
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
              <div className="flex gap-2 hover:text-green-600 ">
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
              <div className="flex gap-2 hover:text-green-600 ">
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
              <div className="text-6xl text-gray-400 hidden md:block">
                {/* <RxDividerVertical /> */}
                <PiDotsThreeVerticalBold />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default Slide;
