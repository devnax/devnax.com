"use client";
import Box from "@xanui/ui/Box";
import {
   Children,
   useEffect,
   useRef,
   useState,
   forwardRef,
   useImperativeHandle,
} from "react";

export type CarouselRef = {
   next: () => void;
   prev: () => void;
   goTo: (index: number) => void;
   getIndex: () => number;
};

type CarouselProps = {
   children: React.ReactNode;
   slidesToShow?: number;
   slidesToScroll?: number;
   gap?: number;
   infinite?: boolean;
   autoplay?: boolean;
   interval?: number;
};

const Carousel = forwardRef<CarouselRef, CarouselProps>(({
   children,
   slidesToShow = 3,
   slidesToScroll = 1,
   gap = 0,
   infinite = true,
   autoplay = false,
   interval = 3000,
}, ref) => {
   gap = gap * 8
   const items = Children.toArray(children);
   const total = items.length;

   const clonesBefore = infinite ? items.slice(-slidesToShow) : [];
   const clonesAfter = infinite ? items.slice(0, slidesToShow) : [];
   const trackItems = [...clonesBefore, ...items, ...clonesAfter];

   const [index, setIndex] = useState(infinite ? slidesToShow : 0);
   const [isAnimating, setIsAnimating] = useState(true);

   const trackRef = useRef<HTMLDivElement>(null);

   // =========================
   // 🔥 Core Methods
   // =========================

   const next = () => {
      if (isAnimating) setIndex((prev) => prev + slidesToScroll);
   };
   const prev = () => {
      if (isAnimating) setIndex((prev) => prev - slidesToScroll);
   };
   const goTo = (i: number) => setIndex(infinite ? i + slidesToShow : i);
   const getIndex = () => infinite ? index - slidesToShow : index

   // =========================
   // 🔥 Expose Ref API
   // =========================

   useImperativeHandle(ref, () => ({
      next,
      prev,
      goTo,
      getIndex,
   }));

   // autoplay
   useEffect(() => {
      if (!autoplay) return;
      const id = setInterval(next, interval);
      return () => clearInterval(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [index, autoplay]);

   // infinite jump fix
   useEffect(() => {
      if (!infinite) return;

      if (index >= total + slidesToShow) {
         // reached "end clones", jump back instantly
         const newIndex = slidesToShow;
         setTimeout(() => {
            setIsAnimating(false); // disable animation
            setIndex(newIndex);     // jump
         }, 500); // must match your CSS transition

         setTimeout(() => {
            setIsAnimating(true); // re-enable animation
         }, 510);
      }

      if (index < slidesToShow) {
         // reached "start clones", jump to last real slide
         const newIndex = total + slidesToShow - slidesToScroll;
         setTimeout(() => {
            setIsAnimating(false);
            setIndex(newIndex);
         }, 500);

         setTimeout(() => {
            setIsAnimating(true);
         }, 510);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [index]);

   // re-enable animation
   useEffect(() => {
      if (!isAnimating) {
         requestAnimationFrame(() => setIsAnimating(true));
      }
   }, [isAnimating]);

   // swipe
   const translate = (index * 100) / slidesToShow;

   const startX = useRef(0);
   const isDragging = useRef(false);

   const handleStart = (x: number) => {
      startX.current = x;
      isDragging.current = true;
   };

   const handleEnd = (x: number) => {
      if (!isDragging.current) return;

      const diff = x - startX.current;

      if (diff > 50) prev();
      else if (diff < -50) next();

      isDragging.current = false;
   };
   return (
      <Box
         position={"relative"}
         overflow={"hidden"}
         width={"100%"}
         sx={{
            touchAction: "pan-y",
         }}

         onPointerDown={(e: any) => handleStart(e.clientX)}
         onPointerUp={(e: any) => handleEnd(e.clientX)}

         // Touch (mobile)
         onTouchStart={(e: any) => handleStart(e.touches[0].clientX)}
         onTouchEnd={(e: any) => handleEnd(e.changedTouches[0].clientX)}
      >
         <Box
            ref={trackRef}
            display={"flex"}
            gap={2}
            style={{
               transform: `translateX(-${translate}%)`,
               transition: isAnimating ? "transform 500ms ease" : "none",
               gap: `${gap}px`,
            }}
         >
            {trackItems.map((child, i) => (
               <Box
                  key={i}
                  sx={{
                     width: `calc(${100 / slidesToShow}% - ${gap}px)`,
                     flexShrink: 0,
                  }}
                  userSelect={"none"}
                  pointerEvents={"none"}

               >
                  {child}
               </Box>
            ))}
         </Box>
      </Box>
   );
});

Carousel.displayName = "Carousel";

export default Carousel;