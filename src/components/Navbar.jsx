import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return <div className="backdrop:blur-md bg-transparent w-screen p-10 m-auto">

 <div className=" w-full flex justify-between m-auto">
        <motion.h2 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:2}}
        className=" tracking-tighter font-extrabold text-xl">KAVALI PAVAN</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:2}}
        className=" flex justify-between gap-4">
        <a href="https://github.com/KAVALIPAVAN" target="blank"><FaGithub className=" text-6xl "/></a>
        <a href="https://www.linkedin.com/in/kavali-pavan-598515274/" target="blank">
        <FaLinkedin className=" text-6xl" /></a>
        </motion.div>

        </div>
   
  </div>;
};

export default Navbar;

