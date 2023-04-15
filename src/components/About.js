import React from 'react'
import SpclButton from './SpclButton'

export default function About(){
    return(
        <div className='p-[4vw]' id='about'>
            <div className='py-[4vw] about flex flex-col gap-[10vh]'>
                <div className='flex aboutContent'>
                    <div className='flex flex-col gap-5 px-[4vw]'>
                        <h1>About Resurgence 2.0</h1>
                        <p>Resurgence was an online tech-fest, conducted by IEEE SCT SB to cater to all the first year SCTians. But now, after a year long hiatus, Resurgence 2.0 is here with a new look and sparks are about to fly. This year, Resurgence 2.0 is an open-for-all, batch-wise competitive extravaganza. Lead your batch to victory by showing your skills and prowess in the various events and be the first one to reach glory. With an event list that encompasses technical skills and creative enterprises, help your batch beat all others by being a part of Resurgence 2.0. Are you ready to win it all? Register now in any and all events of your choosing, and may the best batch be crowned champions. </p>
                    </div>
                    <div className='flex flex-col gap-5 px-[4vw]'>
                        <h1>About IEEE SCT SB</h1>
                        <p>IEEE started off in Sree Chitra Thirunal College Of Engineering with the registration of members on 23rd October 2009 with 30 members in its first phase. The Student Branch is one of the top 10 SBs in the Travancore Hub. Sree Chitra Thirunal College Of Engineering is one of the leading engineering colleges in Thiruvananthapuram, Kerala</p>
                    </div>
                </div>
                <SpclButton name="Join IEEE"/>
            </div>
        </div>
    )
}