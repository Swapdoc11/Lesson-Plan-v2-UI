import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [regUserData, setRegUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = async (e) => {
    setRegUserData({ ...regUserData, [e.target.name]: e.target.value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    console.log(regUserData);
    await axios
      .post("/auth/register", regUserData)
      .then((response) => {console.log(response)})
      .catch((err) => {console.log(err)});
  };
  return (
    <div className="col">
      <h3> Register </h3>
      <form onSubmit={registerUser}>
        <div className="mb-3">
          <label className="form-label"> Name:</label>
          <input
            type="text"
            className="form-control "
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Email:</label>
          <input
            type="email"
            className="form-control "
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Password:</label>
          <input
            type="password"
            className="form-control "
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
