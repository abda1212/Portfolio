import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Plantbuy from '../images/Plantbuy.png';
import kronox from '../images/logga-kronox.jpg'
import datavisualiser from '../images/DataVisualiser.png'
function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      {/* Title */}
      <h3 className="absolute top-10 sm:top-16 md:top-24 uppercase tracking-[10px] text-blue-500 text-xl md:text-2xl">
        Projects
      </h3>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-24">
        <Card
          title="Kronox Booking App"
          description="A mobile app for booking meeting rooms."
          image={kronox}
          codeLink="https://github.com/abda1212/KronoxBookingApp/tree/main"
          techStack={['React Native', 'Firestore']}
        />
        <Card
          title="PlantBuy"
          description="An online store built with React."
          image={Plantbuy}
          codeLink="https://github.com/abda1212/PlantBuy.git"
          techStack={['React', 'Tailwind CSS', 'Firestore']}
        />
        <Card
          title="Data visualizer"
          description="An webapp that visualise amount of sales."
          image={datavisualiser}
          codeLink="https://github.com/user/portfolio-repo"
          techStack={['React', 'Tailwind CSS']}
        />
      </div>
    </motion.div>
  );
}

export default Projects;
