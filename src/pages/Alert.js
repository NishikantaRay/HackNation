import React, { useState } from "react";
import FooterPage from "../components/Footer/FooterPage";
import Navbar from "../components/Navbar";
import axios from "axios";
function Alert() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleInputs = async (e) => {
    e.preventDefault();
    console.log(title, description);
    axios
      .post("https://rv9h8k6o3l.execute-api.us-east-1.amazonaws.com/alerts", {
        title: title,
        description: description,
        type: "common",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const config = {
    headers: { authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzY1OTA0MjcsImV4cCI6MTY3OTE4MjQyN30.WKdbUj-ALdrhlaz6eHhWzYwys7GjgLGVZlUjOsRXbUI` }
};
  // emg alert
  const handleInputsNormal = async (e) => {
    e.preventDefault();
    console.log(title, description);
  
    

    axios
      .post("https://rv9h8k6o3l.execute-api.us-east-1.amazonaws.com/alerts", {
        title: title,
        description: description,
        type: "emergency",

      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="text-center container mt-4">
        <div className="fs-1 fw-bold text-dark">ALERT REQUEST</div>
        <br />
        <br />
        <br />
        <div className="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div class="single-cat text-center mb-30">
                <h5>
                  <a href="services.html">Normal Alert</a>
                </h5>
                <div class="cat-cap">
                  <p>
                    Combine sections from Olla's vast component library and
                    create beautiful.
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalId"
                >
                  Send alert
                </button>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div class="single-cat single-cat3 text-center mb-30">
                <h5>
                  <a href="services.html">Emergency Alert</a>
                </h5>

                <div class="cat-cap">
                  <p>
                    Combine sections from Olla's vast component library and
                    create beautiful.
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Send alert
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br /> <br />
        {/* <div className="row my-3">
          <div className="col lg-6 md-12">
            
            <div className="card">
           
              <div className="card-body">
                <div className="card-title fw-bold fs-3">Normal Alert</div>
                <div className="card-text fs-6 my-3">
                  <li>Dummy Condition 1</li>
                  <li>Dummy Condition 2</li>
                  <li>Dummy Condition 3</li>
                  <li>Dummy Condition 4</li>
                  <li>Dummy Condition 5</li>
                </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalId">
                  Send alert
                </button>
              </div>
            </div>
          </div>
          <div className="col lg-6 md-12">
            <div className="card">
          
              <div className="card-body">
                <div className="card-title fw-bold fs-3">Emergency Alert</div>
                <div className="card-text fs-6 my-3">
                  <li>Dummy Condition 1</li>
                  <li>Dummy Condition 2</li>
                  <li>Dummy Condition 3</li>
                  <li>Dummy Condition 4</li>
                  <li>Dummy Condition 5</li>
                </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Send alert
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Emergency Alert
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <form action="">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Title</label>
                  <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter your title" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter your Description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="text-center">
                <button type="submit" onClick={(e)=>{handleInputsNormal(e)}} class="btn btn-primary">Submit</button>
                </div>
                
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Normal Alert</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Title</label>
                  <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="exampleFormControlInput1" placeholder="Enter your title" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" placeholder="Enter your description" rows="3"></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleInputsNormal(e);
                    }}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalId"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleInputs(e);
                    }}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default Alert;
