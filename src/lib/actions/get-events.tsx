import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getEvents() {
  let sbParams = {
    version: "draft" as const,
    starts_with: "evenemang",
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}
