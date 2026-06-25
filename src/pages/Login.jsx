import React, { useState } from "react";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();


  const [data,setData] = useState({

    email:"",
    password:""

  });


  const [loading,setLoading] = useState(false);

  const [error,setError] = useState("");



  const handleLogin = async(e)=>{

    e.preventDefault();

    setError("");


    if(!data.email || !data.password){

      setError("Please fill all fields");
      return;

    }



    try{


      setLoading(true);



      const res = await fetch(
        "http://localhost:5000/api/users/login",
        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },


          body:JSON.stringify(data)

        }

      );



      const result = await res.json();



      console.log(result);



      if(!res.ok){

        setError(
          result.message || "Login failed"
        );

        return;

      }



      // create login session

      localStorage.setItem(
        "token",
        "loggedin"
      );



      localStorage.setItem(
        "user",
        JSON.stringify(result.user)
      );



      alert("Login Successful");



      navigate("/dashboard");



    }

    catch(error){

      console.log(error);

      setError(
        "Server error. Try again later."
      );

    }


    finally{

      setLoading(false);

    }


  };



  return (

    <div className="auth">


      <form onSubmit={handleLogin}>


        <h2>Login</h2>



        {
          error &&

          <p style={{
            color:"red"
          }}>

            {error}

          </p>
        }



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

          {
            loading 
            ? "Logging in..."
            : "Login"
          }

        </button>




        <p style={{
          marginTop:"10px"
        }}>

          Don't have an account?

          <Link to="/register">

          {" "}Create Account

          </Link>

        </p>



        <button

          type="button"

          className="back-btn"

          onClick={()=>navigate("/")}

        >

          ← Back to Home

        </button>



      </form>


    </div>

  );

};


export default Login;