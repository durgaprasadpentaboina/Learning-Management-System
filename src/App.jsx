import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import EnrolledCourses from "./pages/EnrolledCourses";
import CourseDetails from "./pages/CourseDetails";


import ProtectedRoute from "./components/ProtectedRoute";



function Layout(){


const location = useLocation();



const hideLayout = 
location.pathname === "/dashboard" ||
location.pathname === "/enrolled";



return (

<>


{
!hideLayout && <Navbar />
}



<Routes>


<Route path="/" element={<Home />} />


<Route path="/courses" element={<Courses />} />


<Route path="/login" element={<Login />} />


<Route path="/register" element={<Register />} />



<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard />

</ProtectedRoute>

}

/>



<Route

path="/enrolled"

element={

<ProtectedRoute>

<EnrolledCourses />

</ProtectedRoute>

}

/>



<Route

path="/course/:id"

element={

<ProtectedRoute>

<CourseDetails />

</ProtectedRoute>

}

/>



</Routes>



{
!hideLayout && <Footer />
}



</>


)

}





function App(){


return(

<BrowserRouter>

<Layout />

</BrowserRouter>

)

}



export default App;