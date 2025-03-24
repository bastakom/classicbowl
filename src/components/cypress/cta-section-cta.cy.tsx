import React from "react";
import { CTA } from "../storyblok/cta-section";

describe("<CTA />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CTA />);
  });
});
