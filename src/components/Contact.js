import React from "react";
const Contact=()=>{
    return(
        <div>
           <h1 className="p-4 m-4 font-bold text-2xl">Contact Us</h1>
           <form className="m-4 p-4 border-2 border-solid border-black">
            <input type="text" placeholder="Name" className="m-2 p-2 border-black border-2 w-full"/><br/>
            <input type="text" placeholder="Message" className="m-2 p-2 border-black border-2 w-full"/><br/>
            {/* <input type="Submit" placeholder="submit" className="p-1 m-2 bg-gray-600 rounded-xl text-white cursor-pointer"/> */}
            <button className="p-1 m-2 bg-green-600 rounded-xl text-white cursor-pointer">Submit</button>
           </form>
        </div>
    )
}
export default Contact;