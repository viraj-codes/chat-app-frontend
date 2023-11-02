import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Register(props) {
  const navigateToLogin = () => {
    props.history.push("/");
  };

  const [registerUser, setregisterUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const userDetails = (event) => {
    setregisterUser({
      ...registerUser,
      [event.target.name]: event.target.value,
    });
  };

  const sendDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/users/register",
        registerUser
      );
      console.log("response",response.data);
      if (!response.data.error) {
        props.history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
    setregisterUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container-fluid bg" style={{marginTop:'5%'}}>
      <div className="row">
        <div className="col-lg-4 col-md-2 col-sm-12"></div>
        <div className="col-lg-4 col-md-8 col-sm-12" style={{padding:'40px',backgroundColor:'floralwhite',}}>
        <h1 style={{textAlign:'center',fontSize:'60Px'}}>Register</h1>
          <form className="form-container">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={registerUser.firstName}
                onChange={userDetails}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={registerUser.lastName}
                onChange={userDetails}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={registerUser.email}
                onChange={userDetails}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={registerUser.password}
                onChange={userDetails}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="button"
              onClick={sendDetails}
              className="btn btn-primary btn-block"
              style={{ width: "100%" }}
            >
              Register
            </button>

            <div style={{ width: "100%", marginTop: "10px", display: "flex" }}>
              Already have an account,&nbsp;
              <a onClick={navigateToLogin} href="#">
                <h6> Login </h6>
              </a>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-12"></div>
      </div>
    </div>
  );
}

export default withRouter(Register);
