import React,{ useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar(){
    const [heightVar,setHeightVar] = useState('unset');
    const [displayVar,setDisplayVar] = useState('none');
    const navbarStyle = {
        height: heightVar,
    }
    const menuOptions = {
        display: displayVar
    }
    function openMenu(){
        if(heightVar === 'unset'){
            setHeightVar('100vh');
            setDisplayVar('flex');
        }
        else{
            setHeightVar('unset');
            setDisplayVar('none');
        }
    }
    return(
        <div className='fixed top-0 w-full navbar border-b-2 border-white/40 z-20' style={navbarStyle}>
            <div className='flex items-center justify-between p-10'>
                <img src="/IEEE SCT SB.svg" alt="" className=''/>
                <div className='relative w-[40px] h-[27px]'>
                    <button className='flex flex-col justify-between w-full h-full absolute z-30' onClick={openMenu}>
                        <div className='bg-white h-[3px] rounded-full w-full'></div>
                        <div className='bg-white h-[3px] rounded-full w-full'></div>
                        <div className='bg-white h-[3px] rounded-full w-full'></div>
                    </button>
                </div>
            </div>            
            <div className='flex flex-col justify-between px-[4vw] items-center' style={menuOptions}>
                    <Link className='notiFont'>Home</Link>
                    <Link className='notiFont'>About</Link>
                    <Link className='notiFont'>Sponsor</Link>
                    <Link className='notiFont'>Competitions</Link>
                    <Link className='notiFont'>Scoreboard</Link>
                    <Link className='notiFont'>Contact</Link>
            </div>
        </div>
    )
}