import { useState } from "react";

export const LunchBlock = ({ blok }: any) => {
  const [item, setItem] = useState(1);

  return (
    <div className="mt-10 lg:mt-0 flex flex-col justify-center items-center mb-20">
      <div className="flex gap-16 uppercase text-[16px] italic font-extrabold">
        <div
          className={`cursor-pointer transition-colors ${
            item === 1 ? "text-[#666666]" : "text-black"
          }`}
          onClick={() => setItem(1)}
        >
          {blok.first_week}
        </div>
        <div
          className={`cursor-pointer transition-colors ${
            item === 2 ? "text-[#666666]" : "text-black"
          }`}
          onClick={() => setItem(2)}
        >
          {blok.second_week}
        </div>
      </div>

      <div className="mt-10 lg:mt-20 flex flex-col gap-6 text-center">
        {item === 1
          ? blok.first_field.map((item: any, index: number) => (
              <div key={index}>
                <h3 className="text-[25px] font-bold italic">{item.title}</h3>
                <div className="text-[22px] font-semibold">{item.dish}</div>
                <div className="mb-4">{item.description}</div>
                <div className="text-[22px] font-semibold">
                  {item.second_dish}
                </div>
                <div>{item.second_description}</div>
              </div>
            ))
          : blok.second_field.map((item: any, index: number) => (
              <div key={index}>
                <h3 className="text-[25px] font-bold italic">{item.title}</h3>
                <div className="text-[22px] font-semibold">{item.dish}</div>
                <div className="mb-4">{item.description}</div>
                <div className="text-[22px] font-semibold">
                  {item.second_dish}
                </div>
                <div>{item.second_description}</div>
              </div>
            ))}
      </div>
    </div>
  );
};
