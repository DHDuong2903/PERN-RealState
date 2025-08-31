import { slider } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useEffect, useRef, useState } from "react";

const Sliderbanner = () => {
  const [api, setApi] = useState(null);

  const intervalRef = useRef();

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      api?.scrollNext();
    }, 3000);
  };
  useEffect(() => {
    if (!api) return;
    startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);
  return (
    <div>
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {slider.map((el) => (
            <CarouselItem key={el.id}>
              <img src={el.imageUrl} alt="Slider" className="w-full aspect-[3/1] object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default Sliderbanner;
