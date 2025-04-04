import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getEvenemangSlug(slug: string) {
  let sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/evenemang/${slug}`, sbParams);

  return data.data.story;
}
