import React from 'react'
import { GridBackground } from './ui/GridBackground'
import HeroButton from './ui/HeroButton';
import { TextAnimate } from './ui/text-animate';
type HeroProps = {
    hero: {
      badge?: string;
      heading?: string;
      subheading?: string;
      description?: string;
      showScrollIndicator?: boolean;
    } | null;
  };

  const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <GridBackground>
        <div className="container">
        <div className="relative mx-auto pt-8 sm:pt-10 xl:pt-10 sm:pb-10 space-y-4 sm:space-y-6 lg:max-w-6xl lg:px-12 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 sm:gap-7 items-center">

            {/* Badge / Welcome Text */}
            <h1 className="text-center text-white font-work-sans font-normal leading-6 prose py-1 px-3 
                            text-lg sm:text-2xl md:mb-5 md:text-3xl lg:text-[44px]">
                              {hero?.badge}
                  {/* {hero?.badge && (
                    // <TextAnimate 
                    // animation="blurInUp"
                    //  by="character" 
                    // duration={0.5}
                    // delay={0.1}
                    // once
                    // >
                       {hero.badge}
                    // </TextAnimate>
                  )} */}
             </h1>

            {/* Main Heading */}
            <h2 className="text-center md:mb-10 text-white font-work-sans font-bold 
                            text-3xl sm:text-5xl md:text-[90px] ">
            {hero?.heading}
            </h2>

            {/* Subheading */}
            <span className="text-center text-white font-work-sans font-normal
                            text-lg sm:text-2xl lg:text-3xl">
            {hero?.subheading}
            </span>

            {/* Description */}
            <p className="text-center text-white font-work-sans font-normal
                            text-base sm:text-lg md:text-xl lg:text-[20px] md:leading-9">
            {hero?.description}
            </p>
            </div>
        </div>
                {/* Scroll Indicator */}
        {hero?.showScrollIndicator&&
            <HeroButton/>
            }
        </div>
    </GridBackground>
  )
}

export default Hero