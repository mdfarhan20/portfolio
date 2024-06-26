import { navLinks } from "constants";
import { IoMenu as MenuIcon } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import useMobile from "hooks/useMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMobile();

  const variants = {
    open: { opacity: 1, x: 0, y: "100%" },
    closed: { opacity: 0, x: "100%", y: "100%" }
  }

  const backdropVariants = {
    open: { opacity: 1, y: "100%" },
    closed: { opacity: 0, y: "100%" }
  }

  return (
    <nav className="sticky top-0 py-4 flex justify-between items-center bg-white z-10 w-full px-8 sm:px-16">
      <h1 className="heading text-xl">MF.</h1>

      <motion.ul 
        className="
          absolute flex flex-col items-center bg-white h-[200vh] bottom-0 right-0 gap-6
          px-10 py-16 w-1/2 z-30 sm:static sm:flex-row sm:h-fit sm:w-fit sm:p-0
        "
        initial="closed"
        animate={ (isOpen) ? "open" : "closed" }
        variants={isMobile ? variants : {}}
      >
        { navLinks.map((link, index) => (
          <motion.li 
            key={index} 
            className="text-lg text-zinc-600 cursor-pointer capitalize sm:text-base"
            whileHover={{ scale: 1.05, color: "black" }}
          >
            <a href={`#${link}`}>{ link }</a>
          </motion.li>
        )) }
      </motion.ul>

      <motion.div 
        className="absolute w-screen h-[200vh] bg-black bg-opacity-10 bottom-0 left-0 sm:hidden z- pointer-events-none"
        initial="closed"
        animate={ (!isMobile || isOpen) ? "open" : "closed" }
        variants={backdropVariants}
      />

      <MenuIcon 
        className="size-8 cursor-pointer sm:hidden"
        onClick={() => setIsOpen(prev => !prev)}
      />
    </nav>
  );
}