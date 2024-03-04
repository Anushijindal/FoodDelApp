import React from "react";
import ResCard, {withPromotedLabel} from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
const Body=()=>{
    const [listOfRes,setlistOfRes]=useState([]);
    const [nameFilter, setnameFilter]=useState([]);
    const [searchText, setsearchText]=useState("");
    // const ResCardPromoted=withPromotedLabel(ResCard);
    console.log("Body Rendered");
    const fetchData=async () => {
        const data1=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json1=await data1.json();
        setlistOfRes(json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setnameFilter(json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    useEffect(()=>{
        fetchData();
    }, []);
    // console.log(listOfRes);
    
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1>Looks like you are offline please check your internet connection and come back;</h1>
    }
    if(listOfRes.length===0){
        return <Shimmer />;
    }
    // conditional rendering
    return (
        <div className="body">
            <div className="filter flex">
            <div className="search p-4 m-4">
                <input type="text" className="search-box p-1 bg-gray-500 text-white border border-solid border-black" data-testid="searchInput" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}
                />
                <button className="search-btn m-2 py-1 px-3 bg-green-100 border border-solid border-black rounded-lg" onClick={()=>{
                    const nameFilter=listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setnameFilter(nameFilter);
                }}>search</button>
            </div>
            <div className="m-4 p-4 flex items-center">
            <button className="filter-btn m-2 p-1 bg-gray-200 rounded-md border-2 border-solid border-black" onClick={()=>{
                const fileredList=listOfRes.filter((res)=>res.info.avgRating>=4.5);
                setnameFilter(fileredList);
            }
            }>Top Rated Restaurants</button>
            </div>
            </div>
            <div className="flex flex-wrap justify-between">
                {nameFilter.map((restaurant)=>
                (
                    <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                    {/* {restaurant.info.promoted ? (<ResCardPromoted resData={restaurant}/>):(<ResCard  resData={restaurant}/>)} */}
                    <ResCard  resData={restaurant}/></Link>))}
            </div>
        </div>
    );
};
export default Body;