import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/ResCardMocks.json"
test("should render resCard component with props data",()=>{
    render (<ResCard resData={MOCK_DATA}/>);
    const resName=screen.getByText("Chinese Wok");
    expect(resName).toBeInTheDocument();
});