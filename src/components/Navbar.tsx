import { navLinks } from "constants";
import { IoMenu as MenuIcon } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b-1 border-blueprint-line">
      <div className="relative flex items-center justify-between px-5 sm:px-10 py-3">
        <a href="#home" className="flex items-baseline gap-2 hover:opacity-80">
          <span className="heading text-lg sm:text-xl tracking-tight">MF.</span>
        </a>

        <ul
          className={[
            "absolute flex flex-col bg-paper border-l-1 border-blueprint-line top-full right-0 h-screen",
            "gap-2 px-8 py-10 w-64 z-40",
            "sm:static sm:flex-row sm:h-auto sm:w-auto sm:gap-6 sm:p-0 sm:border-0 sm:bg-transparent",
            isOpen ? "flex" : "hidden sm:flex",
          ].join(" ")}
        >
          { navLinks.map((link, index) => (
            <li key={index} className="group">
              <a
                href={`#${link}`}
                className="flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-blueprint-muted hover:text-blueprint-ink"
              >
                <span className="text-[10px] text-blueprint-line/50 group-hover:text-blueprint-line">{(index + 1).toString().padStart(2, "0")}</span>
                <span className="block h-px w-3 bg-blueprint-line/40 group-hover:w-6 transition-all duration-300" />
                { link }
              </a>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden p-2"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          <MenuIcon className="size-6 text-blueprint-line" />
        </button>
      </div>
    </nav>
  );
}
