import { describe, expect as expectNonTyped, it } from "@jest/globals";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/types/matchers";
import { render } from "@testing-library/react";
import React from "react";

import { AnimatedOpacity } from "./";

const props = {
  from: 0,
  to: 1,
  in: {
    startTime: 0,
    endTime: 1,
  },
  out: {
    startTime: -1,
    endTime: 0,
  },
};

type ExpectInterface = {
  (actual: any): TestingLibraryMatchers<any, any>;
  extend: (matchers: Record<string, any>) => void;
};
let expect: ExpectInterface = expectNonTyped as any;

describe("AnimatedOpacity", () => {
  it("calculates opacityIn correctly", () => {
    const { container } = render(
      <AnimatedOpacity {...props}>Test Content</AnimatedOpacity>
    );

    expect(container.firstChild).toHaveStyle("opacity: 0.5");
  });

  it("calculates opacityOut correctly", () => {
    const { container } = render(
      <AnimatedOpacity {...props}>Test Content</AnimatedOpacity>
    );

    expect(container.firstChild).toHaveStyle("opacity: 0.5");
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <AnimatedOpacity {...props}>Test Content</AnimatedOpacity>
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
