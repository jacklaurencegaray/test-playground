import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Counter from ".";
import "@testing-library/jest-dom/extend-expect";

let container;

test("Counter works as intended", async () => {
  const { getByText, getByTestId, container, asFragment } = render(<Counter />);

  fireEvent.click(getByText("Increment"));

  const counterTextNode = await waitForElement(() =>
    getByTestId("counter-label")
  );
});
