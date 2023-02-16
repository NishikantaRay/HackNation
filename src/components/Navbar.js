import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container col-12 col-md-10">
          <a className="navbar-brand" href="#">CAMPUS HEALTH HUB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
             <button className="btn btn-outline-success me-2" type="submit">Login</button>
              <button className="btn btn-outline-success" type="submit">Signup</button>
            </form>

            {/* login signup button */}
            {/* <div className="d-flex">
              <button className="btn btn-outline-success me-2" type="submit">Login</button>/
              <button className="btn btn-outline-success" type="submit">Signup</button>

            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}
