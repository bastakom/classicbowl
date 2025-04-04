import { Card } from "@/components/ui/blogg/card";
import { getEvenemangSlug } from "@/lib/actions/get-evenemang-slug";

type Params = Promise<{ slug: string }>;

const page = async ({ params }: { params: Params }) => {
  const data = await getEvenemangSlug((await params).slug);

  return (
    <div className="py-24 container-section">
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
