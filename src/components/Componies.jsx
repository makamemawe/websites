// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useInView } from 'react-intersection-observer'


const Componies = () => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true

    })
    const companies = [
        "Instagram",
        "Facebook",
        "Netflix",
        "Amazon",
        "Google",
        "Microsoft",
        "Tesla",
        "SpaceX",
        "Nasa"
        
    ]
    const companiesList = [...companies, ...companies]
    const scrollVariant1 = {
        animate: {
            x: [0, -2000],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 15
            },
        },
    }
    const scrollVariant2 = {
        animate: {
            x: [-2000, 0],
            transition: {
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
            },
        },
    }
  return (
    <div id='companies' className='text-white py-16'>
        <div className='container mx-auto text-center'>
            <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? {opacity: 1, y: 0 }: {}}
            transition={
                {
                    delay: 0.8,
                    duration: 0.5
                }
            }
            className='text-4xl font-bold mb-16'>I work with companies like</motion.h2>
            <div className='overflow-hidden relative w-full'>
                 <motion.div
                 variants={scrollVariant1}
                 animate="animate"
                 className='flex whitespace-nowrap spae-x-10'>
                    {
                        companiesList.map((company, index) => (
                            <div key={index}
                            className='text-lg bg-gray-800 rounded-full px-6 py-3'>
                                {company}
                            </div>
                        ))
                    }
                </motion.div>
            </div>
            <div  className='overflow-hidden relative w-full mt-8'>
                <motion.div 
                variants={scrollVariant2}
                animate="animate"
                className='flex whitespace-nowrap spae-x-10'>
                    {
                        companiesList.map((company, index) => (
                            <div key={index}
                            className='text-lg bg-gray-800 rounded-full px-6 py-3'
                            >
                                {company}
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Componies