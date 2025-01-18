"use client"; // Mark this component as a Client Component

import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuraLoadingBar from "./AuraLoadingBar";

// Define the type for the props
interface LoadingWrapperProps {
  children: ReactNode; // Explicitly define the type of `children`
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-bar"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AuraLoadingBar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show children (page content) after loading */}
      {!isLoading && children}
    </>
  );
}