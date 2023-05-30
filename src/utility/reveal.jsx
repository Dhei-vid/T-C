import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, delay, y1, y2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  });

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y1 },
          visible: { opacity: 1, y: y2 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
