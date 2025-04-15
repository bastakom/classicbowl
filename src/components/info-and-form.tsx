import { render } from "storyblok-rich-text-react-renderer";
import { Bookingform } from "./ui/form/booking.form";

export const InfoForm = ({ blok, settings, title, formTitle }: any) => {
  return (
    <div
      id="booking-form"
      className="grid lg:grid-cols-2 bg-[#660708] p-4 lg:pt-20 pt-16 lg:my-20 justify-center lg:px-40"
    >
      <div className="flex flex-col  text-white lg:w-[70%] ">
        <h2 className="text-[25px] lg:text-[35px] font-extrabold uppercase italic ">
          {blok?.title || title || ""}
        </h2>
        <div className="mt-2 lg:mt-5 info-form">{render(blok?.content)}</div>
      </div>
      <Bookingform
        settings={settings}
        blok={blok}
        label={blok?.label_textarea ?? ""}
        formTitle={formTitle}
      />
    </div>
  );
};
