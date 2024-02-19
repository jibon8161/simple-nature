import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import ReactImageMagnify from "react-image-magnify";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import Checkout from "../checkout/Checkout";
const Details = () => {
  const [product, setProduct] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const navigate = useNavigate();
  const [number, setNumber] = useState(1);
  const { id } = useParams();
  const [total, setTotal] = useState();
  useEffect(() => {
    fetch(`https://marua-server.vercel.app/item/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });

  const handleClick = (value) => {
    setCurrentValue(value);
    setTotal(currentValue * number);
    console.log(total);
  };

  const handlePlus = () => {
    setNumber(number + 1);
  };

  const handleMinus = () => {
    setNumber(number - 1);
  };

  const [activeButton, setActiveButton] = useState(null);

  const buttonData = [
    { id: 1, label: "Description", content: `${product?.description}` },
    { id: 2, label: "Additional information", content: `${product?.weight}` },
  ];

  const sendDataToComp2 = () => {
    if (currentValue === 0 || number === 0) {
      alert(
        "Prior to advancing to the checkout page, kindly ensure that you have selected the requisite product options."
      );
      return;
    }

    const data1 = product?.name;
    const data2 = currentValue * number;

    // Save both data items to localStorage
    const dataArray = [data1, data2];

    // Save the array to localStorage
    localStorage.setItem("dataForComp2", JSON.stringify(dataArray));
    navigate("/check");
  };
  return (
    <div>
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
              <h1 className="mb-5 text-6xl font-extrabold text-white">Shop</h1>
              <div className="text-sm breadcrumbs text-white">
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink>Products</NavLink>
                  </li>
                  <li>
                    <NavLink>{product?.name}</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-[#689311]"></div>
      <section>
        <div className=" mx-auto items-center justify-between mt-8 ">
          <div className="container md:grid grid-cols-12 mx-auto items-center justify-around ">
            <img
              src={product?.url}
              className="p-16 rounded-lg s col-span-5 "
              alt="`"
            />
            <div className="col-span-7 text-left p-8">
              <h1 className="text-6xl font-bold ">{product?.name}</h1>
              <div className="flex text-2xl mt-5 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="text-3xl font-semibold">{product?.prange}</p>
              </div>
              <div className="mt-5 text-gray-500">
                <p>{product?.details}</p>
              </div>
              <div className="mt-5 font-bold">
                <p>{product?.type}</p>
              </div>
              <div className="flex gap-2 mt-5">
                <button
                  onClick={() => handleClick(product.p1)}
                  className="px-3 py-1 border hover:bg-[#689311] hover:text-white font-normal shadow-sm"
                >
                  {product?.w1}
                </button>
                <button
                  onClick={() => handleClick(product.p2)}
                  className="px-3 py-1 border hover:bg-[#689311] hover:text-white font-normal shadow-sm"
                >
                  {product?.w2}
                </button>
                <button
                  onClick={() => handleClick(product.p3)}
                  className="px-3 py-1 border hover:bg-[#689311] hover:text-white font-normal shadow-sm"
                >
                  {product?.w3}
                </button>
                <button
                  onClick={() => handleClick(product.p4)}
                  className="px-3 py-1 border hover:bg-[#689311] hover:text-white font-normal shadow-sm"
                >
                  {product?.w4}
                </button>
              </div>
              <div className="mt-6">
                <p className="text-3xl font-semibold">
                  {" "}
                  ${currentValue * number}
                </p>
              </div>
              <div className="flex mt-7 gap-3 items-center ">
                <button
                  className=" text-4xl hover:text-green-500 "
                  onClick={handleMinus}
                >
                  <HiOutlineMinusCircle />
                </button>
                <span className="text-3xl">{number}</span>
                <button
                  className=" hover:text-green-500 text-4xl    "
                  onClick={handlePlus}
                >
                  <HiOutlinePlusCircle />
                </button>
                <button
                  onClick={sendDataToComp2}
                  className="bg-[#689311] py-2 px-3 rounded-lg text-white font-semibold"
                >
                  Proceed to checkout
                </button>
              </div>
              <div className="mt-6">
                <p className="">
                  <span className="font-bold mr-1">Category:</span>
                  {product?.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto  flex flex-wrap justify-center mt-8 ">
        {/* Render buttons */}
        {buttonData.map((button) => (
          <button
            key={button.id}
            className={`bg-transparent hover:bg-[#689311]  btn font-bold py-2 px-4 rounded m-2 hover:text-white  ${
              activeButton === button.id && "bg-"
            }`}
            onClick={() => setActiveButton(button.id)}
          >
            {button.label}
          </button>
        ))}

        {/* Render content */}
        {buttonData.map((button) => (
          <div
            key={button.id}
            className={`w-full p-8 text-gray-500 mt-5 border border-gray-200 font-semibold  ${
              activeButton === button.id ? "block" : "hidden"
            }`}
          >
            {button.content}
          </div>
        ))}
      </div>
      {/* <div className="">
        <Checkout data={product?.name} data1={total}></Checkout>
      </div> */}
    </div>
  );
};

export default Details;
