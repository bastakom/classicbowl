"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { useParams, usePathname } from "next/navigation";
import { Socials } from "../socials/socials";
import { BiSolidDownArrow } from "react-icons/bi";

interface HeaderProps {
  props: {
    header_bg_color: {
      color: string;
    };
    header_text_color: {
      color: string;
    };
    site_title: string;
    footer_menu: LinkTypes[];
    meny: LinkTypes[];
    logo: {
      filename: string;
    };
    transparent: boolean;
    fields: any;
  };
}

export const Navigation = ({ props }: HeaderProps) => {
  const [open, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!open);
  };

  const router = useParams();
  const path = usePathname();
  return (
    <nav
      className={`fixed w-full items-center flex justify-between top-0 px-5 lg:pl-14 py-6 z-30 lg:mt-10`}
      style={{
        background: `${
          props.transparent ? "transparent" : props.header_bg_color.color
        }`,
      }}
    >
      <Link href="/">
        <Image
          src={props.logo.filename}
          alt={props.site_title}
          width={150}
          height={50}
          className="z-50"
        />
      </Link>

      <div className={`hidden lg:flex`}>
        <div className="flex">
          {props.meny.map((item: LinkTypes) => {
            return (
              <Link
                key={item._uid}
                href={item.link.cached_url}
                style={{
                  color:
                    path === `/${item.link.cached_url}`
                      ? ""
                      : props.header_text_color.color,
                }}
                className={`flex items-center gap-2 px-5 py-2 font-bold text-[18px] ${
                  router.slug === item.link.cached_url ? "active" : ""
                }`}
              >
                {item.title}
                {item.submenu_restaurant && (
                  <BiSolidDownArrow aria-hidden="true" fontSize={14} />
                )}
                {item.submenu_activities && (
                  <BiSolidDownArrow aria-hidden="true" fontSize={14} />
                )}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex">
          <Socials props={props.fields} color={props.header_text_color} />
        </div>
      </div>

      <div className="block lg:hidden">
        <Hamburger toggled={open} toggle={setMenuOpen} />
      </div>
      <div
        className={`gap-2 fixed top-0 h-full w-full mt-20 px-10 py-14 left-0 flex-col flex text-[32px] z-50 transition-all duration-300 right-0 ${
          !open ? "translate-x-full" : "translate-x-0"
        }`}
        style={{ background: `${props.header_bg_color.color}` }}
      >
        {props.meny.map((item: LinkTypes) => (
          <Link
            onClick={handleOpenMenu}
            key={item._uid}
            href={item.link.url}
            style={{ color: props.header_text_color.color }}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
