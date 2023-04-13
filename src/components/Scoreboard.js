import React from 'react'

export default function Scoreboard(){
    const scoreboard = [
        {
            classname:'T6A',
            score:964,
        },
    ]
    return(
        <div className='flex flex-col gap-10 p-[4vw]'>
            <h1 className='heading'>Scoreboard</h1>
            <div className='flex flex-col items-center gap-5 classes'>
                <div className='flex justify-between w-[40vw] p-[20px] winner rounded-xl'>
                    <p>1</p>
                    <p>T6A</p>
                    <p>964</p>
                </div>
                <div className='flex justify-between w-[40vw] p-[20px] bg-black rounded-xl'>
                    <p>2</p>
                    <p>T6B</p>
                    <p>64</p>
                </div>
                <div className='flex justify-between w-[40vw] p-[20px] bg-black rounded-xl'>
                    <p>2</p>
                    <p>T6B</p>
                    <p>64</p>
                </div>
                <div className='flex justify-between w-[40vw] p-[20px] bg-black rounded-xl'>
                    <p>2</p>
                    <p>T6B</p>
                    <p>64</p>
                </div>
                <div className='flex justify-between w-[40vw] p-[20px] bg-black rounded-xl'>
                    <p>2</p>
                    <p>T6B</p>
                    <p>64</p>
                </div>
                <div className='flex justify-between w-[40vw] p-[20px] bg-black rounded-xl'>
                    <p>2</p>
                    <p>T6B</p>
                    <p>64</p>
                </div>
            </div>
        </div>
    )
}