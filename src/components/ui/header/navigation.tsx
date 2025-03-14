"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";

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

  return (
    <nav
      className={`fixed w-full items-center flex justify-between  px-5 lg:pl-14  z-30 lg:mt-2`}
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
              <NavigationMenu>
                <NavigationMenuList>
                  {item.submenu_restaurant ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className=" gap-4 bg-white shadow-lg rounded-md p-4">
                        <NavigationMenuLink>
                          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                            {item.submenu?.map((el: any) => (
                              <Link
                                href={el.link.cached_url}
                                className="flex  items-center gap-2 px-4 py-2 hover:bg-gray-100"
                              >
                                <SubMenuIcons props={el} />
                                <NavigationMenuLink key={el.title}>
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
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className=" gap-4 bg-white shadow-lg rounded-md p-4">
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                          {item.submenu?.map((el: any) => (
                            <Link
                              href={el.link.cached_url}
                              className="flex  items-center gap-2 px-4 py-2 hover:bg-gray-100"
                            >
                              <SubMenuIcons props={el} />
                              <NavigationMenuLink key={el.title}>
                                {el.title}
                              </NavigationMenuLink>
                            </Link>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
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
