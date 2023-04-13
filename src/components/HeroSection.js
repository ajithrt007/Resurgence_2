import React from 'react'
import SpclButton from './SpclButton'
import YellowGrad from '../components/YellowGrad.js'
import BlueGrad from '../components/BlueGrad.js'

export default function HeroSection(){
    return(
        <div className='flex flex-col pt-[20vh] h-screen gap-[6vh] homie'>
            <YellowGrad/>
            <BlueGrad/>
            <div className='flex gap-10 justify-center items-center'>
                <p className='text-2xl font-bold'>Powered By</p>
                <img src="/sponsor.svg" alt="Msigma" />
            </div>
            <div className='flex flex-col w-full justify-center gap-[-400px] items-center logo'>
                <img src="/resurgence.svg" alt="" className='w-[40%] opacity-20'/>
                <img src="/resurgence.svg" alt="" className='w-[40%] centerLogo'/>
                <img src="/resurgence.svg" alt="" className='w-[40%] opacity-20'/>
            </div>
            <div className='flex gap-5 justify-center items-center tagline'>
                <p>Raise</p>
                <div className='rounded-full bg-white h-[10px] w-[10px]'></div>
                <p>Revive</p>
                <div className='rounded-full bg-white h-[10px] w-[10px]'></div>
                <p>Rebuild</p>
            </div>
            <SpclButton name="Events"/>
        </div>
    )
}