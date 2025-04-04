import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        // perform login logic here
        console.log("Email: ", email, "Password: ", password);
        try {
            let { data } = await userServices.loginUser(email, password);
            console.log(data); 
            alert(data.message);
            navigate("/dashboard");
        } catch (error) {
            console.log("Login Error", error.message);
            alert(error.response.data.message);
            
        }
    }


  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card w-50 p-4">
        <div className="card-header text-center">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </form><br />
          <p>Don't have an accout? <Link to={"/register"}>Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
