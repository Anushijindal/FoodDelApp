import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utilities/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu=()=>{
const [showIndex, setShowIndex]=useState(null);
const {resID}=useParams();
const resInfo=useResMenu(resID);
console.log(resInfo);
if(resInfo===null){
    return <Shimmer/>
}
const { name, cuisines, costForTwoMessage, avgRating,sla,totalRatingsString,feeDetails,aggregatedDiscountInfo} = resInfo?.cards[2]?.card?.card?.info;
// const {itemCards}=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
// console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
const categories=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((res)=>res.card?.card?.["@type"]===
                  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// {console.log(categories);}
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl bg-gray-500 mx-4 p-3 text-white">{name}</h1>
            <div className="flex flex-row justify-center py-3">
                <div className="items-center"> 
                <h6 className="text-sm">{cuisines.join(", ")}</h6>
                <h6 className="text-sm">Distance: {sla.lastMileTravelString}</h6>
                </div>
                <div className="items-center border-2 border-black px-3 mx-20 rounded-lg">
                    <h6 className="font-bold text-green-600 text-sm border-b-2 border-black py-1">⭐ {avgRating}</h6>
                    <h6 className="text-sm py-1">{totalRatingsString}</h6>
                </div>
            </div>
            <h3>{feeDetails.message}</h3>
            <h5 className="font-bold text-sm">............................................................................................</h5>
            <div className="flex flex-row justify-center py-3">
            <h3 className="font-bold text-base">⏳ {sla.slaString}</h3>
            <h3 className="font-bold text-base mx-10">💸 {costForTwoMessage}</h3>
            </div>
           <div className="flex flex-row justify-center py-3">
            <h3 className="border-2 border-black p-3 mx-3 rounded-lg underline">{aggregatedDiscountInfo.header}</h3>
            {
                aggregatedDiscountInfo.descriptionList && 
                aggregatedDiscountInfo.descriptionList.map((item,index)=>
                <h3 key={index} className="border-2 border-black p-3 mx-3 rounded-lg underline">{aggregatedDiscountInfo.descriptionList[index].meta}</h3>)

            }
           </div>
           <h5 className="font-bold text-sm">....................................................................................................................................</h5>
            {/* <h3 className="font-bold text-lg">Discount: {aggregatedDiscountInfoV3.header} and {aggregatedDiscountInfoV3.subHeader}</h3> */}
            <h3 className="font-bold m-2 text-xl text-green-400">Menu</h3>
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