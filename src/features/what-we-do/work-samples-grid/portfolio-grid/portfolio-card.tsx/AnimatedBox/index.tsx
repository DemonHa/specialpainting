import React, { useEffect, useState } from "react";
import { motion, MotionStyle, useAnimate } from "framer-motion";
import { useWindowDimensions } from "../../../state/use-window-dimensions";

const AnimatedBox = ({ imageAfter, imageBefore }: { imageAfter: string, imageBefore: string }) => {

  const [hover, setHover] = useState(false);
  const { width } = useWindowDimensions();
  const [rotateScope, animateRotate] = useAnimate();
  const [moveScope, animateMove] = useAnimate();

  const rotateAnimate = async (hover: boolean) => {
    if (hover) {
      await animateRotate(rotateScope.current, { rotate: 400 }, { duration: 2.5, ease: "easeIn" })
      await animateRotate(rotateScope.current, { background: "radial-gradient(circle at center, transparent 100%, rgba(244, 67, 54, 1) 70%)" }, { duration: 2.5, ease: "easeInOut" })
    } else {
      await animateRotate(rotateScope.current, { background: "radial-gradient(circle at center, transparent 35%, rgba(244, 67, 54, 1) 70%)" }, { duration: 1.5, ease: "easeInOut" })
      animateRotate(rotateScope.current, { rotate: 0 }, { duration: 2.5, ease: "easeInOut" })
    }
  };
  
  const moveAnimate = async(hover: boolean) => {
    if(hover){
      animateMove(moveScope.current, { translateY: 0 }, {duration: 2.5, ease: "easeInOut"})
    }else{
      animateMove(moveScope.current, { translateY: "-100%" }, {duration: 2.5, ease: "easeInOut", delay: 1.5})
    }
  }

  useEffect(() => {
    rotateAnimate(hover);
    moveAnimate(hover);
  }, [hover])

  const rotatingPartStyle: MotionStyle = {
    position: "absolute",
    bottom: '-5%',
    height: width > 1024 ? "200%" : width <= 768 ? "200%" : "180%",
    width: width > 1024 ? "160%" : width <= 768 ? "145%" : "150%",
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
        ref={moveScope}
        style={movingPartStyle}
        initial={{
          translateY: "-100%"
        }}
      >
        <motion.div
          ref={rotateScope}
          style={rotatingPartStyle}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedBox;
