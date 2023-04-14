import React from 'react'
import SpclButton from './SpclButton'

export default function About(){
    return(
        <div className='p-[4vw]' id='about'>
            <div className='py-[4vw] about flex flex-col gap-[10vh]'>
                <div className='flex aboutContent'>
                    <div className='flex flex-col gap-5 px-[4vw]'>
                        <h1>About Resurgence</h1>
                        <p>Holographic surrealism is all about creating a futuristic, otherworldly feel. This trend is characterized by the use of iridescent colors, holographic patterns, and neon lights, and is inspired by science fiction and technology. In 2023, expect to see designers using holographic elements to create designs that are eye-catching, engaging, and futuristic.</p>
                    </div>
                    <div className='flex flex-col gap-5 px-[4vw]'>
                        <h1>About Resurgence</h1>
                        <p>Holographic surrealism is all about creating a futuristic, otherworldly feel. This trend is characterized by the use of iridescent colors, holographic patterns, and neon lights, and is inspired by science fiction and technology. In 2023, expect to see designers using holographic elements to create designs that are eye-catching, engaging, and futuristic.</p>
                    </div>
                </div>
                <SpclButton name="Join IEEE"/>
            </div>
        </div>
    )
}