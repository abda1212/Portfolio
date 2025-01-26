import React from 'react';
import { motion } from 'framer-motion';

function Skill({ directionLeft, imgUrl, level }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -150 : 150,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={imgUrl}
        className="rounded-full border border-gray-500 object-cover w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-base xl:text-lg font-bold text-black opacity-100">{level}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
