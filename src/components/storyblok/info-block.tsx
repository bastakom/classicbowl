import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "../ui/form/contact-form";

export const InfoBlock = ({ blok, props, settings }: any) => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-0 lg:py-10 lg:mb-16">
      <div className="p-6 lg:w-[50%] flex flex-col gap-12">
        <h2 className="uppercase text-center">{blok.title}</h2>
        <div className={`${blok.text_center && "text-center"}`}>
          {render(blok.content)}
        </div>
        <div
          className={`${
            blok.link_title == ""
              ? "hidden"
              : "flex items-center gap-2 justify-center text-[#1E40AF]"
          }`}
        >
          <Link href={blok.link.cached_url} className="font-extrabold">
            {blok.link_title}
          </Link>
          <ArrowRight />
        </div>
      </div>
      {props.show_form && <ContactForm settings={settings} />}
    </div>
  );
};
