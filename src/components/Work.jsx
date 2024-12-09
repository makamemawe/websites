// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useInView } from 'react-intersection-observer'
import download from '../assets/download.jpg'
import download1 from '../assets/download1.jpg'
import proje from '../assets/proje.avif'
import Componies from '../components/Componies'



const Work = () => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const projects = [
        {
            id: 1,
            title: 'App Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: proje,
            link: 'https://google.com'
    },
        {
            id: 2,
            title: 'App Dashbord',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: download,
            link: 'https://google.com'
    },
        {
            id: 3,
            title: 'My Tours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: download1,
            link: 'https://google.com'
    },
]
  return (
    <div id='work' className='text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
            className='text-4xl font-bold text-white mb-12 underline text-center'>My Works</motion.h2>
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
            className='text-gray-400 mb-12 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</motion.p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                { projects.map((project) => (
                    <motion.div
                     ref={ref}
                     initial={{ opacity: 0, y: 100 }}
                     animate={inView ?  {opacity: 1, y: 0 }: {}}
                     transition={
                         {
                             delay: project.id * 0.2,
                             duration: 0.5
                         }
                     }
                     key={project.id}
                    className='bg-gray-900 shadow-md shadow-gray-500 p-6 rounded-lg hover:scale-105 duration-300 hover:shadow-lg hover:shadow-purple-300 overflow-hidden'>                        
                        
                        <img src={project.image} alt={project.title}
                        className='w-full h-48 object-cover'
                        />
                        <div className='p-6'>
                        <h3 className='text-2xl font-semibold mb-2 text-white '>{project.title}</h3>
                        <p className='text-slate-400 mb-4'>{project.description}</p>
                        <button className='bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full border border-purple-500 hover:border-transparent'>Details</button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ?  {opacity: 1, y: 0 }: {}}
            transition={
                {
                    delay: 0.9,
                    duration: 0.5
                }
            }
            className='flex justify-center mt-12'
            >
                <Componies />
            </motion.div>
        </div>

    </div>
  )
}

export default Work