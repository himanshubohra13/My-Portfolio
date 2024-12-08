"use client"

import {Sheet,SheetContent, SheetTrigger,SheetClose} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';
import { userAgent } from 'next/server';
import { useState } from 'react';

const links=[
    {
        name:'home',
        path:'/'
    },
    {
        name:'services',
        path:'/services'
    },
    {
        name:'resume',
        path:'/resume'
    },
    {
        name:'work',
        path:'/work'
    },
    {
        name:'contact',
        path:'/contact'
    }

]

const MobileNav = () => {
const pathname=usePathname();
const [isSheetOpen, setIsSheetOpen] = useState(false);

const handleLinkClick = () => {
setIsSheetOpen(false);
};
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className='flex justify-center items-center' onClick={()=>setIsSheetOpen(true)}>
            <CiMenuFries className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mt-32 mb-40 text-center text-2xl'> 
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>Himanshu<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) => (
            <SheetClose key={index}> {/* Wrap each link with SheetClose */}
              <Link
                href={link.path}
                onClick={handleLinkClick}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav