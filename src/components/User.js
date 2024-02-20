import React, { useState } from "react";
const User=(props)=>{
    const [count, setCount]=useState(0);
    const [count2]=useState(1);
    return (
        <div className="user-name">
        <button onClick={()=>{
            const val=count+1;
            setCount(val);
        }}>click</button>
        <h1>count:{count}</h1>
        <h1>count2:{count2}</h1>
        <h2>Name:{props.name}</h2>
        <h3>Locaton:{props.location}</h3>
        <h3>Contact:{props.contact}</h3>
        </div>
    );
};
export default User;