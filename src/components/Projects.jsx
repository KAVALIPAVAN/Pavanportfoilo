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

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap cursor-pointer "
      >
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl ">
          <video
            src="../../Blog.mp4"
            className="video-player "
            controls
            width="300"
            height="180"
          >
            Your browser does not support the video tag.
          </video>

          <div className="flex flex-wrap">
            <h1 className=" font-semibold text-xl mb-2">Next-blog App</h1>
            <p className=" text-left">
              Developed a full-stack Blog Application using Next.js for
              server-side rendering, Tailwind CSS for responsive UI design, and
              MongoDB for database management.
            </p>
            <div className=" flex justify-between  flex-1 align-middle items-center">
              <div className=" flex mt-4 gap-4 flex-wrap ">
                <div className=" rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300 ">
                  Next.js
                </div>
                <div className=" rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300 ">
                  MongoDB
                </div>
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">
                  Tailwind CSS{" "}
                </div>
              </div>
              <a href="https://github.com/KAVALIPAVAN/nextblog" target="blank">
                <div className="rounded-lg bg-[#e27b14f6] px-1 h-10 mt-6 flex items-center text-white font-semibold ">
                  Code{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap cursor-pointer "
      >
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl ">
          <video
            src="../../multi.mp4"
            className="video-player "
            controls
            width="300"
            height="180"
          >
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-wrap">
            <h1 className=" font-semibold text-xl mb-2">
              Tic-tac-toe(multiplayer){" "}
            </h1>
            <p className=" text-left">
              Built a real-time Tic Tac Toe game using WebRTC for peer-to-peer
              communication and Socket.IO for real-time event handling and
              synchronization.
            </p>
            <div className=" flex justify-between  flex-1 align-middle items-center">
              <div className=" flex mt-4 gap-4 flex-wrap ">
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">
                  WebRTC
                </div>
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">
                  Socket.IO{" "}
                </div>
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">
                  React
                </div>
              </div>
              <a
                href="https://github.com/KAVALIPAVAN/tic-tac-toe-multiplayer-"
                target="blank"
              >
                <div className="rounded-lg bg-[#e27b14f6] px-1 h-10 mt-6 flex items-center text-white font-semibold ">
                  Code{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap cursor-pointer "
      >
        <div className="  flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl   ">
          <video
            src="../../Crypto_Place.mp4"
            className="video-player   h-full"
            controls
            width="300"
            height="180"
          >
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-wrap ">
            <h1 className=" font-semibold text-xl mb-2">Crpto-place</h1>
            <p className=" text-left">
              Developed a Crypto Price tracking application using React,
              integrated third-party APIs for real-time data, and utilized React
              Router DOM for seamless navigation between pages. and hosted the
              Crypto Price application using GitHub for version control and
              Vercel for seamless deployment and hosting.
            </p>

            <div className=" flex justify-between  flex-1 align-middle items-center">
              <div className=" flex mt-4 gap-4 flex-wrap ">
                {/* <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">WebRTC</div>
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">Socket.IO </div>
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">React</div> */}
              </div>
              <a href="https://crypto-place-one.vercel.app/" target="blank">
                <div className="rounded-lg bg-[#e27b14f6] px-1 h-10 mt-6 flex items-center text-white font-semibold ">
                  live link
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <a href="https://spotify-clone-rho-rust-86.vercel.app/" target="blank">
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:2}}
       className="flex flex-wrap cursor-pointer mb-3">
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl   ">
        <div className="flex w-[80%] m-auto gap-[15%] p-4 mt-6 sm:flex-row flex-col transform transition duration-300 shadow-lg hover:shadow-2xl   ">
          <img src={spotify} alt="" className="sm:w-[25%] sm:h-[25%] w-[60%]  h-[60%] pb-4 m-auto" />
          <div className="flex flex-wrap">
            <h1 className=" font-semibold text-xl mb-2">Spotify-Clone</h1>
            <p className=" text-left">
            Spotify Clone is a sleek and interactive web application that replicates the core functionalities of the popular music streaming service.The platform features dynamic playlists, real-time music playback, and interactive search and filtering options, all enhanced with seamless transitions and animations. It incorporates intuitive controls for playback management, such as play, pause, and volume adjustments, alongside a visually engaging interface for discovering and managing music. With real-time updates for track information and album art, users enjoy an immersive and enjoyable listening experience. </p>
            <div className=" flex mt-4 gap-4 flex-wrap ">
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">Contextapi</div>
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">Tailwind</div>
                <div className="rounded-lg bg-[#3352fff6] p-3 text-white font-semibold hover:bg-[#8c2baf] transition-colors duration-300">React</div>
            </div>
          </div>
        </div>
      </motion.div>
      </a> */}
    </div>
  );
};

export default Projects;
