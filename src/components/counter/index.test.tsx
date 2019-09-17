import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Counter from "./index";
import "@testing-library/jest-dom/extend-expect";

test("Counter: increment works", async () => {
  const { getByText, getByTestId } = render(<Counter />);

  fireEvent.click(getByText("Increment"));

  await waitForElement(() => getByTestId("counter-label"));

  expect(await getByTestId("counter-label")).toHaveTextContent;
});
