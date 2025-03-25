import { render } from "storyblok-rich-text-react-renderer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const DropdownContent = ({ blok }: any) => {
  return (
    <>
      <div className="rounded-[20px] my-14 mx-auto  lg:p-14 container-section">
        <div className="flex flex-col gap-5">
          {blok.field.map((item: any) => (
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-none flex flex-col items-center"
              >
                <AccordionTrigger className="text-[35px] uppercase italic font-extrabold gap-4">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex justify-center">
                  <span className="flex flex-col gap-2 render-table-content p-4 lg:p-0 lg:w-[60%] lg:mt-5">
                    {render(item.content)}
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};
