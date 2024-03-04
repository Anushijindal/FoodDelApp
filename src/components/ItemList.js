import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL, NO_IMG } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";
const ItemList=({Items})=>{
    // console.log(Items);
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    };
    // const handleItemData=(item)=>{
    //     dispatch(addListInfoData(item));
    // }
    return (
        <div>
        {
            Items.map((item)=>(
                
                <div
                key={item.card.info.id} 
                data-testid="foodItems"
                className="border-b-2 border-solid border-black m-2 shadow-xl py-2 text-left flex justify-between bg-gray-100 px-2">
                <div className="w-9/12">    
                    <div className="py-2 font-bold">
                    <span>{item.card.info.name}</span>
                    <span> ----Price: Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    {
                    item.card.info.itemAttribute.vegClassifier==="VEG" && 
                    <img className="w-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyUQTLx0mX-oapwve3IMVnRZ89ppcxdEY1g7B1sh9KYe9SFwY-CCUaVVr1BODJWUcEYA&usqp=CAU"/>
                    }
                    {
                    item.card.info.itemAttribute.vegClassifier==="NONVEG" &&
                    <img className="w-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlya_D4tMO9KiFjqyfa4rN1GkVrH6sG8gGJerV0Jevp3bypaz04dbPAIPcBl7EUewWVAg&usqp=CAU"/>
                    }
                    <hr/>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    <h2>⭐ {item.card.info.ratings.aggregatedRating.rating}</h2>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="p-1 mx-11 bg-black text-white shadow-lg m-auto rounded-xl" 
                    onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
                <img src={item.card.info.imageId?CDN_URL+item.card.info.imageId:NO_IMG} className="w-full"/>
                
                </div>
                </div>
            ))
            
        }
        {/*  */}
        </div>
    );
};
export default ItemList;