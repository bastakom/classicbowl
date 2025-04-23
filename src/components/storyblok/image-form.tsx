"use client";

import Image from "next/image";
import { ContactForm } from "../ui/form/contact-form";
import { StandardForm } from "../ui/form/standard-form";

export const ImageForm = ({ blok, settings }: any) => {
  return (
    <div
      id="contact"
      className={`w-[100%] bg-[#660708] p-5 lg:p-14  lg:pt-24 lg:mt-10 `}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[40%_65%] w-[95%] mx-auto ">
        <div className="relative w-full h-[350px] lg:w-[100%] lg:h-[70%] lg:mt-16 mb-10 lg:mb-0">
          <Image
            src={blok.image.filename}
            fill
            className="object-cover"
            alt={blok.image.alt}
          />
        </div>
        <div>
          {blok.contact_form ? (
            <StandardForm settings={settings} />
          ) : (
            <ContactForm settings={settings} />
          )}
        </div>
      </div>
    </div>
  );
};
