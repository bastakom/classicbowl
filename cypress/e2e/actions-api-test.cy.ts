import { getThemeSettings } from "../../src/lib/actions/get-theme-settings";
import { storyblokInit, apiPlugin } from "@storyblok/react";

describe("getThemeSettings function", () => {
  it("should fetch theme settings from Storyblok API", () => {
    const accessToken = Cypress.env("STORYBLOK_TOKEN");

    cy.intercept(
      "GET",
      `https://api.storyblok.com/v2/cdn/stories/theme-settings?version=draft&token=${accessToken}&cv=undefined`,
      (req) => {
        cy.log("Intercepted API request:", JSON.stringify(req, null, 2));
        cy.log("Request URL:", req.url);
        cy.log("Mocked Data that we would return:", {
          name: "Test Story",
          content: { content: "This is a test story" },
        });

        req.reply({
          statusCode: 200,
          body: {
            data: {
              story: {
                name: "Test Story",
                content: { content: "This is a test story" },
              },
            },
          },
        });
      }
    ).as("getStoryblokThemeSettings");

    cy.window().then((win) => {
      storyblokInit({
        accessToken: Cypress.env("STORYBLOK_TOKEN"),
        use: [apiPlugin],
      });

      win.getThemeSettings = getThemeSettings;
    });

    cy.window().then(async (win) => {
      const data = await win.getThemeSettings();
      cy.log(
        "Returned Data from getThemeSettings:",
        JSON.stringify(data, null, 2)
      );
    });

    cy.wait("@getStoryblokThemeSettings");
  });
});
