import React, { useEffect, useState } from 'react'
const useGroceryMenu = (catName) => {
  const [grodata,setGroData]=useState(null);
  const groceryData=async()=>{
    const data=await fetch("https://www.swiggy.com/api/instamart/category-listing?categoryName="+catName+"&storeId=1388384&offset=0&filterName=&taxonomyType=All%20Listing");
    const json=await data.json();
    setGroData(json);
};
useEffect(()=>{
    groceryData();
},[]);
  return grodata;
};
export default useGroceryMenu;