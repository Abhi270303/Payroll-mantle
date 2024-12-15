import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Github, X } from "lucide-react";

const Foot = () => {
  const fadeInVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    initial: { color: "#000000" },
    hover: { color: "#4B5563" },
  };
  return (
    <motion.div
      className="flex justify-between items-center pb-6 max-w-7xl mx-auto mt-32"
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{ duration: 0.3 }}
    >
      {/* Left - Logo */}
      <Link href="/" className="no-underline">
        <motion.div className="bg-white p-1.5 rounded-full px-2.5 pr-4">
          <div className="flex items-center gap-4">
            <div className="bg-black w-9 h-9 rounded-full grid place-items-center p-1.5">
              <Image src="/logo1.svg" width={32} height={32} alt="Hero Image" />
            </div>
            <p className="text-black font-medium">Payroll Protocol</p>
          </div>
        </motion.div>
      </Link>

      {/* Center - Credits */}
      <motion.div
        className="text-center text-gray-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>Presenting you with ❤️ from Vivek.</p>
      </motion.div>

      {/* Right - GitHub Link */}
      <motion.div
        className="bg-white p-1.5 rounded-full px-4 text-sm"
        whileHover={{ scale: 1.02 }}
      >
        <Link
          href="https://github.com/vwakesahu/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-black hover:text-gray-600 transition-colors"
        >
          <motion.div
            className="flex items-center gap-2"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
          >
            <Github size={20} />
            <span className="font-medium">GitHub</span>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Foot;
