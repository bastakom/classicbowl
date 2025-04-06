import { Card } from "@/components/ui/blogg/card";
import { getData } from "@/lib/actions/get-data";
import { getEvenemangSlug } from "@/lib/actions/get-evenemang-slug";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const data = await getEvenemangSlug((await params).slug);

  return {
    title: data?.content?.SEO?.title || data?.name,
    description: data?.content?.meta_data?.description || "Default description",
  };
};

const page = async ({ params }: { params: Params }) => {
  const data = await getEvenemangSlug((await params).slug);

  return (
    <div className="">
      <div className="bg-[#660708] w-[100%] h-[150px] lg:h-[200px]"></div>
      <Card
        title={data.name}
        link={data.content.link.cached_url}
        image={data.content.image.filename}
        uuid={data.id}
      />
    </div>
  );
};

export default page;
