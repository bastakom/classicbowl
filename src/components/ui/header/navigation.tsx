"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SubMenuIcons } from "../submenu-icons/submenu-icons";
import { render } from "storyblok-rich-text-react-renderer";
import { PreMenu } from "./pre-menu";
import { TfiClose } from "react-icons/tfi";

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
    contact_title: string;
    mail: string;
    phone: string;
    adress: any;
    pre_menu: any;
  };
}

export const Navigation = ({ props }: HeaderProps) => {
  const [open, setMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [hasBackground, setHasBackground] = useState(false);
  const [submenuClick, setSubmenuClick] = useState(false);
  const [submenuType, setSubmenuType] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isMobile = window.innerWidth <= 408;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        setIsMenuVisible(true);
        setHasBackground(false);
      } else if (currentScrollY > lastScrollY) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
        setHasBackground(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (submenuClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [submenuClick]);

  const handleOpenMenu = () => {
    setMenuOpen(!open);
  };

  const handleSubmenu = (item: LinkTypes) => {
    setSubmenuClick(!submenuClick);
    setSubmenuType(item._uid);
  };

  return (
    <nav
      className={`fixed w-full items-center flex justify-between px-5 lg:pl-14 z-30 transition-all duration-300 ${
        isMenuVisible ? "top-0 opacity-100" : "-top-20 opacity-0"
      } ${
        hasBackground
          ? "bg-white lg:mt-0 py-4 lg:py-5 "
          : "bg-transparent mt-16 lg:mt-20"
      }`}
    >
      <Link href="/">
        <Image
          src={props.logo.filename}
          alt={props.site_title}
          width={150}
          height={50}
          className={`z-50 ${
            hasBackground ? "absolute top-4" : "fixed top-16"
          } ${open ? "hidden" : "block"}`}
        />
      </Link>

      <div className={`hidden lg:flex`}>
        <div className="flex">
          {props.meny.map((item: LinkTypes) => {
            return (
              <NavigationMenu key={item._uid}>
                <NavigationMenuList>
                  {item.submenu_restaurant ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`italic ${hasBackground && "text-black"}`}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className=" gap-4 bg-white shadow-lg rounded-md p-4">
                        <NavigationMenuLink>
                          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                            {item.submenu?.map((el: any) => (
                              <Link
                                href={el.link.cached_url}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                                key={el.title}
                              >
                                <SubMenuIcons props={el} />
                                <NavigationMenuLink>
                                  {el.title}
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </ul>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.submenu_activities ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`italic ${hasBackground && "text-black"}`}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className=" gap-4 bg-white shadow-lg rounded-md p-4">
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                          {item.submenu?.map((el: any) => (
                            <Link
                              href={el.link.cached_url}
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                              key={el.title}
                            >
                              <SubMenuIcons props={el} />
                              <NavigationMenuLink>
                                {el.title}
                              </NavigationMenuLink>
                            </Link>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <Link href={item.link.cached_url} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            hasBackground ? "!text-black" : ""
                          }`}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            );
          })}
        </div>
      </div>

      <div
        className={`lg:hidden z-50 relative top-3  ${
          !hasBackground ? "text-white" : "text-black"
        } ${open ? "hidden" : "block"}`}
        data-id="open-menu"
      >
        <Hamburger toggled={open} toggle={setMenuOpen} />
      </div>

      <div
        className={`gap-2 fixed bg-[#660708] -top-20 h-full w-full mt-20  py-14 left-0 flex-col flex text-[32px] z-20 transition-all duration-300 right-0 overflow-y-auto ${
          !open ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="relative -top-10 border-b-[0.5px] border-white w-[100%]">
          <PreMenu settings={props.pre_menu} />
        </div>
        <div className="px-5">
          <div className="flex justify-between w-[100%] -mt-9">
            <Link href="/">
              <Image
                src={props.logo.filename}
                alt={props.site_title}
                width={150}
                height={50}
                className={`z-50 fixed top-20`}
              />
            </Link>
            <TfiClose
              className="text-white"
              onClick={handleOpenMenu}
              data-id="close-sidebar-menu"
            />
          </div>
          <div className="flex flex-col mt-28 gap-4">
            {props.meny.map((item: LinkTypes) => {
              if (item.submenu_restaurant || item.submenu_activities) {
                return (
                  <div key={item._uid}>
                    <Link
                      onClick={() => {
                        handleSubmenu(item);
                      }}
                      href={"/"}
                      className="text-white text-[30px] font-bold flex justify-between items-center gap-2"
                      data-id="submenu"
                    >
                      <div>{item.title}</div>
                      <HiOutlineArrowRight fontSize={30} />
                    </Link>

                    {submenuClick && submenuType === item._uid ? (
                      <div className="gap-2 fixed bg-[#660708] top-44 px-5 py-14 left-0 flex-col flex text-[32px] z-30 h-auto transition-all duration-300 right-0 ">
                        <div
                          className="flex gap-2 items-center text-[18px] text-white mt-0"
                          onClick={() => {
                            handleSubmenu(item);
                          }}
                        >
                          <IoIosArrowBack />
                          <div>Tillbaka</div>
                        </div>
                        <div className="mt-4 flex flex-col gap-4">
                          {item?.submenu?.map((el: any) => (
                            <Link
                              href={el.link.cached_url}
                              key={el._uid}
                              data-id="submenu"
                              className="text-white text-[30px] uppercase font-bold"
                              onClick={handleOpenMenu}
                            >
                              {el.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item._uid}
                  onClick={handleOpenMenu}
                  href={item.link.url}
                  className="text-white text-[30px] font-bold"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div
            className={`${
              submenuClick
                ? "hidden"
                : "block border-t-[0.5px] border-white mt-20 w-[100%]"
            }`}
          >
            <div className="flex flex-col gap-4 text-[18px] text-white mt-6 font-bold">
              <h3>{props.contact_title}</h3>
              <div>{render(props.adress)}</div>
              <Link
                href={
                  "https://www.google.com/maps/dir//Byggm%C3%A4staregatan+6,+242+32+H%C3%B6rby/@55.85745,13.571713,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4653f385ea7bfa19:0x113f1e400d8f7cd5!2m2!1d13.6541129!2d55.8574775?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                }
                className="flex gap-2 items-center"
              >
                <div>Hitta oss</div>
                <HiOutlineArrowRight fontSize={20} />
              </Link>
              <div className="flex flex-col mt-4">
                <Link href={`tel:${props.phone}`}>{props.phone}</Link>
                <Link href={`mailto:${props.mail}`}>{props.mail}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
