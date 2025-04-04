import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { render } from "storyblok-rich-text-react-renderer";

interface CardProps {
  title: string;
  image?: string;
  link: string;
  uuid: any;
  content?: any;
}

export const Card = ({ title, link, image, uuid, content }: CardProps) => {
  return (
    <div className="min-h-[520px]  flex flex-col gap-2 mt-40 px-36">
      <h2 className="font-extrabold text-[60px] uppercase">{title}</h2>
      {/*  <div className="w-full h-[300px] relative">
        <Image src={image || ""} fill alt={title} className="object-cover " />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h4 className="font-bold">{title}</h4>
        {content && (
          <span className="line-clamp-2 render-blogg-content">
            {render(content)}
          </span>
        )}
      </div> 
      <ArrowRight className="absolute right-5 bottom-5" />
      */}
    </div>
  );
};
