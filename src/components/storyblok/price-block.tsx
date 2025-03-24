export const PriceBlock = ({ blok }: any) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <h2 className="text-[25px] font-bold pb-4">{blok.title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-3 mb-10 lg:mb-20 w-[90%] mx-auto">
        {blok.price.map((item: any) => (
          <div className="text-center">
            <h3 className="uppercase text-[#B71B2F] mb-2 text-[22px] font-extrabold">
              {item.title}
            </h3>
            <div className="text-[22px] font-normal">{item.first_price}</div>
            <div className="text-[22px] font-normal">{item.second_price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
