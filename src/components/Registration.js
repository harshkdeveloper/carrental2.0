import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Link
  , useNavigate
} from "react-router-dom"
// import Layout from "../components/Layout"

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [tab, setTab] = useState(true)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
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
  const registerAction = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    let payload = {
      name: name,
      email: email,
      password: password,
      phone: phone
      // password_confirmation:confirmPassword
    }
    axios.post('http://localhost/Api/register.php', payload)
      .then((r) => {
        console.log(r, 'rrrr')
        setMessage(r.data.message)
        setIsSubmitting(false)
        localStorage.setItem('token', r.data.token)
        alert('customer successfully registered')
        navigate("/login");
      })
      .catch((e) => {
        console.log(e.response && e.response.data.message, 'rrrr')
        setErrors(e.response && e.response.data.message)
        setIsSubmitting(false)
   
      });
  }
  const agencyregisterAction = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    let payload = {
      name: agencyname,
      email: agencyemail,
      password: agencypassword,

      // password_confirmation:confirmPassword
    }
    axios.post('http://localhost/Api/carrentalregister.php', payload)
      .then((r) => {
    
        setMessage(r.data.message)
        setIsSubmitting(false)
        localStorage.setItem('token', r.data.token)
        alert('agency successfully registered')
        navigate("/login");
      })
      .catch((e) => {

        setErrors(e.response && e.response.data.message)
        setIsSubmitting(false)
   
      });
  }

  return (

    <div className="row justify-content-md-center mt-5">

      <div className="col-md-4">

        <div className="card">
          <div className="card-body">

            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => setTab(true)}>Customer</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={() => setTab(false)}>Car Agencies</button>
                {/* <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> */}
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              {/* <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...hyeee</div> */}
              {/* <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div> */}
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>
            <h5 className="card-title mb-4 mt-2">Register</h5>
            {tab === true && tab !== false &&
              <form class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" onSubmit={(e) => registerAction(e)}>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label">Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                  />
          

                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label">Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
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
                    htmlFor="phone"
                    className="form-label">Phone no
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
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
                    htmlFor="password"
                    className="form-label">Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    className="btn btn-primary btn-block">Register Now
                  </button>
                  <p
                    className="text-center">Have already an account Login here <Link to="/login">Login</Link>
                  </p>
                  {errors &&
                    <div className="flex flex-col">
                      <small className="text-danger">
                        {errors}
                      </small >
                    </div>
                  }
                </div>


              </form>}
            {tab === false &&
              <form
                // class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" 
                onSubmit={(e) => agencyregisterAction(e)}>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label">Agency Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="agencyname"
                    name="agencyname"
                    value={agencyname}
                    onChange={(e) => { setagencyName(e.target.value) }}
                  />
                  {errors &&
                    <div className="flex flex-col">
                      <small className="text-danger">
                        {errors}
                      </small >
                    </div>
                  }

                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label">Agency Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="agencyemail"
                    name="email"
                    value={agencyemail}
                    onChange={(e) => { setagencyEmail(e.target.value) }}
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
                    htmlFor="password"
                    className="form-label">Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="agencypassword"
                    name="agencypassword"
                    value={agencypassword}
                    onChange={(e) => setAgencypassword(e.target.value)}
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
                    className="btn btn-primary btn-block">Register Now
                  </button>
                  <p
                    className="text-center">Have already an account Login here<Link to="/login">Login</Link>
                  </p>
                  {errors &&
                    <div className="flex flex-col">
                      <small className="text-danger">
                        {errors}
                      </small >
                    </div>
                  }
                </div>


              </form>}
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
}

export default Register;