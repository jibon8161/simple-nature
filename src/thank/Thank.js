import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ani from "../ani.json";
import Lottie from "lottie-react";
const Thank = () => {
  const [formData, setFormData] = useState(null);
  const [templateParams, setTemplateParams] = useState(null);

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
  }, []);

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
        <p className="text-5xl text-[#1B351E] font-semibold">
          Congratulations! <span className="text-[#689311]">{formData?.firstname} </span>your order has
          been received.
        </p>

        <div className="container mx-auto border border-gray-400 mt-5">
          <p>First Name: {formData?.firstname}</p>
          Payment Method: {templateParams?.paymentMethod}
        </div>
      </div>
    </div>
  );
};

export default Thank;
