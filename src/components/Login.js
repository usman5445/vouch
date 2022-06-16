import axios from "axios";
import React, { useRef, useState } from "react";
import { Alert } from "./Alert";

export const Login = () => {
  const [emailRef, passwordRef] = [useRef(), useRef()];
  const [alertData, setAlertData] = useState({ variant: "success", text: "" });
  function handelLogin() {
    setAlertData({ variant: "success", text: "" });
    axios
      .post("https://reqres.in/api/login", {
        email: emailRef.current.value,

        password: passwordRef.current.value,
      })
      .then((resp) => {
        console.log(resp);
        setAlertData({ variant: "success", text: resp.data.token });
      })
      .catch((err) => {
        console.log(err);
        err.response.data
          ? setAlertData({ variant: "danger", text: err.response.data.error })
          : setAlertData({ variant: "danger", text: err.message });
      });
  }
  return (
    <div className=" d-flex flex-column col-sm-12 col-xxl-5 col-lg-5 col-12 p-3 align-items-center ">
      <h2 className="formTitle">Welcome Back</h2>
      <p className="formSubTitle">Sub-title text goes here</p>
      <form className="">
        <div className="mb-3">
          <input
            placeholder="Enter email"
            type="email"
            id="formBasicEmail"
            className="form-control"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Password"
            type="password"
            id="formBasicPassword"
            className="form-control"
            ref={passwordRef}
          />
        </div>
        <button
          onClick={handelLogin}
          type="button"
          className="formSubmitButton btn btn-primary"
        >
          Login
        </button>
        <div className="mb-3 d-md-flex  overflowhidden">
          <div className="rpc form-check jusify-self-start">
            <input
              type="checkbox"
              id="formBasicCheckbox"
              className="form-check-input"
            />
            <label
              title=""
              htmlFor="formBasicCheckbox"
              className="form-check-label"
            >
              Remember Password
            </label>
          </div>
          <a className=" justify-self-end">Forgot Password?</a>
        </div>
      </form>
      <Alert alertData={alertData} />
    </div>
  );
};
