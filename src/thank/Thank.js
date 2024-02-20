import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ani from "../ani.json";
import Lottie from "lottie-react";
import icon from "../icon.ico";

const Thank = () => {
  const [formData, setFormData] = useState(null);
  const [templateParams, setTemplateParams] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    // Retrieve form data from local storage
    const formDataFromLocalStorage = localStorage.getItem("formData");
    if (formDataFromLocalStorage) {
      const parsedFormData = JSON.parse(formDataFromLocalStorage);
      setFormData(parsedFormData);
    }

    // Retrieve template parameters from local storage
    const templateParamsFromLocalStorage =
      localStorage.getItem("templateParams");
    if (templateParamsFromLocalStorage) {
      const parsedTemplateParams = JSON.parse(templateParamsFromLocalStorage);
      setTemplateParams(parsedTemplateParams);
    }

    // Generate random order number
    const randomOrderNumber = generateOrderNumber();
    setOrderNumber(randomOrderNumber);
  }, []);

  const generateOrderNumber = () => {
    // Generate a random number between 100000 and 999999
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return `#${randomNumber}`;
  };

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
        <Lottie className="w-[10%] mx-auto p-1 " animationData={ani}></Lottie>
        <p className="text-3xl text-[#1B351E] font-semibold">
          Congratulations!{" "}
          <span className="text-[#689311]">{formData?.firstname} </span>your
          order has been received.
        </p>

        <div className="container mx-auto  mt-8 ">
          <div className="font-medium mt-5">
            <span className="font-bold"></span>{" "}
            <span>
              {templateParams?.paymentMethod
                .split("\n\n")
                .map((part, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <>
                        <br />
                      </>
                    )}{" "}
                    {/* Add double line break except for the first part */}
                    {part.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
            </span>
          </div>
        </div>
      </div>

      <div className="  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <img className="mx-auto h-12 w-auto" src={icon} alt="Logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Order Received
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Thank you for your purchase!
            </p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">
                  Order number:
                </dt>
                <dd className="text-sm text-gray-900">{orderNumber}</dd>
              </div>
              <div className="py-4 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">Date:</dt>
                <dd className="text-sm text-gray-900">February 20, 2024</dd>
              </div>
              <div className="py-4 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">
                  Total amount:
                </dt>
                <dd className="text-sm text-gray-900">$99.99</dd>
              </div>
              <div className="py-4 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">
                  Payment method:
                </dt>
                <dd className="text-sm text-gray-900">Credit Card</dd>
              </div>
              <div className="py-4 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">
                  Shipping address:
                </dt>
                <dd className="text-sm text-gray-900">
                  1234 Elm Street, Springfield, IL
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-8">
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thank;
