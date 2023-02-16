import React,{useState,useEffect} from 'react'
export default function SignUp() {
    const [user,setUser]=useState({
        name:"",userId:"",mobile:"",password:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    console.log(user);
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
                                <label for="exampleFormControlInput1" className="form-label">User Id</label>
                                <input type="text" className="form-control"  onChange={(e)=>handleInputs(e)} name="userId" placeholder="Enter your user id" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={(e)=>handleInputs(e)} name="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" onChange={(e)=>handleInputs(e)} name="mobile" placeholder="Enter your Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" onChange={(e)=>handleInputs(e)} name="password" placeholder="Enter your password" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 col-12"></div>
                </div>
            </div>

        </>
    )
}
