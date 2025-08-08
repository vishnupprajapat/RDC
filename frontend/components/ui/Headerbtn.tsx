"use client";

const HeaderBtn = () => {
  return (
    <button 
    onClick={() => {
        const section = document.getElementById("agencies");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
    className="
    hover:underline 
    font-work-sans 
    text-lg md:text-2xl 
    text-white
    font-normal 
    px-2 md:px-0 
    block md:inline-block
    cursor-pointer
">
OUR BRANDS
</button>
  )
}

export default HeaderBtn