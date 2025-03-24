"use client";

import { render } from "storyblok-rich-text-react-renderer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export const FAQSection = ({ blok }: any) => {

  return (
    <>
      <div className="rounded-[20px] my-14 mx-auto p-14 container-section bg-[#F5F3F4]">
        <h2 className="mb-12">{blok.title}</h2>
        <div>
          {blok.fields.map((faq: any) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <span className="flex flex-col gap-2 render-table-content">
                    {render(faq.answer)}
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  )
}
