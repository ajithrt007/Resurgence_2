import React,{useState} from 'react'
import SpclButton from './SpclButton'

export default function EventRow(props){
    const {name,content,poster,link} = props;
    const [display,setDisplay] = useState('none');
    const [angle,setAngle] = useState('rotate(0deg)')
    const rowStyle = {
        display: display,
    };
    const arrowStyle = {
        transform: angle,
    }
    function buttonClick(){
        if (display === 'none'){
            setDisplay('flex')
            setAngle('rotate(180deg)')
        }
        else{
            setDisplay('none')
            setAngle('rotate(0deg)')
        }
    }
    return(
        <div className='bg-[#08080E] p-[30px] rounded-xl flex flex-col gap-7 w-full' onClick={buttonClick}>
            <div className='flex justify-between'>
                <p>{name}</p>
                <img src="/arrow.svg" alt="" style={arrowStyle}/>
            </div>
            <div className='flex flex-col gap-7' style={rowStyle}>
                <div className='flex justify-center'>
                    <img src={poster} alt="" className='w-[80%] eventPoster'/>
                </div>
                <p>{content}</p>
                <div>
                    <SpclButton name="Register" link={link}/>
                </div>
            </div>
        </div>
    )
}