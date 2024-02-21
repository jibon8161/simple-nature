import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Lsd = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://marua-server.vercel.app/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const redirectToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="">
      <p className="text-6xl text-[#1B351E] font-semibold underline mb-20 mt-16">
        LSD
      </p>
      <div className="mt-32">
        <div>
          <div className="container mx-auto md:grid grid-cols-4 gap-12">
            {items?.map((item) =>
              item.category === "LSD" ? (
                <button
                  key={item._id}
                  onClick={() => redirectToDetails(item._id)}
                  className="flex flex-col items-center justify-center w-full max-w-sm mx-auto hover:translate-y-3 mt-12 md:mt-0 "
                >
                  <img
                    className="w-full h-64 object-cover bg-center rounded-lg shadow-md"
                    src={item.url}
                    alt=""
                  />

                  <div className="w-56 overflow-hidden bg-green-500 rounded-lg shadow-lg md:w-64 dark:bg-gray-800 ">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      {item.name}
                    </h3>

                    <div className="justify-between px-1 py-4 bg-gray-200 dark:bg-gray-700">
                      <span className="font-bold text-2xl text-gray-800 dark:text-gray-200">
                        {item.prange}
                      </span>
                    </div>
                  </div>
                </button>
              ) : (
                <div key={item._id} className="hidden">
                  hi
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lsd;
