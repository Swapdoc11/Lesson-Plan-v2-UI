import axios from "axios";
import React, { useState } from "react";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const loginUser = async(e) => {
    e.preventDefault()
    console.log(loginData);
    await axios
      .post("/auth/login", loginData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col">
      <h3> Login </h3>
      <form onSubmit={loginUser}>
        <div className="mb-3">
          <label className="form-label"> Email:</label>
          <input
            type="email"
            className="form-control form-control-lg"
            name="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Password:</label>
          <input
            type="password"
            className="form-control form-control-lg"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
