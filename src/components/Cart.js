import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    };
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                
                {
                    cartItems.length===0 &&
                        <img className="ml-52 mt-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRE3rp0Zb7azSnT1_wayocfCE5LaDhuYFkpQ&usqp=CAU"/>
                }
                {
                    cartItems.length!=0 &&
                    <button className="p-2 m-2 bg-black text-white rounded-2xl" 
                onClick={handleClearCart}>Clear Cart</button>
                }
                <ItemList Items={cartItems}/>
            </div>
        </div>
    );
};
export default Cart;