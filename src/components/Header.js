import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
    <div className='flex flex-row items-center'>
    <motion.div
  initial={{
    x: -500,
    opacity: 0,
    scale: 0.5,
  }}
  animate={{
    x: 0,
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1.5,
  }}
>

<SocialIcon url="https://www.linkedin.com/in/abdullahi-dayib-91109a250/ " fgColor='blue' bgColor='transparent' />

<SocialIcon url="https://github.com/abda1212?tab=repositories" 
bgColor='transparent'
fgColor='blue'
 />

</motion.div>

</div>
 </header>
  )
}

export default Header