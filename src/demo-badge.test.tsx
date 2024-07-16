import React from "react";
import { screen, render } from "@testing-library/react";

import { DemoBadge } from "./demo-badge";

describe("DemoBadge", () => {
  it("should render the component", () => {
    render(<DemoBadge message="World" />);

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
