import React from "react";
// import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utilities/constants";

const ResCard=(props)=>{
    const {resData}=props;
    // console.log(resData);
    const {name,cloudinaryImageId,cuisines,avgRating,sla,costForTwo,locality}=resData?.info;
    return (
        // { <h4 className="align-text-bottom bg-yellow-400 w-1/2 ml-10 absolute">{aggregatedDiscountInfoV3.header}</h4> */}
        <div className="bg-gray-200 p-4 w-64 rounded-xl hover:bg-gray-400 m-5" data-testid="resCard">
            <img className="rounded-xl w-full h-36" src={CDN_URL+cloudinaryImageId}/>
            {/* <h4 className="align-text-bottom bg-yellow-400 w-1/2 ml-10 absolute">{aggregatedDiscountInfoV3.header}</h4> */}
            <h3 className="font-bold text-lg py-3 text-center">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
            <h4 className="align-baseline">{locality}</h4>
            
        </div>
    );
};

export const withPromotedLabel=(ResCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <ResCard {...props}/>
            </div>
        );
    };
};
export default ResCard;