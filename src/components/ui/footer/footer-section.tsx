"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { render } from "storyblok-rich-text-react-renderer";
import { Socials } from "../socials/socials";

export const FooterSection = ({ props }: any) => {
  return (
    <footer
      className={`text-white mx-auto text-center lg:text-left h-full flex flex-col pt-10 pb-20 
        lg:pb-10 footer_full_width ? "w-full" : "container-section"
        }`}
      style={{ background: `${props.bg_footer?.color}` }}
    >
      <div className="px-10 grid lg:grid-cols-2 justify-center w-full container-section lg:py-14">
        <div className="flex flex-col gap-5 font-semibold">
          <h3>{props.contact_title}</h3>
          <span className="render-content">{render(props.adress)}</span>
          <div className="flex flex-col">
            <Link href={`mailto:${props.mail}`}>{props.mail}</Link>
            <Link href={`tel:${props.phone}`}>{props.phone}</Link>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h3>Följ oss</h3>
            <Socials props={props.fields} color={props.header_text_color} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3>ÖPPETTIDER</h3>
          <div className="flex flex-col text-[22px] ">
            {props.opening_hours.map((item: any, i: number) => (
              <div className="flex justify-between" key={i}>
                <span>{item.day}</span>
                <p>{item.time}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-10 lg:mt-0 ">
            {props.footer_menu.map((item: LinkTypes, i: number) => (
              <Link key={i} className="text-[22px] font-bold italic flex gap-2 items-center" href={item.link.cached_url}>
                <span>{item.title}</span>
                <HiOutlineArrowSmallRight />
              </Link>
            ))}
          </div>
          <span className="mt-20 text-[18px]">{render(props.exceptions)}</span>
        </div>
      </div>

      <div className="-mt-14 flex gap-5 px-14 justify-between w-full items-end ">
        <div className="flex flex-col gap-5">
          <Image
            src={props.footer_logo.filename || props.logo.filename}
            alt={props.site_title}
            width={120}
            height={80}
          />
          <span className="text-[16px]">© Classic Bowl Hörby 2025</span>
        </div>
        <div className="flex gap-5 items-end">
          <Link href="/cookies" style={{ fontStyle: "normal", textTransform: "none" }}>Integritespolicy</Link>
        </div>
      </div>
    </footer>
  );
};
