"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { render } from "storyblok-rich-text-react-renderer";
import { Socials } from "../socials/socials";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

export const FooterSection = ({ props }: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSecondDropdown, setOpenSecondDropdown] = useState(false);
  const [isSeasonOpen, setIsSeasonOpen] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleSecondDropdown = () => {
    setOpenSecondDropdown(!openSecondDropdown);
  };

  return (
    <footer
      className={`text-white mx-auto text-center lg:text-left h-full flex flex-col pt-10 pb-20 
        lg:pb-10 footer_full_width ? "w-full" : "container-section"
        }`}
      style={{ background: `${props.bg_footer?.color}` }}
    >
      <div className="px-4 lg:px-10 grid lg:grid-cols-2 justify-center w-full container-section lg:py-14">
        <div className="flex lg:hidden justify-center mb-10 ">
          <Image
            src={props.footer_logo.filename || props.logo.filename}
            alt={props.site_title}
            width={120}
            height={80}
          />
        </div>
        <div className="flex flex-col gap-5 font-extrabold">
          <h3 className="text-[20px] lg:text-[22px] italic uppercase">
            {props.contact_title}
          </h3>
          <span className="render-content">{render(props.adress)}</span>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Link
              href={`${props?.link?.cached_url}`}
              className="text-[20px] lg:text-[22px] italic !uppercase"
            >
              {props?.link_title}
            </Link>
            <HiOutlineArrowSmallRight fontSize={25} />
          </div>
          <div className="flex flex-col">
            <Link
              href={`mailto:${props.mail}`}
              className="text-[20px] lg:text-[22px] italic !uppercase"
            >
              {props.mail}
            </Link>
            <Link
              href={`tel:${props.phone}`}
              className="text-[20px] lg:text-[22px] italic !uppercase"
            >
              {props.phone}
            </Link>
          </div>
          <div className="hidden lg:flex flex-col gap-4 mt-4 text-[20px] lg:text-[22px] italic uppercase">
            <h3>Följ oss</h3>
            <Socials props={props.fields} color={props.header_text_color} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div
            className="flex lg:hidden items-center gap-2 justify-center mt-12 lg:mt-0"
            onClick={handleDropdown}
          >
            <h3 className="font-extrabold italic uppercase ">
              {props.ordinary_opening_hours_title}
            </h3>
            <IoMdArrowDropdown fontSize={25} />
          </div>
          <div
            className={`lg:hidden flex-col text-[22px] mb-10 ${openDropdown ? "block" : "hidden"
              }`}
          >
            {props.opening_hours.map((item: any, i: number) => (
              <div className="flex justify-between" key={i}>
                <span className="text-[16px] lg:text-[22px] italic">
                  {item.day}
                </span>
                <p className="text-[16px] lg:text-[22px]  italic">
                  {item.time}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex lg:hidden items-center gap-2 justify-center -mt-2 lg:mt-0"
            onClick={handleSecondDropdown}
          >
            <h3 className="font-extrabold italic uppercase ">
              {props?.seasonal_opening_hours_title}
            </h3>
            <IoMdArrowDropdown fontSize={25} />
          </div>

          <div
            className={`lg:hidden flex-col text-[22px] ${openSecondDropdown ? "block" : "hidden"
              }`}
          >
            {props?.seasonal_opening_hours?.map((item: any, i: number) => (
              <div className="flex justify-between" key={i}>
                <span className="text-[16px] lg:text-[22px] italic uppercase">
                  {item.day}
                </span>
                <p className="text-[16px] lg:text-[22px]  italic">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
          <h3 className="hidden lg:flex  lg:text-[22px] italic uppercase font-extrabold">
            {props.ordinary_opening_hours_title}
          </h3>
          <div className={`hidden lg:flex flex-col text-[22px]`}>
            {props.opening_hours.map((item: any, i: number) => (
              <div className="flex justify-between" key={i}>
                <span className="text-[16px] lg:text-[22px] italic uppercase">
                  {item.day}
                </span>
                <p className="text-[16px] lg:text-[22px]  italic">
                  {item.time}
                </p>
              </div>
            ))}
          </div>

          {props?.seasonal_opening_hours_title &&
            <button onClick={() => setIsSeasonOpen(!isSeasonOpen)} className="hidden lg:flex gap-4 items-center font-extrabold text-[22px] italic uppercase mt-10 ">
              {props?.seasonal_opening_hours_title} {!isSeasonOpen ? <HiOutlineArrowSmallRight size={20} /> : <ArrowUp size={20} />}
            </button>}
          {props?.seasonal_opening_hours.length != 0 && isSeasonOpen &&
            <div className={`hidden lg:flex flex-col text-[22px] mb-10 `}>
              {props?.seasonal_opening_hours?.map((item: any, i: number) => (
                <div className="flex justify-between" key={i}>
                  <span className="text-[16px] lg:text-[22px] italic uppercase">
                    {item.day}
                  </span>
                  <p className="text-[16px] lg:text-[22px]  italic">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          }
          {props?.sasong_title &&
            <div className="my-8">
              <Link href={props.sasong_link.cached_url} className="italic underline underline-offset-2">{props.sasong_title}</Link>
            </div>
          }
          <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 ">
            {props.footer_menu.map((item: LinkTypes, i: number) => (
              <Link
                key={i}
                className="text-[22px] font-bold italic flex gap-4 items-center"
                href={item.link.cached_url}
              >
                <span className="text-[20px] lg:text-[22px] font-extrabold italic uppercase">
                  {item.title}
                </span>
                <HiOutlineArrowSmallRight />
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden flex-col items-center lg:items-start gap-4 mt-4">
            <h3 className="uppercase font-extrabold mt-5 lg:mt-0">Följ oss</h3>
            <Socials props={props.fields} color={props.header_text_color} />
          </div>
          <span className="hidden lg:flex mt-20 text-[18px] exceptions">
            {render(props.exceptions)}
          </span>
        </div>
      </div>

      <div className="-mt-14 flex gap-5 px-14 justify-between w-full items-end ">
        <div className="hidden lg:flex flex-col gap-5">
          <Image
            src={props.footer_logo.filename || props.logo.filename}
            alt={props.site_title}
            width={120}
            height={80}
          />
          <span className="text-[16px]">© Classic Bowl Hörby 2025</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex lg:gap-5 lg:items-end mt-28 lg:mt-0 mx-auto lg:mx-0 gap-5 ">
          <Link
            href="/integritetspolicy"
            style={{ fontStyle: "normal", textTransform: "none" }}
          >
            Integritespolicy
          </Link>

          <Link
            href="/cookies"
            style={{ fontStyle: "normal", textTransform: "none" }}
          >
            Cookies
          </Link>
          <span className="lg:hidden block text-[16px]  lg:pt-0">
            © Classic Bowl Hörby 2025
          </span>
        </div>
      </div>
    </footer>
  );
};
