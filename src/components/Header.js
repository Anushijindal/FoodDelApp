import React, { useContext, useState } from "react";
// import ReactDOM from "react-dom/client";
import {LOGO_URL} from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const [btnName, setbtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="">
            <img className="w-56" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4"> <Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to={"/cart"}>Cart-({cartItems.length} items)</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">Status:{onlineStatus ? "🟢":"🔴"}</li>
                <button className="px-4 rounded-lg bg-gray-200" onClick={()=>{
                   setbtnName("Logout");
                }}>{btnName}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>

            </ul>
        </div>
    </div>
    );
};
export default Header;