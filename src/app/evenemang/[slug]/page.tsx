import { Card } from "@/components/ui/blogg/card";
import { getEvenemangSlug } from "@/lib/actions/get-evenemang-slug";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { slug: string } }) => {
  try {
    const data = await getEvenemangSlug(params.slug);

    if (!data || !data.content) {
      return notFound();
    }

    return (
      <div>
        <div className="bg-[#660708] w-[100%] h-[150px] lg:h-[200px]"></div>
        <Card
          title={data.name}
          link={data.content.link.cached_url}
          image={data.content.image.filename}
          uuid={data.id}
        />
      </div>
    );
  } catch (error: any) {
    return notFound();
  }
};

export default Page;
