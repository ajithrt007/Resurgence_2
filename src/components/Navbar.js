import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar(){
    return(
        <div className='fixed top-0 w-full navbar border-b-2 border-white/40 z-10'>
            <div className='flex items-center justify-between p-10'>
                <img src="/IEEE SCT SB.svg" alt="" />
                <div className='flex gap-[5vw]'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Sponsor</Link>
                    <Link>Competitions</Link>
                    <Link>Scoreboard</Link>
                    <Link>Contact</Link>
                </div>
            </div>
        </div>
    )
}