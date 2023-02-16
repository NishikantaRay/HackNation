import React from "react";
import FooterPage from "../components/Footer/FooterPage";
import Navbar from "../components/Navbar";

function Alert() {
  return (
    <>
      <Navbar />
      <div className="text-center container mt-4">
        <div className="fs-1 fw-bold text-dark">ALERT REQUEST</div>
        <div className="row my-3">
          <div className="col-6">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <div className="card-title fw-bold fs-3">Normal Alert</div>
                <div className="card-text fs-6 my-3">
                  <li>Dummy Condition 1</li>
                  <li>Dummy Condition 2</li>
                  <li>Dummy Condition 3</li>
                  <li>Dummy Condition 4</li>
                  <li>Dummy Condition 5</li>
                </div>
                <a href="/" className="btn btn-primary">
                  Send Alert
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <div className="card-title fw-bold fs-3">Emergency Alert</div>
                <div className="card-text fs-6 my-3">
                  <li>Dummy Condition 1</li>
                  <li>Dummy Condition 2</li>
                  <li>Dummy Condition 3</li>
                  <li>Dummy Condition 4</li>
                  <li>Dummy Condition 5</li>
                </div>
                <a href="/" className="btn btn-danger">
                  Send Alert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default Alert;
