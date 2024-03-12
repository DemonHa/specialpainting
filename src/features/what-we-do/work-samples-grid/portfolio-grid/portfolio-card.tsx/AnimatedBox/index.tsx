import React, { useEffect, useState } from "react";
import { motion, MotionStyle } from "framer-motion";

const rotatingPartStyle: MotionStyle = {
  height: "150%",
  width: "150%",
  border: "5rem solid purple",
  borderRadius: "35%",
  background: "radial-gradient(circle at center, transparent 50%, rgba(128, 0, 128, 1) 70%)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const riseAnimation = {
  initial: { translateY: 0 },
  animate: { translateY: "-100%" },
  transition: { duration: 3, ease: "easeInOut" },
};

const rotateAnimation = {
  initial: { rotate: 0 },
  animate: { rotate: 400 },
  transition: { duration: 2, ease: "easeInOut" },
};

const AnimatedBox = ({ imageAfter, imageBefore }: { imageAfter: string, imageBefore: string }) => {
  
  const [hover, setHover] = useState(false);

  const boxStyle: MotionStyle = {
    height: "30rem",
    width: "100%",
    position: "relative",
    outline: 0,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(/images/portfolio/${imageBefore})`,
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
  };

  const movingPartStyle: MotionStyle = {
    paddingBottom: '10rem',
    position: "absolute",
    height: "200%",
    width: "200%",
    bottom: "-50%",
    left: "-50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundImage: `url(/images/portfolio/${imageAfter})`, 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto", 
  };
  

  return (
    <motion.div
      style={boxStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        style={movingPartStyle}
        initial={riseAnimation.initial}
        animate={hover ? riseAnimation.animate : riseAnimation.initial}
        transition={riseAnimation.transition}
      >
        <motion.div
          style={rotatingPartStyle}
          initial={rotateAnimation.initial}
          animate={hover ? rotateAnimation.animate : rotateAnimation.initial}
          transition={rotateAnimation.transition}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedBox;
