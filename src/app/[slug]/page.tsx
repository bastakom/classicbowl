import { getEvenemangSlug } from "@/lib/actions/get-evenemang-slug";
import { getData } from "@/lib/actions/get-data";
import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";
import { getEvenemang } from "@/lib/actions/get-evenemang";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const data = await getData(pathname);

  return {
    title: data?.content?.SEO?.title || data?.name,
    description: data?.content?.SEO?.description || "Default description",
  };
};

type Params = Promise<{ slug: string }>;
const Page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);
  const settings = await getThemeSettings();
  const evenemang = await getEvenemang();

  return (
    <StoryblokStory story={story} settings={settings} evenemang={evenemang} />
  );
};

export default Page;
