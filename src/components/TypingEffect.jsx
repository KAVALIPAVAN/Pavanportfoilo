import React from "react";
import Typewriter from 'typewriter-effect';


const TypingEffect = () => {
  return <h1 className="text-4xl"><Typewriter
  options={{
    strings: [
        " Crafting Scalable Digital Experiences",
        " Full-Stack Developer",
        " Building Modern Web Solutions",
        " Turning Ideas into Code",
        " Code. Create. Deploy."
      ],
    autoStart: true,
    loop: true,
  }} 
/>
</h1>
};

export default TypingEffect;
