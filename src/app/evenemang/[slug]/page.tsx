import { Events } from "@/components/storyblok/events";
import { Card } from "@/components/ui/blogg/card";
import { getEvenemangSlug } from "@/lib/actions/get-evenemang-slug";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

type Params = Promise<{ slug: string }>;
// { title, link, image, uuid, content }

const page = async ({ params }: { params: Params }) => {
  const data = await getEvenemangSlug((await params).slug);
  console.log("slug data", data);
  return (
    <div className="py-24 container-section">
      <Card
        title={data.name}
        link={data.content.link.cached_url}
        image={data?.content?.image}
        uuid={data.id}
      />
      {/*  <div className="flex flex-col gap-14">
        <div className="relative h-[400px]">
          <Image
            src={data.content.image?.filename || ""}
            fill
            alt={data.name}
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="flex gap-14">
          <h1 className="-mt-4">{data.name}</h1>
          <span className="">{render(data?.content?.content)}</span>
        </div>
      </div>

      <Link href={"/blogg"}>
        <ArrowLeft className="fixed bottom-5 left-5 text-4xl w-12 h-12 z-10  rounded-full bg-[white]" />
      </Link> */}
      <Events blogg={data} />
    </div>
  );
};

export default page;
