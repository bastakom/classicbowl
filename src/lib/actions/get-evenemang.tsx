import { getStoryblokApi } from "@storyblok/react";

export async function getEvenemang() {
  let sbParams = {
    version: "draft" as const,
    starts_with: "evenemang",
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}
