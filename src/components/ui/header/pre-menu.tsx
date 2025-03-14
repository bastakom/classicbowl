"use client";

import Link from "next/link";

export const PreMenu = ({ settings }: any) => {
  return (
    <div className="bg-[#660708] py-5 w-[100%]">
      <div className="flex justify-end gap-8 items-center w-[97%] uppercase ">
        {settings.map((el: any, index: number) => (
          <Link
            href={el.link.cached_url}
            key={index}
            className="text-white italic text-[14px]"
          >
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
