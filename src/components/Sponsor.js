import React from 'react'
import SpclButton from './SpclButton'

export default function Sponsor(){
    return(
        <div className='p-[4vw] grain sponsor flex flex-col gap-10'>
            <h1 className='heading'>Meet our Sponsor</h1>
            <div className='flex justify-center'>
                <img src="/sponsor.svg" alt="" className='w-[15vw]'/>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='points'>Msigma Gokulam is an ed-tech company focused on &quot;Everything Engineering&quot;</p>
                <p className='points'>We provide classes for GATE, IES, PSU&apos;s with the best teachers in the country, including an IES first ranker holding the highest recorded marks in an IES exam. </p>
                <p className='points'>To empower &apos;engineering aspirants&apos; to become engineers we also provide coaching for Btech.</p>
                <p className='points'>Our R&D department works on top AI/ML, IoT and Embedded Systems projects for governmental and non governmental companies like Mahindra & Mahindra. (They also provide assistance for final year engineering projects.)</p>
                <p className='points'>Our IT department helps businesses with next-generation digital services and consulting.</p>
            </div>
            <div className='flex flex-col gap-7'>
                <SpclButton name="msigmagokulam.com"/>
                <SpclButton name="Instagram"/>
            </div>
        </div>
    )
}