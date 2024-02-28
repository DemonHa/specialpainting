import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type props = {
  text: string;
  className?: string;
};

const TextAnimationWrapper = ({ text, className }: props) => {
  const controls = useAnimation();
  const initial = text;
  const [currentText, setCurrentText] = useState(initial);

  useEffect(() => {
    controls
      .start({
        opacity: [1, 0],
        transition: { duration: 0.3 },
      })
      .then(() => {
        setCurrentText(text);
      })
      .then(() => {
        controls.start({
          opacity: [0, 1],
          transition: { duration: 0.2 },
        });
      });
  }, [text, controls, initial]);

  return (
    <motion.div className={className} animate={controls}>
      {currentText}
    </motion.div>
  );
};

export default TextAnimationWrapper;
