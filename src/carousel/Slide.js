import React from "react";

const Slide = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-12 mt-5">
        <div className="col-span-2"></div>
        <div className=" col-span-8">
          <div className="carousel md:relative w-full">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/8139600/pexels-photo-8139600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full md:h-[50%] object-cover"
                alt=""
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/8139194/pexels-photo-8139194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full md:h-[50%] object-cover"
                alt=""
              />
            </div>
            <div id="item3" className="carousel-item w-full ">
              <img
                src="https://images.pexels.com/photos/8140283/pexels-photo-8140283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full md:h-[50%] object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center md:absolute w-full top-[600px] right-1.5  gap-2">
            <a href="#item1" className="btn btn-xs hover:bg-orange-500">
              1
            </a>
            <a href="#item2" className="btn btn-xs hover:bg-orange-500">
              2
            </a>
            <a href="#item3" className="btn btn-xs hover:bg-orange-500">
              3
            </a>
          </div>
          <div className="absolute bottom-16 ">
           
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default Slide;
