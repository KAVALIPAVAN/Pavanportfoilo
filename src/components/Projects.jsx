import React from "react";
import netflix from "../assets/netflix.png";
import gemini from "../assets/Gemini.png";
import crypto from "../assets/crypto.png";
import spotify from "../assets/spotify.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b-2 border-blue-200 m-auto pb-2 w-[80%]">
      <div className=" text-center text-4xl mt-4 tracking-tighter mb-4 ">
        PROJECTS
      </div>
      
<a href="https://gemini-clone-steel-zeta.vercel.app/" target="blank">
      <motion.div  
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:-100}}
transition={{duration:2}}
 className="flex flex-wrap cursor-pointer ">
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl  hover:scale-105 ">
          <img src={gemini} alt="" className="sm:w-[25%] sm:h-[25%] w-[60%]  h-[60%] pb-4 m-auto" />
          <div className="flex flex-wrap">
            <h1 className=" font-semibold text-xl mb-2">Gemini-Clone</h1>
            <p className=" text-left">
            Gemini AI Assistant provides intelligent, responsive chatbot interactions with real-time updates and personalized responses. Built with React.js and the Gemini API.
            </p>
            <div className=" flex mt-4 gap-4 flex-wrap ">
                <div className=" rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300 ">React</div>
                <div className=" rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300 ">Gemini-api</div>
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">js</div>
            </div>
          </div>
        </div>
      </motion.div>
      </a>
      <a  href="https://crypto-place-one.vercel.app/" target="blank">
      <motion.div 
      whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:2}}
      className="flex flex-wrap cursor-pointer ">
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl  hover:scale-105 ">
          <img src={crypto} alt="" className="sm:w-[25%] sm:h-[25%] w-[60%]  h-[60%] pb-4 m-auto" />
          <div className="flex flex-wrap">
            <h1 className=" font-semibold text-xl mb-2">Crpto-place</h1>
            <p className=" text-left">
            Crypto-Place is a cutting-edge platform designed for cryptocurrency enthusiasts, featuring a front-end built for an exceptional user experience. The application boasts a responsive design, ensuring that users can seamlessly access and interact with the platform across various devices, from desktops to smartphones. It offers dynamic, interactive dashboards that provide real-time market data, live price charts, and portfolio management tools, all with smooth animations and transitions.
            </p>
            <div className=" flex mt-4 gap-4 flex-wrap ">
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300 ">google charts</div>
                <div className=" rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">api</div>
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300 ">React</div>
            </div>
          </div>
        </div>
      </motion.div>
      </a>
      <a
      href="https://netflix-clone-neon-xi.vercel.app/" target='blank'>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:2}}
      className="flex flex-wrap cursor-pointer ">
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl  hover:scale-105 ">
          <img src={netflix} alt="" className="sm:w-[25%] sm:h-[25%] w-[60%]  h-[60%] pb-4 m-auto" />
          <div className="flex flex-wrap">
            <h1 className=" font-semibold text-xl mb-2">Netflex-Clone</h1>
            <p className=" text-left">
              A Netflix clone web application built using Firebase for seamless
              authentication, real-time database management, and secure data
              storage. This project replicates the core functionalities of
              Netflix, including user authentication, browsing a dynamic catalog
              of movies and TV shows, and responsive UI. With Firebase's
              powerful backend services, the app ensures smooth performance,
              user-specific content handling, and scalability. This clone serves
              as a demonstration of modern web development techniques, combining
              front-end design with robust backend integration.
            </p>
            <div className=" flex mt-4 gap-4 flex-wrap ">
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">firebase</div>
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">api</div>
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">React</div>
            </div>
          </div>
        </div>
      </motion.div>
      </a>

      <a href="https://spotify-clone-rho-rust-86.vercel.app/" target="blank">
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:2}}
       className="flex flex-wrap cursor-pointer mb-3">
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl  hover:scale-105 ">
          <img src={spotify} alt="" className="sm:w-[25%] sm:h-[25%] w-[60%]  h-[60%] pb-4 m-auto" />
          <div className="flex flex-wrap">
            <h1 className=" font-semibold text-xl mb-2">Spotify-Clone</h1>
            <p className=" text-left">
            Spotify Clone is a sleek and interactive web application that replicates the core functionalities of the popular music streaming service.The platform features dynamic playlists, real-time music playback, and interactive search and filtering options, all enhanced with seamless transitions and animations. It incorporates intuitive controls for playback management, such as play, pause, and volume adjustments, alongside a visually engaging interface for discovering and managing music. With real-time updates for track information and album art, users enjoy an immersive and enjoyable listening experience. </p>
            <div className=" flex mt-4 gap-4 flex-wrap ">
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">Contextapi</div>
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">Tailwind</div>
                <div className="rounded-lg bg-[#a154df] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">React</div>
            </div>
          </div>
        </div>
      </motion.div>
      </a>
    </div>
  );
};

export default Projects;
