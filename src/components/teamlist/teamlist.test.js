import React from "react";
import { render } from "@testing-library/react";
import teamlist from "./teamlist";

describe("teamlist tests", () => {
  it("should render", () => {
    expect(render(<teamlist />)).toBeTruthy();
  });
});
