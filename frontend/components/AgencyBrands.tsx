"use client";
import { FocusedAgenciesSection } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { getImageDimensions } from "@sanity/asset-utils";
import { stegaClean } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
type FocusedAgenciesProps = {
    focusedAgencies: FocusedAgenciesSection | null;
};

export const AgencyBrands: React.FC<FocusedAgenciesProps> = ({ focusedAgencies }) => {
    if (!focusedAgencies) return null;
    return (
        <section id="agencies" className="relative isolate overflow-hidden min-h-screen w-full flex items-center justify-center py-20 md:pt-[160px] md:pb-[185px]">
            {/* 🔹 Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 🔹 Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 backdrop-blur-sm z-10" />

            {/* 🔹 Main Content */}
            <div className="relative z-20 mx-auto sm:pb-10 container  text-center ">
                {focusedAgencies?.heading &&
                    <h2 className="text-2xl sm:text-4xl md:text-[50px] font-work-sans font-semibold mb-[70px] text-black">
                        {focusedAgencies?.heading}
                    </h2>
                }
                {focusedAgencies.agencies &&
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-18 ">
                        {/* CMS MINDS */}
                        {focusedAgencies.agencies.map((agency: any) => {
                            const image = agency.logo;
                            const dimensions = image ? getImageDimensions(image) : { width: 200, height: 100 };
                            return (
                                <Link
                                    key={agency._key}
                                    href={agency.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center mx-auto w-full"
                                >
                                    <div className="relative w-full xl:w-[500px] h-[250px] bg-white/50 border border-[#000F1A33] rounded-[20px] backdrop-blur-[30px] flex items-center justify-center transition-all duration-200 ease-in-out">
                                        {image && (
                                        <Image
                                            src={urlForImage(image)?.url() || ""}
                                            alt={stegaClean(agency.name) || "CMS MINDS Logo"}
                                            width={dimensions.width}
                                            height={dimensions.height}
                                            className={`w-[200px] sm:w-auto md:w-[250px] [@media(min-width:1300px)]:w-[250px] ${
                                                agency.name === "Agency Minds"
                                                  ? "[@media(min-width:1550px)]:w-[400px]"
                                                  : "[@media(min-width:1550px)]:w-auto"
                                              } h-10 sm:h-12 group-hover:-translate-x-4 transition-transform duration-200 ease-in-out`}
                                              
                                        />
                                        )}
                                        <span className={`text-black absolute ${agency.name === "Agency Minds"?"right-[20px]":"right-[40px]"}  hidden lg:block text-[50px] sm:text-3xl opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out`}>
                                            <HiArrowUpRight className="w-11 h-11 text-black" />
                                        </span>
                                    </div>

                                    <h3 className="text-[24px] md:text-[28px] lg:text-[34px]  font-work-sans font-semibold mt-[50px] text-center"
                                      dangerouslySetInnerHTML={{ __html: agency.tagline }}
                                    />
                                     
                                    <p className="mt-[40px] sm:text-lg md:text-xl text-[20px] font-work-sans font-normal  text-[#000F1A] text-center">
                                        {agency.description}
                                    </p>
                                </Link>
                            );
                        })}

                    </div>}
            </div>
        </section>
    );
}
