import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { LinkTypes } from "@/types/IfLinkInterface";
import Link from "next/link";
import { Button } from "../ui/button";

export const ImageSection = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable}
      className={`container-section flex flex-col justify-center items-center mx-auto mt-10 lg:mt-16  ${
        blok.bg_color?.color && "p-5 lg:p-14"
      }`}
      style={{ background: `${blok.bg_color?.color || ""}` }}
    >
      <div className=" flex flex-col justify-center items-center  w-[100%] text-center mb-5 lg:mb-0 ">
        <div
          className={`flex flex-col gap-5 lg:max-w-[50%] justify-center ${
            blok.text_white && "text-white"
          }`}
        >
          {blok.sub_title && <h3>{blok.sub_title}</h3>}
          {blok.title && (
            <h2 className="uppercase text-[35px] italic font-extrabold">
              {blok.title}
            </h2>
          )}
          {blok.content && <span>{render(blok.content)}</span>}
          <div>
            {blok.buttons.map((item: LinkTypes) => (
              <Button
                key={item._uid}
                variant={`${item.secondary_color ? "secondary" : "default"}`}
              >
                <Link className="button" href={item.link.cached_url}>
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div
          className={`w-[100%] mt-4 lg:w-[50%] lg:mt-0 h-[350px] lg:h-[545px] relative mb-4 ${
            blok.image_right && "order-1"
          }`}
        >
          <Image
            src={blok.image.filename || ""}
            alt={blok.title}
            fill
            className={`object-cover ${
              blok.image_right ? "p-0 lg:p-10 pr-0" : "p-0 lg:p-10 pl-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
