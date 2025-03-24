import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getThemeSettings() {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  if (!client) {
    throw new Error("Storyblok client is not initialized.");
  }

  const data = await client.get(`cdn/stories/theme-settings`, sbParams);

  return data.data.story;
}
