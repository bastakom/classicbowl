import { render } from "storyblok-rich-text-react-renderer";
import { Bookingform } from "./ui/form/booking.form";

export const InfoForm = ({ blok, settings }: any) => {
  return (
    <div
      id="booking-form"
      className="grid grid-cols-2 bg-[#660708] pt-20  pr-11 my-20"
    >
      <div className=" flex flex-col items-center text-white">
        <h2 className="text-[35px] font-extrabold uppercase italic">
          {blok.title}
        </h2>
        <div className="mt-5 w-[50%]">{render(blok.content)}</div>
      </div>

      <Bookingform settings={settings} blok={blok} />
    </div>
  );
};
