import React, { useEffect, useState } from "react";
import { MENU_ID } from "./constants";
const useResMenu=(resID)=>{
    const [resInfo, setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const data=await fetch(MENU_ID+resID);
        const json=await data.json();
        setResInfo(json.data);
    };
    return resInfo;
};
export default useResMenu;