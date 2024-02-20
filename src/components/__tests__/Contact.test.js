import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load contact us component",()=>{
   render(<Contact />);
   const heading=screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
});
test("Should have button in contact us component",()=>{
    render(<Contact />);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
 });
 test("Should have text in contact us component",()=>{
    render(<Contact />);
    const text=screen.getByText("Submit");
    expect(text).toBeInTheDocument();
 });
 test("Should have placeholder in contact us component",()=>{
    render(<Contact />);
    const placeholderName=screen.getByPlaceholderText("Name")
    expect(placeholderName).toBeInTheDocument();
 });
 test("Should have 2 input box in contact us component",()=>{
    render(<Contact />);
    const inputBoxes=screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
 });
 test("Should have 2 input box in contact us component",()=>{
    render(<Contact />);
    const inputBoxesLen=screen.getAllByRole("textbox");
    expect(inputBoxesLen.length).not.toBe(4);
 });