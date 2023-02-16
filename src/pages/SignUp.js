import React, { useState } from "react";
import axios from "axios";
import "./others.css";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    userId: "",
    mobile: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, userId, mobile, password } = user;
    axios
      .post(
        "https://rv9h8k6o3l.execute-api.us-east-1.amazonaws.com/users/signup/",
        {
          userId: userId,
          name: name,
          mobile: mobile,
          password: password,
          userGroup: "student",
          userType: "user",
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);
  return (
    <div>
      <div className="container ">
        <div className="text-center mt-3">
          <img src="logo.png" width={150} height={150} alt="logo" />
        </div>
        <div className="row">
          <div className="col-md-4 col-12"></div>
          <div className="col-md-4 col-12">
            <form action="">
              <div className="mb-3">
                {/* <label for="exampleFormControlInput1" className="form-label">
                  User Id
                </label> */}
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleInputs(e)}
                  name="userId"
                  placeholder="Enter your user id"
                />
              </div>
              <div className="mb-3">
                {/* <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label> */}
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleInputs(e)}
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                {/* <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number
                </label> */}
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleInputs(e)}
                  name="mobile"
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => handleInputs(e)}
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={(e) => {
                    PostData(e);
                  }}
                  className="btn btn-primary-bg"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="text-center">
              Already have an account ?{" "}
              <a href="/signin" className="text-dark">
                Login here
              </a>
            </div>
          </div>
          <div className="col-md-4 col-12"></div>
        </div>
      </div>
    </div>
  );
}
