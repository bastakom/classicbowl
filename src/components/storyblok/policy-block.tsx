import { render } from "storyblok-rich-text-react-renderer";

export const PolicyBlock = ({ blok }: any) => {
  return (
    <>
      <div className="bg-[#660708] w-[100%] h-[150px] lg:h-[200px]"></div>
      <div className="py-14 lg:py-20 w-[95%] mx-auto">
        <h1 className="uppercase text-[25px] lg:text-[35px] mb-4 lg:mb-10 font-extrabold italic">
          {blok.title}
        </h1>
        <div>{render(blok.content)}</div>
      </div>
    </>
  );
};
