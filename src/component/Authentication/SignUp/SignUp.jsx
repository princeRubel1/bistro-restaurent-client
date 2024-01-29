import React, { useContext } from "react";
import SignUpImg from "../../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import "./SignUp.css";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("user photo updated");
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Sign Up </title>
      </Helmet>
      <div className="hero h-[800px] max-w-screen-2xl signUp_bg  mx-auto mt-40 rounded-md shadow-2xl">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={SignUpImg} className="w-[800px] h-[500px]" alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold text-center uppercase">
                signUp Now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo Url"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && <span>This photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <span>This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                  })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span>Password must be required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Password must be 6 character</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span>Password must be less than 20 characters</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span>
                    Password must be one uppercase,one lowercase and one spacial
                    characters
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  style={{
                    borderRadius: "8px",
                    background: "#D1A054B2",
                  }}
                  className="btn text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="text-xl text-center space-y-4">
                <h4
                  style={{
                    color: "#D1A054B2",
                  }}
                >
                  Already registered? <Link to="/login">Go to log in</Link>
                </h4>
                <p>Or sign in with</p>
                <div className=" ml-40 mx-auto flex space-x-4">
                  <span>
                    <FaFacebook className="text-4xl"></FaFacebook>
                  </span>
                  <span>
                    <FaGoogle className="text-4xl"></FaGoogle>
                  </span>
                  <span>
                    <FaGithub className="text-4xl"></FaGithub>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
