import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export function ScrollFadeIn({ children, y = 40, duration = 0.7, delay = 0, ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } }
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}