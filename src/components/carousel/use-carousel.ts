import { useRef, useState, useCallback } from "react";
import Slider, { Settings } from "react-slick";

// ----------------------------------------------------------------------

export default function useCarousel(props?: Settings) {
  const carouselRef = useRef<Slider | null>(null);

  const [currentIndex, setCurrentIndex] = useState(props?.initialSlide || 0);

  const [nav, setNav] = useState<Slider | undefined>(undefined);

  const onSetNav = useCallback(() => {
    if (carouselRef.current) {
      setNav(carouselRef.current);
    }
  }, []);

  const onPrev = useCallback(() => {
    carouselRef.current?.slickPrev();
  }, []);

  const onNext = useCallback(() => {
    carouselRef.current?.slickNext();
  }, []);

  const onTogo = useCallback((index: number) => {
    carouselRef.current?.slickGoTo(index);
  }, []);

  const carouselSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props,
    afterChange: (current: number) => {
      setCurrentIndex(current);
      props?.afterChange?.(current);
    },
  };

  return {
    nav,
    carouselRef,
    currentIndex,
    carouselSettings,
    onPrev,
    onNext,
    onTogo,
    onSetNav,
    setCurrentIndex,
  };
}
