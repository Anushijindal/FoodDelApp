// import { useContext } from "react";
import { createContext } from "react";
// import { createContext } from "vm";
import React from "react";
const UserContext=createContext({
    loggedInUser:"Default User"
});
export default UserContext;