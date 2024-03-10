import React, { useEffect, useState } from "react";
import { motion, MotionStyle } from "framer-motion";

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
  background: "url(https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D)",
  backgroundSize: "cover",
};

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
    background: ` center no-repeat url(/images/portfolio/${imageBefore})`,
    backgroundSize: "cover", // This ensures the background covers the entire container
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
    background: `center url(/images/portfolio/${imageAfter})`,
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
