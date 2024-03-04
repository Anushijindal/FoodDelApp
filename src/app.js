import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ResMenu from "./components/ResMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utilities/UserContext";
import appStore from "./utilities/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import GroceryMenu from "./components/GroceryMenu";
// import Grocery from "./components/Grocery";
const Grocery=lazy(()=> import("./components/Grocery"));
const AppLayout=()=>{
    const [userName,setuserName]=useState();
    useEffect(()=>{

        const data={
            name:"Anushi Jindal"
        };
        setuserName(data.name);
    },[]);
    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
    <Header />
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    ); 
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:
        [
            {
                path:"/",
                element:<Body />
            },
            {
        path:"/about",
        element:<About />
            },
            {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>
            },
    {
        path:"/contact",
        element:<Contact />
    },
    {
        path:"/restaurant/:resID",
        element:<ResMenu/>
    },
    {
        path:'/cart',
        element:<Cart/>
    },
    {
        path:'/grocery/:catName',
        element:<GroceryMenu/>
    }
]
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} /> );