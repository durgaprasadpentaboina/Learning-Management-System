import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleRegister = async (e) => {
    e.preventDefault();


    if (!data.name || !data.email || !data.password) {
      alert("Please fill all fields");
      return;
    }


    try {

      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );


      const result = await response.json();


      if (response.ok) {

        alert("Account Created Successfully");

        navigate("/login");

      } else {

        alert(result.message);

      }


    } catch (error) {

      console.log(error);

      alert("Server error");

    }

  };


  return (

    <div className="auth">

      <form onSubmit={handleRegister}>

        <h2>Register</h2>


        <input

          type="text"

          placeholder="Full Name"

          value={data.name}

          onChange={(e)=>
            setData({
              ...data,
              name:e.target.value
            })
          }

        />



        <input

          type="email"

          placeholder="Email"

          value={data.email}

          onChange={(e)=>
            setData({
              ...data,
              email:e.target.value
            })
          }

        />



        <input

          type="password"

          placeholder="Password"

          value={data.password}

          onChange={(e)=>
            setData({
              ...data,
              password:e.target.value
            })
          }

        />



        <button type="submit">
          Register
        </button>



        <p style={{marginTop:"10px"}}>

          Already have an account?

          <Link to="/login">
            {" "}Login
          </Link>

        </p>



        <button

          type="button"

          className="back-btn"

          onClick={()=>navigate("/")}

          style={{
            marginBottom:"15px",
            cursor:"pointer"
          }}

        >

          ← Back to Home

        </button>


      </form>


    </div>

  );

};


export default Register;