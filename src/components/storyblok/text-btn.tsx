import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export const TextBtn = ({ blok }: any) => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row mx-auto lg:w-[90%] gap-10 p-6 lg:p-10 lg:py-16 lg:mb-20">
      <div className="lg:w-[50%] text-block-content">
        {render(blok?.content)}
      </div>
      <Link
        href={blok?.link?.cached_url}
        className="text-btn rounded-[70px] h-[60px] w-[60%] lg:w-[15%]"
      >
        {blok?.link_title}
      </Link>
    </div>
  );
};
