import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
const Details = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });

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
          <div className="container grid grid-cols-12 mx-auto items-center justify-around ">
            <img
              src={product?.url}
              className="p-16 rounded-lg s col-span-5 "
              alt="`"
            />
            <div className="col-span-7 text-left p-8">
              <h1 className="text-2xl font-bold ">{product?.name}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
