import { useState } from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

export const OppetTider = ({ blok }: any) => {
  const [activeItem, setActiveItem] = useState(0); // Default to first item

  return (
    <div className="container my-14">
      <div className="flex gap-4 justify-center mb-14">
        {blok?.fields?.map((item: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveItem(index)}
            className={`px-4 py-2 text-center uppercase italic font-extrabold ${activeItem === index
              ? 'text-black'
              : 'text-gray-400 hover:bg-gray-300'
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Active content display */}
      <div className="lg:max-w-[30%] mx-auto">
        {blok?.fields?.[activeItem] && (
          <div className="p-4 bg-gray-50 rounded flex flex-col gap-4">
            <h2 className="mb-5 text-center text-xl uppercase">
              {blok.fields[activeItem].title}
            </h2>
            <div className="flex justify-between border-b pb-4">
              <span>Måndag</span>
              <span>{blok.fields[activeItem].mondag}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Tisdag</span>
              <span>{blok.fields[activeItem].tisdag}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Onsdag</span>
              <span>{blok.fields[activeItem].onsdag}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Torsdag</span>
              <span>{blok.fields[activeItem].torsdag}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Fredag</span>
              <span>{blok.fields[activeItem].fredag}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Lördag</span>
              <span>{blok.fields[activeItem].lordag}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Söndag</span>
              <span>{blok.fields[activeItem].sondag}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
