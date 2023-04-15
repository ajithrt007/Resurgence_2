import React from 'react'

export default function SpclButton(props) {
    const {link,name} = props;
    return(
        <div className='flex justify-center z-5 relative cursor-pointer'>
            <div className='outerBox p-[2.5px] rounded-full h-[4.5vh]'>
                <a href={link} className='innerBox bg-black text-white rounded-full flex justify-center items-center h-full'>{name}</a>
            </div>
            {/* <div className='outerBox p-[2.5px] rounded-full absolute top-0 h-[4.5vh]'></div> */}
        </div>        
    )
}