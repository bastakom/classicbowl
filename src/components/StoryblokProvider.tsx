"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { HeroSection } from "./storyblok/hero-section";
import { ImageSection } from "./storyblok/image-section";
import { Space } from "./storyblok/space-section";
import { CTA } from "./storyblok/cta-section";
import { Columns } from "./storyblok/columns-section";
import { ContactForm } from "./ui/form/contact-form";
import { CardColumns } from "./storyblok/card-columns-section";
import { TableSection } from "./storyblok/table-section";
import { TableColumnSection } from "./storyblok/table-column-section";
import { ImageBlock } from "./storyblok/image-block";
import { SliderComponent } from "./storyblok/slider-component";
import { TextBtn } from "./storyblok/text-btn";
import { FAQSection } from "./storyblok/faq-section";
import { PriceBlock } from "./storyblok/price-block";
import { DropdownContent } from "./storyblok/dropdown-content";
import { MenuBlock } from "./storyblok/menu-block";
import { InfoBlock } from "./storyblok/info-block";
import { LunchBlock } from "./storyblok/lunch-block";
import { InfoForm } from "./info-and-form";

storyblokInit({
  components: {
    page: page,
    hero: HeroSection,
    image_text: ImageSection,
    space: Space,
    CTA: CTA,
    columns: Columns,
    form: ContactForm,
    card_columns: CardColumns,
    table: TableSection,
    table_columns: TableColumnSection,
    img_block: ImageBlock,
    slider: SliderComponent,
    text_button: TextBtn,
    faq: FAQSection,
    price_block: PriceBlock,
    dropdown: DropdownContent,
    menu_block: MenuBlock,
    info_block: InfoBlock,
    lunch_block: LunchBlock,
    info_and_form: InfoForm,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
