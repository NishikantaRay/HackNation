import React, { useState } from "react";

export default function SignIn() {
  const [userId, setUserId] = useState("");
  const [password, setPasword] = useState("");
  return (
    <>
      <div className="container ">
        <div className="text-center mt-3">
          <img
            src="https://www.thesparksfoundationsingapore.org/images/logo_small.png"
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <div className="row">
          <div className="col-md-4 col-12"></div>
          <div className="col-md-4 col-12">
            <form action="">
              <div className="mb-3">
                <label for="userId" className="form-label">
                  User ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userId"
                  value={userId}
                  onClick={setUserId}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onClick={setPasword}
                />
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 col-12"></div>
        </div>
      </div>
    </>
  );
}
