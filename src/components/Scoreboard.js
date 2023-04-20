import React from "react";

export default function Scoreboard() {
  const scoreboard = [
    ["R2A", 388],
    ["R2B", 25],
    ["R4A", 196],
    ["R4B", 106],
    ["R6A", 6],
    ["R6B", 115],
    ["R8", 0],
    ["T2A", 982],
    ["T2B", 121],
    ["T4A", 82],
    ["T4B", 28],
    ["T6A", 21],
    ["T6B", 9],
    ["T8A", 0],
    ["T8B", 5],
    ["M2A", 302],
    ["M2B", 203],
    ["M4A", 118],
    ["M4B", 140],
    ["M6A", 70],
    ["M6B", 6],
    ["M8", 0],
    ["B2", 169],
    ["B4", 15],
    ["B6", 20],
    ["B8", 7],
    ["P6", 5],
    ["P8", 0],
    ["U2", 10],
    ["U4", 35],
    ["U6", 30],
    ["U8", 0],
  ];
  for (var x = 0; x < scoreboard.length; x++) {
    for (var y = 0; y < scoreboard.length - 1; y++) {
      if (scoreboard[y][1] < scoreboard[y + 1][1]) {
        let temp = scoreboard[y + 1];
        scoreboard[y + 1] = scoreboard[y];
        scoreboard[y] = temp;
      }
    }
  }
  var count = 1;
  console.log(scoreboard);
  return (
    <>      
      <div className="flex flex-col gap-10 p-[4vw]" id="score">
        <h1 className="heading text-center">Resurgence 2.0 Overall Champion</h1>
        <div className="flex flex-col items-center gap-5 classes relative">
          {/* <div className="flex justify-between w-[40vw] p-[20px] px-[40px] bg-black rounded-xl winner">
            <p>T2A</p>
            <p>982</p>
          </div> */}
          {/* <div className="relative w-[70vw]"> */}
            <img src="/winner.jpg" alt="Picture of the author" />
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-10 p-[4vw]" id="score">
        <h1 className="heading">Scoreboard</h1>
        <div className="flex flex-col items-center gap-5 classes">
          {scoreboard.slice(0, 10).map((element, count) => {
            count = count + 1;
            return (
              <div
                className="flex justify-between w-[40vw] p-[20px] bg-black rounded-xl"
                key={element[0]}
              >
                <p>{count}</p>
                <p>{element[0]}</p>
                <p>{element[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
