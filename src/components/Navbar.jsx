import { motion } from "framer-motion"; // Use Framer Motion
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 43px 43px)",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  const items = [
    { id: 1, text: "About", to: 'about' },
    { id: 2, text: "Contact", to: 'contact' },
    { id: 3, text: "Services", to: 'services' },
    { id: 4, text: "Work", to: 'work' },
  ];

  return (
    <nav className="w-full bg-gray-800 text-white">
      {/* Desktop Navbar */}
      <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5 }}

      className="hidden md:flex justify-between items-center container mx-auto py-5 px-5">
        <div className="text-xl lg:text-3xl font-bold flex gap-1">
          <span className="text-pink-600">Mawe</span>
          <span className="text-purple-600">Website</span>
        </div>
        <ul className="flex items-center space-x-6 list-none lg:text-lg md:text-base">
          {items.map((item) => (
            <li
              className="hover:text-pink-600 cursor-pointer transition duration-300"
              key={item.id}
            >
              <Link to={item.to} smooth={true} duration={500} offset={-70}>
              {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="md:text-base lg:text-lg bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full text-white"
        >
          Download CV
        </a>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <div className="text-xl lg:text-3xl font-bold flex gap-1">
          <span className="text-pink-600">Mawe</span>
          <span className="text-purple-600">Website</span>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          onClick={() => setMenu((prev) => !prev)}
          className="cursor-pointer z-20"
        >
          {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
        </motion.div>
      </div>

      {/* Sliding Mobile Menu */}
      <motion.div
        initial="closed"
        animate={menu ? "open" : "closed"}
        variants={variants}
        className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white z-10"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <ul className="space-y-6 text-lg">
            {items.map((item) => (
              <motion.li
              className="hover:text-pink-600 cursor-pointer duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
                key={item.id}                
              >
                <Link to={item.to} smooth={true} duration={500} offset={-70}>
              {item.text}
              </Link>
              </motion.li>
            ))}
          </ul>
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full text-white text-lg mt-10"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
