import React,{useState} from 'react'
import SpclButton from './SpclButton'
import Image from 'next/image'

export default function EventRow(props){
    const {name,content,poster,link} = props;
    const [display,setDisplay] = useState('none');
    const [angle,setAngle] = useState('rotate(0deg)')
    const rowStyle = {
        display: display,
    };
    const arrowStyle = {
        transform: angle,
        opacity: 0.7
    }
    const contentArray = content.split("\n");
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
        <div className='bg-[#08080E] p-[30px] rounded-xl flex flex-col gap-7 w-full cursor-pointer eventContent' onClick={buttonClick}>
            <div className='flex justify-between relative'>
                <p>{name}</p>
                <Image src="/arrow.svg" alt="" style={arrowStyle} height={20} width={20}/>
            </div>
            <div className='flex flex-col gap-7' style={rowStyle}>
                <div className='flex justify-center'>
                    <img src={poster} alt="" className='w-[80%] eventPoster' loading='lazy'/>
                </div>
                {
                    contentArray.map((sentence)=>{
                        return <p>{sentence}</p>
                    }) 
                }
                <div>
                    <SpclButton name="Register" link={link}/>
                </div>
            </div>
        </div>
    )
}