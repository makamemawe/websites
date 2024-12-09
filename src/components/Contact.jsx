
import { motion } from "motion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div id="contact">
      <div className="text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="text-white text-4xl font-bold "
        >
          Let`s to discuss your project
          <span className="text-[#00df9a] space-x-2 ml-2">
            and see how we can work together
          </span>
        </motion.h2>
        <motion.p 
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.4,
          duration: 0.5,
        }}
        className="text-slate-400 mt-4">
          Lets to make something new, different and creative, more meaning full
          and unique.
        </motion.p>
      </div>
      <div className="max-w-[700px] mx-auto mt-10 flex justify-between px-4 sm:px-6 md:px-8">
        <div className="space-y-6 flex flex-col">
          <div className="flex space-x-4 items-center ">
            <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="bg-purple-500 p-3 mb-4 rounded-full">
              <FaPhone className="text-white  w-6 h-6 " />
            </motion.div>
            <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            >
              <p className="text-lg font-midium text-purple-500">call me</p>
              <p className="text-white">+255 678 825 237</p>
            </motion.div>
          </div>

          <div className="flex space-x-4 items-center ">
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className="bg-purple-500 p-3 mb-4 rounded-full">
              <MdEmail className="text-white  w-6 h-6 " />
            </motion.div>
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            >
              <p className="text-lg font-midium text-purple-500">Email</p>
              <p className="text-white">makamemawe10@gmail.com</p>
            </motion.div>
          </div>

          <div className="flex space-x-4 items-center ">
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className="bg-purple-500 p-3 mb-4 rounded-full">
              <FaMapMarkedAlt className="text-white  w-6 h-6 " />
            </motion.div>
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.7,
              duration: 0.5,
            }}
            >
              <p className="text-lg font-midium text-purple-500">Address</p>
              <p className="text-white">Machui, Zanzibar, Tanzania </p>
            </motion.div>
          </div>

          <motion.form 
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
          className="space-y-4 text-white">
            <div className="grid grid-cols-2 gap-4 ">
                <input type="text" placeholder="full name" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
                <input type="email" placeholder="email" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
            </div>
            <div>
              <input type="text" placeholder="phone number" className="border border-purple-500 bg-gray-900 p-4 mb-4 rounded-md w-full" />
              <input type="text" placeholder="budget" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"/>
            </div>
            <textarea placeholder="message" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"></textarea>
            <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            type="submit" className="bg-purple-500 p-4 rounded-md w-full text-white px-6 py-3 hover:bg-white hover:text-purple-500 transition duration-300">submit message</motion.button>
          </motion.form>

        </div>
      </div>
      {/* footer */}
      <div       
      className="mt-48 border-t flex justify-between items-center text-white px-4 sm:px-6 md:px-8 p-5">
        <motion.p
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        >&copy; 2022 all rights reserved</motion.p>
        <motion.p
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
        >Created by <span className="text-[#00df9a]" >makame mawe</span></motion.p>
      </div>
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 1.2,
        duration: 0.5,
      }}
      className="flex justify-center space-x-4 text-white mt-4 px-4 sm:px-6 md:px-8 mb-8">
        <a className="hover:text-purple-500"><FaInstagram className="w-6 h-6"/></a>
        <a className="hover:text-purple-500"><FaTwitter className="w-6 h-6" /></a>
        <a className="hover:text-purple-500"><FaLinkedin className="w-6 h-6" /></a>
        <a className="hover:text-purple-500"><FaYoutube className="w-6 h-6" /></a>
        <a className="hover:text-purple-500"><FaTiktok className="w-6 h-6" /></a>
      </motion.div>
    </div>
  );
};

export default Contact;
