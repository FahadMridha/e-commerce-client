import { Spinner } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import image_Login from "../../Assets/loginePage/loginImage.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

// import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, loading, setLoading } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const [createUserEmail, setCreateUserEmail] = useState("");
  //   const [token] = useToken(createUserEmail);
  //   if (token) {
  //     navigate("/");
  //   }
  const handlerSignUp = (data) => {
    setSignupError("");
    const { email, password, name, role } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast("Successfully create user", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserToDb(name, email, role);
          })
          .catch((error) => console.log(error));
        console.log(user);
      })
      .catch((error) => {
        setSignupError(error.message);
        console.log(error);
      });
  };
  const saveUserToDb = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreateUserEmail(email);
      });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-lime-100 py-16 lg:pl-16">
        <div className="hidden lg:block">
          <img className="w-3/4" src={image_Login} alt="login_picture" />
        </div>
        <div className="w-96 mx-auto p-8 rounded-lg flex justify-center items-center bg-white ">
          <div className="w-72 py-8">
            <h3 className="text-2xl text-center mb-8">Sign Up</h3>
            <form className="" onSubmit={handleSubmit(handlerSignUp)}>
              <div className="form-control w-full mb-4">
                <label className="label mb-2 font-semibold">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  {...register("name", {
                    required: "Name  is required",
                  })}
                  placeholder="Enter Your Name"
                  type="text"
                  className="input  rounded input-bordered w-full mt-2 "
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full mb-4">
                <label className="label mb-2 font-semibold">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Enter email"
                  type="email"
                  className="input  rounded input-bordered w-full mt-2 "
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label my-2  flex justify-between items-center">
                  <span className="label-text font-semibold ">Password</span>
                  <span className="label-text text-sm hover:underline">
                    <Link to="">Forgot password?</Link>
                  </span>
                </label>

                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "password must be at least 6 charecters or longer",
                    },
                  })}
                  placeholder="password"
                  type="password"
                  className="input rounded input-bordered w-full  "
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <button
                className="btn mb-3 mt-4 text-white  bg-blue-700  hover:bg-blue-800 rounded-lg w-full py-2"
                value="Login"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">
                    <Spinner />
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
            <div>
              {signUpError && <p className="text-red-600">{signUpError}</p>}
            </div>
            <p className="mt-2 text-sm">
              Alredy have an account?
              <Link to="/login" className=" ml-1 text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
