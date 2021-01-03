import React from "react";
import { render } from "@testing-library/react";
import TeamCard from "./TeamCard";

describe("TeamCard tests", () => {
  it("should render", () => {
    expect(render(<TeamCard />)).toBeTruthy();
  });
});
