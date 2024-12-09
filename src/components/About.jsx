// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import imaged from '../assets/imaged.jpg'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true 
  })
  return (
    <div id='about' className='text-white py-16'>        
          <div className='container mx-auto text-center'>
          <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ?  {opacity: 1, y: 0 }: {}}
          transition={
              {
                  delay: 0.3,
                  duration: 0.5
              }
          }
          className='text-4xl font-bold mb-8 underline'>About Us</motion.h2>
            <motion.p
             ref={ref}
             initial={{ opacity: 0, y: 100 }}
             animate={inView ?  {opacity: 1, y: 0 }: {}}
             transition={
                 {
                     delay: 0.6,
                     duration: 0.5
                 }
             }
            className='mb-12 text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, <br />
                fuga esse aliquid sed iusto corrupti quod amet <br />
                 veritatis ad eveniet repudiandae, itaque rerum vel? Iste <br />
                 repellendus recusandae minima ipsa nemo omnis.
                 </motion.p>
                 <div className='flex flex-col justify-center items-center'>
                  <motion.div 
                   ref={ref}
                   initial={{ opacity: 0, x: -100 }}
                   animate={inView ?  {opacity: 1, x: 0 }: {}}
                   transition={
                       {
                           delay: 0.8,
                           duration: 0.5
                       }
                   }
                  className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
                    <img src={imaged} alt="" 
                    className='w-40 h-40 rounded-full object-cover'/>
                  </motion.div>
                  <motion.p
                   ref={ref}
                   initial={{ opacity: 0, x: 100 }}
                   animate={inView ?  {opacity: 1, x: 0 }: {}}
                   transition={
                       {
                           delay: 0.8,
                           duration: 0.5
                       }
                   }
                  className='md:w-1/2 text-gray-400 text-center px-4 md:px-0 text-base'
                  >
                    Hire they! all iam websites designer and developer 
                    with 10 years of experience in this field and 
                    completed more than 100+ projects successfully for clients around the world 
                    with 100% client satisfaction and 100% on time delivery of projects .

                  </motion.p>
                 </div>
                 <div className='flex flex-col md:flex-row justify-around items-center mt-12 space-y-6 md:space-y-0 '>
                  <div className='text-center'>
                    <motion.h3
                     ref={ref}
                     initial={{ opacity: 0, y: 100 }}
                     animate={inView ?  {opacity: 1, y: 0 }: {}}
                     transition={
                         {
                             delay: 1.4,
                             duration: 0.5
                         }
                     }
                    className='text-3xl md:text-8xl font-bold md:my-6 text-purple-600 '>5+</motion.h3>
                    <motion.p
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ?  {opacity: 1, x: 0 }: {}}
                    transition={
                        {
                            delay: 1,
                            duration: 0.5
                        }
                    }
                    className='text-sm text-gray-400 sm:text-base'>Frontend & Backend Developer</motion.p>
                  </div>
                                 
                  <div>
                    <motion.h3
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ?  {opacity: 1, y: 0 }: {}}
                    transition={
                        {
                            delay: 1.6,
                            duration: 0.5
                        }
                    }
                    className='text-3xl md:text-8xl font-bold md:my-6 text-purple-600 '>50+</motion.h3>
                    <motion.p 
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ?  {opacity: 1, x: 0 }: {}}
                    transition={
                        {
                            delay: 1.2,
                            duration: 0.5
                        }
                    }
                    className='text-sm text-gray-400 sm:text-base'>overall globals customers satisfaction</motion.p>
                  
                 </div>
                 
                  <div>
                    <motion.h3
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ?  {opacity: 1, y: 0 }: {}}
                    transition={
                        {
                            delay: 1.8,
                            duration: 0.5
                        }
                    }
                    className='text-3xl md:text-8xl font-bold md:my-6 text-purple-600 '>60+</motion.h3>
                    <motion.p
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ?  {opacity: 1, x: 0 }: {}}
                    transition={
                        {
                            delay: 1.3,
                            duration: 0.5
                        }
                    }
                    className='text-sm text-gray-400 sm:text-base'>project have made for clients</motion.p>
                  </div>
                 </div>
                 
          </div>
        </div>
    
  )
}

export default About