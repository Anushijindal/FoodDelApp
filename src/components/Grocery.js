import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GroceryCard from "./GroceryCard";
import { useDispatch } from "react-redux";
const Grocery=()=>{
    const dispatch=useDispatch();
    const [groceryInfo,setGroceryInfo]=useState(null);
    const groceryData=async()=>{
        const data=await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP")
        const json=await data.json();
        console.log(json);
        const grocery=json?.data?.widgets[1];
        // console.log(grocery);
        setGroceryInfo(grocery);
    };
    useEffect(()=>{
        groceryData();
    },[]);
    return (

        <div className="">
            <h1 className="text-center font-bold my-4 text-white p-2 bg-gray-500">Welcome to our Grocery Store</h1>
           <div className="flex flex-wrap w-1/2 mx-auto mt-12" >
            {
                groceryInfo?.data?.map((info,index)=>(
                     <Link to={"/grocery/:catName"} key={groceryInfo?.data[index].nodeId}> 
                     <GroceryCard List={groceryInfo?.data[index]}/>
                     </Link>
                ))
            }
            </div>
        </div>
    );
};
export default Grocery;