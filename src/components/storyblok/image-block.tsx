"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

interface ItemProps {
  image: {
    filename: string;
    alt: string;
  };

  background_color: any;
  title: string;
  content: React.ReactNode[];
  link: {
    cached_url: string;
  };
  link_title: string;
}

interface ImageBlockProps {
  blok: {
    image: any[];
  };
}

export const ImageBlock = ({ blok }: ImageBlockProps) => {
  return (
    <div className="grid lg:grid-cols-2 lg:w-[95%] lg:mx-auto  lg:gap-5 mx-auto  lg:mb-20">
      {blok.image.map((item: ItemProps, index: number) =>
        item.image.filename == "" ? (
          <div
            key={index}
            style={{ backgroundColor: item.background_color.color }}
            className="w-full h-full"
          >
            <div className="px-5 pt-40 lg:p-20 flex flex-col lg:justify-end h-[100%] gap-5 text-white ">
              <Link
                href={item.link.cached_url}
                style={{ textTransform: "none" }}
                className="flex flex-col gap-4 lg:px-8"
              >
                <h3 className="text-[40px] lg:text-[60px] uppercase font-extrabold italic">
                  {item.title}
                </h3>
                <div className="image-block-content">
                  {render(item.content)}
                </div>
              </Link>
              <div className="flex gap-2 items-center pb-10 lg:pb-0 justify-end lg:justify-start group cursor-pointer lg:pt-6 lg:px-8">
                <Link href={item.link.cached_url} className="text-[16px]">
                  {item.link_title}
                </Link>
                <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="hidden lg:flex relative w-[100%] h-[531px] lg:h-[710px]"
          >
            <Image
              src={item.image.filename}
              alt={item.image.alt || "Image"}
              fill
              className="object-cover"
            />
          </div>
        )
      )}
    </div>
  );
};
