import { navLinks } from "constants";
// import { IoMenu as MenuIcon } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="py-4 flex justify-between items-center w-11/12 mx-auto">
      <h1 className="heading text-xl">MF.</h1>

      <ul className="flex gap-6">
        { navLinks.map((link, index) => (
          <li key={index} className="cursor-pointer capitalize">
            <a href={`#${link}`}>{ link }</a>
          </li>
        )) }
      </ul>

      {/* <MenuIcon size="2rem" /> */}
    </nav>
  );
}