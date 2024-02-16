import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const red = () => {
    const websiteName = "Ausplug";
    alert(`${websiteName}: successfully logged in`);

    navigate("/");
  };
  const navigate = useNavigate();
  return (
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
              <h1 className="text-5xl font-bold">Login now!</h1>
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
                <label className="label">
                  <NavLink href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </NavLink>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={red} className="btn btn-primary">
                  Login
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
  );
};

export default Login;
