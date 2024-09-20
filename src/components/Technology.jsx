import React from "react";
import { SiExpress, SiMongodb, SiMysql, SiPostman, SiShadcnui, SiSocketdotio, SiWebrtc } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoDocker, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import {  animate, motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { TbLetterC } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FiFramer } from "react-icons/fi";

const Technology = () => {
  return <div className="">
  <div
  className="border-b border-blue-200 w-[80%] m-auto pb-24">
    <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}} 
    className=" flex flex-wrap items-center justify-center gap-3">
        <div
        className=" rounded-2xl border-2 border-neutral-800  p-3 text-center">
            <RiReactjsLine className=" text-7xl text-cyan-600"/>  
            <h4>Reactjs</h4>
        </div>
        <div 
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <IoLogoPython  className=" text-7xl text-yellow-200"/>
            <h4>Python</h4>
        </div>
        <div 
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <FaJava  className=" text-7xl text-blue-900"/>
            <h4>Java</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <TbLetterC className=" text-7xl text-[#4515e3]"/>
            <h4>C</h4>
        </div>
        <div 
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <FaNodeJs className=" text-7xl text-green-500"/>
            <h4>Java Script</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <RiTailwindCssFill  className=" text-7xl text-cyan-500"/>
            <h4>TailwindCss</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <FiFramer  className=" text-7xl text-black"/>
            <h4>Framer</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiRedux  className=" text-7xl text-violet-700"/>
            <h4>Redux</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <FaGithub  className=" text-7xl text-black"/>
            <h4>Git & Github</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiShadcnui  className=" text-7xl text-cyan-700"/>
            <h4>Shadcn-ui</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <IoLogoFirebase  className=" text-7xl text-yellow-500"/>
            <h4>Firebase</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <FaBootstrap  className=" text-7xl text-[#9333ea]"/>
            <h4>Bootstrap</h4>
        </div>

        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiMysql  className=" text-7xl "/>
            <h4>MYSQL</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <RiNextjsLine  className=" text-7xl text-[9333ea]"/>
            <h4>Next.js</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiPostman  className=" text-7xl text-[#ea6133]"/>
            <h4>Postman</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiMongodb  className=" text-7xl text-[#3baa3d]"/>
            <h4>Mongodb</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <IoLogoDocker  className=" text-7xl text-[#33ccea]"/>
            <h4>Docker</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiExpress  className=" text-7xl text-[9333ea]"/>
            <h4>Express.js</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiWebrtc  className=" text-7xl text-[9333ea]"/>
            <h4>Webrtc</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <SiSocketdotio  className=" text-7xl text-[9333ea]"/>
            <h4>Socketio</h4>
        </div>
        {/* <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <IoLogoDocker  className=" text-7xl text-[#9333ea]"/>
            <h4>Bootstrap</h4>
        </div>
        <div
        className=" rounded-2xl border-2 border-neutral-800 p-3 text-center">
            <IoLogoDocker  className=" text-7xl text-[#9333ea]"/>
            <h4>Bootstrap</h4>
        </div> */}

    </motion.div>
    </div>
    </div>;
};

export default Technology;
