import React from 'react'
import './clean.css'
export default function CleanlinessComp() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="text-center">
              
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add a Request
</button>
            </div>

          </div>
          <div className="col-md-6 col-12">
            <div className="text-center">
              <button className="btn btn-primary btn-lg">My Request</button>
            </div>
          </div>
        </div>
        <div className="socialmediasection">
          <div className="row mt-4 ">
            <div className="col-md-2 col-12"></div>
            <div className="col-md-8 col-12">
              <div class="card" >
                <img src="https://imgs.search.brave.com/890JZC4gTZIGv95XDI_0uiAL9cZHReXmM6oXDPSz9Q0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/NDhDbWVSUzUtMzQy/VkV0ME5Pd2RRSGFF/SyZwaWQ9QXBp" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>

            </div>
            <div className="col-md-2 col-12"></div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-2 col-12"></div>
            <div className="col-md-8 col-12">
              <div class="card" >
                <img src="https://imgs.search.brave.com/890JZC4gTZIGv95XDI_0uiAL9cZHReXmM6oXDPSz9Q0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/NDhDbWVSUzUtMzQy/VkV0ME5Pd2RRSGFF/SyZwaWQ9QXBp" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>

            </div>
            <div className="col-md-2 col-12"></div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Upload your Image</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Location</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="text-center">
  <button className="btn btn-primary btn-lg">Submit</button>
</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
     
      </div>
    </div>
  </div>
</div>
    </>
  )
}
