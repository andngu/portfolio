import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

function Home() {
   return (
      <div name="home" className="h-screen w-full bg-[#DFDFDF]">
         <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full mr-10">
               <h2 className="text-4xl sm:text-7xl font-bold text-[#343434]">{`I'm Andrew Nguyen,`}</h2>
               <h1 className="text-3xl text-gray-500 py-4 ">a developer and lifelong learner</h1>

               <div>
                  <Link to="projects" smooth duration={500} className="cursor-pointer group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#2F3061]">
                     Projects
                     <span className="group-hover:rotate-90 duration-300 ml-2">
                        <FaArrowRight />
                     </span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
