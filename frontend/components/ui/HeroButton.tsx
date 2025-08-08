"use client"

import { useEffect } from "react";

const HeroButton = () => {

  return (
      <button
      onClick={() => {
        const section = document.getElementById("agencies");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
       className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
       >
          <div className="w-8 h-14 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-[2px] h-4 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
          </div>
      </button>
  )
}

export default HeroButton