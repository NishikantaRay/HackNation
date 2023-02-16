import React from 'react'

export default function SignIn() {
  return (
    <>
     <div className="container ">
                <div className="text-center mt-3">
                    <img src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" width={150} height={150} alt="logo" />
                </div>
                <div className="row">
                    <div className="col-md-4 col-12"></div>
                    <div className="col-md-4 col-12">
                        <form action="" >
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-primary">Primary</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 col-12"></div>
                </div>
            </div>
    </>
  )
}
