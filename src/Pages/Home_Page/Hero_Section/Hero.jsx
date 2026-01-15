// import React from "react";
// import TextType from "../../../assets/TextType";

// export const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <p className="text-5xl md:text-9xl font-bold mb-4">
//           &lt;CODESHACK/&gt;
//         </p>
//         <TextType
//           text={["Text typing effect", "for your websites", "Happy coding!"]}
//           typingSpeed={75}
//           pauseDuration={5500}
//           showCursor={true}
//           cursorCharacter="_"
//         />
//       </div>
//     </section>
//   );
// };

import React from "react";
import { motion } from "framer-motion";
import TextType from "../../../assets/TextType";
import collegeLogo from "../../../assets/collegeLogo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Bottom orange glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-orange-500/40 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* College Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          
          <img
            src={collegeLogo}
            alt="College Logo"
            className="h-14 mb-3"
          />
         
          <p className="text-sm tracking-widest uppercase text-gray-400">
            Sir M. Visvesvaraya Institute of Technology, Bengaluru
          </p>
          
        </motion.div>

        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 inline-block bg-black/60 border border-orange-500/30 rounded-md px-4 py-2 font-mono text-sm text-orange-400"
        >
          <span className="text-green-400">student@codeshack</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>${" "}
          <span className="animate-pulse">_</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6"
        >
          &lt;<span className="text-orange-500">CODESHACK</span>/&gt;
        </motion.h1>

        {/* Typing text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
        >
          <TextType
            text={[
              "Official Technical Club",
              "Open Source • Development • Innovation",
              "GLUG × TECHHUB",
            ]}
            typingSpeed={70}
            pauseDuration={2600}
            showCursor={true}
            cursorCharacter="_"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          CODESHACK is the official student technical community fostering
          open-source culture, hands-on development, and problem-solving skills.
          We bridge academic learning with real-world technology through
          workshops, projects, and collaborative events.
        </motion.p>

        {/* SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10 flex justify-center"
        >
          <svg width="300" height="140" viewBox="0 0 240 140" fill="none">
            <rect x="10" y="20" width="250" height="100" rx="14" fill="#111" stroke="#f97316" />
            <text x="30" y="55" fill="#f97316" fontFamily="monospace" fontSize="14">
              $ learn • build • contribute
            </text>
            <text x="30" y="80" fill="#aaa" fontFamily="monospace" fontSize="12">
              linux | open-source | community
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
