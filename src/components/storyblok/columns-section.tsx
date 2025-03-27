"use client";

import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

export const Columns = ({ blok }: any) => {
  return (
    <div className="container-section p-container lg:my-14">
      <div
        className={`grid gap-10 py-6 ${
          blok.columns === "4"
            ? "lg:grid-cols-4"
            : blok.columns === "3"
            ? "lg:grid-cols-3"
            : blok.columns === "2"
            ? "lg:grid-cols-2"
            : "lg:grid-cols-1"
        }`}
      >
        {blok.fields.map((item: any) => (
          <div
            className={`flex flex-col gap-5 ${
              blok?.text_center && "text-center"
            }`}
            key={item._uid}
          >
            <h2 className="uppercase text-[35px]">{item.title}</h2>
            <span
              className={`${blok.half_width && "lg:max-w-[50%]"} ${
                blok?.text_center && "mx-auto"
              }`}
            >
              {render(item.content)}
            </span>
            <Link
              href={item?.link?.cached_url || ""}
              className="flex gap-2 items-center font-extrabold group text-[#1E40AF]"
            >
              <div>{item?.link_title}</div>
              <HiOutlineArrowSmallRight
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                fontSize={24}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
