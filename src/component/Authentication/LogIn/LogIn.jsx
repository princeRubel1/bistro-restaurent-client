import React, { useContext, useEffect, useState } from "react";
import "./LogIn.css";
import loginImg from "../../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
// import useAuth from "../../Hooks/useAuth";

const LogIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, githubSignIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Login Successfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const savedUser = {
          nam: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSign = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   for captcha validate
  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    // console.log(value);
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Login In </title>
      </Helmet>
      <div className="hero h-[800px] max-w-screen-2xl login_bg  mx-auto mt-40 rounded-md shadow-2xl">
        <div className="hero-content flex   ">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} className="w-[800px] h-[500px]" alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-lg">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login Now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label w-full">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  placeholder="Type here"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  style={{
                    borderRadius: "8px",
                    background: "#D1A054B2",
                  }}
                  disabled={disabled}
                  className="btn text-white"
                  type="submit"
                  value="Log In"
                />
              </div>
              <div className="text-xl text-center space-y-4">
                <h4
                  style={{
                    color: "#D1A054B2",
                  }}
                >
                  New here? <Link to="/signup">Create a New Account</Link>
                </h4>
                <p>Or sign in with</p>
                <div className=" ml-40 mx-auto flex space-x-4">
                  <span>
                    <FaFacebook className="text-4xl"></FaFacebook>
                  </span>
                  <span>
                    <Link onClick={handleGoogleSign}>
                      <FaGoogle className="text-4xl"></FaGoogle>
                    </Link>
                  </span>
                  <span>
                    <Link onClick={handleGithubSign}>
                      <FaGithub className="text-4xl"></FaGithub>
                    </Link>
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

export default LogIn;
