import React from "react";
import { motion } from "framer-motion";
import profilImg from '../images/profil.png'; 


export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center"
    >
      {/* Rubrik ABOUT */}
      <h3 className="absolute top-6 sm:top-10 md:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-blue-500 text-sm sm:text-xl">
        About
      </h3>

      {/* Profilbild */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={profilImg}
        alt="Profile"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full object-cover mt-16 sm:mt-12"
      />

      {/* Textinnehåll */}
      <div className="space-y-6 px-2 sm:px-6 md:px-10 mt-6 text-white text-sm sm:text-base">
        <h4 className="text-lg sm:text-2xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[blue]/50">little</span>{" "}
          background about my self
        </h4>
        <p>
        My name is Abdullahi Dayib, and I’m currently completing my B.Sc. in Software Development at University West. I have hands-on experience building web and mobile applications using React, Firebase, .NET, and real-time sensor systems with Arduino and Python.

During my internship at Trollhättans Stad, I contributed to a flood detection system and worked in an agile team focused on real-time data monitoring. I’m passionate about fullstack development, UI/UX design, and constantly improving my skills—currently learning Docker and Kubernetes, with Azure certifications planned.

I would welcome the opportunity to bring my technical skills and motivation to your team. Thank you for your time and consideration.        </p>
      </div>
    </motion.div>
  );
}
