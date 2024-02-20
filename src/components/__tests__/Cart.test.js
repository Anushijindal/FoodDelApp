import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import ResMenu from "../ResMenu";
import MOCK_DATA from "../mocks/MockResMenuData.json";
import { Provider } from "react-redux";
import Cart from "../Cart";
import appStore from "../../utilities/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});
it("should render items in the cart after clicking add button",async ()=>{
    await act(async ()=>render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <ResMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>));
    const accordianName=screen.getByText("All-in-1 Thali Meals (19)");
    fireEvent.click(accordianName);
    const foodItems=screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(19);
    const addBtn=screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
    const clearBtn=screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(clearBtn);
    expect(screen.getAllByTestId("foodItems").length).toBe(19);
});