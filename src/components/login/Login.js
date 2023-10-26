import React, { useState } from "react";
import "./Login.css";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const navigateToSignup = () => {
    props.history.push("/register");
  };

  const [userlogin, setuserlogin] = useState({
    email: "",
    password: "",
  });

  const loginDetails = (event) => {
    setuserlogin({
      ...userlogin,
      [event.target.name]: event.target.value,
    });
  };

  const updateLogin = async () => {
    console.log('Hiii', userlogin);
    try {
      const response = await axios.post(
        "http://localhost:3001/users/login",
        userlogin
      );
      console.log(response);
      console.log( "responseData",response.data);
      const token = response.data.data.token;
      
      if (!response.data.error) {
        localStorage.setItem("loginToken",token)
        props.settoken(token)
        props.history.push("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid bg">
      <div className="row">
        <div className="col-lg-4 col-md-2 col-sm-12"></div>
        <div className="col-lg-4 col-md-8 col-sm-12">
          <form className="form-container">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userlogin.email}
                onChange={loginDetails}
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
                value={userlogin.password}
                onChange={loginDetails}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button
              type="button"
              onClick={updateLogin}
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Login
            </button>

            <div style={{ width: "100%", marginTop: "10px", display: "flex" }}>
              Doesn't have an account,&nbsp;
              <a onClick={navigateToSignup} href="#">
                <h6> Register Now </h6>
              </a>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-12"></div>
      </div>
    </div>
  );
}

export default withRouter(Login);
