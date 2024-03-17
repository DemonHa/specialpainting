import React, { useState } from "react";
import { motion, MotionStyle } from "framer-motion";
import { useWindowDimensions } from "../../../state/use-window-dimensions";

const riseAnimation = {
  animate: { translateY: 0 },
  initial: { translateY: "-100%" },
  transition: { duration: 2.5, ease: "easeInOut" },
};

const rotateAnimation = {
  initial: { rotate: 0 },
  animate: { rotate: 400 },
  transition: { duration: 2.5, ease: "easeInOut" },
};

const AnimatedBox = ({ imageAfter, imageBefore }: { imageAfter: string, imageBefore: string }) => {
  
  const [hover, setHover] = useState(false);
  const {width} = useWindowDimensions();

  const rotatingPartStyle: MotionStyle = {
    position: "absolute",
    bottom: '-5%',
    height: width > 1024 ? "200%" : width <= 768 ? "200%":"180%", 
    width: width > 1024 ? "160%" : width <= 768 ? "145%":"150%",
    border: "5rem solid rgba(244, 67, 54, 1)",
    borderRadius: width > 768 ? "35%" : "48%",
    background: "radial-gradient(circle at center, transparent 35%, rgba(244, 67, 54, 1) 70%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const boxStyle: MotionStyle = {
    height: "inherit",
    width: "100%",
    maxWidth: '45rem',
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
    cursor: "url('/images/paint-brush.png'), pointer"
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
    backgroundSize: `contain`, 
  };
  

  return (
    <motion.div
      style={boxStyle}
      onClick={() => setHover((prev) => !prev)}
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
