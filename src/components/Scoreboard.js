import React from 'react'

export default function Scoreboard(){
    const scoreboard = [
        ['R2A' , 0],
        ['R2B' , 11],
        ['R4A' , 0],
        ['R4B' , 0],
        ['R6A' , 0],
        ['R6B' , 0],
        ['R8' , 0],
        ['T2A' , 0],
        ['T2B' , 0],
        ['T4A' , 0],
        ['T4B' , 0],
        ['T6A' , 22],
        ['T6B' , 0],
        ['T8A' , 5],
        ['T8B' , 0],
        ['M2A' , 0],
        ['M2B' , 0],
        ['M4A' , 0],
        ['M4B' , 0],
        ['M6A' , 0],
        ['M6B' , 0],
        ['M8' , 0],
        ['B2' , 0],
        ['B4' , 0],
        ['B6' , 0],
        ['B8' , 0],
        ['P6' , 0],
        ['P8' , 0],
        ['U2' , 0],
        ['U4' , 0],
        ['U6' , 0],
        ['U8' , 0]
    ];
    for (var x = 0;x<scoreboard.length;x++){
        for (var y = 0;y<(scoreboard.length-1);y++){
            if(scoreboard[y][1]<scoreboard[y+1][1]){
                let temp = scoreboard[y+1];
                scoreboard[y+1] = scoreboard[y];
                scoreboard[y] = temp;
            }
        }
    }
    var count = 1;
    console.log(scoreboard)
    return(
        <div className='flex flex-col gap-10 p-[4vw]' id='score'>
            <h1 className='heading'>Scoreboard</h1>
            <div className='flex flex-col items-center gap-5 classes'>
                {
                    scoreboard.slice(0, 10).map((element,count) => {
                        count = count + 1
                        return (
                            <div className='flex justify-between w-[40vw] p-[20px] bg-black rounded-xl' key={element[0]}>
                                <p>{count}</p>
                                <p>{element[0]}</p>
                                <p>{element[1]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}