import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import App from "../src/App";

const setup = () => {
  const utils = render(<App />);
  const input = utils.getByLabelText("amount-input");
  return {
    input,
    ...utils
  };
};

afterEach(cleanup);

test("It should not allow letters to be inputted", () => {
  const { input } = setup();
  expect(input.value).toBe("1"); // empty before
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe(""); 
});