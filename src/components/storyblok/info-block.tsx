import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { ArrowRight } from "lucide-react";

export const InfoBlock = ({ blok }: any) => {
  console.log(blok);
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-0 lg:py-10 lg:mb-16">
      <div className="p-6 lg:w-[50%] flex flex-col gap-8">
        <h2 className="uppercase text-center">{blok.title}</h2>
        <div>{render(blok.content)}</div>
        <div className="flex items-center gap-2 justify-center text-[#1E40AF]">
          <Link href={blok.link.cached_url} className="font-extrabold">
            {blok.link_title}
          </Link>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};
