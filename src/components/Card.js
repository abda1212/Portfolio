import React from 'react';
import { motion } from 'framer-motion';

function Card({ title, description, image, demoLink, codeLink, techStack }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Project Thumbnail */}
      <img
        src={image}
        alt={`${title} Thumbnail`}
        className="w-full h-40 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-700 text-gray-300 py-1 px-2 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
