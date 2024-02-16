import React, { useEffect, useState } from "react";
import Slide from "../carousel/Slide";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const Redirect = (id) => {
    // setData(id);
    navigate(`details/${id}`);
    console.log(id);
  };

  return (
    <div>
      <Slide></Slide>

      {/* //categories product form home page  */}
      <section className="container mx-auto">
        <div>
          <p className="text-6xl  font-semibold text-[#1B351E]  underline">
            Latest products
          </p>
        </div>

        <div className="md:grid grid-cols-12 mt-20">
          <div className="col-span-1"></div>
          <div className="col-span-10">
            <div className="md:grid grid-cols-3 gap-12 ">
              {items?.map((item) =>
                item.trend === "true" ? (
                  <button
                    onClick={() => Redirect(item?._id)}
                    className="flex flex-col items-center justify-center w-full max-w-sm mx-auto md:hover:translate-y-3 mt-12 md:mt-0 "
                  >
                    <img
                      className="
                    w-full
                    h-64
                   object-cover
                    bg-center
                    rounded-lg
                    shadow-md"
                      src={item.url}
                      alt=""
                    />

                    <div className="w-56 overflow-hidden bg-green-500 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                      <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                        {item.name}
                      </h3>

                      <div className=" justify-between px-1 py-4 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-2xl text-gray-800 dark:text-gray-200">
                          {item.prange}
                        </span>
                        {/* <button
                          onClick={() => Redirect(item?._id)}
                          className="px-2 py-3 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-orange-500 rounded hover:bg-gray-700  focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                        >
                          Buy now
                        </button> */}
                      </div>
                    </div>
                  </button>
                ) : (
                  <div className="hidden">hi</div>
                )
              )}
            </div>

            <div className="mt-32">
              <div>
                <p className="text-6xl text-[#1B351E]  font-semibold underline">
                  All Products
                </p>

                <div className="grid grid-cols-3 gap-12">
                  {items?.map((item) =>
                    item.trend === "false" ? (
                      <button
                        onClick={() => Redirect(item?._id)}
                        className="flex flex-col items-center justify-center w-full max-w-sm mx-auto hover:translate-y-3 "
                      >
                        <img
                          className="
                    w-full
                    h-64
                   object-cover
                    bg-center
                    rounded-lg
                    shadow-md"
                          src={item.url}
                          alt=""
                        />

                        <div className="w-56 overflow-hidden bg-green-500 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                            {item.name}
                          </h3>

                          <div className=" justify-between px-1 py-4 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-2xl text-gray-800 dark:text-gray-200">
                              {item.prange}
                            </span>
                            {/* <button
                          onClick={() => Redirect(item?._id)}
                          className="px-2 py-3 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-orange-500 rounded hover:bg-gray-700  focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                        >
                          Buy now
                        </button> */}
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="hidden">hi</div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
