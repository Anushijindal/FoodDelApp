import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utilities/useResMenu";
import ResCategory from "./ResCategory";
const ResMenu=()=>{
const [showIndex, setShowIndex]=useState(null);
const {resID}=useParams();
const resInfo=useResMenu(resID);
if(resInfo===null){
    return <Shimmer/>
}
const { name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards}=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
// console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
const categories=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((res)=>res.card?.card?.["@type"]===
                  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// {console.log(categories);}
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl bg-gray-500 mx-4 p-3">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
            <h3 className="font-bold text-lg">{avgRating}</h3>
            <h3>Menu</h3>
            {
                categories.map((category,index)=>(
                    <ResCategory 
                        key={category.card.card.title} 
                        Data={category.card.card}
                        itemShow={index === showIndex ? true : false}
                        setShowIndex={()=>setShowIndex(index)}
                    />
                ))
            }
        </div>
    );
};
export default ResMenu;