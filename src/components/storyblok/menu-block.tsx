import { render } from "storyblok-rich-text-react-renderer";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";
import { ContactForm } from "../ui/form/contact-form";
import { GoPlus } from "react-icons/go";

export const MenuBlock = ({ blok, settings, props }: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleSelectedId = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div>
      <div
        className={`flex justify-center  ${
          blok.bigger_field ? "pt-10" : "pt-10 lg:pt-20"
        } `}
      >
        {/*For desktop */}
        <div
          className={`hidden  rounded-xl ${
            blok.bg_color ? "bg-[#660708] text-white" : "bg-white text-black"
          } ${
            blok.bigger_field
              ? "lg:flex lg:w-[80%] p-10"
              : "lg:grid grid-cols-2  w-[70%] p-24 gap-12"
          }`}
        >
          {blok.field.map((item: any, index: number) => (
            <div
              className={` ${index === 2 ? "-mt-72" : ""} ${
                !blok.bg_color ? "-mt-[170px]" : ""
              } ${blok.bigger_field && "lg:w-[70%] mx-auto py-16"}`}
            >
              <div
                className={`${
                  blok.bigger_field &&
                  "lg:flex lg:flex-col lg:items-center mb-10"
                }`}
              >
                <div className="text-[25px] uppercase font-bold italic ">
                  {item.title}
                </div>
                <div
                  className={`menu-content mt-2 mb-4 ${
                    blok.bigger_field && "menu text-center w-[30%]"
                  }`}
                >
                  {render(item.content)}
                </div>
              </div>
              <div
                className={`${
                  item.full_width && "grid grid-cols-2 w-[58vw] gap-12 "
                }`}
              >
                {item.menu_item.map((el: any) => (
                  <div className={`flex justify-between mb-6 `}>
                    <div
                      className={`${blok.bigger_field ? "w-[50%]" : "w-[80%]"}`}
                    >
                      <div className="text-[22px] font-semibold">
                        {el.title}
                      </div>
                      <div className="text-[16px] font-normal w-[90%]">
                        {el.description}
                      </div>
                    </div>
                    <div className="text-[22px] font-normal">{el.price}</div>
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
                <div className="flex justify-center items-center gap-5">
                  <div
                    className={`text-[25px] uppercase font-bold italic ${
                      blok.bigger_field
                        ? "text-center lg:text-start"
                        : "text-start"
                    } `}
                  >
                    {item.title}
                  </div>

                  <GoPlus
                    fontSize={30}
                    className="shrink-0 text-black bg-[#F5F3F4] rounded-full p-[5px] transition-transform duration-200 "
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
                    <div className="w-[60%] lg:w-[100%]">
                      <div className="w-[100%] lg:w-[70%] text-[18px] lg:text-[22px] font-semibold">
                        {el.title}
                      </div>
                      <div className="text-[16px] font-normal w-[90%]">
                        {el.description}
                      </div>
                    </div>
                    <div className="text-[18px] lg:w-[25%] lg:text-[22px] font-semibold">
                      {el.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {props.show_form && <ContactForm settings={settings} />} */}
    </div>
  );
};
