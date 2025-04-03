import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { ArrowRight } from "lucide-react";

export const InfoBlock = ({ blok }: any) => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-0 lg:py-10 lg:mb-4">
      <div className="p-6 lg:w-[50%] flex flex-col">
        <h2 className="uppercase text-center mb-5">{blok.title}</h2>
        <div className={`downcase-link ${blok.text_center && "text-center"}`}>
          {render(blok.content)}
        </div>
        <div
          className={`${
            blok.link_title == ""
              ? "hidden"
              : "flex items-center gap-2 justify-center text-[#1E40AF] lg:mt-10"
          }`}
        >
          <Link href={blok.link.cached_url} className="font-extrabold">
            {blok.link_title}
          </Link>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};
