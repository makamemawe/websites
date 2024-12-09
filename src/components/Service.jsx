// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
// eslint-disable-next-line no-unused-vars
import { React } from 'react';
import { FaAppStore } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';


const Service = () => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true 
    })
    const services = [
        {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
        {
        title: "Websites Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
        {
        title: "Computer Maintenances",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
        {
        title: "System Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
        {
        title: "Project Implementation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
        {
        title: "Window implementation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
       
    
];
  return (
    <div id='services' className='text-white py-16'>
        <motion.div
        ref={ref}
        initial={{opacity: 0, y:50}}
        animate={inView ? {opacity: 1, y:0} : {}}
        transition={{duration:0.5}}
        className='container mx-auto text-center px-4'>
            <motion.h2
            ref={ref}
            initial={{opacity: 0, y:50}}
            animate={inView ? {opacity: 1, y:0} : {}}
            transition={{delay:0.5,duration:0.5}}
            className='text-4xl md:text-4xl font-bold mb-8 underline'>Services</motion.h2>
            <motion.p
            ref={ref}
            initial={{opacity: 0, x:50}}
            animate={inView ? {opacity: 1, x:0} : {}}
            transition={{delay:0.6,duration:0.5}}
            className='mb-12 text-gray-400 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quia.
            </motion.p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map((service, index) => (
                    <motion.div
                    ref={ref}
                    initial={{opacity: 0, scale:0.8}}
                    animate={inView ? {opacity: 1, scale:1} : {}}
                    transition={{duration:0.5, delay: index * 0.2}}
                    key={index} className='bg-[#1cla9b] rounded-lg p-6 border border-purple-600 flex flex-col items-center hover:shadow-lg hover:shadow-purple-600 transition-shadow duration-500 '>
                        <FaAppStore className='text-purple-600 text-4xl mb-4 sm:text-5xl lg:text-6xl mx-auto' />
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-4'>{service.title}</h3>
                        <p className='text-sm sm:text-base lg:text-lg mb-4 text-gray-400'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default Service