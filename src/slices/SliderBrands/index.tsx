"use client";

import { Heading } from "@/components/pieces";
import { Content, asText, isFilled } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Props for `SliderBrands`.
 */
export type SliderBrandsProps = SliceComponentProps<Content.SliderBrandsSlice>;

/**
 * Component for "SliderBrands" Slices.
 */
const SliderBrands = ({ slice }: SliderBrandsProps): JSX.Element => {
  const params = {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 3,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    breakpoints: { "992": { slidesPerView: 6, spaceBetween: 80 } },
    modules: [Autoplay],
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "bg-white-100 py-[38px] md:py-[50px]",
        slice.variation === "dark" && "!bg-primary-0"
      )}
    >
      {isFilled.richText(slice.primary.title) && (
        <Heading
          as="h2"
          size="4xl"
          className="mb-10 text-center text-white-0 md:mb-16"
        >
          {asText(slice.primary.title)}
        </Heading>
      )}
      <div className="w-full">
        <Swiper {...params}>
          {slice.items.map((item, i) => (
            <SwiperSlide key={i} className="mr-6 md:mr-20">
              <PrismicImage
                field={item.image}
                width={item.image.dimensions?.width}
                height={item.image.dimensions?.height}
                alt=""
              ></PrismicImage>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderBrands;
