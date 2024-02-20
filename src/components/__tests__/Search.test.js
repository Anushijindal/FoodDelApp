import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/MockResListData.json";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
test("should render searched cards",async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>));
        const searchBtn=screen.getByRole("button",{name:"search"});
        const searchInput=screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{target:{value:"pizza"}});
        fireEvent.click(searchBtn);
        const cards=screen.getAllByTestId("resCard");
        expect(cards.length).toBe(1);
});
test("should render searched cards",async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>));
        const cardsBeforeFilter=screen.getAllByTestId("resCard");
        expect(cardsBeforeFilter.length).toBe(9);
        const topRatedBtn=screen.getByRole("button",{name:"Top Rated Restaurants"});
        fireEvent.click(topRatedBtn);
        const cardsAfterFilter=screen.getAllByTestId("resCard");
        expect(cardsAfterFilter.length).toBe(1);
});