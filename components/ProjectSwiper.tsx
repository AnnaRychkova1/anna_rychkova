'use client';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectSwiper({ images }: { images: string[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[1356/858]">
              <Image
                src={img}
                alt={`Project image ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* LEFT SIDE */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="flex absolute left-0 top-0 bottom-8 z-10 w-1/2 cursor-pointer transition-all duration-300 items-center justify-start pl-1 group"
        aria-label="Previous slide"
      >
        <div className="rounded-full bg-white/10 p-1 sm:p-2 opacity-5 transition-all duration-300 group-hover:opacity-90">
          <FaChevronLeft className="text-[var(--dark-accent)] w-5 h-5 sm:w-7 sm:h-7" />
        </div>
      </button>

      {/* RIGHT SIDE */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="flex absolute right-0 top-0 bottom-8 z-10 w-1/2 cursor-pointer transition-all duration-300 items-center justify-end pr-1 group"
        aria-label="Next slide"
      >
        <div className="rounded-full bg-white/10 p-1 sm:p-2 opacity-5 transition-all duration-300 group-hover:opacity-90">
          <FaChevronRight className="text-[var(--dark-accent)] w-5 h-5 sm:w-7 sm:h-7" />
        </div>
      </button>
    </div>
  );
}
