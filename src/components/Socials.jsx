import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Socials() {
   const links = [
      {
         id: 1,
         child: (
            <>
               LinkedIn <FaLinkedin size={30} />
            </>
         ),
         href: "https://www.linkedin.com/in/andrew-nguyen-965167151/",
         style: "rounded-tr-md",
      },
      {
         id: 2,
         child: (
            <>
               GitHub <FaGithub size={30} />
            </>
         ),
         href: "https://github.com/andngu",
      },
      {
         id: 3,
         child: (
            <>
               Mail <HiOutlineMail size={30} />
            </>
         ),
         href: "mailto:andrewnguyen0204@gmail.com",
      },
      {
         id: 4,
         child: (
            <>
               Resume <BsFillPersonLinesFill size={30} />
            </>
         ),
         href: "./resume.pdf",
         style: "rounded-br-md",
         download: true,
      },
   ];

   return (
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
         <ul>
            {links.map(({ id, child, href, style, download }) => (
               <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#2F3061] ${style}`}>
                  <a href={href} className="flex justify-between items-center w-full ml-4 text-white" download={download} target="_blank" rel="noreferrer">
                     {child}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Socials;
