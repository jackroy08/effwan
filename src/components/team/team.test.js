import React from "react";
import { render } from "@testing-library/react";
import team from "./team";

describe("team tests", () => {
  it("should render", () => {
    expect(render(<team />)).toBeTruthy();
  });
});
