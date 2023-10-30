
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Link
  , useNavigate
} from "react-router-dom"
const Addcardetails = () => {

  const navigate = useNavigate();
  const [model, setModel] = useState("")
  const [tab, setTab] = useState(true)
  const [seats, setSeats] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")
  const [rentsperday, setRentsperday] = useState("")
  const [agencyemail, setagencyEmail] = useState("")
  const [agencyname, setagencyName] = useState("")
  const [agencypassword, setAgencypassword] = useState("")
  const [errors, setErrors] = useState()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {

  }, [tab])
  const carAction = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    let payload = {
      model: model,
      number: number,
      seats: seats,
      rentsperday: rentsperday
      // password_confirmation:confirmPassword
    }
    axios.post('http://localhost/Api/createcar.php', payload)
      .then((r) => {

        setMessage(r.data.message)
        setIsSubmitting(false)
        // sessionStorage.setItem('tokens', r.data.token)
        navigate("/agenthome");
      })
      .catch((e) => {
      
        setErrors(e.response && e.response.data.message)
        setIsSubmitting(false)
        // if (e.response.data.errors != undefined) {
        //     setValidationErrors(e.response.data.errors);
        // }
      });
  }

  return (
    // <Layout>
    <div className="row justify-content-md-center mt-5">

      <div className="col-md-4">

        <div className="card">
          <div className="card-body">



            <h5 className="card-title mb-4 mt-2">Add car</h5>

            <form onSubmit={(e) => carAction(e)}>
              <div className="mb-3">
                <label
                  htmlFor="model"
                  className="form-label">Vehicle Model
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={model}
                  onChange={(e) => { setModel(e.target.value) }}
                />


              </div>
              <div className="mb-3">
                <label
                  htmlFor="number"
                  className="form-label">Vehicle Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  name="number"
                  value={number}
                  onChange={(e) => { setNumber(e.target.value) }}
                />
                {validationErrors.email != undefined &&
                  <div className="flex flex-col">
                    <small className="text-danger">
                      {validationErrors.email[0]}
                    </small >
                  </div>
                }

              </div>
              <div className="mb-3">
                <label
                  htmlFor="capacity"
                  className="form-label">Seating Capacty
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="seats"
                  name="seats"
                  value={seats}
                  onChange={(e) => { setSeats(e.target.value) }}
                />
                {validationErrors.phone != undefined &&
                  <div className="flex flex-col">
                    <small className="text-danger">
                      {validationErrors.phone[0]}
                    </small >
                  </div>
                }

              </div>
              <div className="mb-3">
                <label
                  htmlFor="rents"
                  className="form-label">Rents per day
                </label>
                <input
                  type="rents"
                  className="form-control"
                  id="rents"
                  name="rents"
                  value={rentsperday}
                  onChange={(e) => setRentsperday(e.target.value)}
                />
                {validationErrors.password != undefined &&
                  <div className="flex flex-col">
                    <small className="text-danger">
                      {validationErrors.password[0]}
                    </small >
                  </div>
                }
              </div>

              <div className="d-grid gap-2">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-primary btn-block">Add Car
                </button>

                {errors &&
                  <div className="flex flex-col">
                    <small className="text-danger">
                      {errors}
                    </small >
                  </div>
                }
              </div>


            </form>

          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );

}

export default Addcardetails