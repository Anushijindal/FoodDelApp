import React from "react";
import UserClass from "./UserClass";
import User from "./User";
// import Header from "./Header";
const About=()=>{
    
    return (
        <div className="m-5 text-center">
            <h1 className=" text-lg font-bold">About Us</h1>
            {/* <h3>Learning from Namaste react from Akshay Saini</h3>
            <h4>Creating a food app like swiggy or Zomato🙂</h4> */}
            <User name={"Anushi"} location={"Haryana"} contact={"jindala982@gmail.com"}/>
            {/* <UserClass name={"Anushi"} location={"Haryana"} contact={"jindala982@gmail.com"}/> */}
        </div>
    );
};
export default About