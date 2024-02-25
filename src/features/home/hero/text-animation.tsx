import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";

type props = {
  text: string;
  className?: string;
}

const TextAnimationWrapper = ({ text, className }: props) => {

  const controls = useAnimation();
  const initial = text;
  const [currntText, setCurrntText] = useState(initial);

  useEffect(() => {
    console.log('test');
    
    controls.start({
      opacity: [1, 0],
      transition: { duration: 0.3 }
    })
      .then(() => {
        if(text !== initial){
          setCurrntText(text)
        }
      })
      .then(() => {
        controls.start({
          opacity: [0, 1],
          transition: { duration: 0.2 }
        })
      })
  }, [text, controls])

  return (
    <motion.div className={className} animate={controls}>
      {currntText}
    </motion.div>
  )
}

export default TextAnimationWrapper;