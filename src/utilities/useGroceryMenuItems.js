// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addGroceryListItems } from './dataSlice';

// const useGroceryMenuItems = () => {
//     const [grodata,setGroData]=useState(null);
//     const [id,setid]=useState(null);
//     const [menuitem,setMenu]=useState(null);
//     // const filter=useSelector()
//     const dispatch=useDispatch();
//     const index=useSelector(store=>store?.data?.index);
//     // const idData=useSelector(store=>store?.data?.itemFilterId);
//     // const menuData=useSelector(store=>store?.data?.itemMenuName);
//     const menu=useSelector(store=>store?.data?.groceryMenuList);
//     // if(index!=null){
//     //     const idData=menu[index]?.id;
//     //     const menuData=menu[index].name;
//     //     dispatch(addItemFilterId(idData));
//     //     dispatch(addItemMenuName(menuData));
//     //     }
//     // if(index===null){return}
//     // console.log(idData[index]);
//     // const idData=id[index]?.id;
//     const idData=useSelector(store=>store?.data?.itemFilterId);
//     setid(idData);
//     const menuData=useSelector(store=>store?.data?.itemMenuName);
//     setMenu(menuData);
//     const groceryData=async()=>{
//     const Mdata1=await fetch("https://www.swiggy.com/api/instamart/category-listing/filter?filterId=639c4f0f9b930b09fbb24bdb&storeId=1388384&offset=0&type=All%20Listing&pageNo=0&limit=20&filterName=Face%20Cream");
//     const Mdata=await fetch("https://www.swiggy.com/api/instamart/category-listing/filter?filterId="+id+"&storeId=1388384&offset=0&type=All%20Listing&pageNo=0&limit=20&filterName="+menuitem);
//       const json=await Mdata.json();
//       console.log(json);
//       setGroData(json);
//       dispatch(addGroceryListItems(json));
//   };
// //   console.log(grodata);
//   useEffect(()=>{
//       groceryData();
//   },[]);
//     return grodata;
// };
// export default useGroceryMenuItems;