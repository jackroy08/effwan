import React from "react";
import { render } from "@testing-library/react";
import TeamList from "./TeamList";

describe("TeamList tests", () => {
  it("should render", () => {
    expect(render(<TeamList />)).toBeTruthy();
  });
});
