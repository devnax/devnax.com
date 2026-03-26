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

   const next = () => setIndex((prev) => prev + slidesToScroll);
   const prev = () => setIndex((prev) => prev - slidesToScroll);
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
         setTimeout(() => {
            setIsAnimating(false);
            setIndex(slidesToShow);
         }, 500);
      }

      if (index < slidesToShow) {
         setTimeout(() => {
            setIsAnimating(false);
            setIndex(total + slidesToShow - slidesToScroll);
         }, 500);
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
   const currentX = useRef(0);
   const isDragging = useRef(false);

   const onPointerDown = (e: React.PointerEvent) => {
      startX.current = e.clientX;
      isDragging.current = true;
   };

   const onPointerMove = (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      currentX.current = e.clientX;
   };

   const onPointerUp = () => {
      if (!isDragging.current) return;

      const diff = currentX.current - startX.current;

      if (diff > 50) prev();
      else if (diff < -50) next();

      isDragging.current = false;
   };

   return (
      <Box
         position={"relative"}
         overflow={"hidden"}
         width={"100%"}
         onPointerDown={onPointerDown as any}
         onPointerMove={onPointerMove as any}
         onPointerUp={onPointerUp}
         onPointerLeave={onPointerUp} // important!
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