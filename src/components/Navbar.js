import React from "react";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="header-area">
          <div className="main-header ">
            <div className="header-top text-center">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <p>
                      This handy little bar is great for informing visitors of
                      various features.
                      <a href="/" className="btn2">
                        Learn More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between flex-wrap position-relative">
                <div className="logo">
                  <a href="/" className="logocss">
                    CAMPUS HEALTH HUB
                  </a>
                </div>

                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/">About</a>
                      </li>
                      <li>
                        <a href="/">Services</a>
                      </li>

                      <li>
                        <a href="/">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right-btn f-right">
                  <button type="submit" className="btn_1 d-none d-xl-block">
                    <a
                      href="/signup"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Register
                    </a>
                  </button>
                </div>

                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container col-12 col-md-10">
          <a className="navbar-brand" href="#">
            CAMPUS HEALTH HUB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success me-2" type="submit">
                Login
              </button>
              <button className="btn btn-outline-success" type="submit">
                Signup
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </>
  );
}
