import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const reg = () => {
    
   const websiteName = "Ausplug";
   alert(`${websiteName}: successfully logged in`);

   navigate("/");


}
const navigate = useNavigate()
  return (
    <div>
      <div>
        <div className="hero mt-8 ">
          <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img
                className="object-cover"
                src="https://i.ibb.co/5KJn986/2h-media-ZL-H4cd-Nr-O0-unsplash-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button onClick={reg} className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="mt-24 text-red-600">
          Please note: Authentication and registration procedures are not deemed
          essential for the protection of your privacy.
        </p>
      </div>
    </div>
  );
};

export default Register;
