import React from "react";
import SpclButton from "./SpclButton";

export default function Footer() {
  return (
    <div className="bg-black flex gap-10 p-[4vw] footer" id="footer">
      <div className="flex flex-col gap-10 quick">
        <img src="/resurgence.svg" alt="" className="w-[20vw]" />
        <div className="flex flex-col gap-10">
          <p>Quick Links</p>
          <a href="https://ieeesctsb.org/">Website - IEEE SCT SB</a>
          <a href="https://www.instagram.com/ieeesctsb/?hl=en">Instagram - IEEE SCT SB</a>
          <a href="https://in.linkedin.com/company/ieeesctsb">LinkedIn - IEEE SCT SB</a>
          <a href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE</a>
          <a href="https://msigmagokulam.com/">Msigma</a>
        </div>
      </div>
      <div className="bg-[#08080E] w-full flex flex-col justify-center items-center gap-10 feedback">
        <p className="text-[23px]">We love to hear your feedbacks</p>
        <SpclButton name="Tell us" link="https://forms.gle/ki4yYus1VmjhQHG17"/>
      </div>      
    </div>
  );
}
