import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import test from "../assets/test.png";
import financeDashboard from "../assets/financeDashboard.png";

function Projects() {
   const projects = [
      {
         id: 1,
         imgSrc: financeDashboard,
         site: "https://finance-dashboard-lac.vercel.app/",
         code: "https://github.com/andngu/finance-dashboard",
         title: "Finance Dashboard",
         description: (
            <p>
               An interactive finance dashboard application incorporating ML predictions. The UI is built on <strong>React</strong> with Redux Toolkit for state management, Material UI, and Recharts. Server side, the runtime environment is powered by <strong>Node.js</strong>, <strong>Express.js</strong> as the backend framework, and <strong>MongoDB</strong> as the database.
            </p>
         ),
      },
      {
         id: 2,
         imgSrc: test,
         title: "Project 2",
         description: "Description for Project 2.",
      },
      {
         id: 3,
         imgSrc: test,
         title: "Project 3",
         description: "Description for Project 3.",
      },
   ];

   return (
      <div name="projects" className="bg-[#DFDFDF] text-[#343434] md:h-screen">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-12 flex flex-row justify-center">
               <p className="text-5xl font-bold inline border-black">Projects</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
               {projects.map(({ id, imgSrc, site, code, title, description }) => (
                  <div
                     key={id}
                     className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110"
                     style={{
                        position: "relative",
                     }}
                  >
                     <div
                        className="hover-effect-container"
                        style={{
                           position: "relative",
                           overflow: "hidden",
                           borderRadius: "0.375rem",
                        }}
                     >
                        <img
                           src={imgSrc}
                           alt=""
                           className="rounded-md"
                           style={{
                              transition: "opacity 0.3s ease-in-out",
                              opacity: 1,
                           }}
                           onMouseOver={(e) => {
                              e.currentTarget.style.opacity = 0.5;
                              e.currentTarget.style.filter = "blur(5px)";
                           }}
                           onMouseOut={(e) => {
                              e.currentTarget.style.opacity = 1;
                              e.currentTarget.style.filter = "none";
                           }}
                           onFocus={(e) => {
                              e.currentTarget.style.opacity = 0.5;
                              e.currentTarget.style.filter = "blur(5px)";
                           }}
                           onBlur={(e) => {
                              e.currentTarget.style.opacity = 1;
                              e.currentTarget.style.filter = "none";
                           }}
                        />
                        <div
                           className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                           style={{
                              background: "rgba(255, 255, 255, 0.5)",
                           }}
                        >
                           <div className="flex justify-center">
                              {site && (
                                 <a href={site} target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="flex items-center justify-center px-6 py-3 m-4 hover:scale-105">
                                       <BsEyeFill size={30} />
                                    </button>
                                 </a>
                              )}
                              {code && (
                                 <a href={code} target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="flex items-center justify-center px-6 py-3 m-4 hover:scale-105">
                                       <FaGithub size={30} />
                                    </button>
                                 </a>
                              )}
                           </div>
                        </div>
                     </div>
                     <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-500">{description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Projects;
