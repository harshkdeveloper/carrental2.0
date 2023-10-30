import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import Navbar from './Navbar';
// import Layout from "../components/Layout"




const Buycars = () => {
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tab, setTab] = useState(true)
    const a = localStorage.getItem('dataKey')
    const initialValue = JSON.parse(a);
    const booknow = (e) => {


        e.preventDefault();
        localStorage.setItem('datas', initialValue && initialValue.name)
        alert("Wohoo you have successfully booked your car")

        navigate('/')

    }

    return (
        <div className="row justify-content-md-center mt-5">
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="Card image cap" />
                    <div className="card-body">

                        <h5 className="card-title">Vehicle Model : <span style={{ fontWeight: '200' }}>Maruti Dezire</span></h5>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Vehicle number : <span style={{ fontWeight: '200' }}>Rj-14 0001</span></li>
                        <li className="list-group-item">Seating Capacity : <span style={{ fontWeight: '200' }}>4</span></li>
                        <li className="list-group-item">Rent per day : <span style={{ fontWeight: '200' }}>Rs-1500</span></li>
                    </ul>



                    <form
                        onSubmit={(e) => { booknow(e) }}
                    >
                        {Object.keys(validationErrors).length != 0 &&
                            <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                        }

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item">No of days      <select id="exampleFormControlSelect1" required>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select> *<span style={{ fontWeight: '300' }}> max 7 days</span>
                            </li>
                            <li className="list-group-item">Start Date       <input
                                type="date"



                                required />
                            </li>

                        </ul>

                        <div className="d-grid gap-2">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="btn btn-primary btn-block">Book Now</button>

                        </div>
                        {validationErrors != undefined &&
                            <div className="flex flex-col">
                                <small className="text-danger">
                                    {validationErrors.message}
                                </small >
                            </div>
                        }
                    </form>


                </div>
            </div>
        </div>

    )
}

export default Buycars