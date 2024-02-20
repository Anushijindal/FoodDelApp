import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utilities/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
test("should render header component with a login button", ()=>{
    render (
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginButton=screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});
test("should render login in header component with a login button", ()=>{
    render (
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginButton=screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
});
test("should changed to logout when clicked to logout", ()=>{
    render (
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginButton=screen.getByRole("button",{name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name: "Logout"})
    expect(logoutButton).toBeInTheDocument();
})