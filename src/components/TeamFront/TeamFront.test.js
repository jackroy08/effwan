import React from "react";
import { render } from "@testing-library/react";
import TeamFront from "./TeamFront";

describe("TeamFront tests", () => {
  it("should render", () => {
    expect(render(<TeamFront />)).toBeTruthy();
  });
});
