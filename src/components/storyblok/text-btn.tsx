import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export const TextBtn = ({ blok }: any) => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto lg:w-[90%] gap-10 p-6 lg:p-10">
      <div className="lg:w-[50%] text-block-content">
        {render(blok?.content)}
      </div>
      <Link
        href={blok?.link?.cached_url}
        style={{ backgroundColor: blok?.button_bg.color }}
        className="text-btn rounded-[70px] h-[60px]"
      >
        {blok?.link_title}
      </Link>
    </div>
  );
};
