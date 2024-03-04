import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGroceryListItems } from '../utilities/dataSlice';
import { CDN_URL } from '../utilities/constants';

const GroceryMenuItems = ({List}) => {
    console.log(List);
    const dispatch=useDispatch();
    const index=useSelector(store=>store.data.index);
    console.log(index);
    const id=[List?.data?.filters[index]?.id];
    const name=[List?.data?.filters[index]?.name];
    console.log(id + " "+ name);
    const gro=async()=>{
        const data1=await fetch("https://www.swiggy.com/api/instamart/category-listing/filter?filterId="+id+"&storeId=1388384&offset=0&type=All%20Listing&pageNo=0&limit=20&filterName="+name);
        const json=await data1.json();
        // console.log(json);
        dispatch(addGroceryListItems(json?.data?.widgets[1]?.data));
    }
    useEffect(()=>{
        gro();
    },[]);
    const menuItems=useSelector(store=>store?.data?.groceryListItems);
  return (
    <div className='grid grid-cols-2 ml-64 mr-0 w-1/2'>
            {
                menuItems?.map((data,index)=>(
                    <div key={menuItems[index]?.variations[0]?.id} className=' p-5 m-2 border-2 border-gray-500 rounded-lg'>
                        <img className='w-32 text-center border-2 border-black rounded-lg' src={CDN_URL+menuItems[index]?.variations[0]?.images[0]}/>
                        <h1 className='text-center pt-2'>{menuItems[index]?.display_name}</h1>
                        <h3>₹{menuItems[index]?.variations[0]?.price?.mrp}</h3>
                        <h3>{menuItems[index]?.variations[0]?.price?.offer_applied.listing_description}</h3>
                    </div>
                ))
            }
        </div>
  )
}
export default GroceryMenuItems;