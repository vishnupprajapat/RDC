import Link from "next/link";
import HeaderBtn from "./ui/Headerbtn";

export default async function Header() {

  return (
    <header className="fixed top-0 z-50 h-37 w-full inset-0 bg-transparent">
      <div className="container py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <span className="text-lg md:text-2xl pl-2 leading-5 text-white md:text-[44px] font-bold font-work-sans">
               rdc
            </span>
          </Link>

          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight"
            >
              <li>
                <HeaderBtn/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
