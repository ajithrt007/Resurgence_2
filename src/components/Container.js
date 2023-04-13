import React from 'react'
import About from '../components/About.js'
import Sponsor from '../components/Sponsor.js'
import Footer from '../components/Footer.js'
import Scoreboard from './Scoreboard.js'
import Events from './Events.js'

export default function Container(){
    return(
        <div className='mcontainer'>
            <About/>
            <Sponsor/>
            <Events/>
            <Scoreboard/>
            <Footer/>
        </div>
    )
}