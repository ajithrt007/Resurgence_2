import React, { useState, useEffect } from "react";

export default function Largest() {
  const [a,setA] = useState('a');
//   const [no, setNo] = useState(1);
//   useEffect(() => {
//     const id1 = setInterval(() => {
//       if (no < 30) {
//         let i = no + 1;
//         let b = a;
//         b = b + 'a';
//         setA(b)
//         setNo((i));
//       }
//       else{
//         setNo(1);
//         setA('a')
//       }
//       console.log(no,a)
//     }, 50);
//     return () => {
//       clearInterval(id1);
//     };
//   }, [no]);
//   console.log(a)
  return (
    <div className="flex justify-center align-center largest p-5 grain">
      L<p className="contents a">{a}</p>
      rgest Techno-Literacy Event Conducted in SCT
    </div>
  );
}
