import React, { useState } from "react";

import axios from "axios";
export default function SignIn() {
  const [userId, setUserId] = useState("");
  const [password, setPasword] = useState("");
  const handleInputs = async (e) => {
    e.preventDefault();
    axios
      .post(
        "https://rv9h8k6o3l.execute-api.us-east-1.amazonaws.com/users/login/",
        {
          userId: userId,
          password: password,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="text-center mt-3">
          <img src="logo.png" width={150} height={150} alt="logo" />
        </div>
        <div className="row">
          <div className="col-md-4 col-12"></div>
          <div className="col-md-4 col-12">
            <form action="">
              <div className="mb-3">
                {/* <label for="userId" className="form-label">
                  User ID
                </label> */}
                <input
                  type="text"
                  className="form-control "
                  id="userId"
                  value={userId}
                  placeholder="Enter your User ID"
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                {/* <label for="password" className="form-label">
                  Password
                </label> */}
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={(e) => setPasword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={(e) => handleInputs(e)}
                  className="btn btn-primary-bg"
                >
                  SignIn
                </button>
              </div>
            </form>
            <div className="text-center">
              Don't have an account ?{" "}
              <a href="/signup" className="text-dark">
                Register here
              </a>
            </div>
          </div>
          <div className="col-md-4 col-12"></div>
        </div>
      </div>
    </>
  );
}
