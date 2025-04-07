import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { render } from "storyblok-rich-text-react-renderer";
import { InfoForm } from "@/components/info-and-form";

interface CardProps {
  event: any;
  settings: any;
}

export const Card = ({ event, settings }: CardProps) => {
  return (
    <div className="lg:-mb-20">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-[auto_auto] justify-between px-4 py-5 lg:p-24 lg:mb-20 lg:px-44">
        <div className="mt-5 lg:mt-0">
          <div className="flex gap-2">
            <span className="text-[#B71B2F] text-[22px] font-extrabold mb-2">
              {event?.content?.Datum?.split(" ")[0]}
            </span>
            <span className="text-[#B71B2F] text-[22px] font-extrabold">{` - ${event?.content?.Time}`}</span>
          </div>
          <h2 className="font-extrabold text-[30px] lg:text-[40px] uppercase mb-3 lg:mb-6">
            {event.name}
          </h2>
          {event?.content?.event_content && (
            <div className="lg:w-[70%] render-blogg-content">
              {render(event?.content?.event_content)}
            </div>
          )}
          <div className="flex items-center gap-2 uppercase font-extrabold italic text-[16px] text-[#1E40AF] mt-5 mb-5 lg:mb-0 lg:mt-10">
            <Link href={`/${event?.content?.more_events_link?.cached_url}`}>
              {event?.content?.more_events_title}
            </Link>
            <ArrowRight />
          </div>
        </div>
        <div className="w-[345px] lg:w-[531px] h-[300px] lg:h-[500px] relative">
          <Image
            src={event?.content?.image?.filename || ""}
            fill
            alt={event.name}
            className="object-cover "
          />
        </div>
      </div>
      <InfoForm
        blok={event.content}
        title={event.content.form_title}
        settings={settings}
      />
    </div>
  );
};
