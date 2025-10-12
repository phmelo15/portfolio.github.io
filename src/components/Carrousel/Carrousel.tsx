"use client";

import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";

interface ICarrousel {
  imagesArray: (string | StaticImageData)[];
}

const Carousel = ({ imagesArray }: ICarrousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [stop, setStop] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  }, [imagesArray.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!stop) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [stop, nextSlide]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            prevSlide();
            setStop(true);
          }}
          className="absolute left-0 p-2"
        >
          <FaCircleArrowLeft color="rgba(255,255,255,0.1)" />
        </button>

        <div className="overflow-hidden w-full">
          <Image
            src={imagesArray[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="rounded-t-[18px]"
            width={600}
            height={400}
          />
        </div>

        <button
          onClick={() => {
            nextSlide();
            setStop(true);
          }}
          className="absolute right-0 p-2"
        >
          <FaArrowCircleRight color="rgba(255,255,255,0.1)" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
