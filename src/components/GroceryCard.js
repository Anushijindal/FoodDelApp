import React from 'react'
import { CDN_URL } from '../utilities/constants';
import { useDispatch } from 'react-redux';
import { addListInfoData } from '../utilities/dataSlice';

const GroceryCard = ({List}) => {
    const dispatch=useDispatch();
    const handleGrocery=()=>{
        dispatch(addListInfoData(List.displayName));
    };
    // const groceryData=useGroceryMenu(catName);
        // console.log(groceryData);
  return (
    <div className="m-4" onClick={handleGrocery}>
    <img className="w-36" src={CDN_URL+List.imageId}/>
    <h1 className="text-center">{List.displayName}</h1>
{    
}
    </div>
  )
}

export default GroceryCard;