"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Slider from "react-slick";

export const SliderComponent = ({ blok }: any) => {
  const [showPrevArrow, setShowPrevArrow] = useState<boolean>(false);
  const [showNextArrow, setShowNextArrow] = useState<boolean>(true);

  const NextArrow = ({ onClick }: any) => (
    <button
      className="custom-next-arrow"
      onClick={onClick}
      disabled={showNextArrow ? false : true}
    >
      <ArrowRight
        fontSize={"3.5rem"}
        color={showNextArrow ? "black" : "grey"}
      />
    </button>
  );

  const PrevArrow = ({ onClick }: any) => (
    <button
      className="custom-prev-arrow"
      onClick={onClick}
      disabled={showPrevArrow ? false : true}
    >
      <ArrowLeft fontSize={"3.5rem"} color={showPrevArrow ? "black" : "grey"} />
    </button>
  );

  const sliderRef = useRef<Slider>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleSliderChange = (currentSlide: number, slideCount: number) => {
    setShowPrevArrow(currentSlide > 0);
    if (currentSlide + settings.slidesToShow >= slideCount) {
      setShowNextArrow(false);
    } else {
      setShowNextArrow(true);
    }
  };
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`container-section my-14 flex flex-col gap-5 relative`}>
      <h2 className="text-center uppercase text-[25px]">{blok.title}</h2>
      {blok.fields.length > 3 && (
        <div className="flex justify-end gap-2">
          <PrevArrow
            onClick={prevSlide}
            style={{ display: showPrevArrow ? "block" : "none" }}
          />
          <NextArrow onClick={nextSlide} />
        </div>
      )}
      <Slider
        key="1"
        {...settings}
        ref={sliderRef}
        afterChange={(currentSlide: number) =>
          handleSliderChange(currentSlide, blok.fields.length)
        }
      >
        {blok.fields.map((item: any, index: number) => {
          const isLink = item.link?.cached_url;

          const content = (
            <>
              {item.title && (
                <div className="bg-black absolute opacity-30 top-0 h-full w-full z-10" />
              )}
              {item.title && (
                <div className="absolute flex-col gap-5 z-20 h-full w-full text-center flex justify-center items-center text-white">
                  <h3 className="text-[40px] lg:text-[60px] font-extrabold italic">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[16px] font-extrabold uppercase italic">
                      Läs mer
                    </p>
                    <ArrowRight />
                  </div>
                </div>
              )}
              <Image src={item.image.filename} fill alt={item.title} className="object-cover" />
            </>
          );

          return isLink ? (
            <Link
              key={index}
              href={item.link.cached_url}
              className="h-[400px] lg:h-[600px] w-full md:w-[33%] relative"
            >
              {content}
            </Link>
          ) : (
            <div
              key={index}
              className="h-[400px] lg:h-[600px] w-full md:w-[33%] relative"
            >
              {content}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
