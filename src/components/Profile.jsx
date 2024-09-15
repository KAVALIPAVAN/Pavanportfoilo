import React from "react";
import profileim from '../assets/about.jpg'
import { motion } from "framer-motion";

const Profile = () => {
  return <div className="">
    <div className="flex flex-col md:flex-row p-8 mt-3  gap-9 border-b-2 border-blue-200 m-auto w-[80%] justify-between">
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
     className="w-full md:w-1/2 ">
        <h2 className=" tracking-tighter text-5xl p-2 m-auto">KAVALI PAVAN</h2>
        <p>Hi, I’m  a third-year Computer Science student with a deep passion for front-end development, I thrive on creating dynamic and responsive web experiences. My expertise spans modern technologies including Tailwind CSS, Framer Motion, GSAP, ShadCN, Formik and more allowing me to craft seamless, interactive designs with precision. I take pride in blending creativity with technical skills to build engaging and user-centric digital solutions.</p>
    </motion.div>
    <motion.div 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className=" md:w-1/2 flex justify-center md:justify-end"><img src={profileim} alt="" className="max-w-full h-auto" />
    </motion.div>
    </div>
  </div>;
};

export default Profile;
