import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import Navbar from './Navbar';
// import Layout from "../components/Layout"
  
function Login() {
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tab,setTab] = useState(true)
    useEffect(()=>{
        // if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
        //     navigate("/");
        // }

     
        console.log(localStorage.getItem('token'))
    },[])
    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedin(false);
    };
 
    const loginAction = (e) => {
       
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            email:email,
            password:password,
        }
        axios.post('http://localhost/Api/login.php', payload)
        .then((r) => {
            setIsSubmitting(false)
            localStorage.setItem('token', r.data.token)
            navigate("/");
            setIsLoggedin(true)
        })
        .catch((e) => {
            console.log(e.response.data,'encapss')
            setIsSubmitting(false)
            if (e.response.data != undefined) {
                setValidationErrors(e.response.data);
            }
            if (e.response.data != undefined) {
                setValidationErrors(e.response.data);
            }
        });
    }
    const carloginAction = (e) => {
       
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            email:email,
            password:password,
        }
        axios.post('http://localhost/Api/carrentallogin.php', payload)
        .then((r) => {
            setIsSubmitting(false)
            sessionStorage.setItem('tokens', r.data.token)
            navigate("/agenthome");
            setIsLoggedin(true)
        })
        .catch((e) => {
            console.log(e.response,'encapss')
            setIsSubmitting(false)
            if (e.response != undefined) {
                setValidationErrors(e.response);
            }
            if (e.response != undefined) {
                setValidationErrors(e.response);
            }
            alert("Network error occured. Please try again")
        });
    }
     
    return (
        // <Layout>
        <>    
          {!isLoggedin?
            <div className="row justify-content-md-center mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"onClick={()=>setTab(true)}>Customer</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"onClick={()=>setTab(false)}>Car Agencies</button>
    {/* <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> */}
  </div>
</nav>
                            <h5 className="card-title mb-4">Sign In</h5>
                            {tab===true&&tab!==false &&
                            <form class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                            onSubmit={(e)=>{loginAction(e)}}
                            >
                                {Object.keys(validationErrors).length != 0 &&
                                     <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                                }
                                
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">
                                            Email address
                                    </label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="btn btn-primary btn-block">Login</button>
                                    <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
                                </div>
                                {validationErrors != undefined &&
                  <div className="flex flex-col">
                    <small className="text-danger">
                      {validationErrors.message}
                    </small >
                  </div>
                }
                            </form>}
                            {tab===false &&
                            <form 
                            onSubmit={(e)=>{carloginAction(e)}}
                            >
                                {Object.keys(validationErrors).length != 0 &&
                                     <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                                }
                                
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">
                                            Email address
                                    </label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="btn btn-primary btn-block">Login</button>
                                    <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
                                </div>
                                {validationErrors != undefined &&
                  <div className="flex flex-col">
                    <small className="text-danger">
                      {validationErrors.message}
                    </small >
                  </div>
                }
                            </form>}
                        </div>
                    </div>
                </div>
            </div>:
            <>
             <h1>User is logged in</h1>
             <button onClickCapture={logout}>logout user</button>
             </>}
            </>

        // </Layout>
    );
}
   
export default Login;