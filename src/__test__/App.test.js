//src App.test.js
import React from "react";
import { render, screen } from "../util/test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Add recipe button toggles visibility of a form on the page", async () => {
  render(<App />);
  // `queryBy...` methods will return null if the element is not found:
  const recipeForm = screen.queryByText("Instructions:");

  // `getBy...` methods will "throw" an error if the element is not found:
  // const recipeForm = screen.getByText("Instructions:");

  expect(recipeForm).toBeNull();
  await userEvent.click(screen.getByText("Add Recipe"));

  expect(screen.getByLabelText("Instructions:")).toBeInTheDocument();
});
