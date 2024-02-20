import React from "react";
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIbdxSr9dr__Htpv55kblkeFiOvrznNp6Yw&usqp=CAU"/>
            ERROR</h1>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    );
};
export default Error;