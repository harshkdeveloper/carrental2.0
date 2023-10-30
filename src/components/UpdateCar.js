import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from "react-router-dom"
import Navbar from './Navbar';





const UpdateCar = () => {
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [model, setModel] = useState("")
    const [number, setNumber] = useState("")
    const [seats, setSeats] = useState("")
    const [rentsperday, setRentsperday] = useState("")
    const [ids, setIds] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tab, setTab] = useState(true)
    const [update, setUpdate] = useState()
    const [records, Setrecords] = useState()
    const location = useLocation()
    const booknow = (e) => {


        e.preventDefault();
        alert("Wohoo you have successfully booked your car")
        navigate('/agenthome')

    }
    const id = window.location.pathname.split("/")[2]
    useEffect(() => {
        axios.get(` http://localhost/Api/read.php?id=${id}`).then((response) => {
            Setrecords(response && response.data)
            console.log(response && response.data, 'result')
            // model=records.records!==undefined&&records.records.id
            setIds(records && records.records !== undefined && records.records.id)
            setModel(records && records.records !== undefined && records.records.model)
            setNumber(records && records.records !== undefined && records.records.number)
            setSeats(records && records.records !== undefined && records.records.seats)
            setRentsperday(records && records.records !== undefined && records.records.rentsperday)
            setUpdate(false)

        })
    }, [update])
    console.log(model, 'href')
    console.log(window.location.pathname.split("/")[2], 'hrefss')
    console.log(111)
        ;

    console.log(records && records.records !== undefined && records.records.id, 'item')
    const updateForm = (e) => {
        setIsSubmitting(true)
        e.preventDefault();
        let payload = {
            id: ids,
            model: model,
            number: number,
            seats: seats,
            rentsperday: rentsperday,
        }
        axios.put('http://localhost/Api/rentalupdate.php', payload)
            .then((r) => {

                alert('car successfully updated')
                navigate("/agenthome");
            })

    }
    console.log(id, 'ooooooo')
    return (
        <div className="row justify-content-md-center mt-5">
            <div className="col-md-4">
                {/* { records.records!==undefined&&records.records.map((item)=>( */}
                <div className="card">
                    <img className="card-img-top" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="Card image cap" />
                    <div className="card-body">

                        <h5 className="card-title">Vehicle Model : <span style={{ fontWeight: '200' }}>Maruti Dezire</span></h5>

                    </div>
                    <form onSubmit={(e) => { updateForm(e) }}>
                        <ul className="list-group list-group-flush">
                            <input type='hidden' value={ids} onChange={(e) => setIds(e.target.value)} />
                            <li className="list-group-item">Vehicle number : <span style={{ fontWeight: '200' }}></span></li>
                            <li className="list-group-item" ><input type='text' value={model} onChange={(e) => { setModel(e.target.value) }} /></li>
                            <li className="list-group-item">Seating Capacity : <span style={{ fontWeight: '200' }}></span></li>
                            <li className="list-group-item" ><input type='text' value={seats} onChange={(e) => { setSeats(e.target.value) }} /></li>
                            <li className="list-group-item">Rent per day : <span style={{ fontWeight: '200' }}></span></li>
                            <li className="list-group-item" ><input type='text' value={rentsperday} onChange={(e) => { setRentsperday(e.target.value) }} /></li>
                        </ul>
                        <div className="d-grid gap-2">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="btn btn-primary btn-block">Update Now</button>

                        </div>
                    </form>




                </div>

            </div>
        </div>

    )
}

export default UpdateCar