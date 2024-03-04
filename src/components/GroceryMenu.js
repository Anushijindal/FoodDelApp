import React, { useEffect, useState } from 'react'
import useGroceryMenu from '../utilities/useGroceryMenu';
import { useDispatch, useSelector } from 'react-redux';
import {addGroceryMenuList, addIndex, changeShowItems } from '../utilities/dataSlice';
import { CDN_URL } from '../utilities/constants';
import GroceryMenuItems from './GroceryMenuItems';

const GroceryMenu = () => {
// const [groceryItems,setGroceryItems]=useState(false);
const dispatch=useDispatch();
const catName=useSelector(store=>store?.data?.listInfoData);
const groceryData=useGroceryMenu(catName);
console.log(groceryData);
console.log(groceryData?.data?.filters);
console.log(groceryData?.data?.widgets[1]?.data);
dispatch(addGroceryMenuList(groceryData?.data?.filters));
const menu=useSelector(store=>store?.data?.groceryMenuList);
const handleMenuItems=(index)=>{
    // setGroceryItems(true);
dispatch(changeShowItems());
dispatch(addIndex(index));
};
const show=useSelector(store=>store?.data?.showItems);
  return (
    <div>
    <h1 className='font-bold text-center bg-gray-500 text-white m-4 p-2'>{catName}</h1>
    <div className='flex flex-row'>
        <div className='flex flex-col m-4 w-36' >
        {
            menu?.map((data,index)=>(
                <div onClick={()=>handleMenuItems(index)} className='m-2 border-2 border-black rounded-lg' key={menu[index].id}>
                
                    <img className='w-20' src={CDN_URL+menu[index].imageId}/>
                    <h1 className='text-center'>{menu[index].name}</h1>
                </div>
            )
            )
        }
        </div>
        {
            show && 
            <GroceryMenuItems List={groceryData}/>   
        }
        </div>
    </div>
  )
}

export default GroceryMenu;