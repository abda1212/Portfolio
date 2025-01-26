import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
   <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-blue-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://ostermancron.com/wp-content/uploads/2016/02/blank-profile-picture-973460_640-300x300.png"
        className="w-40 h-40 rounded-full object-cover "
      />


<div className="space-y-10 px-0 md:px-10 text-white">
  <h4 className="text-4xl font-semibold">
    Here is a{" "}
    <span className="underline decoration-[blue]/50">
      little
    </span>{" "}
    background about my self
  </h4>
  <p className=" text-base">
  Hello! My name is Abdullahi Dayib. As an individual, I am proactive, solution-oriented, and able to prioritize between needs and opportunities. I make things happen by being attentive, communicative, and having clear structures for planning and follow-up. I possess strong strategic abilities and have a keen interest in societal development and the world around us. I am curious and eager to broaden my knowledge by learning new things. Through personal commitment, I have the ability to effectively drive work forward in alignment with organizational needs. I am motivated by the opportunity to support my colleagues in an educational and pedagogical way. As a person, I am both private and responsible in my professional role. Additionally, I am creative and structured, empathetic, and meticulous in how I approach both my work and interactions. With a quick grasp of situations, I am capable of focusing on both the big picture and individual details, ensuring that customers/clients and colleagues feel welcomed.
  </p>
</div>
    </motion.div>
    
  );
}
