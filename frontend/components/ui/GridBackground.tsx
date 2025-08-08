"use client";
import { cn } from "@/app/lib/utils";
import React from "react";

export function GridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden flex h-screen w-full items-center justify-center bg-[#04243D]">
                <span

                  className={cn(
                    "pointer-events-none absolute size-1.5 rotate-[180deg] top-[239px] r rounded-full bg-[#125477] shadow-[0_0_0_1px_#ffffff10] animate-meteor-move-left ",
                  )}
                >
                  {/* Meteor Tail */}
                  <div className="pointer-events-none absolute top-1/2 -z-10 h-0.5 w-[250px] -translate-y-1/2 bg-gradient-to-r from-[#125477] to-transparent" />
                </span>
                <span

                  className={cn(
                    "animate-meteor-move-left pointer-events-none absolute size-1.5 rotate-[180deg] left-[400px] bottom-[165px] rounded-full bg-[#125477] shadow-[0_0_0_1px_#ffffff10]",
                  )}
                >
                  {/* Meteor Tail */}
                  <div className="pointer-events-none  absolute top-1/2 -z-10 h-0.5 w-[250px] -translate-y-1/2 bg-gradient-to-r from-[#125477] to-transparent" />
                </span>
                <span

                  className={cn(
                    "animate-meteor-move-left pointer-events-none absolute size-1.5 rotate-[270deg] left-[319px] top-[26%] rounded-full bg-[#125477] shadow-[0_0_0_1px_#ffffff10]",
                  )}
                >
                  {/* Meteor Tail */}
                  <div className="pointer-events-none absolute top-1/2 -z-10 h-0.5 w-[250px] -translate-y-1/2 bg-gradient-to-r from-[#125477] to-transparent" />
                </span>
                <span

                  className={cn(
                    "animate-meteor-move-left pointer-events-none absolute size-1.5 rotate-[270deg] right-[149px] top-[40%] rounded-full bg-[#125477] shadow-[0_0_0_1px_#ffffff10]",
                  )}
                >
                  {/* Meteor Tail */}
                  <div className="pointer-events-none absolute top-1/2 -z-10 h-0.5 w-[250px] -translate-y-1/2 bg-gradient-to-r from-[#125477] to-transparent" />
                </span>
                <span

                  className={cn(
                    "animate-meteor-move-left pointer-events-none absolute size-1.5 rotate-[270deg] right-[308px] bottom-[20%]  rounded-full bg-[#125477] shadow-[0_0_0_1px_#ffffff10]",
                  )}
                >
                  {/* Meteor Tail */}
                  <div className="pointer-events-none absolute top-1/2 -z-10 h-0.5 w-[250px] -translate-y-1/2 bg-gradient-to-r from-[#125477] to-transparent" />
                </span>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"
        )}
      />
      <div className="absolute h-full w-[50%] left-0 pointer-events-none inset-0 bg-[#04243D]/80 bg-no-repeat [background-clip:padding-box] blur-[50px]"></div>
       {/* Radial gradient for faded edges */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
      {children}
    </div>
  );
}
