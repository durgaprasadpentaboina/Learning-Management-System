import React from "react";
import "../styles/dashboard.css";


const Dashboard =()=>{


const user = JSON.parse(
localStorage.getItem("user")
);



return (

<div className="dashboard">


<h1>
Welcome {user?.name}
</h1>


<p>
Student Dashboard
</p>


<div className="cards">


<div>

<h3>
My Courses
</h3>

<p>
View your enrolled courses
</p>

</div>



<div>

<h3>
Profile
</h3>

<p>
Manage your profile
</p>

</div>



<div>

<h3>
Progress
</h3>

<p>
Track learning progress
</p>

</div>



</div>


</div>

);


};


export default Dashboard;