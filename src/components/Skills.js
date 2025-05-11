import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import reactimg from '../images/React.png';
import reactnative from '../images/reactNative.png';
import netCore from '../images/.net core.png';
import expressjs from '../images/Expressjs.png';
import javascript from '../images/javascript.png';
import node from '../images/Node.png';
import postgreSql from '../images/postgreSql.png';
import sqlite from '../images/sqLite.png';
import sqlServer from '../images/sqlServer.png';
import firebase from '../images/Firebase.png'
function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[1000px] xl:px-8 min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[15px] text-blue-500 text-xl">
        Skills
      </h3>
      <h3 className="absolute top-32 uppercase tracking-[2px] text-white text-xs">
        Hover over/press a skill for my skill level 
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
        <Skill directionLeft={false} imgUrl={reactimg} level ={90} />
        <Skill directionLeft={true} imgUrl={javascript} level ={90} />
        <Skill directionLeft={false} imgUrl={reactnative} level ={75}/>
        <Skill directionLeft={true} imgUrl={netCore} level ={90} />
        <Skill directionLeft={false} imgUrl={expressjs} level ={60}/>
        <Skill directionLeft={true} imgUrl={node} level ={50}/>
        <Skill directionLeft={false} imgUrl={postgreSql} level ={60}/>
        <Skill directionLeft={true} imgUrl={sqlite} level ={55}/>
        <Skill directionLeft={false} imgUrl={sqlServer} level ={55}/>
        <Skill directionLeft={true} imgUrl={firebase} level ={65}/>

      </div>
    </motion.div>
  );
}

export default Skills;
