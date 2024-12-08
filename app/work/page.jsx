'use client'

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

const projects = [
    {
        num: '01',
        category: '',
        title: 'Slate',
        description: "Slate is a patent reading platform that helps structure and analyze patent portfolios efficiently. It centralizes IP knowledge, streamlines patent analysis, and enables seamless collaboration between IP and R&D teams.",
        stack: [
            { name: 'VueJs' },
            { name: 'Django' },
            { name: 'Postgres' },
            { name: "Caddy" },
            { name: "RabbitMQ" }
        ],
        image: '/himanshubohra/assets/work/slate1.png',
        live: 'https://slate.greyb.com/',
        github: ''
    },
    {
        num: '02',
        category: '',
        title: 'Patent Plus',
        description: "Patent Plus enhances your Google Patents experience with tools like patent summaries, transaction code highlights, and claim structuring. Perfect for professionals, inventors, and researchers, it streamlines patent reading and research for all IP needs, serving as a lead magnet for Slate.",
        stack: [
            { name: 'JavaScript' },
            { name: 'Fastapi' },
            { name: 'Bootstrap' },
        ],
        image: '/himanshubohra/assets/work/patentplus.png',
        live: 'https://chromewebstore.google.com/detail/patent-plus/iceleckhffpjkcbbeadlojphojbjnmgm',
        github: ''
    },
    {
        num: '03',
        category: '',
        title: 'Apna Doctor',
        description: "Apna Doctor, developed during the COVID-19 pandemic, is a virtual healthcare platform that won a hackathon for its innovation. It includes a disease prediction system using machine learning, symptom-based diagnosis with precautionary advice, and a virtual doctor appointment system for safe and seamless healthcare access.",
        stack: [
            { name: 'HTML' },
            { name: 'Tailwind' },
            { name: 'Python' },
            { name: 'Django' },
            { name: 'Machine & Deep Learning' },
        ],
        image: '/himanshubohra/assets/work/apnadoctor.png',
        live: '',
        github: 'https://github.com/himanshubohra13/ApnaDoctor'
    },
    {
        num: '04',
        category: '',
        title: 'Memory Game',
        description: "Memory Game is a fun and engaging card-matching game where players test their focus and memory by flipping cards to find matching pairs. Simple yet challenging, it’s perfect for players of all ages to sharpen their concentration skills.",
        stack: [
            { name: 'HTML' },
            { name: 'Tailwind' },
            { name: 'React' },
        ],
        image: '/himanshubohra/assets/work/magicmatch.png',
        live: 'https://mem-ory-game.web.app/',
        github: 'https://github.com/himanshubohra13/MemoryGame'
    }

]







const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);

    }

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row items-center xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] '>
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
                            <div className='break-words'>{project.description}</div>
                            <ul className='flex gap-4 '>
                                {project.stack.map((item, index) => {
                                    return (<li key={"index_" + index} className='text-xl text-accent'>{item.name}{index !== project.stack.length - 1 && ","}
                                    </li>)
                                })}
                            </ul>
                            <div className="border border-white/20 "></div>
                            <div className='flex items-center gap-4'>
                                {project.live !== "" ? <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live  project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link> : null}
                                {project.github !== "" && (
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={"images_" + index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                {index}
                                                <Image src={project.image} fill className="object-cover" alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'></WorkSliderBtns>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Work;