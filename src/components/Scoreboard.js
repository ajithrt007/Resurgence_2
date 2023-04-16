import React from 'react'

export default function Scoreboard(){
    const scoreboard = [
        ['R2A' , 25],
        ['R2B' , 15],
        ['R4A' , 30],
        ['R4B' , 4],
        ['R6A' , 0],
        ['R6B' , 0],
        ['R8' , 0],
        ['T2A' , 112],
        ['T2B' , 27],
        ['T4A' , 17],
        ['T4B' , 15],
        ['T6A' , 0],
        ['T6B' , 0],
        ['T8A' , 0],
        ['T8B' , 0],
        ['M2A' , 25],
        ['M2B' , 35],
        ['M4A' , 5],
        ['M4B' , 55],
        ['M6A' , 20],
        ['M6B' , 5],
        ['M8' , 0],
        ['B2' , 25],
        ['B4' , 5],
        ['B6' , 10],
        ['B8' , 0],
        ['P6' , 5],
        ['P8' , 0],
        ['U2' , 5],
        ['U4' , 20],
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