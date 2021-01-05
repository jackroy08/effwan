import React from "react";
import { render } from "@testing-library/react";
import TeamBack from "./TeamBack";

describe("TeamBack tests", () => {
  it("should render", () => {
    expect(render(<TeamBack />)).toBeTruthy();
  });
});
