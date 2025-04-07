"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

export const Events = ({ props, blok, evenemang }: any) => {
  const [loadMore, setLoadMore] = useState(blok.show_less_events ? 2 : 5);

  const handleEvents = (number: number) => {
    setLoadMore(number);
  };

  return (
    <div className="w-[90%] lg:w-[50%] mx-auto my-16 ">
      <h2 className="uppercase text-[25px] text-center">{blok?.title}</h2>

      <div>
        {evenemang
          .sort((a: any, b: any) => {
            const dateA = new Date(a.content.Datum).getTime();
            const dateB = new Date(b.content.Datum).getTime();

            return dateA - dateB;
          })
          .slice(0, loadMore)
          .map((item: any) => (
            <div key={item._uid}>
              <div className="lg:flex justify-between mt-12">
                <div>
                  <div className="flex gap-2">
                    <span className="text-[#B71B2F] font-extrabold">
                      {item?.content?.Datum?.split(" ")[0]}
                    </span>
                    <span className="text-[#B71B2F] font-extrabold">
                      {` - ${item?.content?.Time}`}
                    </span>
                  </div>
                  <h3 className="uppercase text-[30px] lg:text-[40px] font-extrabold italic">
                    {item.name}
                  </h3>
                  <div className="text-[22px] font-extrabold uppercase mb-4 lg:mb-0 italic">
                    {item?.content?.description}
                  </div>
                </div>

                <div
                  className={` ${
                    item?.content.link?.cached_url
                      ? "flex items-center gap-2 text-[#1E40AF]"
                      : "hidden"
                  }`}
                >
                  <Link
                    href={item?.content.link?.cached_url || "/"}
                    className="text-[16px] uppercase font-extrabold"
                  >
                    {item?.content?.link_title}
                  </Link>
                  <ArrowRight />
                </div>
              </div>
              <hr className="mt-10 text-black border-[1px]" />
            </div>
          ))}
      </div>

      <div
        className={`${
          evenemang.length >= loadMore
            ? "flex justify-center mt-10 lg:mt-16"
            : "hidden"
        }`}
      >
        <button
          className="flex items-center gap-2 text-[#1E40AF] text-[16px] uppercase font-extrabold"
          onClick={() => handleEvents(loadMore + 5)}
        >
          Ladda fler
          <BsPlusCircleFill fontSize={20} />
        </button>
      </div>
    </div>
  );
};
