"use client";

import {FaHtml5,FaCss3, FaJs, FaReact, FaPython, FaNodeJs, FaJava,FaVuejs} from "react-icons/fa";

import {SiTailwindcss,SiNextdotjs,SiDjango,SiPostgresql,SiCaddy, SiC} from "react-icons/si";


const about={
    title:"About me",
    description:"I am a passionate Full Stack Developer with over a year of experience, specializing in Django, Vue.js, and PostgreSQL. I enjoy solving complex problems and building scalable, user-friendly web applications. With a background in Electronics and Communication, I bring a unique technical perspective to my work, constantly striving to improve and learn new skills. ",
    info:[
        {
            fieldName:"Name",
            fieldValue:'Himanshu Bohra'
        },
        {
            fieldName:"Phone",
            fieldValue:'+91 8146866415'
        },
        {
            fieldName:"Experience",
            fieldValue:'1+ Years'
        },
        {
            fieldName:"Nationality",
            fieldValue:'Indian'
        },
        {
            fieldName:"Email",
            fieldValue:'himanshubohra206@gmail.com'
        },
        {
            fieldName:"Languages",
            fieldValue:'English, Hindi'
        },

    ]
}

// experience stats

const experience={
    icon:"/assets/resume/badge.svg",
    title:"My experience",
    description:"I have worked with dynamic teams to build impactful web applications, gaining hands-on expertise in full-stack development, API design, and database management, using technologies.",
    items:[
        {
            company:"GreyB",
            position:"Full Stack Developer",
            duration:"June 2023 - Present"
        },
        {
            company:"GreyB",
            position:"Junior Software Developer",
            duration:"Jan 2023 - May 2023"
        }
    ]

}


// education data

const education={
    icon:"/assets/resume/cap.svg",
    title:"My Education",
    description:"I hold a Bachelor's degree in Electronics and Communication from the University Institute of Engineering Technology, where I developed a strong foundation in technical problem-solving and analytical skills, complemented by a passion for software development.",
    items:[
        {
            institute:"University Institute of Engineering Technology",
            degree:"Bachelors in Electronics and Communication",
            duration:"2019-2023"
        },

    ]

}

// skills data
const skills={
    title:"My Skills",
    description:"",
    skillList:[
        {
            icon:<FaHtml5/>,
            name:"html 5"
        },
        {
            icon:<FaCss3/>,
            name:"css 3"
        },
        {
            icon:<FaJs/>,
            name:"javascript"
        },
        {
            icon:<FaVuejs/>,
            name:"VueJs"
        },
{
            icon:<SiTailwindcss/>,
            name:"tailwind.css"
        },
        {
            icon:<FaPython/>,
            name:"python"
        },
 {
            icon:<SiDjango/>,
            name:"django"
        },
 {
            icon:<SiPostgresql/>,
            name:"postgres"
        },
        {
            icon:<SiCaddy/>,
            name:"caddy"
        },
        {
            icon:<FaReact/>,
            name:"react.js"
        },
        {
            icon:<SiNextdotjs/>,
            name:"next.js"
        },
        
        {
            icon:<FaNodeJs/>,
            name:"node.js"
        },
       
       
        {
            icon:<FaJava/>,
            name:"java"
        },
       


    ]

}


import {Tabs, TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import { Tooltip,TooltipContent, TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";

import {motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} 
                className="min-h[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            {/* content */} 
            <div className="min-h-[70px] w-full">
                <TabsContent value='experience' className='w-full '>
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                        <ScrollArea className='h-[400px]'>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item,index)=>{
                                    return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 ">{item.company}</p>
                                                </div>
                                            </li>)

                                })}

                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                <TabsContent value='education' className='w-full '>
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                        <ScrollArea className='h-[400px]'>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item,index)=>{
                                    return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 ">{item.institute}</p>
                                                </div>
                                            </li>)

                                })}

                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                <TabsContent value='skills' className='w-full h-full '>
                    <div className="flex flex-col gap-[30px] ">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60">{skills.description}</p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index)=>{
                                return ( <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] rounded-xl bg-[#232329] flex flex-col justify-center items-center group" >
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300 mb-1">{skill.icon}</div>
                                                <p className="capitalize">{skill.name}</p>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </li>)
                            })}
                        </ul>
                    
                    </div>
                </TabsContent>
                <TabsContent value='about' className='w-full text-center xl:text-left '>
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold ">{about.title}</h3>
                        <p className="max-2-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                        <ul className="grid grid-cols-1 xl:grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                            {about.info.map((item,index)=>{
                                return <li key={index} className="flex items-center justify-start">
                                            <span className="text-xl text-white/60 mr-2 ">{item.fieldName}</span>    
                                            <span className="text-xl">{item.fieldValue}</span>    
                                        </li>           
                            })}
                        </ul>
                    </div>
                </TabsContent>

            </div>

        </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume