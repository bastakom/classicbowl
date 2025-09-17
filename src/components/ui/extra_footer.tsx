import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ExtraFooterSectionProps {
  extraFields: any[];
}

const ExtraFooterSection = ({ extraFields }: ExtraFooterSectionProps) => {
  return (
    <div className="lg:max-w-[95%] mx-auto flex flex-col lg:gap-8 mb-4 lg:mb-14">
      {extraFields.map((item: any, index: number) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] lg:gap-5 items-end">
          {/* Using index % 2 to alternate layout - even index = image right, odd index = image left */}
          {index % 2 === 0 ? (
            <>
              {/* Text content first */}
              <div className="bg-[#660708] h-full flex flex-col gap-10 justify-end p-8 text-white">
                <h2 className="text-[40px] lg:text-[60px] uppercase font-extrabold italic">
                  {item.title}
                </h2>
                <div className="text-[22px] render-content-img">
                  {render(item.content)}
                </div>
                {item.buttons.map((buttonItem: any, i: number) => (
                  <div key={i} className="flex gap-2 items-center">
                    <Link
                      href={buttonItem.link.cached_url}
                      className="text-[16px] font-extrabold"
                    >
                      Läs mer
                    </Link>
                    <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                  </div>
                ))}
              </div>
              {/* Image second (right side) */}
              <div className="hidden lg:block h-full object-cover">
                <Image
                  src={item.image.filename}
                  alt={item.image.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              {/* Image first (left side) */}
              <div className="hidden lg:block h-full object-cover">
                <Image
                  src={item.image.filename}
                  alt={item.image.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text content second */}
              <div className="bg-[#B71B2F] h-full flex flex-col gap-10 justify-end p-8 text-white">
                <h2 className="text-[40px] lg:text-[60px] uppercase font-extrabold italic">
                  {item.title}
                </h2>
                <div className="text-[22px] render-content-img">
                  {render(item.content)}
                </div>
                {item.buttons.map((buttonItem: any, i: number) => (
                  <div key={i} className="flex gap-2 items-center">
                    <Link
                      href={buttonItem.link.cached_url}
                      className="text-[16px] font-extrabold"
                    >
                      Läs mer
                    </Link>
                    <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExtraFooterSection;
