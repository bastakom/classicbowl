import { render } from "storyblok-rich-text-react-renderer";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";

export const MenuBlock = ({ blok }: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  console.log(blok);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleSelectedId = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="flex justify-center pt-10">
      {/*For desktop */}
      <div
        className={`hidden lg:grid grid-cols-2  w-[70%] p-24 gap-12 rounded-xl ${
          blok.bg_color ? "bg-[#660708] text-white" : "bg-white text-black"
        }`}
      >
        {blok.field.map((item: any, index: number) => (
          <div
            className={` ${index === 2 ? "-mt-72" : ""} ${
              !blok.bg_color ? "-mt-44" : ""
            }`}
          >
            <div>
              <div className="text-[25px] uppercase font-bold italic">
                {item.title}
              </div>
              <div className="menu-content mt-2 mb-4">
                {render(item.content)}
              </div>
            </div>
            <div
              className={`${
                item.full_width && "grid grid-cols-2 w-[1000px] gap-12 "
              }`}
            >
              {item.menu_item.map((el: any) => (
                <div className="flex justify-between mb-6">
                  <div>
                    <div className="text-[22px] font-semibold">{el.title}</div>
                    <div className="text-[16px] font-normal w-[90%]">
                      {el.description}
                    </div>
                  </div>
                  <div className="text-[22px] font-semibold">{el.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* For mobile */}

      <div className="flex flex-col lg:hidden text-white bg-[#660708] py-12 p-6 pb-20">
        {blok.field.map((item: any, index: number) => (
          <div className="mt-6" key={index}>
            <div
              className="flex flex-col items-center justify-center gap-2"
              onClick={() => {
                handleDropdown();
                handleSelectedId(item._uid);
              }}
            >
              <div className="flex justify-center items-center">
                <div className="text-[25px] uppercase font-bold italic">
                  {item.title}
                </div>
                <MdOutlineArrowDropDown
                  fontSize={50}
                  className={`${
                    openDropdown && selectedId == item._uid
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </div>
              <div className="menu-content mt-2 mb-4">
                {render(item.content)}
              </div>
              <hr className="border-t-[0.5px] border-white opacity-100 w-[14%]" />
            </div>

            <div
              className={`${
                openDropdown && selectedId == item._uid ? "block" : "hidden"
              }`}
            >
              {item.menu_item.map((el: any) => (
                <div className="flex justify-between mb-6 mt-8">
                  <div>
                    <div className="w-[70%] text-[18px] lg:text-[22px] font-semibold">
                      {el.title}
                    </div>
                    <div className="text-[16px] font-normal w-[90%]">
                      {el.description}
                    </div>
                  </div>
                  <div className="text-[18px] w-[25%] lg:text-[22px] font-semibold">
                    {el.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
