import { useEffect, useRef, useState } from "react";
import s from "./fadeScroll.module.css";

export const FadeScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver((enteries) => {
  //       enteries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //             setIsVisible(true);
  //           } else {
  //             setIsVisible(false);
  //           }

  //         }
  //       );
  //     });
  //     if (domRef.current) {
  //         observer.observe(domRef.current);
  //       }

  //       return () => {
  //         if (domRef.current) {
  //           observer.unobserve(domRef.current);
  //         }
  //       };
  //   }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  console.log(isVisible);
  return (
    <>
      <div className={s.container1}>Animated Text</div>
      <div className={isVisible ? s.container2 : s.fadeOut} ref={domRef}>
        Animated Text
      </div>
      <div className={s.container1}>Animated Text</div>
    </>
  );
};
