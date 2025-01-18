"use client"; // For Next.js 14

import { motion } from "framer-motion";

const AuraLoadingBar = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Loading Bar Container */}
      <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden">
        {/* Animated Loading Bar */}
        <motion.div
          className="h-full rounded-full bg-green-400" // Gradient colors
          initial={{ width: 0 }} // Start with 0 width
          animate={{ width: "100%" }} // Animate to full width
          transition={{
            duration: 2, // Animation duration
            repeat: Infinity, // Loop infinitely
            repeatType: "reverse", // Reverse the animation
            ease: "easeInOut", // Smooth easing
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        className="mt-4 text-lg font-semibold text-[#4a5568]"
        initial={{ opacity: 0, y: 10 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ delay: 0.5, duration: 0.5 }} // Delay and duration
      >
        Elevate Your Fashion
      </motion.p>
    </div>
  );
};

export default AuraLoadingBar;