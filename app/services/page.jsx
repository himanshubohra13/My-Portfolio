"use client";
import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";
import {motion } from 'framer-motion';

const services=[
    {num:'01',title:'Full Stack Web Developement',description:"Full Stack Developer skilled in Django, Vue.js, and PostgreSQL, delivering scalable backends and dynamic, user-friendly frontends. Transforming ideas into seamless web solutions."},
    {num:'02',title:'Backend API Integration & Development',description:"Building reliable and efficient backend APIs with Django or Node.js/Express to power your applications."},
    {num:'03',title:'Chrome Extension',description:"Develop custom Chrome extensions to automate tasks, enhance productivity, and integrate seamlessly with web applications, improving your browsing experience"},
    {num:'04',title:'Web Application Security',description:"Implementing industry best practices to safeguard web applications from vulnerabilities, ensuring robust protection through secure coding, encryption, and authentication techniques."},
]



const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                {services.map((service,index)=>{
                    return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                </div>
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                                <p className='text-white/60 '>{service.description}</p>
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                })}
            </motion.div>
        </div>

    </section>
  )
}

export default Services