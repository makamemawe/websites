// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import pc from '../assets/pc.jpg'
import {Link} from 'react-scroll'


export const Hero = () => {
  return (
    <div id='hero' className='text-white py-10'>
        <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={
            {
                delay: 0.5,
                duration: 0.5
            }
        }
        className='mx-auto w-2/3 md:w-1/3 lg:w-1/4 rounded-full'
         src={pc} alt="" />
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={
             {
                 duration: 0.5
             } 
         }          
        className='container text-center mx-auto '>
            <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
                {
                    delay: 1,
                    duration: 0.5
                }  
            }         
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gap-4'>
                My story, Is My way <br />
            <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
                {
                    delay: 1.1,
                    duration: 0.5
                }
            }
            className='text-purple-500'>It is my personal website</motion.span>
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
                {
                    delay: 1.2,
                    duration: 0.5
                }
            }
            className='text-gray-400 text-lg mb-4'>Showcase of my work and projects that I have done </motion.p>
            <div className='flex justify-center space-x-4 mb-10 '>
            <motion.button 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
                {
                    delay: 1.5,
                    duration: 0.5
                }
            }
            className='bg-purple-500 py-2 px-4 rounded-full hover:bg-white hover:text-purple-500'>
                <Link to='contact' smooth={true} duration={1000} offset={-70}>Hire me</Link>
                </motion.button>
            <motion.button 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
                {
                    delay: 1.6,
                    duration: 0.5
                }
            }
            className='bg-white text-purple-500 py-2 px-4 rounded-full ml-4 hover:bg-purple-500 hover:text-white'>
                <Link to='about' smooth={true} duration={1000} offset={-70}>My Story</Link>
                </motion.button>
            </div>
        </motion.div>
    </div>
  )
}
