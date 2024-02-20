import React from "react";
import { CDN_URL, NO_IMG } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";
const ItemList=({Items})=>{
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    };
    return (
        <div>
        {
            Items.map((item)=>(
                <div key={item.card.info.id} 
                data-testid="foodItems"
                className="border-b-2 border-solid border-black m-2 shadow-xl py-2 text-left flex justify-between bg-gray-300 px-2">
                <div className="w-9/12">    
                    <div className="py-2 font-bold">
                    <span>{item.card.info.name}</span>
                    <span> ----Price: Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</span><hr/>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
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
        </div>
    );
};
export default ItemList;