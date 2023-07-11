import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
   const [nav, setNav] = useState(false);

   const links = [
      {
         id: 1,
         link: "home",
      },
      {
         id: 2,
         link: "projects",
      },
      {
         id: 3,
         link: "skills",
      },
      {
         id: 4,
         link: "contact",
      },
   ];

   return (
      <div className="fixed flex justify-end items-center w-full h-20 px-4 text-white bg-[#343434] z-50">
         <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
               <li key={id} className="px-4 cursor-pointer capitalize hover:scale-105 duration-200">
                  <Link to={link} smooth duration={500}>
                     {link}
                  </Link>
               </li>
            ))}
         </ul>

         <button type="button" onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
         </button>

         {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#343434] text-white">
               {links.map(({ id, link }) => (
                  <li key={id} className="px-4 cursor-pointer capitalize py-6">
                     <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                        {link}
                     </Link>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default NavBar;
