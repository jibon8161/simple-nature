import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const sent = () => {
    alert("Your message has been successfully sent");
    navigate("/");
  };
  const navigate = useNavigate();

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
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-[#689311]"></div>
      <form onSubmit={sent} className="container mx-auto w-full max-w-lg mt-24">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="grid-first-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              id="grid-first-name"
              type="text"
              placeholder="first-name"
              required
              className="appearance-none block w-full bg-transparent text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="grid-last-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              id="grid-last-name"
              type="text"
              placeholder="last-name"
              required
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="no-resize appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              required
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              type="submit"
              className="shadow bg-[#689311]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
