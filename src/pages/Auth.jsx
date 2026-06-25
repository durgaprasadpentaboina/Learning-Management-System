import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  // login state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // register state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();

    if (loginData.email && loginData.password) {
      localStorage.setItem("token", "demo-token");
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Fill all fields");
    }
  };

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();

    if (registerData.name && registerData.email && registerData.password) {
      alert("Account Created Successfully");
      setIsLogin(true); // switch to login after register
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* HEADER */}
        <h2>{isLogin ? "Login to LMS" : "Create Account"}</h2>

        {/* LOGIN FORM */}
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <button type="submit">Login</button>
          </form>
        ) : (
          /* REGISTER FORM */
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />

            <button type="submit">Create Account</button>
          </form>
        )}

        {/* TOGGLE BUTTON */}
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>

        <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create Account" : "Back to Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;