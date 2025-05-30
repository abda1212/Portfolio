import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
function Hero() {
    const color = useMotionValue(COLORS_TOP[0]);
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Abdullahi Dayib ",
            "A Passionate Developer ",
            "Loves to code in JavaScript,React and much more",
            " And building Cool Stuff ",
            "Let's Collaborate! ",
        ],
        loop: true,
        delaySpeed: 2000,
      });


    useEffect(() => {
      animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      });
    }, []);
 
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
 
    return (
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen -mt-20 pt-20 place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >


        <div className="relative z-10 flex flex-col items-center">
 
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          <span>{text}</span>
          <Cursor
            cursorColor='blue'
          />
          </h1>
       
          <motion.button
  style={{
    border,
    boxShadow,
  }}
  whileHover={{
    scale: 1.015,
  }}
  whileTap={{
    scale: 0.985,
  }}
  onClick={() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="group relative mt-10 flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
>
  About me
  <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
</motion.button>
        </div>
 
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    );
}


export default Hero
