import React, { useState } from "react";
import ItemList from "./ItemList";
const ResCategory=({Data, itemShow, setShowIndex})=>{
    // console.log(Data);
    const handleClick=()=>{
       setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-xl p-4 rounded-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{Data.title} ({Data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                {itemShow && <ItemList Items={Data.itemCards}/>}
            </div>
        </div>
    );
};
export default ResCategory;